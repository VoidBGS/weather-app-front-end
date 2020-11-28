import React, {useState} from 'react'
import './Login.css'
import axios from 'axios';
import {Col, Button, Form, Alert, Spinner, Row} from 'react-bootstrap'
const initialInputState = { email: "", password:""};

const LoginForm = () =>{
    const [validated, setValidated] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState(initialInputState)
    const URL = "https://localhost:44343/api/authenticate/Login"

    const HandleInputChange = (e) =>{
      setFormData({...formData, [e.target.name]: e.target.value});
    }
    
    const handleSubmit = async (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          setLoading(false);          
      }

      else{
        event.preventDefault();
        let data = JSON.stringify({
          Email: formData.email,
          Password: formData.password
      });
        const response = await axios.post(URL, data, {
          headers: {
          'Content-Type': 'application/json'
          }
      }
      ).then(function (response){
          console.log(response);
          sessionStorage.setItem("Token", response.data.token);
          sessionStorage.setItem("Name", response.data.authorName)
          setSuccess(true);
          setTimeout(function () {
            Redirect()
          }, 3000);
        }).catch(function (error) {
          console.error(error);
          setLoading(false);
        })
      }
      setValidated(true);
  };
    //Look into the Backend to check if the token is valid
    //Json web tokens include users.
    function Redirect(){
    window.location.replace('http://localhost:3000/News')
    }
    const [isLoading, setLoading] = useState(false);
    const handleClick = () => setLoading(true);

  return (
    <>
      <Col md={{ span: 4, offset: 4 }} className="py-2 mb-3">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Row className="login-form-text justify-content-center pt-5"><Form.Label>Email</Form.Label></Form.Row>
            <Form.Control required size="md" name="email" type="email" onChange={HandleInputChange} className="login-form-input" minLength="10" maxLength="40" />
            <Form.Control.Feedback type="invalid" className="feedback">Email should not be empty or over 40 characters!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Row className="login-form-text justify-content-center pt-1"><Form.Label>Password</Form.Label></Form.Row>
            <Form.Control required size="md" name="password" type="password" onChange={HandleInputChange} className="login-form-input" minLength="8" maxLength="30" />
            <Form.Control.Feedback type="invalid" className="feedback">Password should not be empty or under 8 characters!</Form.Control.Feedback>
          </Form.Group>
          <Alert variant="success" show={success}>
            <Alert.Heading>
              <b>Success!</b>
            </Alert.Heading>
            <Row className="pl-3">
              <p>You have logged in successfully. Welcome!</p>
              <p><i>Redirecting</i></p>
              <Spinner animation="border" size="sm" role="status" className="mt-2 ml-2">
              </Spinner>
            </Row>
          </Alert>
          <Button variant="dark" size="lg" type="submit" disabled={isLoading} onClick={!isLoading ? handleClick : null} className="login-form-button my-3"> {isLoading ? 'Loading…' : 'Sign In'}</Button>
        </Form>
      </Col>
    </>
  )
}

export default LoginForm