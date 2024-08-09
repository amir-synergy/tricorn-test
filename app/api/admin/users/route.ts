import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from 'bcrypt';
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/auth/authOptions";
import {CustomUser} from "@/types";
import path from "path";
import fs from "fs/promises";

const postSchema = z.object({
    name: z.string().min(1).max(255),
    email: z.string().email(),
    password: z.string().min(1),
});

const deleteSchema = z.object({
    id: z.string().min(1),
});

const putSchema = z.object({
    id: z.string().min(1),
});

export async function POST(request: NextRequest) {
    // const session = await getServerSession(authOptions) as { user: CustomUser } | null;
    // if (!session) {
    //     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }
    //
    // if (session.user.role !== 'ADMIN') {
    //     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const body = await request.json();

    const validation = postSchema.safeParse(body);
    if (!validation.success) {
        console.error('Validation error:', validation.error.errors);
        return NextResponse.json(validation.error.errors, {
            status: 400,
        });
    }

    const user = await prisma.user.findUnique({
        where: { email: body.email },
    });

    if (user)
        return NextResponse.json(
            { error: "User already exists" },
            { status: 400 }
        );

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: hashedPassword,
        }
    });

    return NextResponse.json({ email: newUser.email });
}

export async function GET(request: NextRequest) {
    const session = await getServerSession(authOptions) as { user: CustomUser } | null;
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            status: true,
        },
        where: {
            role: 'USER'
        },
        orderBy: {
            createdAt: 'desc'
        },
    });

    return NextResponse.json(users);
}

export async function DELETE(request: NextRequest) {
    const session = await getServerSession(authOptions) as { user: CustomUser } | null;

    if (!session || session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validation = deleteSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const userId = body.id;
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
        return NextResponse.json({ error: 'User does not exist' }, { status: 400 });
    }

    try {
        const assessments = await prisma.assessments.findMany({ where: { userId: userId } });

        if (assessments.length > 0) {
            // Delete associated responses
            const deleteResponsesPromises = assessments.map(assessment =>
                prisma.responses.deleteMany({ where: { assessmentId: assessment.id } })
            );
            await Promise.all(deleteResponsesPromises);

            // Delete associated image responses and their files
            const imageResponses = await prisma.imageResponses.findMany({
                where: { assessmentId: { in: assessments.map(a => a.id) } }
            });

            const fileDeletionPromises = imageResponses.map(async (imageResponse) => {
                if (imageResponse.filePath) {
                    const filePath = path.join(process.cwd(), 'public', imageResponse.filePath);
                    try {
                        await fs.unlink(filePath);
                    } catch (err) {
                        console.error(`Failed to delete file at ${filePath}: ${err instanceof Error ? err.message : 'Unknown error'}`);
                    }
                }
            });
            await Promise.all(fileDeletionPromises);

            // Delete assessments
            await prisma.assessments.deleteMany({ where: { userId: userId } });
        }

        // Delete user
        await prisma.user.delete({ where: { id: userId } });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(`Error occurred during user deletion: ${error instanceof Error ? error.message : 'Unknown error'}`);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    const session = await getServerSession(authOptions) as { user: CustomUser } | null;

    if (!session || session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validation = putSchema.safeParse(body);

    if (!validation.success) {
        console.error('Validation error:', validation.error.errors);
        return NextResponse.json({ error: validation.error.errors }, { status: 400 });
    }

    const userId = body.id;
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
        return NextResponse.json({ error: 'User does not exist' }, { status: 400 });
    }

    const status = user.status === 'BLOCKED' ? 'ACTIVE' : 'BLOCKED';

    try {
        await prisma.user.update({
            where: { id: userId },
            data: { status }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(`Error occurred during user blocking/unblocking: ${error instanceof Error ? error.message : 'Unknown error'}`);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}