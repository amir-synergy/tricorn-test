'use client';

import Header from "@/app/admin/components/Header";
import UsersTable from "@/app/admin/users/components/UsersTable";
import { Spinner } from "@radix-ui/themes";
import useFetchUsers from "@/app/admin/users/hooks/useFetchUsers";

const UsersPage = () => {
    const { users, setUsers, loading, error } = useFetchUsers();

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <Spinner />
            </div>
        );
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <>
            <Header />
            <div className='px-10 py-5'>
                <h1 className='text-2xl font-bold mb-5'>Users</h1>
                <UsersTable users={users} setUsers={setUsers}/>
            </div>
        </>
    );
};

export default UsersPage;