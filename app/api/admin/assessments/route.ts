import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/auth/authOptions";
import {CustomUser} from "@/types";
import {prisma} from "@/prisma/client";

export async function GET(request: NextRequest) {
    const session = await getServerSession(authOptions) as { user: CustomUser } | null;
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const assessments = await prisma.assessments.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            responses: {
                where: {
                    step: 'introduction'
                }
            },
            user: true
        }
    });

    const filteredAssessments = assessments.map(assessment => {
        return {
            ... assessment,
            responses: assessment.responses.reduce((acc: any, response) => {
                acc[response.name] = response.value;
                return acc;
            }, {})
        };
    });

    return NextResponse.json(filteredAssessments);
}