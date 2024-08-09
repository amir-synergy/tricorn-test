import {useEffect, useState} from "react";
import axios from "axios";

const useFetchDocuments = () => {
    const [documents, setDocuments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await axios.get('/api/admin/documents');
                setDocuments(response.data);
            } catch (err) {
                setError('An error occurred while fetching documents. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchDocuments();
    }, []);

    return { documents, setDocuments, loading, error };
}

export default useFetchDocuments;