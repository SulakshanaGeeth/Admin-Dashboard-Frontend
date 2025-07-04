import { Table, Modal, Button } from 'react-bootstrap';
import { getRoles, getPermissions } from '../services/userService';
import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import Select from 'react-select';
const ViewRoles = () => {

    const [roles, setRoles] = useState([]);
    const [permissions, setPermissions] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedPermissions, setSelectedPermissions] = useState([]);
    let permissionOptions = []

    useEffect(() => {
        fetchRoles();
        fetchPermissions();
    }, []);

    const fetchRoles = async () => {
        try {
            const response = await getRoles();
            setRoles(response);
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };

    const fetchPermissions = async () => {
        try {
            const response = await getPermissions();
            permissionOptions = permissions.map(p => ({
                value: p.id,
                label: p.name
            }));
            setPermissions(response);
        } catch (error) {
            console.error('Error fetching permissions:', error);
        }
    }

    const handlePermissionsChange = (selectedOptions) => {
        setSelectedPermissions(selectedOptions); // this will be array of { value, label }
    };

    const handleEdit = (role) => {
        console.log('Edit role:', role);
        setSelectedRole(role);
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
        setSelectedRole(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your submit logic here
        console.log('Submitting role:', selectedRole);
        handleClose();
    };

    return (
        <>
            <h1>View Roles</h1>
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
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Role</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedRole && (
                        <>
                            <p><strong>Role Name:</strong> {selectedRole.name}</p>
                            {/* Add your form or inputs here to edit */}
                            <Select
                                isMulti
                                options={permissionOptions}
                                value={selectedPermissions}
                                onChange={handlePermissionsChange}
                                placeholder="Choose permissions..."
                            />
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ViewRoles;