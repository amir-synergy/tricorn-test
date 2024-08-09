'use client';

import React from 'react'
import {Button, Flex, Text} from "@radix-ui/themes";
import {FiPlus} from "react-icons/fi";

import axios from "axios";
import {useRouter} from "next/navigation";
import {useState} from "react";

const Header = ({ page, button }: { page: string, button: boolean }) => {
    const router = useRouter();
    const [error, setError] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    const createAssessment = async () => {
        try {
            setIsCreating(true);
            const newAssessment = await axios.post('/api/dashboard/assessments');
            router.push(`/dashboard/assessments/manage/${newAssessment.data.id}/introduction`, { scroll: false });
            router.refresh();
        } catch (error) {
            setIsCreating(false);
            setError(true);
        }
    };

    return (
        <>
            <Flex align='center' justify='between' className=''>
                <Text size='8' className='font-medium'>{page}</Text>
                {button &&
                    <>
                        <div className='hidden sm:block'>
                            <Button
                                size='3'
                                className='!py-6 !px-6 !rounded-[20px] !rounded-bl-none !rounded-tr-none'
                                onClick={createAssessment}
                                loading={isCreating}
                            >
                                <FiPlus size={20} />
                                New Assessment
                            </Button>
                        </div>

                        <div className='sm:hidden fixed bottom-[105px] right-5 z-50'>
                            <Button
                                className='!rounded-full !shadow-2xl !w-[60px] !h-[60px]'
                                onClick={createAssessment}
                                loading={isCreating}
                            >
                                <FiPlus size={35} className='!block' />
                            </Button>
                        </div>
                    </>
                }
            </Flex>
        </>
    )
}

export default Header