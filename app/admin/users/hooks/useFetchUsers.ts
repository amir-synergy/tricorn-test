import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "@/app/admin/types/user";

const useFetchUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/admin/users');
                setUsers(response.data);
            } catch (err) {
                setError('An error occurred while fetching users. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return { users, setUsers, loading, error };
};

export default useFetchUsers;