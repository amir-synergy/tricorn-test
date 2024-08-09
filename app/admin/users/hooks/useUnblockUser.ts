import {useState} from "react";
import axios from "axios";

interface Props {
    users: any[],
    setUsers: (updatedUsers: any[]) => void,
    error: string,
    setError: (error: string) => void
}

const useUnblockUser = ({ users, setUsers, error, setError }: Props) => {
    const [isUnblocking, setIsUnblocking] = useState(false);

    const unblockUser = async (id: string) => {
        setIsUnblocking(true);
        try {
            await axios.patch(`/api/admin/users`, { id });
            const updatedUsers = users.map(user =>
                user.id === id
                    ? { ...user, status: 'ACTIVE' }
                    : user
            );
            setUsers(updatedUsers);
        } catch (err) {
            setError('An error occurred while unblocking the user. Please try again. ERROR: ' + err);
        } finally {
            setIsUnblocking(false);
        }
    };

    return { unblockUser, isUnblocking, error, setError };

}

export default useUnblockUser;