import { useState } from 'react';
import { toast } from 'react-toastify';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { createUser } from '../services/userService';
import SubmitButton from '../components/SubmitButton';

const CreateUser = () => {
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
            await createUser(formData);
            toast.success('User created!');
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <Container className="py-4">
            <Row >
                <h1>Create User</h1>
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

                    <SubmitButton />
                </Form>
            </Row>
        </Container>
    );
};

export default CreateUser;
