import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import { authOptions } from "@/app/auth/authOptions";
import { getServerSession } from "next-auth";
import { CustomUser } from "@/types";

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions) as { user: CustomUser } | null;
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const newAssessment = await prisma.assessments.create({
        data: {
            userId: session.user.id
        }
    });

    return NextResponse.json(newAssessment, { status: 201 });
}

export async function GET(request: NextRequest) {
    const session = await getServerSession(authOptions) as { user: CustomUser } | null;
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const assessments = await prisma.assessments.findMany({
        where: {
            userId: session.user.id
        },
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            responses: {
                where: {
                    name: 'propertyName'
                },
                take: 1
            }
        }
    });

    return NextResponse.json(assessments);
}