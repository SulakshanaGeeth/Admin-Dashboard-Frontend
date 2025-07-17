import { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
const ViewUsers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await getUsers();
            setUsers(response);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching users:', error);
            setLoading(false);
        }
    }

    return (
        <div className="container">
            <h1 className="text-center my-4">Users</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
export default ViewUsers;