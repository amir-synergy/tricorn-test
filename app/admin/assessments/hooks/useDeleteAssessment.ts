import {useState} from "react";
import axios from "axios";

interface Props {
    assessments: any[],
    setAssessments: (updatedAssessments: any[]) => void,
    error: string,
    setError: (error: string) => void
}

const useDeleteAssessment = ({ assessments, setAssessments, error, setError }: Props) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteAssessment = async (id: string) => {
        setIsDeleting(true);
        try {
            await axios.delete(`/api/admin/assessments/${id}`);
            setAssessments((assessments).filter((assessment) => assessment.id !== id));
        } catch (err) {
            setError('An error occurred while deleting the assessment. Please try again.');
        } finally {
            setIsDeleting(false);
        }
    };

    return { deleteAssessment, isDeleting };

}

export default useDeleteAssessment;