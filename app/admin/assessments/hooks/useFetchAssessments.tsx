import {useEffect, useState} from "react";
import axios from "axios";

interface Props {
    error: string,
    setError: (error: string) => void
}

const useFetchAssessments = ({ error, setError }: Props) => {
    const [assessments, setAssessments] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAssessment = async () => {
            try {
                const response = await axios.get(`/api/admin/assessments`);
                setAssessments(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
                setError('An error occurred while fetching assessments. Please try again.');
            } finally {
                setIsLoading(false);
            }
        }

        fetchAssessment().then();
    }, [setError]);

    return { assessments, error, isLoading, setAssessments };
};

export default useFetchAssessments;