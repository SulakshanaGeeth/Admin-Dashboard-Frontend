import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createRole } from '../services/userService';

const CreateRole = () => {
    const [roleName, setRoleName] = useState('');
    const handleRoleNameChange = (e) => {
        setRoleName(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!roleName.trim()) {
            alert('Role name cannot be empty!');
            return;
        }
        try {
            const newRole = await createRole(roleName);
            setRoleName(''); // Reset the input field
            alert('Role created successfully!');
        } catch (error) {
            console.error('Error creating role:', error);
            alert('Failed to create role. Please try again.');
        }
    }

    return (
        <>
            <h2>Create Role</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Role Name</Form.Label>
                    <Form.Control type="string" placeholder="role name" value={roleName} onChange={handleRoleNameChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Role
                </Button>
            </Form>
        </>
    )
}
export default CreateRole;