import React from 'react';
import {  render, screen, fireEvent, } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateRoutes from '../../routes'
import LoginForm from './LoginForm'

  describe("Logging in a user", () => {
    test("userLogin", async () => {
    render(<LoginForm/>);

    const emailInput =  screen.getByTestId('login-form-email');
    fireEvent.change(emailInput, { target: { value: "TestingGuy@gmail.com" } });
    expect(emailInput.value).toBe("TestingGuy@gmail.com");

    const passwordInput =  screen.getByTestId('login-form-password');
    fireEvent.change(passwordInput, {target: {value: "i!88888888"} });
    expect(passwordInput.value).toBe("i!88888888");


    const loginButton = screen.getByTestId('login-form-button')
    fireEvent.click(loginButton)
    
    });
  });