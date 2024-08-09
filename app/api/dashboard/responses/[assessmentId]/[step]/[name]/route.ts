import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/auth/authOptions";
import { CustomUser } from "@/types";
import { prisma } from "@/prisma/client";

interface ResponsesProp {
    params: {
        assessmentId: string,
        step: string,
        name: string
    }
}

export async function DELETE(request: NextRequest, { params }: ResponsesProp) {
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

    await prisma.responses.deleteMany({
        where: {
            assessmentId: params.assessmentId,
            step: params.step,
            name: params.name
        }
    });

    return NextResponse.json({ success: true }, { status: 200 });
}