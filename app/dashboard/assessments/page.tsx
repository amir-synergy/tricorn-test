'use client';

import React from 'react'
import Header from "@/app/ui/dashboard/Header";
import SideNav from "@/app/ui/dashboard/SideNav";
import MobileNavBar from "@/app/ui/dashboard/MobileNavBar";

const AssessmentsPage = () => {
    return (
        <>
            <SideNav/>
            <MobileNavBar/>
            <div className="sm:ml-64 bg-gradient min-h-screen pb-[105px]">
                <article className="lg:p-10 md:p-8 p-6">
                    <Header page={'Assessments'} button={true}/>
                </article>
            </div>
        </>
    )
}

export default AssessmentsPage