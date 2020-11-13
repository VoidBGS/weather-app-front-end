import React, {useState} from 'react'
import './Register.css'
import axios from 'axios';
import {Col, Row, Alert, Button, Form, Spinner} from 'react-bootstrap'
const initialInputState = { username: "", email: "", password:"", confirmPassword:""};

const RegisterForm = () =>{
    const [validated, setValidated] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState(initialInputState)
    const URL = "https://localhost:44343/api/authenticate/Register"

    const HandleInputChange = (e) =>{
      setFormData({...formData, [e.target.name]: e.target.value});
    }

    const [isLoading, setLoading] = useState(false);
    const handleClick = () => setLoading(true);

    const handleSubmit = async (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          setLoading(false);          
      }

      else{
        if(formData.password !== formData.confirmPassword)
        {
          console.log(formData.password)
          console.log(formData.password)
          event.preventDefault();
          event.stopPropagation();
          setLoading(false);
          return
        }
        event.preventDefault();
        const data = JSON.stringify({
          Username: formData.username,
          Email: formData.email,
          Password: formData.password
      });
        const res = await axios.post(URL, data, {
          headers: {
          'Content-Type': 'application/json'
          }
      }
      ).then(function (response){
          console.log(response);
          setSuccess(true);
          setLoading(false);
          setTimeout(function () {
          Redirect()
        }, 5000);
        }).catch(function (error) {
          console.error(error);
          setLoading(false);
        })
        console.log(res);
      }
      setValidated(true);
  };
  //Seperate component for making API calls

  function Redirect(){
     window.location.replace('http://localhost:3000')
  }

  return (
    <>
      <Col md={{ span: 4, offset: 4 }}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Row className="register-form-text justify-content-center pt-4"><Form.Label>Name</Form.Label></Form.Row>
            <Form.Control required size="md" name="username" type="text" onChange={HandleInputChange} className="register-form-input" minLength="1" maxLength="30"></Form.Control>
            <Form.Control.Feedback type="invalid" className="feedback">Name should not be empty or over 30 characters!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Row className="register-form-text justify-content-center pt-1"><Form.Label>Email</Form.Label></Form.Row>
            <Form.Control required size="md" name="email" type="email" onChange={HandleInputChange} className="register-form-input" minLength="10" maxLength="40" />
            <Form.Control.Feedback type="invalid" className="feedback">Email should not be empty or over 40 characters!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Row className="register-form-text justify-content-center pt-1"><Form.Label>Password</Form.Label></Form.Row>
            <Form.Control required size="md" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" name="password" type="password" onChange={HandleInputChange} className="register-form-input" minLength="8" maxLength="30" />
            <Form.Control.Feedback type="invalid" className="feedback">Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Row className="register-form-text justify-content-center pt-1"><Form.Label>Confirm Password</Form.Label></Form.Row>
            <Form.Control required size="md" name="confirmPassword" type="password" onChange={HandleInputChange} className="register-form-input" minLength="8" maxLength="30" />
            <Form.Control.Feedback type="invalid" className="feedback">Password should not be empty or under 8 characters!</Form.Control.Feedback>
          </Form.Group>
          <Alert variant="success" show={success}>
            <Alert.Heading>
              <b>Success!</b>
            </Alert.Heading>
            <Row className="pl-3">
              <p>Your account has been created. Please check your email for the activation link.</p>
              <p><i>Redirecting</i></p>
              <Spinner animation="border" size="sm" role="status" className="mt-2 ml-2">
              </Spinner>
            </Row>
          </Alert>
          <Button variant="dark" size="lg" type="submit" disabled={isLoading} onClick={!isLoading ? handleClick : null} className="register-form-button my-3 mb-2"> {isLoading ? 'Loading…' : 'Sign Up'}</Button>
          <p className="sign-up p-3 ml-2"><a href="/Login">Already have an account? Click here!</a></p>
        </Form>
      </Col>

    </>
  )
}

export default RegisterForm