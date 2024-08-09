// import React, { cache } from 'react'
// import {prisma} from "@/prisma/client";
//
// interface Props {
//     params: { id: string }
// }
//
// const fetchAssessment = cache((assessmentId: string) => {
//     return prisma.assessments.findUnique({
//         where: {
//             id: assessmentId
//         }
//     })
// });
//
// const ManageAssessmentPage = async ({ params }: Props) => {
//     const assessment = await fetchAssessment(params.id);
//     if (!assessment)
//         return;
//
//     return (
//         <div>{assessment.id}</div>
//     )
// }
//
// export default ManageAssessmentPage


'use client';

import { useRouter } from 'next/navigation'
import {useEffect} from "react";

interface Props {
    params: { id: string }
}

function ManageAssessmentPage({ params }: Props) {
    const router = useRouter()

    useEffect(() => {
        router.push(`/dashboard/assessments/manage/${params.id}/introduction`)
    }, [router, params.id])

    return;
}

export default ManageAssessmentPage;