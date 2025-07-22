import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { createUser } from '../services/userService';
import SubmitButton from '../components/SubmitButton';

const CreateUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    return (
        <Container className="py-4">
            <Row >
                <h1>Create User</h1>
                <Form onSubmit={handleSubmit}>
                    {/* 1️⃣ Two‑column layout starting at md (≥768 px) */}
                    <Row className="g-3">
                        <Col xs={12} md={6}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("name", { required: "Name is required" })}
                                isInvalid={!!errors.name}
                            />
                        </Col>

                        <Col xs={12} md={6}>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    {...register("email", { required: "Email is required" })}
                                    isInvalid={!!errors.email}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <SubmitButton />
                </Form>
            </Row>
        </Container>
    );
};

export default CreateUser;
