import {prisma} from "@/prisma/client";

import Header from "@/app/report/components/Header";
import SideNav from "@/app/report/components/SideNav";
import Footer from "@/app/report/components/Footer";
import "../print.css"

import Introduction from "@/app/report/sections/Introduction";
import AssessmentDetails from "@/app/report/sections/AssessmentDetails";
import SiteContext from "@/app/report/sections/SiteContext";
import CrimeAnalysis from "@/app/report/sections/CrimeAnalysis";
import CrimePreventionThroughEnvironmentalDesign from "@/app/report/sections/CrimePreventionThroughEnvironmentalDesign";
import Lighting from "@/app/report/sections/Lighting";
import Disorder from "@/app/report/sections/Disorder";
import PhysicalSecurity from "@/app/report/sections/PhysicalSecurity";
import Considerations from "@/app/report/sections/Considerations";
import TableOfContents from "@/app/report/sections/TableOfContents";
import Summary from "@/app/report/sections/Summary";

interface Props {
    params: {
        id: string
    }
}

const ReportPage = async ({ params }: Props) => {
    const assessment = await prisma.assessments.findUnique({
        where: {
            id: params.id,
            status: 'ACTIVE'
        },
        include: {
            responses: true,
            imageResponses: true,
            user: true
        }
    });

    if (!assessment) {
        return <div className='text-center py-10'>Report not found</div>
    }

    const responses = assessment.responses.reduce<any>((acc, response) => {
        if (!acc[response.step]) {
            acc[response.step] = {};
        }
        acc[response.step][response.name] = response.value;
        return acc;
    }, {});

    const imageResponses = assessment.imageResponses.reduce<any>((acc, response) => {
        if (!acc[response.step]) {
            acc[response.step] = [];
        }

        if (!acc[response.step][response.name]) {
            acc[response.step][response.name] = [];
        }

        acc[response.step][response.name].push(response);
        return acc;
    }, {});

    return (
        <>
            <div className=''>
                <Header assessmentId={params.id} />

                <div className='bg-gradient px-7 pt-5 pb-10 lg:px-16 relative'>
                    <div className='grid lg:grid-cols-12 gap-10'>
                        <div className='py-5 lg:col-span-9 print'>
                            <AssessmentDetails assessorName={assessment.user.name} responses={responses} />
                            <TableOfContents />
                            <Introduction responses={responses} />
                            <SiteContext responses={responses} imageResponses={imageResponses} />
                            <CrimeAnalysis responses={responses} imageResponses={imageResponses} />
                            <CrimePreventionThroughEnvironmentalDesign responses={responses} imageResponses={imageResponses} />
                            <Lighting responses={responses} imageResponses={imageResponses} />
                            <Disorder responses={responses} imageResponses={imageResponses} />
                            <PhysicalSecurity responses={responses} imageResponses={imageResponses} />
                            <Considerations responses={responses} imageResponses={imageResponses} />
                            <Summary responses={responses} imageResponses={imageResponses} />
                        </div>
                        <SideNav/>
                    </div>
                </div>

                <Footer/>
            </div>
        </>
    );
}

export async function generateMetadata({ params }: Props) {
    const assessment = await prisma.assessments.findUnique({
        where: {
            id: params.id,
            status: 'ACTIVE'
        },
        include: {
            responses: {
                where: {
                    name: 'propertyName'
                },
                take: 1
            }
        }
    });

    if (!assessment) {
        return {
            title: '404: Report not found'
        }
    }

    return {
        title: `CPTED Assessment of ${assessment.responses![0]?.value}`,
    }
}

export default ReportPage