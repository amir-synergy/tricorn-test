import { useState } from "react";
import axios from "axios";

interface Props {
    users: any[],
    setUsers: (updatedUsers: any[]) => void,
    error: string,
    setError: (error: string) => void
}

const useDeleteUser = ({ users, setUsers, error, setError }: Props) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteUser = async (id: string) => {
        setIsDeleting(true);
        try {
            await axios.delete(`/api/admin/users`, { data: { id } });
            setUsers((users).filter((user) => user.id !== id));
        } catch (err) {
            setError('An error occurred while deleting the user. Please try again.');
        } finally {
            setIsDeleting(false);
        }
    };

    return { deleteUser, isDeleting, error, setError };
};

export default useDeleteUser;