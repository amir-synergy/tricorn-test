'use client';

import useFetchDocuments from "@/app/admin/documents/hooks/useFetchDocuments";
import {Spinner} from "@radix-ui/themes";
import Header from "@/app/admin/components/Header";
import DocumentsGrid from "@/app/admin/documents/components/DocumentsGrid";

const DocumentPage = () => {
    const { documents, setDocuments, loading, error } = useFetchDocuments();

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
                <h1 className='text-2xl font-bold mb-5'>Documents</h1>
                <DocumentsGrid documents={documents} setDocuments={setDocuments}/>
            </div>
        </>
    );
}

export default DocumentPage