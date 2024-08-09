import { useState, useEffect } from "react";

const useTableSearch = (users: any[]) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(users);

    useEffect(() => {
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        setFilteredData(
            users.filter(user =>
                user.name.toLowerCase().includes(lowercasedSearchTerm) ||
                user.email.toLowerCase().includes(lowercasedSearchTerm) ||
                user.status.toLowerCase().includes(lowercasedSearchTerm)
            )
        );
    }, [searchTerm, users]);

    return { searchTerm, setSearchTerm, filteredData };
};

export default useTableSearch;