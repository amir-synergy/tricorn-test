import React from 'react'
import { Button, Text } from "@radix-ui/themes";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface NavigationButtonsProps {
    currentSection: number;
    totalSteps: number;
    handlePrevious: () => void;
    handleNext: () => void;
    handleSaveAndExit: () => void;
    isHandlingPrevious: boolean;
    isHandlingNext: boolean;
    isHandlingSaveAndExit: boolean;
}

const NavigationButtons = ({
    currentSection,
    totalSteps,
    handlePrevious,
    handleNext,
    handleSaveAndExit,
    isHandlingPrevious,
    isHandlingNext,
    isHandlingSaveAndExit
}: NavigationButtonsProps) => {
    return (
        <>
            <div className='mt-10'>
                <div className='flex justify-end content-center gap-5'>
                    {currentSection !== 0 && (
                        <Button variant='outline'
                                size='3'
                                onClick={handlePrevious}
                                loading={isHandlingPrevious}
                        >
                            <FiChevronLeft/>
                            <Text>Previous</Text>
                        </Button>
                    )}

                    {currentSection === totalSteps - 1 ? (
                        <Button variant='solid'
                                size='3'
                                onClick={handleSaveAndExit}
                                loading={isHandlingSaveAndExit}
                        >
                            {/*<Text>Finish</Text>*/}
                            <Text>Save and Exit</Text>
                        </Button>
                    ) : (
                        <Button variant='solid'
                                size='3'
                                onClick={handleNext}
                                loading={isHandlingNext}
                        >
                            <Text>Next</Text>
                            <FiChevronRight/>
                        </Button>
                    )}
                </div>
            </div>
        </>
    )
}

export default NavigationButtons