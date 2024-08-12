import {useEffect, useState} from "react";
import axios from "axios";

const useFetchDocuments = () => {
    const [documents, setDocuments] = useState<any[]>([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await axios.get(`/api/dashboard/documents`);
                setDocuments(response.data);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchDocuments().then();
    }, []);

    return { documents, error, isLoading, setDocuments };
};

export default useFetchDocuments;