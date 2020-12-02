import React from 'react'
import './Register.css'
import RegisterForm from './RegisterForm'
import RegisterTitle from './RegisterTitle'
import {Container} from 'react-bootstrap'

const Register = () =>{

    return (
        <Container data-testid="register-page-test">
            <RegisterTitle />
            <RegisterForm />
        </Container>
    )
}

export default Register