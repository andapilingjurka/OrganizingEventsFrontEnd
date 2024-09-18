import React, { useState } from 'react';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [surnameError, setSurnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [serverError, setServerError] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (setter, errorSetter, validator) => (ev) => {
    const value = ev.target.value;
    setter(value);
    errorSetter('');
    if (validator) validator(value);
  };

  const onRegisterClick = async () => {
    let hasError = false;

    if (!Email) {
      setEmailError('Email is required');
      hasError = true;
    }

    if (!Password) {
      setPasswordError('Password is required');
      hasError = true;
    }

    if (Password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      hasError = true;
    }

    if (!hasError) {
      const roleID = 2;
      const userData = {
        firstName: FirstName,
        lastName: LastName,
        email: Email,
        password: Password,
        roleId: roleID,
      };

      try {
        const response = await axios.post('https://localhost:7214/api/Users/Register', userData);
        if (response.status === 200) {
          console.log('Sending data:', userData);
          navigate('/login')
        } else {
          console.log(response.data);
          setServerError('An error occurred: ' + response.data);
        }
      } catch (error) {
        console.error('Error:', error);
        setServerError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className={'mainContainer'}>
      <div className={'registerBox'}>
        <div className={'titleContainer'}>
          <div>Register</div>
        </div>
        <div className={'inputContainer'}>
          <input
            value={FirstName}
            placeholder="Enter your name here"
            onChange={handleInputChange(setFirstName, setNameError)}
            className={'inputBox'}
          />
          {nameError && <label className="errorLabel">{nameError}</label>}
        </div>
        <div className={'inputContainer'}>
          <input
            value={LastName}
            placeholder="Enter your surname here"
            onChange={handleInputChange(setLastName, setSurnameError)}
            className={'inputBox'}
          />
          {surnameError && <label className="errorLabel">{surnameError}</label>}
        </div>
        <div className={'inputContainer'}>
          <input
            value={Email}
            placeholder="Enter your email here"
            onChange={handleInputChange(setEmail, setEmailError)}
            className={'inputBox'}
          />
          {emailError && <label className="errorLabel">{emailError}</label>}
        </div>
        <div className={'inputContainer'}>
          <input
            type='password'
            value={Password}
            placeholder="Enter your password here"
            onChange={handleInputChange(setPassword, setPasswordError)}
            className={'inputBox'}
          />
          {passwordError && <label className="errorLabel">{passwordError}</label>}
        </div>
        <div className={'inputContainer'}>
          <input
            type='password'
            value={confirmPassword}
            placeholder="Confirm your password"
            onChange={handleInputChange(setConfirmPassword, setConfirmPasswordError)}
            className={'inputBox'}
          />
          {confirmPasswordError && <label className="errorLabel">{confirmPasswordError}</label>}
        </div>
        <div className={'inputContainer'}>
          <input className={'inputButton'} type="button" onClick={onRegisterClick} value={'Register'} />
          {serverError && <label className="errorLabel">{serverError}</label>}
        </div>
      </div>
    </div>
  );
};

export default Register;
