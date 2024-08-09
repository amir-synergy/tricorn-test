'use client';

import Logo from "@/app/dashboard/components/Logo";
import {Button, IconButton, Tooltip} from "@radix-ui/themes";
import {FiPrinter} from "react-icons/fi";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ShareAssessment from "@/app/components/ShareAssessment";

interface Props {
    assessmentId: string
}

const Header = ({ assessmentId }: Props) => {
    const { data: session } = useSession();

    return (
        <header>
            <div className="bg-white flex justify-between items-center px-5 sm:px-16 py-4 shadow-md">
                <Logo logo={'logo2'} />

                <div className='flex items-center justify-end gap-3'>
                    {session && (
                        <Link href={`/dashboard/assessments`} scroll={false}>
                            <Button color='orange'
                                    variant='outline'>
                                Back to Dashboard
                            </Button>
                        </Link>
                    )}

                    <Tooltip content="Print">
                        <IconButton radius="full"
                                    color='orange'
                                    variant='outline'
                                    onClick={() => window.print()}>
                            <FiPrinter />
                        </IconButton>
                    </Tooltip>

                    <ShareAssessment assessmentId={assessmentId} page={'report'} />
                </div>
            </div>
        </header>
    );
}

export default Header