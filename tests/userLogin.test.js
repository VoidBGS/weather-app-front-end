import React from 'react';
import {  getByTestId, render, screen, waitFor, fireEvent, toBeInTheDocument, } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateRoutes from '../routes'
import LoginForm from '../src/components/Login/LoginForm'

  describe("Logging in a user", () => {
    test("userLogin", async () => {
    render(<LoginForm/>);

    const emailInput =  screen.getByTestId('login-form-email');
    fireEvent.change(emailInput, "TestingGuy@gmail.com");
    expect(inputEmail.value).toBe("TestingGuy@gmail.com");

    const passwordInput =  screen.getByTestId('login-form-password');
    fireEvent.change(passwordInput, "i!88888888");
    expect(inputEmail.value).toBe("i!88888888");
        console.log(inputEmail.value)
    const loginButton = screen.getByTestId('login-form-button')
    fireEvent.click(loginButton)

    });
  });