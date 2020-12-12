import React from 'react'
import './Login.css'
import LoginTitle from './LoginTitle'
import LoginForm from './LoginForm'
import {Container} from 'react-bootstrap'

const Login = () =>{
    return (
        <Container data-testid="login-page-test">
            <LoginTitle />
            <LoginForm />
        </Container>
    )
}

export default Login