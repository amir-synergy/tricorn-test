import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/auth/authOptions";
import {CustomUser} from "@/types";
import {prisma} from "@/prisma/client";

interface ResponsesProp {
    params: {
        assessmentId: string
    }
}

export async function GET(request: NextRequest, { params }: ResponsesProp) {
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
            assessmentId: params.assessmentId
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