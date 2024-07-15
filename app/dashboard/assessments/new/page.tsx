import React from 'react'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels
} from '@headlessui/react'
import SideNav from "@/app/dashboard/assessments/new/_components/SideNav";
import Pages from "@/app/dashboard/assessments/new/_components/Pages";
import MobileSideNav from "@/app/dashboard/assessments/new/_components/MobileSideNav";
import { prisma } from "@/prisma/client";
import Image from "next/image";
import Tabs from "@/app/dashboard/assessments/new/_components/Tabs";
import { Button, Text } from "@radix-ui/themes";
import { FiChevronDown } from "react-icons/fi";

const getSections = async () => {
    return prisma.sections.findMany({
        include: {
            SubSections: {
                where: {
                    visible: true
                },
                orderBy: {
                    arrangement: 'asc'
                }
            }
        },
        orderBy: {
            arrangement: 'asc'
        }
    });
}

function slugify(str: string) {
    return str.replace(/ /g, '_').toLowerCase();
}

const NewAssessmentPage = async () => {
    const sections = await getSections();

    return (
        <>
            <TabGroup vertical>
                <aside
                    className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0">
                    <div className="h-full py-7 overflow-y-auto bg-white flex flex-col justify-between">
                        <div className='pb-5'>
                            <div className="mb-8">
                                <Image
                                    src="/logo/logo.png"
                                    alt="logo"
                                    width={150}
                                    height={40}
                                    priority
                                    className='mx-auto'
                                />
                            </div>

                            {
                                sections.map(section => {
                                    if (section.visible) {
                                        if (section.SubSections.length > 0) {
                                            return (
                                                <>
                                                    <Disclosure>
                                                        <DisclosureButton
                                                            className="group flex w-full text-start text-[16px] items-center justify-between py-2 px-7 text-gray-900 data-[hover]:bg-gray-50 data-[open]:text-blue-900">
                                                            <Text size='3' className='block w-3/4'>
                                                                {section.numeration + '. ' + section.title}
                                                            </Text>
                                                            <FiChevronDown
                                                                className="block group-data-[open]:rotate-180"/>
                                                        </DisclosureButton>
                                                        <DisclosurePanel unmount={false}>
                                                            {
                                                                section.SubSections.map(subSection => {
                                                                    return (
                                                                        <Tab as='button' id={slugify(subSection.title)} key={slugify(subSection.title)}
                                                                             className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                                                            <span>
                                                                                {subSection.numeration + ' ' + subSection.title}
                                                                            </span>
                                                                        </Tab>
                                                                    )
                                                                })
                                                            }
                                                        </DisclosurePanel>
                                                    </Disclosure>
                                                </>
                                            );
                                        } else {
                                            return (
                                                <Tab as='button' id={slugify(section.title)} key={slugify(section.title)}
                                                     className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-7 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                                    <span>{section.numeration + '. ' + section.title}</span>
                                                </Tab>
                                            );
                                        }
                                    }
                                })
                            }
                        </div>

                        <Button variant='outline' mx='5' size='3'>
                            Save and Exit
                        </Button>
                    </div>
                </aside>

                <div className="sm:ml-80 bg-gradient min-h-screen pb-[105px] lg:pt-0 md:pt-0 pt-[70px]">
                    <article className="lg:p-10 md:p-8 p-3">
                        <TabPanels className='block bg-white p-4 rounded-xl'>
                            <TabPanel as='div'
                                      key='introduction'
                                      unmount={false}
                                      aria-labelledby='introduction'
                                      id='introduction'
                            >
                                Introduction
                            </TabPanel>
                        </TabPanels>
                    </article>
                </div>
            </TabGroup>

            {/*<TabGroup vertical>*/}
            {/*    <SideNav />*/}
            {/*    <MobileSideNav />*/}
            {/*    <Pages />*/}
            {/*</TabGroup>*/}
        </>
    )
}

export default NewAssessmentPage