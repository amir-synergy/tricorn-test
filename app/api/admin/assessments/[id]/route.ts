import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/auth/authOptions";
import {CustomUser} from "@/types";
import {prisma} from "@/prisma/client";
import path from "path";
import fs from "fs/promises";

interface Props {
    params: {
        id: string
    }
}

const findAssessment = async (assessmentId: string) => {
    return prisma.assessments.findUnique({
        where: {
            id: assessmentId
        }
    });
}

export async function DELETE(request: NextRequest, { params }: Props) {
    const session = await getServerSession(authOptions) as { user: CustomUser } | null;
    if (!session || !session.user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const assessment = await findAssessment(params.id);

    if (!assessment) {
        console.error(`Assessment with id ${params.id} not found for user ${session.user.id}`);
        return NextResponse.json({ error: 'Assessment not found' }, { status: 404 });
    }

    try {
        const imageResponses = await prisma.imageResponses.findMany({
            where: {
                assessmentId: params.id
            }
        });

        if (imageResponses.length > 0) {
            const fileDeletionPromises = imageResponses.map(async (imageResponse) => {
                if (imageResponse.filePath) {
                    const filePath = path.join(process.cwd(), 'public', imageResponse.filePath);
                    try {
                        await fs.unlink(filePath);
                    } catch (err) {
                        if (err instanceof Error) {
                            console.error(`Failed to delete file at ${filePath}: ${err.message}`);
                        } else {
                            console.error(`Failed to delete file at ${filePath}: Unknown error`);
                        }
                    }
                }
            });

            await Promise.all(fileDeletionPromises);
        }

        await prisma.responses.deleteMany({
            where: {
                assessmentId: params.id
            }
        });

        await prisma.imageResponses.deleteMany({
            where: {
                assessmentId: params.id
            }
        });

        await prisma.assessments.delete({
            where: {
                id: params.id
            }
        });

        return NextResponse.json({ message: 'Assessment deleted' });

    } catch (error) {
        if (error instanceof Error) {
            console.error(`Failed to delete assessment with id ${params.id}: ${error.message}`);
        } else {
            console.error(`Failed to delete assessment with id ${params.id}: Unknown error`);
        }
        return NextResponse.json({ error: 'Failed to delete assessment' }, { status: 500 });
    }
}