import Table from 'react-bootstrap/Table';
import { getRoles } from '../services/userService';
import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
const AssignPermission = () => {

    const [roles, setRoles] = useState([]);

    useEffect(() => {
        fetchRoles();
    }, []);

    const fetchRoles = async () => {
        try {
            const response = await getRoles();
            setRoles(response);
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };

    const handleEdit = (role) => {
        // Handle the edit action for the role
        console.log('Edit role:', role);
        // You can navigate to a different page or open a modal here
    }

    return (
        <>
            <h1>Assign Permission</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role, index) => (
                        <tr key={role.id}>
                            <td>{index + 1}</td>
                            <td>{role.name}</td>
                            <td><FaEdit
                                style={{ cursor: 'pointer', color: 'blue' }}
                                onClick={() => handleEdit(role)}
                            /></td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </>
    );
}
export default AssignPermission;