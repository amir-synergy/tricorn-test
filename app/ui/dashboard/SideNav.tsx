'use client';

import Link from "next/link";
import { FiBook, FiFile, FiHome, FiLogOut, FiUser } from "react-icons/fi";
import Image from "next/image";
import {usePathname} from "next/navigation";

const SideNavLinks = () => {
    const currentPath = usePathname();

    const links = [
        {label: 'Home', href: '/dashboard', icon: <FiHome size={23} />},
        {label: 'Assessments', href: '/dashboard/assessments', icon: <FiFile size={23} />},
        {label: 'Documents', href: '/dashboard/documents', icon: <FiBook size={23} />},
        {label: 'Profile', href: '/dashboard/profile', icon: <FiUser size={23} />}
    ];

    const baseClassName = "flex text-[18px] items-center py-4 px-7 text-gray-900 hover:bg-gray-50";
    const activeClassName = "flex text-[18px] items-center py-4 px-7 text-blue-900 bg-blue-100 pointer-events-none";

    return (
        <ul>
            {links.map(link => {
                const className = link.href === currentPath ? activeClassName : baseClassName;
                return (
                    <li key={link.href}>
                        <Link href={link.href ?? '/'} className={className}>
                            {link.icon}
                            <span className="ms-3 block">{link.label}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default function SideNav() {
    return (
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
                    <SideNavLinks />
                </div>
                <div>
                    <Link href="/api/auth/signout" className="flex text-[18px] items-center py-4 px-7 text-gray-900 hover:bg-gray-100">
                        <FiLogOut size={23} />
                        <span className="ms-3 block">Log Out</span>
                    </Link>
                </div>
            </div>
        </aside>
    );
}