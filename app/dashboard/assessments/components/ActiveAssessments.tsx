'use client';

import {AlertDialog, Button, DropdownMenu, Grid, Spinner, Strong, Text} from "@radix-ui/themes";
import Link from "next/link";
import {DotsVerticalIcon} from "@radix-ui/react-icons";
import {FiArchive, FiEdit} from "react-icons/fi";
import ShareAssessment from "@/app/components/ShareAssessment";
import useArchiveAssessment from "@/app/dashboard/assessments/hooks/useArchiveAssessment";

interface Props {
    assessments: any[],
    setAssessments: (updatedAssessments: any[]) => void
}

const ActiveAssessments = ({ assessments, setAssessments }: Props) => {
    const { archiveAssessment, isArchiving, error, setError } = useArchiveAssessment({
        assessments, setAssessments
    });
    const activeAssessments = assessments.filter(assessment => assessment.status === 'ACTIVE');
    
    return (
        <>
            <Grid columns={{ initial: '1', md: '3' }} gap="4" width="auto" mt='4'>
                {activeAssessments.length === 0 && (
                    <Text size='2' as='p' className=''>
                        You have no active assessments
                    </Text>
                )}

                {
                    activeAssessments.map(assessment => (
                        <div key={assessment.id} className='p-4 bg-white rounded-lg relative'>
                            <div className='absolute top-4 right-4'>
                                <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                        <Button variant="ghost" className='!p-1'>
                                            <DotsVerticalIcon fontSize={25} />
                                        </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content>
                                        <DropdownMenu.Item>
                                            <Link href={`/dashboard/assessments/manage/${assessment.id}/introduction`}
                                                  scroll={false}
                                                  className='flex content-center items-center gap-2 w-[105px]'>
                                                <FiEdit />
                                                Edit
                                            </Link>
                                        </DropdownMenu.Item>

                                        <DropdownMenu.Item onSelect={(e) => e.preventDefault()}>
                                            <button className='flex w-full items-center content-center gap-2 justify-start'
                                                    onClick={() => {archiveAssessment(assessment.id).then()}}>
                                                { isArchiving ? <Spinner /> : <FiArchive /> }
                                                Archive
                                            </button>
                                        </DropdownMenu.Item>


                                    </DropdownMenu.Content>
                                </DropdownMenu.Root>
                            </div>

                            <Text size='5' as='p' mb='2'>{assessment.responses[0]?.value ?? 'Untitled'}</Text>
                            <Text size='2' as='p'><Strong>Created: </Strong> {new Date(assessment.createdAt).toDateString()}</Text>
                            <Text size='2' as='p'><Strong>Edited: </Strong> {new Date(assessment.updatedAt).toDateString()}</Text>

                            <div className='mt-4'>
                                <Link href={`/report/${assessment.id}`} scroll={false}>
                                    <Button size='2' className='!w-full !cursor-pointer'>
                                        View Report
                                    </Button>
                                </Link>

                                <ShareAssessment assessmentId={assessment.id} page={'dashboard'} />
                            </div>
                        </div>
                    ))
                }
            </Grid>

            <AlertDialog.Root open={error}>
                <AlertDialog.Content maxWidth="450px">
                    <AlertDialog.Title>Error</AlertDialog.Title>
                    <AlertDialog.Description>
                        An error occurred. Please try again.
                    </AlertDialog.Description>
                    <Button color='gray' variant='soft' mt='3' onClick={() => {
                        setError(false);
                    }}>Close</Button>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </>
    );
}

export default ActiveAssessments