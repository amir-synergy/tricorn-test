import {useState} from "react";
import axios from "axios";

interface Props {
    assessments: any[],
    setAssessments: (updatedAssessments: any[]) => void
}

const useUnarchiveAssessment = ({ assessments, setAssessments }: Props) => {
    const [error, setError] = useState(false);
    const [isUnarchiving, setIsUnarchiving] = useState(false);

    const unarchiveAssessment = async (assessmentId: string) => {
        try {
            setIsUnarchiving(true);
            await axios.put(`/api/dashboard/assessments/${assessmentId}`);

            const updatedAssessments = assessments.map(assessment =>
                assessment.id === assessmentId
                    ? { ...assessment, status: 'ACTIVE' }
                    : assessment
            );
            setAssessments(updatedAssessments);

        } catch (error) {
            console.error(error);
            setError(true);
        } finally {
            setIsUnarchiving(false);
        }
    }

    return { unarchiveAssessment, isUnarchiving, error, setError };
}

export default useUnarchiveAssessment;