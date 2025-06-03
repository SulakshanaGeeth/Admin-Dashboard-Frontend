import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import { login } from './services/authService';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState(''); // success or danger

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await login(formData);
            setMessage('Login successful!');
            setVariant('success');
            console.log(data); // token or user info
        } catch (error) {
            setMessage('Login failed. Please check your credentials.');
            setVariant('danger');
            console.error(error);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={12}>
                    <h2 className="text-center">Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formUsername" className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter username"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Login
                        </Button>
                    </Form>

                    {message && <Alert variant={variant} className="mt-3">{message}</Alert>}
                </Col>
            </Row>
        </Container>
    );
};

export default Login;

