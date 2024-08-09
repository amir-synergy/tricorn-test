// 'use client';
//
// import { signOut, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import Image from "next/image";
//
// const Logout = () => {
//     const { data: session, status } = useSession();
//     const router = useRouter();
//
//     useEffect(() => {
//         if (status === 'authenticated') {
//             signOut({ redirect: false }).then(() => {
//                 router.push('/auth/login');
//             });
//         } else {
//             router.push('/auth/login');
//         }
//     }, [status, router]);
//
//     // if (status === 'loading') return null;
//
//     return (
//         <>
//             <section className="bg-gradient">
//                 <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
//                     <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
//                         <Image
//                             src="/logo/logo.png"
//                             alt="logo"
//                             width={150}
//                             height={40}
//                             priority
//                             className='mx-auto'
//                         />
//                     </div>
//                     <h1 className="mt-4 leading-tight tracking-tight text-gray-900 md:text-2xl">
//                         Signing you out...
//                     </h1>
//                 </div>
//             </section>
//         </>
//     );
// };
//
// export default Logout;

'use client';

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

const Logout = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        const handleSignOut = async () => {
            if (status === 'authenticated') {
                await signOut({ redirect: false });
                router.push('/auth/login');
            } else if (status === 'unauthenticated') {
                router.push('/auth/login');
            }
        };

        if (status !== 'loading') {
            handleSignOut().then();
        }
    }, [status, router]);

    if (status === 'loading') {
        return (
            <section className="bg-gradient">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                        <Image
                            src="/logo/logo.png"
                            alt="logo"
                            width={150}
                            height={40}
                            priority
                            className='mx-auto'
                        />
                    </div>
                    <h1 className="mt-4 leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Loading...
                    </h1>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-gradient">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <Image
                        src="/logo/logo.png"
                        alt="logo"
                        width={150}
                        height={40}
                        priority
                        className='mx-auto'
                    />
                </div>
                <h1 className="mt-4 leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Signing you out...
                </h1>
            </div>
        </section>
    );
};

export default Logout;