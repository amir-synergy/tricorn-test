import React from 'react'
import Link from "next/link";

const Header = () => {
    return (
        <header className='flex justify-between items-center px-10 py-5 border-b'>
            <h3 className='text-xl font-medium hidden sm:block'>Admin</h3>
            <div className='flex items-center gap-4 sm:gap-10'>
                <Link href={'/admin/users'}>
                    Users
                </Link>

                <Link href={'/admin/assessments'}>
                    Assessments
                </Link>

                <Link href={'/admin/documents'}>
                    Documents
                </Link>
            </div>
            <Link href={'/auth/logout'}>
                Logout
            </Link>
        </header>
    );
}

export default Header