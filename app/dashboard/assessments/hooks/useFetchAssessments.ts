import {useEffect, useState} from "react";
import axios from "axios";

const useFetchAssessments = () => {
    const [assessments, setAssessments] = useState<any[]>([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAssessment = async () => {
            try {
                const response = await axios.get(`/api/dashboard/assessments`);
                setAssessments(response.data);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchAssessment().then();
    }, []);

    return { assessments, error, isLoading, setAssessments };
};

export default useFetchAssessments;