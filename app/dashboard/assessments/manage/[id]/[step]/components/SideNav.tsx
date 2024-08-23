import React from 'react'
import {Button, DropdownMenu} from "@radix-ui/themes";
import Logo from "@/app/dashboard/components/Logo";
import NavTabs from "@/app/dashboard/assessments/manage/[id]/[step]/components/NavTabs";

interface SideNavProps {
    responses: any[],
    currentStepName: string,
    currentStepLabel: string,
    handleSectionChange: (section: string) => void,
    handleSaveAndExit: () => void,
    isHandlingSaveAndExit: boolean
}

const SideNav = ({
    responses, currentStepName, currentStepLabel, handleSectionChange, handleSaveAndExit, isHandlingSaveAndExit
}: SideNavProps) => {
    return (
        <>
            <aside
                className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0">
                <div className="h-full py-7 overflow-y-auto bg-white flex flex-col justify-between">
                    <div>
                        <div className="mb-8">
                            <Logo styleClasses={'mx-auto'} />
                        </div>
                        <NavTabs responses={responses} currentStepName={currentStepName} handleSectionChange={handleSectionChange} />
                    </div>

                    <Button variant='outline'
                            mx='5'
                            size='3'
                            onClick={handleSaveAndExit}
                            loading={isHandlingSaveAndExit}
                    >
                        Save and Exit
                    </Button>
                </div>
            </aside>

            <div className='z-50 sm:hidden w-full bg-[#FEF2EC] fixed top-0 left-0'>
                <div className='grid grid-cols-2 px-5 py-4'>
                    <Button variant='ghost'
                            size='3'
                            className='!text-start !justify-start !font-medium'
                            onClick={handleSaveAndExit}
                            loading={isHandlingSaveAndExit}
                    >
                        Save and Exit
                    </Button>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger className=''>
                            <Button variant="ghost"
                                    className='!capitalize !justify-end !text-end'
                                    size='3'
                            >
                                {currentStepLabel}
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content className='!w-60'>
                            <NavTabs responses={responses} currentStepName={currentStepName} handleSectionChange={handleSectionChange} />
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
            </div>
        </>
    );
}

export default SideNav