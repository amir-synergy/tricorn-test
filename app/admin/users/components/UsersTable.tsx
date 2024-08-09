'use client';

import React, {useState} from 'react';
import {AlertDialog, Badge, Button, Flex} from "@radix-ui/themes";
import Link from "next/link";

import useTableSearch from "@/app/admin/users/hooks/useTableSearch";

import useDeleteUser from "@/app/admin/users/hooks/useDeleteUser";
import useBlockUser from "@/app/admin/users/hooks/useBlockUser";
import useUnblockUser from "@/app/admin/users/hooks/useUnblockUser";

interface Props {
    users: any[];
    setUsers: (updatedUsers: any[]) => void;
}

const UsersTable = ({ users, setUsers }: Props) => {
    const [error, setError] = useState('');

    const { searchTerm, setSearchTerm, filteredData } = useTableSearch(users);
    const { deleteUser, isDeleting } = useDeleteUser({ users, setUsers, error, setError });
    const { blockUser, isBlocking } = useBlockUser({ users, setUsers, error, setError });
    const { unblockUser, isUnblocking } = useUnblockUser({ users, setUsers, error, setError });

    return (
        <>
            <div className='flex items-center justify-between mb-5'>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='block border py-2 px-4 rounded-lg'
                />
                <Link href={'/admin/users/add'}>
                    <Button>Add User</Button>
                </Link>
            </div>
            <div className="relative overflow-x-auto border sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">#</th>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={item.id}
                            className={`bg-white hover:bg-gray-50 ${index !== filteredData.length - 1 ? 'border-b' : ''}`}>
                            <td className="px-6 py-4">
                                {index + 1}
                            </td>
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {item.name}
                            </th>
                            <td className="px-6 py-4">
                                {item.email}
                            </td>
                            <td className="px-6 py-4">
                                <Badge color="gray" variant="soft" highContrast>
                                    {item.status}
                                </Badge>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className='flex gap-5 justify-end'>
                                    {item.status === 'BLOCKED' ? (
                                        <AlertDialog.Root>
                                            <AlertDialog.Trigger>
                                                <Button size='2' variant='outline' color='gray' loading={isUnblocking}>
                                                    Unblock
                                                </Button>
                                            </AlertDialog.Trigger>
                                            <AlertDialog.Content maxWidth="450px">
                                                <AlertDialog.Title>
                                                    Unblock <b>`{item.name}`</b>
                                                </AlertDialog.Title>
                                                <AlertDialog.Description size="2">
                                                    Unblocking this user will allow them to access their account. Are you
                                                    sure you want to proceed?
                                                </AlertDialog.Description>
                                                <Flex gap="3" mt="4" justify="end">
                                                    <AlertDialog.Cancel>
                                                        <Button variant="soft" color="gray">Cancel</Button>
                                                    </AlertDialog.Cancel>
                                                    <AlertDialog.Action>
                                                        <Button variant="solid" color="red" loading={isUnblocking}
                                                                onClick={() => unblockUser(item.id)}>
                                                            Unblock User
                                                        </Button>
                                                    </AlertDialog.Action>
                                                </Flex>
                                            </AlertDialog.Content>
                                        </AlertDialog.Root>
                                    ) : (
                                        <AlertDialog.Root>
                                            <AlertDialog.Trigger>
                                                <Button size='2' variant='outline' color='gray' loading={isBlocking}>
                                                    Block
                                                </Button>
                                            </AlertDialog.Trigger>
                                            <AlertDialog.Content maxWidth="450px">
                                                <AlertDialog.Title>
                                                    Block user <b>`{item.name}`</b>
                                                </AlertDialog.Title>
                                                <AlertDialog.Description size="2">
                                                    Blocking this user will prevent them from accessing their account. Are
                                                    you sure you want to proceed?
                                                </AlertDialog.Description>
                                                <Flex gap="3" mt="4" justify="end">
                                                    <AlertDialog.Cancel>
                                                        <Button variant="soft" color="gray">Cancel</Button>
                                                    </AlertDialog.Cancel>
                                                    <AlertDialog.Action>
                                                        <Button variant="solid" color="red" loading={isBlocking}
                                                                onClick={() => blockUser(item.id)}>
                                                            Block User
                                                        </Button>
                                                    </AlertDialog.Action>
                                                </Flex>
                                            </AlertDialog.Content>
                                        </AlertDialog.Root>
                                    )}

                                    <AlertDialog.Root>
                                        <AlertDialog.Trigger>
                                            <Button size='2' variant='outline' color='red' loading={isDeleting}>
                                                Delete
                                            </Button>
                                        </AlertDialog.Trigger>
                                        <AlertDialog.Content maxWidth="450px">
                                            <AlertDialog.Title>
                                                Delete user <b>`{item.name}`</b>
                                            </AlertDialog.Title>
                                            <AlertDialog.Description size="2">
                                                Deleting this user will also result in the permanent removal of all
                                                assessments they have created. Are you certain you want to proceed?
                                            </AlertDialog.Description>
                                            <Flex gap="3" mt="4" justify="end">
                                                <AlertDialog.Cancel>
                                                    <Button variant="soft" color="gray">Cancel</Button>
                                                </AlertDialog.Cancel>
                                                <AlertDialog.Action>
                                                    <Button variant="solid" color="red" loading={isDeleting}
                                                            onClick={() => deleteUser(item.id)}>
                                                        Delete User
                                                    </Button>
                                                </AlertDialog.Action>
                                            </Flex>
                                        </AlertDialog.Content>
                                    </AlertDialog.Root>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            {error && (
                <AlertDialog.Root open={!!error}>
                    <AlertDialog.Content maxWidth="450px">
                        <AlertDialog.Title>Error</AlertDialog.Title>
                        <AlertDialog.Description>{error}</AlertDialog.Description>
                        <Button color='gray' variant='soft' mt='3' onClick={() => setError('')}>Close</Button>
                    </AlertDialog.Content>
                </AlertDialog.Root>
            )}
        </>
    );
};

export default UsersTable;