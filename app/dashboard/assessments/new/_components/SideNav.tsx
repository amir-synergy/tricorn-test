import React from 'react'
import Image from "next/image";
import {Button} from "@radix-ui/themes";
import Tabs from "@/app/dashboard/assessments/new/_components/Tabs";

// TODO: Implement Tabs dynamically using DB

const SideNav = () => {
    return (
        <aside
            className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0">
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

                    <Tabs />
                </div>

                <Button variant='outline' mx='5' size='3'>
                    Save and Exit
                </Button>
            </div>
        </aside>
    );
}

export default SideNav