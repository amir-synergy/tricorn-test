'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useRouter } from "next/navigation";
import axios from 'axios';

import SideNav from "@/app/dashboard/assessments/manage/[id]/[step]/components/SideNav";
import NavigationButtons from "@/app/dashboard/assessments/manage/[id]/[step]/components/NavigationButtons";
import ErrorToast from "@/app/dashboard/components/ErrorToast";
import { useErrorHandling } from "@/app/dashboard/assessments/manage/[id]/[step]/hooks/useErrorHandling";
import TopLoadingOverlay from "@/app/dashboard/components/TopLoadingOverlay";

import { steps } from "@/app/dashboard/assessments/manage/[id]/[step]/steps";

interface Props {
    params: {
        id: string,
        step: string
    }
}

const ManageAssessmentPage = ({ params }: Props) => {
    const { id: assessmentId, step: assessmentStep } = params;
    const currentStepIndex = steps.findIndex(step => step.name === assessmentStep);

    const router = useRouter();

    const [currentSection, setCurrentSection] = useState(currentStepIndex !== -1 ? currentStepIndex : 0);
    const currentStep = steps[currentSection];

    const [isHandlingSaveAndExit, setIsHandlingSaveAndExit] = useState(false);
    const [isHandlingNext, setIsHandlingNext] = useState(false);
    const [isHandlingPrevious, setIsHandlingPrevious] = useState(false);

    const { error, setError } = useErrorHandling();
    const [isLoading, setIsLoading] = useState(false);

    const [responses, setResponses] = useState<any[]>([]);

    useEffect(() => {
        const fetchAssessment = async () => {
            try {
                setIsLoading(true);
                await axios.get(`/api/dashboard/assessments/${assessmentId}`);
            } catch (error) {
                setIsLoading(false);
                setError('Failed to fetch assessment');
                router.push('/dashboard/assessments', { scroll: false });
            } finally {
                setIsLoading(false);
            }
        };

        fetchAssessment().then(r => r).catch(() => setError('Failed to fetch assessment'));
    }, [assessmentId, router, setError]);

    useEffect(() => {
        const fetchResponses = async () => {
            try {
                setIsLoading(true);
                const responses = await axios.get(`/api/dashboard/responses/${assessmentId}`);
                setResponses(responses.data);
            } catch (error) {
                setIsLoading(false);
                setError('Failed to fetch assessment');
                router.push('/dashboard/assessments', { scroll: false });
            } finally {
                setIsLoading(false);
            }
        };

        fetchResponses().then(r => r).catch(() => setError('Failed to fetch assessment'));
    }, [assessmentId, router, setError]);

    const formSubmitRef = useRef<(() => Promise<boolean>) | null>(null);

    const saveData = useCallback(async (formData: any) => {
        console.log('formData', formData);
        try {
            setIsLoading(true);
            await axios.put(
                `/api/dashboard/responses/${assessmentId}/${currentStep.name}`,
                formData
            );
        } catch (error) {
            setIsLoading(false);
            setError('Failed to save data. Please try again later.');
            return;
        } finally {
            setIsLoading(false);
        }

    }, [currentStep.name, assessmentId, setError]);

    const handleSectionChange = async (sectionName: string) => {
        try {
            if (formSubmitRef.current) {
                const isValid = await formSubmitRef.current();
                if (!isValid) {
                    return;
                }
            }
            const section = steps.findIndex(step => step.name === sectionName);
            setCurrentSection(section);
            router.push(`/dashboard/assessments/manage/${assessmentId}/${steps[section].name}`, { scroll: false });
        } catch (error) {
            setError('Failed to change section');
        }
    }

    const handleNext = async () => {
        try {
            setIsHandlingNext(true);
            await handleSectionChange(steps[currentSection + 1]?.name);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setIsHandlingNext(false);
        }
    };

    const handlePrevious = async () => {
        try {
            setIsHandlingPrevious(true);
            await handleSectionChange(steps[currentSection - 1]?.name);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setIsHandlingPrevious(false);
        }
    };

    const handleSaveAndExit = async () => {
        try {
            setIsHandlingSaveAndExit(true);
            if (formSubmitRef.current) {
                const isValid = await formSubmitRef.current();
                if (!isValid) {
                    setError('Please fix the errors before saving and exiting.');
                    return;
                }
            }
            router.push('/dashboard/home', { scroll: false });
            router.refresh();
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setIsHandlingSaveAndExit(false);
        }
    };

    const CurrentFormComponent = steps[currentSection]?.component || null;

    return (
        <div className='bg-gradient'>
            <SideNav
                responses={responses}
                currentStepName={currentStep.name}
                currentStepLabel={currentStep.label}
                handleSectionChange={handleSectionChange}
                handleSaveAndExit={handleSaveAndExit}
                isHandlingSaveAndExit={isHandlingSaveAndExit}
            />
            <div className="sm:ml-80 min-h-screen pb-[105px]">
                <article className="lg:p-10 md:p-8 p-6">
                    <div className='bg-white p-7 md:p-10 rounded-lg mb-4'>

                        {CurrentFormComponent && (
                            <CurrentFormComponent
                                assessmentId={assessmentId}
                                currentStep={currentStep.name}
                                saveData={saveData}
                                setFormSubmit={(submitFn: () => Promise<boolean>) => {
                                    formSubmitRef.current = submitFn;
                                }}
                                setError={setError}
                                setIsLoading={setIsLoading}
                            />
                        )}

                        <NavigationButtons
                            currentSection={currentSection}
                            totalSteps={steps.length}
                            handlePrevious={handlePrevious}
                            handleNext={handleNext}
                            handleSaveAndExit={handleSaveAndExit}
                            isHandlingPrevious={isHandlingPrevious}
                            isHandlingNext={isHandlingNext}
                            isHandlingSaveAndExit={isHandlingSaveAndExit}
                        />
                    </div>
                </article>
            </div>

            <ErrorToast error={error} setError={setError} />
            <TopLoadingOverlay isLoading={isLoading} />
        </div>
    );
}

export default ManageAssessmentPage;