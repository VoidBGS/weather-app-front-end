import React, {useState} from 'react'
import './Register.css'
import axios from 'axios';
import {Col, Row, Button, Form} from 'react-bootstrap'
const initialInputState = { name: "", email: "", password:"", confirmPassword:""};

const RegisterForm = () =>{
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState(initialInputState)
    const URL = "TODO"

    const HandleInputChange = (e) =>{
      setFormData({...formData, [e.target.name]: e.target.value});
    }

    const [isLoading, setLoading] = useState(false);
    const handleClick = () => setLoading(true);



    return (
      <>
      <Col md={{ span: 4, offset: 4 }}>
        <Form noValidate validated={validated}>
        <Form.Group>
        <Form.Row className="register-form-text justify-content-center pt-4"><Form.Label>Name</Form.Label></Form.Row>
        <Form.Control required size="md" name="name" type="text" onChange={HandleInputChange} className="register-form-input" minLength="1" maxLength="30"></Form.Control>
        <Form.Control.Feedback type="invalid" className="feedback">Name should not be empty or over 30 characters!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
        <Form.Row className="register-form-text justify-content-center pt-1"><Form.Label>Email</Form.Label></Form.Row>
        <Form.Control required size="md" name="email" type="email" onChange={HandleInputChange} className="register-form-input" minLength="10" maxLength="40"/>
        <Form.Control.Feedback type="invalid" className="feedback">Email should not be empty or over 40 characters!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
        <Form.Row className="register-form-text justify-content-center pt-1"><Form.Label>Password</Form.Label></Form.Row>
        <Form.Control required size="md" name="password" type="password" onChange={HandleInputChange} className="register-form-input" minLength="8" maxLength="30"/>
        <Form.Control.Feedback type="invalid" className="feedback">Password should not be empty or under 8 characters!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
        <Form.Row className="register-form-text justify-content-center pt-1"><Form.Label>Confirm Password</Form.Label></Form.Row>
        <Form.Control required size="md" name="confirmPassword" type="password" onChange={HandleInputChange} className="register-form-input" minLength="10" maxLength="70"/>
        <Form.Control.Feedback type="invalid" className="feedback">Password should not be empty or under 8 characters!</Form.Control.Feedback>
        </Form.Group>
        <Button variant="dark" size="lg" type="submit" disabled={isLoading} onClick={!isLoading ? handleClick : null} className="register-form-button my-3"> {isLoading ? 'Loading…' : 'Sign Up'}</Button>
        </Form>
      </Col>
      </>
    )
}

export default RegisterForm