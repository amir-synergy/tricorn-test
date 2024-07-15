import React from 'react'
import {Button, Flex, Text} from "@radix-ui/themes";
import {FiPlus} from "react-icons/fi";
import Link from "next/link";
import { useState } from 'react'

import {Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle} from '@headlessui/react'

const Header = ({ page, button }: { page: string, button: boolean }) => {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <Flex align='center' justify='between' className=''>
            <Text size='8' className='font-medium'>{page}</Text>
            {button &&
                <>
                    <>
                        <button onClick={() => setIsOpen(true)}>Open dialog</button>
                        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                            <DialogBackdrop
                                transition
                                className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0"
                            />
                            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                                <DialogPanel
                                    transition
                                    className="max-w-lg space-y-4 bg-white rounded-2xl p-12 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
                                >
                                    <DialogTitle className="text-lg font-bold">New Assessment</DialogTitle>
                                    <Description>This will permanently deactivate your account</Description>
                                    <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
                                    <div className="flex gap-4">
                                        <button onClick={() => setIsOpen(false)}>Cancel</button>
                                        <button onClick={() => setIsOpen(false)}>Deactivate</button>
                                    </div>
                                </DialogPanel>
                            </div>
                        </Dialog>
                    </>

                    <div className='hidden sm:block'>
                        <Button
                            size='3'
                            className='!py-6 !px-6 !rounded-[20px] !rounded-bl-none !rounded-tr-none'
                        >
                            <FiPlus size={20} />
                            <Link href='/dashboard/assessments/new'>
                                New Assessment
                            </Link>
                        </Button>
                    </div>

                    <div className='sm:hidden fixed bottom-[105px] right-5 z-50'>
                        <Button
                            className='!rounded-full !shadow-2xl !w-[60px] !h-[60px]'
                        >
                            <Link href='/dashboard/assessments/new'>
                                <FiPlus size={35} className='!block'/>
                            </Link>
                        </Button>
                    </div>
                </>
            }
        </Flex>
    )
}

export default Header