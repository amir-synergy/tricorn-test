'use client';

import { Text } from "@radix-ui/themes";

import Header from "@/app/dashboard/components/Header";
import SideNav from "@/app/dashboard/components/SideNav";
import MobileNavBar from "@/app/dashboard/components/MobileNavBar";

import DraftAssessments from "@/app/dashboard/assessments/components/DraftAssessments";

import useFetchAssessments from "@/app/dashboard/assessments/hooks/useFetchAssessments";

const DashboardPage = () => {
    const { assessments, error, isLoading, setAssessments } = useFetchAssessments();

    if (error) {
        return (
            <div className='text-center w-full py-10'>
                {error}
            </div>
        );
    }

    return (
        <>
            <SideNav/>
            <MobileNavBar/>
            <div className="sm:ml-64 bg-gradient min-h-screen pb-[105px]">
                <article className="lg:p-10 md:p-8 p-6">
                    <Header page={'Home'} button={true}/>

                    <div className='mt-5'>
                        <Text size='7' mt='4'>My Drafts</Text>
                        <DraftAssessments assessments={assessments} setAssessments={setAssessments} />
                    </div>
                </article>
            </div>
        </>

    );
}

export default DashboardPage