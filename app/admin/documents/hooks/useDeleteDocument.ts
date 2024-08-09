import {useState} from "react";
import axios from "axios";

interface Props {
    documents: any[],
    setDocuments: (documents: any[]) => void,
    error: string,
    setError: (error: string) => void
}

const useDeleteDocument = ({ documents, setDocuments, error, setError }: Props) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteDocument = async (id: string) => {
        setIsDeleting(true);
        try {
            await axios.delete(`/api/admin/documents/${id}`);
            setDocuments((documents).filter((document) => document.id !== id));
        } catch (err) {
            setError('An error occurred while deleting the document. Please try again.');
        } finally {
            setIsDeleting(false);
        }
    };

    return { deleteDocument, isDeleting };
}

export default useDeleteDocument;