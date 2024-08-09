'use client';

import {AlertDialog, Button, Flex, Grid, Strong, Text} from "@radix-ui/themes";
import Link from "next/link";
import useDeleteAssessment from "@/app/dashboard/assessments/hooks/useDeleteAssessment";

interface Props {
    assessments: any[],
    setAssessments: (updatedAssessments: any[]) => void
}

const DraftAssessments = ({ assessments, setAssessments }: Props) => {
    const { deleteAssessment, isDeleting, error, setError } = useDeleteAssessment({
        assessments, setAssessments
    });
    const draftAssessments = assessments.filter(assessment => assessment.status === 'DRAFT');

    return (
        <Grid columns={{ initial: '1', md: '3' }} gap="4" width="auto" mt='4'>
            {draftAssessments.length === 0 && (
                <Text size='2' as='p' className=''>
                    You have no draft assessments
                </Text>
            )}

            {
                draftAssessments.map(assessment => (
                    <div key={assessment.id} className='p-4 bg-white rounded-lg relative'>
                        <Text size='5' as='p' mb='2'>{assessment.responses[0]?.value ?? 'Untitled'}</Text>
                        <Text size='2' as='p'><Strong>Created: </Strong> {new Date(assessment.createdAt).toDateString()}</Text>
                        <Text size='2' as='p'><Strong>Edited: </Strong> {new Date(assessment.updatedAt).toDateString()}</Text>

                        <div className='mt-4'>
                            <Link href={`/dashboard/assessments/manage/${assessment.id}/introduction`} scroll={false}>
                                <Button size='2' className='!w-full !cursor-pointer'>
                                    Continue
                                </Button>
                            </Link>

                            <AlertDialog.Root>
                                <AlertDialog.Trigger>
                                    <Button size='2' variant='outline' mt='2' className='!w-full' loading={isDeleting}>
                                        Delete
                                    </Button>
                                </AlertDialog.Trigger>
                                <AlertDialog.Content maxWidth="450px">
                                    <AlertDialog.Title>
                                        Delete Assessment
                                    </AlertDialog.Title>
                                    <AlertDialog.Description size="2">
                                        Are you sure you want to delete this assessment? This action cannot be undone.
                                    </AlertDialog.Description>

                                    <Flex gap="3" mt="4" justify="end">
                                        <AlertDialog.Cancel>
                                            <Button variant="soft" color="gray" onClick={() => {
                                                setError(false);
                                            }}>
                                                Cancel
                                            </Button>
                                        </AlertDialog.Cancel>
                                        <AlertDialog.Action>
                                            <Button variant="solid" color="red" loading={isDeleting} onClick={() => {
                                                deleteAssessment(assessment.id)
                                            }}>
                                                Delete Assessment
                                            </Button>
                                        </AlertDialog.Action>
                                    </Flex>
                                </AlertDialog.Content>
                            </AlertDialog.Root>

                            <AlertDialog.Root open={error}>
                                <AlertDialog.Content maxWidth="450px">
                                    <AlertDialog.Title>Error</AlertDialog.Title>
                                    <AlertDialog.Description>
                                        An error occurred while deleting the assessment. Please try again.
                                    </AlertDialog.Description>
                                    <Button color='gray' variant='soft' mt='3' onClick={() => {
                                        setError(false);
                                    }}>Close</Button>
                                </AlertDialog.Content>
                            </AlertDialog.Root>
                        </div>
                    </div>
                ))
            }
        </Grid>
    );
}

export default DraftAssessments