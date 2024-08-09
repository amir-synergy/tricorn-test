import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/auth/authOptions";
import { CustomUser } from "@/types";
import { prisma } from "@/prisma/client";
import { writeFile } from "fs/promises";
import path from "path";
import fs from 'fs/promises';

interface ImageResponsesProp {
    params: {
        assessmentId: string,
        step: string
    }
}

export async function POST(request: NextRequest, { params }: ImageResponsesProp) {
    const session = await getServerSession(authOptions) as { user: CustomUser } | null;
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const assessment = await prisma.assessments.findUnique({
        where: {
            id: params.assessmentId,
            userId: session.user.id
        }
    });
    if (!assessment) {
        return NextResponse.json({ error: 'Assessment not found' }, { status: 404 });
    }

    try {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const files = formData.getAll('file') as File[];

        const uploadPromises = files.map(async (file) => {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const filename = `${Date.now()}-${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}.${file.name.split('.').pop()}`;
            const filepath = path.join(process.cwd(), 'public', 'uploads', filename);

            await writeFile(filepath, buffer);

            return prisma.imageResponses.create({
                data: {
                    assessmentId: params.assessmentId,
                    step: params.step,
                    name: name,
                    fileName: file.name,
                    filePath: `/uploads/${filename}`,
                },
            });
        });

        const uploadedFiles = await Promise.all(uploadPromises);

        return NextResponse.json({ message: 'Files uploaded successfully', files: uploadedFiles }, { status: 200 });
    } catch (error) {
        console.error('Error uploading files:', error);
        return NextResponse.json({ error: 'Error uploading files' }, { status: 500 });
    }
}

export async function GET(request: NextRequest, { params }: ImageResponsesProp) {
    const session = await getServerSession(authOptions) as { user: CustomUser } | null;
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const assessment = await prisma.assessments.findUnique({
        where: {
            id: params.assessmentId,
            userId: session.user.id
        }
    });
    if (!assessment) {
        return NextResponse.json({ error: 'Assessment not found' }, { status: 404 });
    }

    const images = await prisma.imageResponses.findMany({
        where: {
            assessmentId: params.assessmentId,
            step: params.step
        }
    });

    const formattedImages = images.map(image => ({
        uid: image.id,
        assessmentId: image.assessmentId,
        responseName: image.name,
        responseStep: image.step,
        name: image.fileName,
        status: 'done',
        url: image.filePath
    }));

    return NextResponse.json(formattedImages, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: ImageResponsesProp) {
    const session = await getServerSession(authOptions) as { user: CustomUser } | null;
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const assessment = await prisma.assessments.findUnique({
        where: {
            id: params.assessmentId,
            userId: session.user.id
        }
    });
    if (!assessment) {
        return NextResponse.json({ error: 'Assessment not found' }, { status: 404 });
    }

    const body = await request.json();
    const { uid } = body;

    const image = await prisma.imageResponses.findUnique({
        where: {
            id: parseInt(uid),
            assessmentId: params.assessmentId,
            step: params.step,
        }
    });

    if (!image) {
        return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    const filePath = path.join(process.cwd(), 'public', image.filePath!);
    await fs.unlink(filePath);

    const deletedImage = await prisma.imageResponses.delete({
        where: { id: parseInt(uid) }
    });

    if (!deletedImage) {
        return NextResponse.json({ error: 'Failed to delete image' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Image deleted successfully' }, { status: 200 });
}