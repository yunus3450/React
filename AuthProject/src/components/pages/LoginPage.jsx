
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import Form from '../molecules/Forms';
import AuthTemplate from '../templates/AuthTemplate';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const userData = { username, password };
      dispatch(login(userData));
    };
  
    const fields = {
      username: {
        label: 'Username',
        type: 'text',
        value: username,
        onChange: (e) => setUsername(e.target.value), // HATA BURADA DÜZELTİLDİ
        placeholder: 'Enter your username',
      },
      password: {
        label: 'Password',
        type: 'password',
        value: password,
        onChange: (e) => setPassword(e.target.value), // HATA BURADA DÜZELTİLDİ
        placeholder: 'Enter your password',
      },
    };
  
    return (
      <AuthTemplate title="Login">
        <Form fields={fields} onSubmit={handleSubmit} buttonText="Login" />
      </AuthTemplate>
    );
  };
  
  export default LoginPage;