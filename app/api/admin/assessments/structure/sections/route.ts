import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import {authOptions} from "@/app/auth/authOptions";
import {getServerSession} from "next-auth";
import {SectionsSchema} from "@/app/api/admin/assessments/structure/validation";

export async function POST(request: NextRequest) {
    // const session = await getServerSession(authOptions);
    // if (!session) {
    //     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    // if (session.user!.role !== 'ADMIN') {
    //     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const body = await request.json();

    const validation = SectionsSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const newSection = await prisma.sections.create({
        data: {
            arrangement: body.arrangement,
            numeration: body.numeration,
            title: body.title,
            description: body.description,
            visible: body.visible,
        }
    });

    return NextResponse.json(newSection, { status: 201 });
}