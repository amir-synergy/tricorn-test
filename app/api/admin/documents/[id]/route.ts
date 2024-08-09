import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/auth/authOptions";
import { CustomUser } from "@/types";
import { DocumentsSchema } from "@/app/api/admin/documents/validation";
import { prisma } from "@/prisma/client";

interface DocumentProp {
    params: {
        id: string
    }
}

export async function GET(request: NextRequest, { params }: DocumentProp) {
    try {
        const session = await getServerSession(authOptions) as { user: CustomUser } | null;

        if (!session || session.user.role !== 'ADMIN') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const document = await prisma.documents.findUnique({
            where: { id: params.id }
        });

        if (!document) {
            return NextResponse.json({ error: 'Document not found' }, { status: 404 });
        }

        return NextResponse.json(document);
    } catch (error) {
        console.error('Error fetching documents:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest, { params }: DocumentProp) {
    try {
        const session = await getServerSession(authOptions) as { user: CustomUser } | null;

        if (!session || session.user.role !== 'ADMIN') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const document = await prisma.documents.findUnique({
            where: { id: params.id }
        });

        if (!document) {
            return NextResponse.json({ error: 'Document not found' }, { status: 404 });
        }

        const body: unknown = await request.json();
        const validation = DocumentsSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({ error: validation.error.format() }, { status: 400 });
        }

        const { title, description, url } = validation.data;

        await prisma.documents.update({
            where: { id: params.id },
            data: { title, description, url }
        });

        return NextResponse.json({ message: 'Document updated' });
    } catch (error) {
        console.error('Error updating document:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: DocumentProp) {
    try {
        const session = await getServerSession(authOptions) as { user: CustomUser } | null;

        if (!session || session.user.role !== 'ADMIN') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const document = await prisma.documents.findUnique({
            where: { id: params.id }
        });

        if (!document) {
            return NextResponse.json({ error: 'Document not found' }, { status: 404 });
        }

        await prisma.documents.delete({
            where: { id: params.id }
        });

        return NextResponse.json({ message: 'Document deleted' });
    } catch (error) {
        console.error('Error deleting document:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}