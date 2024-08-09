import {Callout, Flex, Grid, Skeleton, Text} from "@radix-ui/themes";
import SideNav from "@/app/dashboard/components/SideNav";
import MobileNavBar from "@/app/dashboard/components/MobileNavBar";
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import {InfoCircledIcon} from "@radix-ui/react-icons";

const AssessmentsLoading = () => {
    return (
        <>
            <SideNav/>
            <MobileNavBar/>

            <div className="sm:ml-64 bg-gradient min-h-screen pb-[105px]">
                <article className="lg:p-10 md:p-8 p-6">
                    <Flex align='center' justify='between'>
                        <Text size='8' className='font-medium'>Assessments</Text>
                        <Skeleton width='210px' height='50px' className='!hidden sm:!block' />
                    </Flex>

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

                                <Grid columns={{ initial: '1', md: '3' }} gap="4" width="auto" mt='4'>
                                    <Skeleton height='200px' />
                                    <Skeleton height='200px' />
                                    <Skeleton height='200px' />
                                </Grid>
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

                                <Grid columns={{ initial: '1', md: '3' }} gap="4" width="auto" mt='4'>
                                    <Skeleton height='200px' />
                                    <Skeleton height='200px' />
                                    <Skeleton height='200px' />
                                </Grid>
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

                                <Grid columns={{ initial: '1', md: '3' }} gap="4" width="auto" mt='4'>
                                    <Skeleton height='200px' />
                                    <Skeleton height='200px' />
                                    <Skeleton height='200px' />
                                </Grid>
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </article>
            </div>
        </>
    );
}

export default AssessmentsLoading