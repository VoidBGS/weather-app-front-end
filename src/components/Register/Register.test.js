import React from 'react';
import {  render, screen, fireEvent, toBeInTheDocument} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegisterForm from './RegisterForm'


describe("Registering a user", () => {
  test("userRegister", async () => {
    render(<RegisterForm/>);

    const nameInput = screen.getByTestId('register-form-name');
    fireEvent.change(nameInput, {target:{ value: "TestingGuy" } } );
    expect(nameInput.value).toBe("TestingGuy");

    const emailInput =  screen.getByTestId('register-form-email');
    fireEvent.change(emailInput, { target: {value:"TestingGuy@gmail.com" } });
    expect(emailInput.value).toBe("TestingGuy@gmail.com");

    const passwordInput = screen.getByTestId('register-form-password');
    fireEvent.change(passwordInput, { target: { value: "i!88888888" } } );
    expect(passwordInput.value).toBe("i!88888888");

    const confirmInput = screen.getByTestId('register-form-confirm');
    fireEvent.change(confirmInput, { target: { value: "i!88888888" } } );
    expect(confirmInput.value).toBe("i!88888888");

    const registerButton = screen.getByTestId('register-form-button');
    fireEvent.click(registerButton);
    const successMessage = await screen.findByText("Success");
    expect(successMessage).toBeInTheDocument();
  });
});
