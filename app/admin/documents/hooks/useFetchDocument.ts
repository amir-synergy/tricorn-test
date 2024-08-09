import { useEffect, useState } from "react";
import axios from "axios";

type Document = {
    id: string;
    url: string;
    title: string;
    description: string;
}

interface Props {
    id: string;
}

const useFetchDocument = ({ id }: Props) => {
    const [document, setDocument] = useState<Document | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const response = await axios.get(`/api/admin/documents/${id}`);
                setDocument(response.data);
            } catch (err) {
                setError('An error occurred while fetching the document. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchDocument();
    }, [id]);

    return { document, setDocument, loading, error };
}

export default useFetchDocument;