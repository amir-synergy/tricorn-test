import {useState} from "react";
import axios from "axios";

interface Props {
    users: any[],
    setUsers: (updatedUsers: any[]) => void,
    error: string,
    setError: (error: string) => void
}

const useBlockUser = ({ users, setUsers, error, setError }: Props) => {
    const [isBlocking, setIsBlocking] = useState(false);

    const blockUser = async (id: string) => {
        setIsBlocking(true);
        try {
            await axios.patch(`/api/admin/users`, { id });
            const updatedUsers = users.map(user =>
                user.id === id
                    ? { ...user, status: 'BLOCKED' }
                    : user
            );
            setUsers(updatedUsers);
        } catch (err) {
            setError('An error occurred while blocking the user. Please try again. ERROR: ' + err);
        } finally {
            setIsBlocking(false);
        }
    };

    return { blockUser, isBlocking, error, setError };
}

export default useBlockUser;