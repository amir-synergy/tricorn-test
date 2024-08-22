'use client';

import Logo from "@/app/dashboard/components/Logo";
import {Button, IconButton, Tooltip} from "@radix-ui/themes";
import {FiPrinter} from "react-icons/fi";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ShareAssessment from "@/app/components/ShareAssessment";
import {useEffect, useState} from "react";

interface Props {
    assessmentId: string
}

const Header = ({ assessmentId }: Props) => {
    const { data: session } = useSession();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            // Check if all images are loaded
            const images = document.querySelectorAll('img');
            const allImagesLoaded = Array.from(images).every((img) => img.complete);

            if (allImagesLoaded) {
                setIsLoaded(true);
            }
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        // Listen to each image's load event
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
            if (!img.complete) {
                img.addEventListener('load', handleLoad);
                img.addEventListener('error', handleLoad); // Handle errors too
            }
        });

        // Cleanup event listeners on unmount
        return () => {
            window.removeEventListener('load', handleLoad);
            images.forEach((img) => {
                img.removeEventListener('load', handleLoad);
                img.removeEventListener('error', handleLoad);
            });
        };
    }, []);

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
                                    loading={!isLoaded}
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