import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import {authOptions} from "@/app/auth/authOptions";
import {getServerSession} from "next-auth";
import {InputsSchema} from "@/app/api/admin/assessments/structure/validation";

export async function POST(request: NextRequest) {
    // const session = await getServerSession(authOptions);
    // if (!session) {
    //     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    // if (session.user!.role !== 'ADMIN') {
    //     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const body = await request.json();

    const validation = InputsSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const newInput = await prisma.inputs.create({
        data: {
            sectionId: body.sectionId,
            subSectionId: body.subSectionId,
            arrangement: body.arrangement,
            title: body.title,
            description: body.description,
            label: body.label,
            tag: body.tag,
            type: body.type,
            name: body.name,
            value: body.value,
            placeholder: body.placeholder,
            accept: body.accept,
            options: body.options,
            max: body.max,
            min: body.min,
            maxLength: body.maxLength,
            minLength: body.minLength,
            required: body.required,
            multiple: body.multiple,
            pattern: body.pattern,
            visible: body.visible,
        }
    });

    return NextResponse.json(newInput, { status: 201 });
}