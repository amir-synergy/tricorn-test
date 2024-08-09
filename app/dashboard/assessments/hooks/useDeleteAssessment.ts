import {useState} from "react";
import axios from "axios";

interface Props {
    assessments: any[],
    setAssessments: (updatedAssessments: any[]) => void
}

const useDeleteAssessment = ({ assessments, setAssessments }: Props) => {
    const [error, setError] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteAssessment = async (assessmentId: string) => {
        try {
            setIsDeleting(true);
            await axios.delete(`/api/dashboard/assessments/${assessmentId}`);
            setAssessments((assessments).filter((assessment) => assessment.id !== assessmentId));
        } catch (error) {
            console.error(error);
            setError(true);
        } finally {
            setIsDeleting(false);
        }
    }

    return { deleteAssessment, isDeleting, error, setError };
}

export default useDeleteAssessment;