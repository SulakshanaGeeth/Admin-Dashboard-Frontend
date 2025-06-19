import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CreateUser = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const res = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('Failed to create user');

            toast.success('User created!');
            navigate('/dashboard');          // or wherever you want to send them
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <Container className="py-4">
            <Row >
                <h1 className="mb-4 text-center">Create User</h1>
                <Form onSubmit={handleSubmit}>
                    {/* 1️⃣ Two‑column layout starting at md (≥768 px) */}
                    <Row className="g-3">
                        <Col xs={12} md={6}>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>

                        <Col xs={12} md={6}>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Password stays full‑width underneath */}
                    <Form.Group controlId="password" className="my-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    {/* 2️⃣ Small, content‑width button */}
                    <Button type="submit" variant="primary" className="px-4">
                        Save
                    </Button>
                </Form>
            </Row>
        </Container>
    );
};

export default CreateUser;
