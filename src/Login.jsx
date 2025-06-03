import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';

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
            const response = await axios.post('http://localhost:8090/api/v1/public/login', formData);
            setMessage('Login successful!');
            setVariant('success');
            console.log(response.data); // Save token or redirect here
        } catch (error) {
            setMessage('Login failed. Please check your credentials.');
            setVariant('danger');
            console.error(error);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
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

