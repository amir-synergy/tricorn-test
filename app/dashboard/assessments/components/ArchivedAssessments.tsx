'use client';

import {AlertDialog, Button, Grid, Strong, Text} from "@radix-ui/themes";
import useUnarchiveAssessment from "@/app/dashboard/assessments/hooks/useUnarchiveAssessment";

interface Props {
    assessments: any[],
    setAssessments: (updatedAssessments: any[]) => void
}

const ArchivedAssessments = ({ assessments, setAssessments }: Props) => {
    const { unarchiveAssessment, isUnarchiving, error, setError } = useUnarchiveAssessment({
        assessments, setAssessments
    });
    const archivedAssessments = assessments.filter(assessment => assessment.status === 'ARCHIVED');

    return (
        <>
            <Grid columns={{ initial: '1', md: '3' }} gap="4" width="auto" mt='4'>
                {archivedAssessments.length === 0 && (
                    <Text size='2' as='p' className=''>
                        You have no archived assessments
                    </Text>
                )}

                {
                    archivedAssessments.map(assessment => (
                        <div key={assessment.id} className='p-4 bg-white rounded-lg relative'>
                            <Text size='5' as='p' mb='2'>{assessment.responses[0]?.value ?? 'Untitled'}</Text>
                            <Text size='2' as='p'><Strong>Created: </Strong> {new Date(assessment.createdAt).toDateString()}</Text>
                            <Text size='2' as='p'><Strong>Edited: </Strong> {new Date(assessment.updatedAt).toDateString()}</Text>

                            <div className='mt-4'>
                                <Button size='2'
                                        variant='outline'
                                        mt='2'
                                        className='!w-full'
                                        loading={isUnarchiving}
                                        onClick={() => unarchiveAssessment(assessment.id)}>
                                    Unarchive
                                </Button>
                            </div>
                        </div>
                    ))
                }
            </Grid>

            <AlertDialog.Root open={error}>
                <AlertDialog.Content maxWidth="450px">
                    <AlertDialog.Title>Error</AlertDialog.Title>
                    <AlertDialog.Description>
                        An error occurred while unarchiving the assessment. Please try again.
                    </AlertDialog.Description>
                    <Button color='gray' variant='soft' mt='3' onClick={() => {
                        setError(false);
                    }}>Close</Button>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </>
    );
}

export default ArchivedAssessments