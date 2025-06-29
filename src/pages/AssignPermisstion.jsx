import Table from 'react-bootstrap/Table';
import { getRoles } from '../services/userService';
import { useState } from 'react';
const AssignPermission = () => {
    const [roles, setRoles] = useState([]);
    const fetchRoles = async () => {
        try {
            roles = await getRoles();
            console.log(roles);
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };
    return (
        <>
            <h1>Assign Permission</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}
export default AssignPermission;