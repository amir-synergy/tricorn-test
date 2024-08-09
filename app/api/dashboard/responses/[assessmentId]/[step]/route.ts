import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/auth/authOptions";
import { CustomUser } from "@/types";
import { prisma } from "@/prisma/client";
import { ResponsesSchema } from "@/app/api/dashboard/responses/validation";
import { requiredFields } from "@/app/api/dashboard/responses/requiredFields";

interface ResponsesProp {
    params: {
        assessmentId: string,
        step: string
    }
}

type ResponseData = {
    assessmentId: string;
    step: string;
    name: string;
    value: string;
};

const checkAllFieldsFilled = (requiredFields: Record<string, string[]>, responsesMap: Record<string, Record<string, any>>): boolean => {
    for (const section in requiredFields) {
        if (requiredFields.hasOwnProperty(section)) {
            if (!responsesMap[section]) {
                // console.log('Section is missing:', section);
                return false; // Section is missing
            }
            for (const field of requiredFields[section]) {
                if (!responsesMap[section][field]) {
                    // console.log('Field is missing:', field);
                    return false; // Field is missing or empty
                }
            }
        }
    }
    return true; // All fields are filled
};

const updateAssessmentStatus = async (assessmentId: string, assessmentStatus: string) => {
    const responses = await prisma.responses.findMany({
        where: {
            assessmentId: assessmentId
        }
    });

    const responsesMap = responses.reduce((acc, response) => {
        if (!acc[response.step]) {
            acc[response.step] = {};
        }
        acc[response.step][response.name] = response.value;
        return acc;
    }, {} as Record<string, Record<string, any>>);

    // console.log('responsesMap', responsesMap);

    const allFieldsFilled = checkAllFieldsFilled(requiredFields, responsesMap);

    if (allFieldsFilled) {
        if (assessmentStatus !== 'ACTIVE') {
            await prisma.assessments.update({
                where: { id: assessmentId },
                data: {
                    status: 'ACTIVE'
                }
            });
        }
    } else {
        if (assessmentStatus !== 'DRAFT') {
            await prisma.assessments.update({
                where: { id: assessmentId },
                data: {
                    status: 'DRAFT'
                }
            });
        }
    }
}

export async function PUT(request: NextRequest, { params }: ResponsesProp) {
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

    try {
        const responses: ResponseData[] = [];
        for (const [name, value] of Object.entries(body)) {
            const validation = ResponsesSchema.safeParse({
                assessmentId: params.assessmentId, step: params.step, name: name, value: value
            });
            if (!validation.success) {
                return NextResponse.json({ error: validation.error.format() }, { status: 400 });
            }

            responses.push({
                assessmentId: params.assessmentId,
                step: params.step,
                name: name as string,
                value: value as string,
            });
        }

        await prisma.$transaction(async (prisma) => {
            for (const response of responses) {
                const existingResponse = await prisma.responses.findFirst({
                    where: {
                        assessmentId: response.assessmentId,
                        step: response.step,
                        name: response.name,
                    },
                });

                if (existingResponse) {
                    await prisma.responses.update({
                        where: { id: existingResponse.id },
                        data: { value: response.value },
                    });
                } else {
                    await prisma.responses.create({
                        data: response,
                    });
                }
            }
        });

        await updateAssessmentStatus(params.assessmentId, assessment.status);

        await prisma.assessments.update({
            where: { id: params.assessmentId },
            data: {
                updatedAt: new Date()
            }
        });

        return NextResponse.json({ message: 'Data processed successfully' }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: 'Internal server error: ' + error }, { status: 500 });
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
            assessmentId: params.assessmentId,
            step: params.step
        }
    });

    const formattedResponses = responses.reduce((acc: any, response) => {
        acc[response.name] = response.value;
        return acc;
    }, {});

    return NextResponse.json(formattedResponses);
}