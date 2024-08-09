'use client';

import React, { useEffect, useState } from 'react';
import NavTabs from "@/app/report/components/NavTabs";
import {Button, DropdownMenu} from "@radix-ui/themes";
import {FiMoreHorizontal} from "react-icons/fi";

const SideNav = () => {
    const [currentStep, setCurrentStep] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('div[id]');
            let found = false;
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100 && !found) {
                    const id = section.getAttribute('id');
                    if (id) {
                        setCurrentStep(id);
                        found = true;
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleStepChange = (newStep: string) => {
        const element = document.getElementById(newStep);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setCurrentStep(newStep);
    };

    return (
        <>
            <div className='relative hidden lg:block lg:col-span-3 p-3 sideNav z-50'>
                <div className='sticky top-0 right-0 py-5'>
                    <div className='relative'>
                        <h3 className='text-md py-2 px-4 inline-block bg-white rounded-t-md border border-b-0'>Table of
                            contents</h3>
                        <div className='bg-white border rounded-lg rounded-tl-none'>
                            <NavTabs currentStep={currentStep} onStepChange={handleStepChange}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:hidden fixed top-[90px] right-5 sideNav'>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger className=''>
                        <Button variant="outline"
                                color='orange'
                                className='!px-1 !py-0 !bg-white'
                                size='2'
                        >
                            <FiMoreHorizontal size={25} />
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content className='!w-60'>
                        <NavTabs currentStep={currentStep} onStepChange={handleStepChange} />
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </div>
        </>
    );
}

export default SideNav;