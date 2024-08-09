'use client';

import React, {useState} from 'react'
import {Button, Dialog, Flex, IconButton, TextField, Tooltip} from "@radix-ui/themes";
import {FiCheck, FiClipboard, FiShare} from "react-icons/fi";

interface Props {
    assessmentId: string,
    page: string
}

const ShareAssessment = ({ assessmentId, page }: Props) => {
    const [isCopied, setIsCopied] = useState(false);

    const link = `https://t1ops.com/report/${assessmentId}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(link).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 1000);
        }, () => {
            alert('Failed to copy the link.');
        });
    };

    const reportPageShareButton = () => {
        return (
            <Tooltip content="Share">
                <Dialog.Trigger>
                    <IconButton radius="full"
                                color='orange'
                                variant='outline'>
                        <FiShare />
                    </IconButton>
                </Dialog.Trigger>
            </Tooltip>
        );
    }

    const dashboardPageShareButton = () => {
        return (
            <Dialog.Trigger>
                <Button size='2' variant='outline' mt='2' className='!w-full'>
                    Share Report
                </Button>
            </Dialog.Trigger>
        );
    }

    return (
        <Dialog.Root>
            {page === 'report' ? reportPageShareButton() : dashboardPageShareButton()}

            <Dialog.Content maxWidth="450px">
                <Dialog.Title>
                    Share Report
                </Dialog.Title>

                <Flex gap="3">
                    <label className='w-full'>
                        <TextField.Root
                            defaultValue={link}
                            readOnly={true}
                        />
                    </label>

                    <IconButton radius="full"
                                color='gray'
                                variant='outline'
                                onClick={handleCopy}>
                        {isCopied ? <FiCheck size={14} /> : <FiClipboard size={14} />}
                    </IconButton>

                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
}

export default ShareAssessment