import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import { authOptions } from "@/app/auth/authOptions";
import { getServerSession } from "next-auth";
import { DocumentsSchema } from "@/app/api/admin/documents/validation";
import {CustomUser} from "@/types";

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions) as { user: CustomUser } | null;
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    const validation = DocumentsSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const newDocument = await prisma.documents.create({
        data: {
            title: body.title,
            description: body.description,
            url: body.url,
        }
    });

    return NextResponse.json(newDocument, { status: 201 });
}

export async function GET(request: NextRequest) {
    const session = await getServerSession(authOptions) as { user: CustomUser } | null;
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const documents = await prisma.documents.findMany();

    return NextResponse.json(documents);
}