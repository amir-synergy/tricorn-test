'use client';

import Header from "@/app/admin/components/Header";
import DocumentForm from "@/app/admin/documents/components/DocumentForm";

const AddDocumentPage = () => {
    return (
        <>
            <Header/>

            <div className='px-10 py-5'>
                <h1 className='text-2xl font-bold mb-5'>Add Document</h1>
                <DocumentForm />
            </div>
        </>
    );
}

export default AddDocumentPage