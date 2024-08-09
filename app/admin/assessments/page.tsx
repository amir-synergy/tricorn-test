'use client';

import Header from "@/app/admin/components/Header";
import useFetchAssessments from "@/app/admin/assessments/hooks/useFetchAssessments";
import {AlertDialog, Button, Spinner} from "@radix-ui/themes";
import AssessmentsTable from "@/app/admin/assessments/components/AssessmentsTable";
import React, {useState} from "react";

const AssessmentsPage = () => {
    const [error, setError] = useState('');

    const { assessments, isLoading, setAssessments } = useFetchAssessments({ error, setError });

    if (isLoading) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <Spinner />
            </div>
        );
    }

    if (error) {
        return (
            <AlertDialog.Root open={!!error}>
                <AlertDialog.Content maxWidth="450px">
                    <AlertDialog.Title>Error</AlertDialog.Title>
                    <AlertDialog.Description>{error}</AlertDialog.Description>
                    <Button color='gray' variant='soft' mt='3' onClick={() => setError('')}>Close</Button>
                </AlertDialog.Content>
            </AlertDialog.Root>
        );
    }

    return (
        <>
            <Header />
            <div className='px-10 py-5'>
                <h1 className='text-2xl font-bold mb-5'>Assessments</h1>

                <AssessmentsTable assessments={assessments}
                                  setAssessments={setAssessments}
                                  error={error}
                                  setError={setError}/>
            </div>
        </>
    );
}

export default AssessmentsPage