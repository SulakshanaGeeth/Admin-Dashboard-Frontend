import React, { useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { login } from './services/authService';
import { toast } from 'react-toastify';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

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
            toast.success('Login successful!');
        } catch (error) {
            if (error.status == 403)
                toast.error("Invaild Credentials")
            console.error(error);
        }
    };

    return (
        <>
            <Row >
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
            </Row>
        </>
    );
};

export default Login;

