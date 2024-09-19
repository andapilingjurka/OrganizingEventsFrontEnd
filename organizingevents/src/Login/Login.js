import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [ServerError, setServerError] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (setter, errorSetter, validator) => (ev) => {
    const value = ev.target.value;
    setter(value);
    errorSetter('');
    if (validator) validator(value);
  };

  const onLoginClick = async () => {  

    const userData = {
      email: Email,
      password: Password
    };

    if (!Email) {
      setEmailError('Email is required');
    }

    if (!Password) {
      setPasswordError('Password is required');
    }

    try {
      const response = await axios.post('https://localhost:7214/api/Users/Login', userData);
      if (response.status === 200) {
        console.log('Sending data:', userData);
        alert('success');
        navigate('/')
      } else {
        setServerError('An error occurred: ' + response.data);
      }
    } catch (error) {
      console.error('Error:', error);
      setServerError('An error occurred. Please try again.');
    }
  };

  
  return (
    <div className={'mainContainer'}>
      <div className={'loginBox'}>
        <div className={'titleContainer'}>
          <div>Login</div>
        </div>
        <div className={'inputContainer'}>
          <input
            value={Email}
            placeholder="Enter your email here"
            onChange={handleInputChange(setEmail,setEmailError)}
            className={'inputBox'}
          />
          {emailError && <label className="errorLabel">{emailError}</label>}
        </div>
        <div className={'inputContainer'}>
          <input
            type='password'
            value={Password}
            placeholder="Enter your password here"
            onChange={handleInputChange(setPassword,setPasswordError)}
            className={'inputBox'}
          />
          {passwordError && <label className="errorLabel">{passwordError}</label>}
        </div>
        <div className={'inputContainer'}>
          <input className={'inputButton'} type="button" onClick={onLoginClick} value={'Log in'} />
        </div>
        <div className={'registerContainer'}>
          <input className={'registerButton'} type="button" value={'Register'} onClick={() => navigate('/register')} />
        </div>
        {ServerError && <label className="errorLabel">{ServerError}</label>}
      </div>
    </div>
  );
};

export default Login;