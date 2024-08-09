import {AlertDialog, Button, Flex, Grid} from "@radix-ui/themes";
import React, {useState} from "react";
import useDeleteDocument from "@/app/admin/documents/hooks/useDeleteDocument";
import Link from "next/link";

interface Props {
    documents: any[]
    setDocuments: (documents: any[]) => void
}

const DocumentsGrid = ({ documents, setDocuments }: Props) => {
    const [error, setError] = useState('');

    const { deleteDocument, isDeleting } = useDeleteDocument({
        documents, setDocuments, error, setError
    });

    return (
        <>
            <div className='flex justify-end items-center mb-4'>
                <Link href={`/admin/documents/add`}>
                    <Button>
                        Add Document
                    </Button>
                </Link>
            </div>

            <Grid columns={{ initial: '1', md: '4' }} gap="5" width="auto" mt='4'>
                {
                    documents.map(document => (
                        <div key={document.id} className='p-4 bg-white border rounded-lg relative'>
                            <iframe src={document.url} className='w-full rounded-lg h-[300px]'></iframe>

                            <div className='mt-3'>
                                <p className='text-xl font-medium'>{document.title}</p>
                                <p>{document.description}</p>
                            </div>

                            <div className='flex items-center gap-4 mt-5'>
                                <Link href={`/admin/documents/edit/${document.id}`}>
                                    <Button>
                                        Edit
                                    </Button>
                                </Link>

                                <AlertDialog.Root>
                                    <AlertDialog.Trigger>
                                        <Button size='2' variant='solid' color='red' loading={isDeleting}>
                                            Delete
                                        </Button>
                                    </AlertDialog.Trigger>
                                    <AlertDialog.Content maxWidth="450px">
                                        <AlertDialog.Title>
                                            Delete document <b>`{document.title}`</b>
                                        </AlertDialog.Title>
                                        <AlertDialog.Description size="2">
                                            Are you sure you want to delete this document?
                                        </AlertDialog.Description>
                                        <Flex gap="3" mt="4" justify="end">
                                            <AlertDialog.Cancel>
                                                <Button variant="soft" color="gray">Cancel</Button>
                                            </AlertDialog.Cancel>
                                            <AlertDialog.Action>
                                                <Button variant="solid" color="red" loading={isDeleting}
                                                        onClick={() => deleteDocument(document.id)}>
                                                    Delete Document
                                                </Button>
                                            </AlertDialog.Action>
                                        </Flex>
                                    </AlertDialog.Content>
                                </AlertDialog.Root>
                            </div>
                        </div>
                    ))
                }
            </Grid>
        </>
    );
}

export default DocumentsGrid