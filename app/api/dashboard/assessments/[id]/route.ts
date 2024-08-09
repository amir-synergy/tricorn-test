import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/auth/authOptions";
import { CustomUser } from "@/types";
import { prisma } from "@/prisma/client";

interface AssessmentProp {
    params: {
        id: string
    }
}

const findAssessment = async (userId: string, assessmentId: string) => {
    return prisma.assessments.findUnique({
        where: {
            id: assessmentId,
            userId: userId
        }
    });
}

export async function GET(request: NextRequest, { params }: AssessmentProp) {
    const session = await getServerSession(authOptions) as { user: CustomUser } | null;
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const assessment = await findAssessment(session.user.id, params.id);

    if (!assessment) {
        return NextResponse.json({ error: 'Assessment not found' }, { status: 404 });
    }

    return NextResponse.json(assessment);
}

export async function PUT(request: NextRequest, { params }: AssessmentProp) {
    const session = await getServerSession(authOptions) as { user: CustomUser } | null;
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const assessment = await findAssessment(session.user.id, params.id);

    if (!assessment) {
        return NextResponse.json({ error: 'Assessment not found' }, { status: 404 });
    }

    const status = assessment.status === 'ACTIVE' ? 'ARCHIVED' : 'ACTIVE';

    try {
        await prisma.assessments.update({
            where: { id: params.id },
            data: { status }
        });

        return NextResponse.json({ message: 'Assessment updated' }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: 'Failed to update assessment' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions) as { user: CustomUser } | null;
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const assessment = await findAssessment(session.user.id, params.id);

    if (!assessment) {
        return NextResponse.json({ error: 'Assessment not found' }, { status: 404 });
    }

    try {
        await prisma.assessments.update({
            where: {
                id: params.id
            },
            data: {
                status: 'DELETED'
            }
        });

        return NextResponse.json({ message: 'Assessment deleted' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete assessment' }, { status: 500 });
    }
}