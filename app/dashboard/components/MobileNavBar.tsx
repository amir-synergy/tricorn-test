'use client';

import Link from "next/link";
import { FiBook, FiFile, FiHome, FiUser } from "react-icons/fi";
import { usePathname } from "next/navigation";

const MobileNavBar = () => {
    const currentPath = usePathname();

    const links = [
        { label: 'Home', href: '/dashboard/home', icon: <FiHome size={30} /> },
        { label: 'Assessments', href: '/dashboard/assessments', icon: <FiFile size={30} /> },
        { label: 'Documents', href: '/dashboard/documents', icon: <FiBook size={30} /> },
        { label: 'Profile', href: '/dashboard/profile', icon: <FiUser size={30} /> }
    ];

    const baseClassName = "flex flex-col items-center text-gray-600";
    const activeClassName = "flex flex-col items-center text-blue-500 pointer-events-none";

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 sm:hidden">
            <ul className="flex justify-around pt-3 pb-5 px-4">
                {links.map(link => {
                    const className = link.href === currentPath ? activeClassName : baseClassName;
                    return (
                        <li key={link.href}>
                            <Link href={link.href ?? '/'} scroll={false} className={className}>
                                {link.icon}
                                <span className="text-[14px]">{link.label}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default MobileNavBar;