'use client';

import { Callout } from '@radix-ui/themes';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { InfoCircledIcon } from '@radix-ui/react-icons'

import Header from "@/app/dashboard/components/Header";
import SideNav from "@/app/dashboard/components/SideNav";
import MobileNavBar from "@/app/dashboard/components/MobileNavBar";

import DraftAssessments from "@/app/dashboard/assessments/components/DraftAssessments";
import ActiveAssessments from "@/app/dashboard/assessments/components/ActiveAssessments";
import ArchivedAssessments from "@/app/dashboard/assessments/components/ArchivedAssessments";

import useFetchAssessments from "@/app/dashboard/assessments/hooks/useFetchAssessments";

const AssessmentsPage = () => {
    const { assessments, error, isLoading, setAssessments } = useFetchAssessments();

    if (error) {
        return (
            <div className='text-center w-full py-10'>
                Something went wrong. Please try again later.
            </div>
        );
    }

    return (
        <>
            <SideNav/>
            <MobileNavBar/>
            <div className="sm:ml-64 bg-gradient min-h-screen pb-[105px]">
                <article className="lg:p-10 md:p-8 p-6">
                    <Header page={'Assessments'} button={true} />

                    <TabGroup className='mt-5'>
                        <TabList className='mb-4'>
                            <Tab className='text-xl text-blue-400 border-b-2 border-blue-400 md:w-auto w-1/3 md:px-10 data-[selected]:outline-0 data-[selected]:border-blue-500 data-[selected]:text-blue-500'>
                                ACTIVE
                            </Tab>
                            <Tab className='text-xl text-blue-400 border-b-2 border-blue-400 md:w-auto w-1/3 md:px-10 data-[selected]:outline-0 data-[selected]:border-blue-500 data-[selected]:text-blue-500'>
                                DRAFTS
                            </Tab>
                            <Tab className='text-xl text-blue-400 border-b-2 border-blue-400 md:w-auto w-1/3 md:px-10 data-[selected]:outline-0 data-[selected]:border-blue-500 data-[selected]:text-blue-500'>
                                ARCHIVE
                            </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Callout.Root>
                                    <Callout.Icon>
                                        <InfoCircledIcon />
                                    </Callout.Icon>
                                    <Callout.Text>
                                        Active assessments are finalized assessments that are accessible to the public via a report link.
                                    </Callout.Text>
                                </Callout.Root>

                                <ActiveAssessments assessments={assessments} setAssessments={setAssessments} />
                            </TabPanel>

                            <TabPanel>
                                <Callout.Root>
                                    <Callout.Icon>
                                        <InfoCircledIcon />
                                    </Callout.Icon>
                                    <Callout.Text>
                                        Draft assessments are incomplete assessments without a public view link.
                                    </Callout.Text>
                                </Callout.Root>

                                <DraftAssessments assessments={assessments} setAssessments={setAssessments} />
                            </TabPanel>

                            <TabPanel>
                                <Callout.Root>
                                    <Callout.Icon>
                                        <InfoCircledIcon />
                                    </Callout.Icon>
                                    <Callout.Text>
                                        Archived assessments are finalized reports that are not visible to the public but can be unarchived to make them publicly accessible.
                                    </Callout.Text>
                                </Callout.Root>

                                <ArchivedAssessments assessments={assessments} setAssessments={setAssessments} />
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </article>
            </div>
        </>
    )
}

export default AssessmentsPage