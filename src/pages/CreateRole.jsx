import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateRole = () => {
    const [roleName, setRoleName] = useState('');
    const handleRoleNameChange = (e) => {
        setRoleName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!roleName.trim()) {
            alert('Role name cannot be empty!');
            return;
        }
    }

    return (
        <Form>
            <Form.Group className="mb-3" onSubmit={handleSubmit}>
                <Form.Label>Role Name</Form.Label>
                <Form.Control type="string" placeholder="role name" onChange={handleRoleNameChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Create Role
            </Button>
        </Form>
    )
}
export default CreateRole;