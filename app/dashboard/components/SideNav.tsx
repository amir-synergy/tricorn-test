'use client';

import Link from "next/link";
import { FiBook, FiFile, FiHome, FiLogOut, FiUser } from "react-icons/fi";
import {usePathname} from "next/navigation";
import Logo from "@/app/dashboard/components/Logo";
import React from "react";

const SideNavLinks = () => {
    const currentPath = usePathname();

    const links = [
        {label: 'Home', href: '/dashboard/home', icon: <FiHome size={23} />},
        {label: 'Assessments', href: '/dashboard/assessments', icon: <FiFile size={23} />},
        {label: 'Documents', href: '/dashboard/documents', icon: <FiBook size={23} />},
        {label: 'Profile', href: '/dashboard/profile', icon: <FiUser size={23} />}
    ];

    const baseClassName = "flex text-[18px] items-center py-4 px-7 text-gray-900 hover:bg-gray-50";
    const activeClassName = "flex text-[18px] items-center py-4 px-7 text-blue-500 bg-blue-300 pointer-events-none";

    return (
        <ul>
            {links.map(link => {
                const className = link.href === currentPath ? activeClassName : baseClassName;
                return (
                    <li key={link.href}>
                        <Link href={link.href ?? '/'} scroll={false} className={className}>
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
                        <Logo styleClasses={'mx-auto'} />
                    </div>
                    <SideNavLinks />
                </div>
                <div>
                    <Link href={'/auth/logout'} className="flex text-[18px] items-center py-4 px-7 text-gray-900 hover:bg-gray-100">
                        <FiLogOut size={23} />
                        <span className="ms-3 block">Log Out</span>
                    </Link>
                </div>
            </div>
        </aside>
    );
}