'use client';

import React from 'react'
import Header from "@/app/ui/dashboard/Header";
import SideNav from "@/app/ui/dashboard/SideNav";
import MobileNavBar from "@/app/ui/dashboard/MobileNavBar";

const DashboardPage = () => {
    return (
        <>
            <SideNav/>
            <MobileNavBar/>
            <div className="sm:ml-64 bg-gradient min-h-screen pb-[105px]">
                <article className="lg:p-10 md:p-8 p-6">
                    <Header page={'Home'} button={true}/>
                </article>
            </div>
        </>

    );
}

export default DashboardPage