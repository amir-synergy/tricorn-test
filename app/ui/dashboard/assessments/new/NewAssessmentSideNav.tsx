'use client';

import {Box, Button, Tabs, Text} from "@radix-ui/themes";
import "./custom-tabs.css";
import {FiCircle} from "react-icons/fi";
import Image from "next/image";

const SideNavTabs = () => {
    const tabs = [
        {label: '1. Introduction', value: 'account'},
        {label: 'Documents', value: 'documents'},
        {label: 'Settings', value: 'settings'},
    ]

    return (
        <Tabs.List className='custom-tabs-list'>
            {tabs.map(tab => (
                <Tabs.Trigger key={tab.value} className='custom-tabs-trigger' value={tab.value}>
                    <Text size='3'>{tab.label}</Text>
                    <FiCircle />
                </Tabs.Trigger>
            ))}
        </Tabs.List>
    );
}

const NewAssessmentSideNav = () => {
    return (
        <>
            <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
                <div className="h-full py-7 overflow-y-auto bg-white flex flex-col justify-between">
                    <div>
                        <div className="mb-8">
                            <Image
                                src="/logo/logo.png"
                                alt="logo"
                                width={150}
                                height={40}
                                priority
                                className='mx-auto'
                            />
                        </div>
                        <SideNavTabs />
                    </div>

                    <Button variant='outline' mx='5' size='3'>
                        Save and Exit
                    </Button>
                </div>
            </aside>
            {/*<Tabs.List>*/}
            {/*    <Box>*/}
            {/*        <Tabs.Trigger className='custom-tabs-trigger' value="account">Account</Tabs.Trigger>*/}
            {/*        <Tabs.Trigger className='custom-tabs-trigger' value="documents">Documents</Tabs.Trigger>*/}
            {/*        <Tabs.Trigger className='custom-tabs-trigger' value="settings">Settings</Tabs.Trigger>*/}
            {/*    </Box>*/}
            {/*</Tabs.List>*/}
        </>
    )
}

export default NewAssessmentSideNav