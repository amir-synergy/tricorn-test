import {useState} from "react";
import axios from "axios";

interface Props {
    assessments: any[],
    setAssessments: (updatedAssessments: any[]) => void
}

const useArchiveAssessment = ({ assessments, setAssessments }: Props) => {
    const [error, setError] = useState(false);
    const [isArchiving, setIsArchiving] = useState(false);

    const archiveAssessment = async (assessmentId: string) => {
        try {
            setIsArchiving(true);
            await axios.put(`/api/dashboard/assessments/${assessmentId}`);
            // const updatedAssessments = assessments.map(assessment =>
            //     assessment.id === assessmentId
            //         ? { ...assessment, status: 'ARCHIVED' }
            //         : { ...assessment }
            // );

            const updatedAssessments = assessments.map(assessment =>
                assessment.id === assessmentId
                    ? { ...assessment, status: 'ARCHIVED' }
                    : assessment
            );
            setAssessments(updatedAssessments);

        } catch (error) {
            console.error(error);
            setError(true);
        } finally {
            setIsArchiving(false);
        }
    }

    return { archiveAssessment, isArchiving, error, setError };
}

export default useArchiveAssessment;