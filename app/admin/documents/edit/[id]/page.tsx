'use client';

import Header from "@/app/admin/components/Header";
import DocumentForm from "@/app/admin/documents/components/DocumentForm";
import useFetchDocument from "@/app/admin/documents/hooks/useFetchDocument";
import { Spinner } from "@radix-ui/themes";

interface Props {
    params: {
        id: string;
    }
}

const EditDocumentPage = ({ params }: Props) => {
    const { document, loading, error } = useFetchDocument({ id: params.id });

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
            <Header/>

            <div className='px-10 py-5'>
                <h1 className='text-2xl font-bold mb-5'>Edit Document</h1>
                {document && <DocumentForm document={document} />}
            </div>
        </>
    );
}

export default EditDocumentPage;