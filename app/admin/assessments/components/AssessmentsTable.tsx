import useTableSearch from "@/app/admin/assessments/hooks/useTableSearch";
import {AlertDialog, Badge, Button, Flex} from "@radix-ui/themes";
import React from "react";
import Link from "next/link";
import useDeleteAssessment from "@/app/admin/assessments/hooks/useDeleteAssessment";

interface Props {
    assessments: any[];
    setAssessments: (updatedAssessments: any[]) => void;
    error: string;
    setError: (error: string) => void;
}

const AssessmentsTable = ({ assessments, setAssessments, error, setError }: Props) => {
    const { searchTerm, setSearchTerm, filteredData } = useTableSearch(assessments);
    const { deleteAssessment, isDeleting } = useDeleteAssessment({
        assessments, setAssessments, error, setError
    });

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
            </div>
            <div className="relative overflow-x-auto border sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">#</th>
                        <th scope="col" className="px-6 py-3">Property Name</th>
                        <th scope="col" className="px-6 py-3">Created</th>
                        <th scope="col" className="px-6 py-3">Updated</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Assessor</th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">View report</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={item.id}
                            className={`bg-white hover:bg-gray-50 ${index !== filteredData.length - 1 ? 'border-b' : ''}`}>
                            <td className="px-6 py-4">{index + 1}</td>
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {item.responses.propertyName ?? 'Untitled'}
                            </th>
                            <td className="px-6 py-4">
                                {new Date(item.createdAt).toDateString()}
                            </td>
                            <td className="px-6 py-4">
                                {new Date(item.updatedAt).toDateString()}
                            </td>
                            <td className="px-6 py-4">
                                <Badge color="gray" variant="soft" highContrast>
                                    {item.status}
                                </Badge>

                            </td>
                            <td className="px-6 py-4">
                                <Badge variant="soft" highContrast size='2'>
                                    {item.user.name}
                                </Badge>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className='flex gap-5 justify-end'>
                                    {item.status === 'ACTIVE' && (
                                        <Link href={`/report/${item.id}`}>
                                            <Button>View Report</Button>
                                        </Link>
                                    )}

                                    <AlertDialog.Root>
                                        <AlertDialog.Trigger>
                                            <Button size='2' variant='outline' color='red' loading={isDeleting}>
                                                Delete
                                            </Button>
                                        </AlertDialog.Trigger>
                                        <AlertDialog.Content maxWidth="450px">
                                            <AlertDialog.Title>
                                                Delete assessment <b>`{item.responses.propertyName ?? 'Untitled'}`</b>
                                            </AlertDialog.Title>
                                            <AlertDialog.Description size="2">
                                                Are you sure you want to delete this assessment? This action cannot be
                                                undone.
                                            </AlertDialog.Description>
                                            <Flex gap="3" mt="4" justify="end">
                                                <AlertDialog.Cancel>
                                                    <Button variant="soft" color="gray">Cancel</Button>
                                                </AlertDialog.Cancel>
                                                <AlertDialog.Action>
                                                    <Button variant="solid" color="red" loading={isDeleting}
                                                            onClick={() => deleteAssessment(item.id)}>
                                                        Delete Assessment
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
        </>
    );
}

export default AssessmentsTable