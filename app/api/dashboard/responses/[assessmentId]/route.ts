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

    const responses = await prisma.responses.findMany({
        where: {
            assessmentId: params.assessmentId
        }
    });

    const formattedResponses = responses.reduce((acc: any, response) => {
        // acc[response.name] = response.value;
        // return acc;

        if (!acc[response.step]) {
            acc[response.step] = {};
        }

        acc[response.step][response.name] = response.value;

        return acc;
    }, {});

    return NextResponse.json(formattedResponses);
}