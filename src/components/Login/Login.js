import React, {useState} from 'react'
import './Login.css'
import LoginTitle from './LoginTitle'
import LoginForm from './LoginForm'
import {Container} from 'react-bootstrap'

const Login = () =>{
    return (
        <Container>
        <LoginTitle/>
        <LoginForm/>
        </Container>
    )
}

export default Login