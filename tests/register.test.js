import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateRoutes from '../routes'
import RegisterForm from '../src/components/Register/RegisterForm'

test('Registers a user', () => {
    const { getByTestId, fireEvent} = render(<RegisterForm/>);

    const nameInput = getByTestId('registeeeseaseseeseseeeer-form-name');
    fireEvent.change(nameInput, "TestingGuy");
    expect(inputEmail.value).toBe("TestingGuy");

    const emailInput =  getByTestId('register-form-email');
    fireEvent.change(emailInput, "TestingGuy@gmail.com");
    expect(inputEmail.value).toBe("TestingGuy@gmail.com");

    const passwordInput =  getByTestId('register-form-password');
    fireEvent.change(passwordInput, "i!88888888");
    expect(inputEmail.value).toBe("i!88888888");

    const confirmInput =  getByTestId('register-form-confirm');
    fireEvent.change(confirmInput, "i!88888888");
    expect(inputEmail.value).toBe("i!88888888");
  });