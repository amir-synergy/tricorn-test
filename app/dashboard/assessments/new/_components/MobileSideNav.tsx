import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import React from 'react'
import Tabs from "@/app/dashboard/assessments/new/_components/Tabs";
import { Select } from '@radix-ui/themes';

const MobileSideNav = () => {
    return (
        <div className='fixed top-0 left-0 bg-white z-50 sm:hidden w-full'>
            <div className='flex justify-between align-middle px-4 py-5'>
                <div>
                    Exit & Save
                </div>
                <div>
                    <Select.Root defaultValue="apple">
                        <Select.Trigger />
                        <Select.Content position="popper">
                            <Tabs />
                        </Select.Content>
                    </Select.Root>
                </div>
            </div>
        </div>
    )
}

export default MobileSideNav