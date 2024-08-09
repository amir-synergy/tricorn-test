import { useState, useEffect } from "react";

const useTableSearch = (assessments: any[]) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(assessments);

    useEffect(() => {
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        setFilteredData(
            assessments.filter(assessment =>
                assessment.responses.propertyName?.toLowerCase().includes(lowercasedSearchTerm) ||
                assessment.user.name.toLowerCase().includes(lowercasedSearchTerm) ||
                new Date(assessment.createdAt).toDateString().toLowerCase().includes(lowercasedSearchTerm) ||
                new Date(assessment.updatedAt).toDateString().toLowerCase().includes(lowercasedSearchTerm) ||
                assessment.status.toLowerCase().includes(lowercasedSearchTerm)
            )
        );
    }, [searchTerm, assessments]);

    return { searchTerm, setSearchTerm, filteredData };
};

export default useTableSearch;