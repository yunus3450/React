import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import Form from '../molecules/Forms';
import AuthTemplate from '../templates/AuthTemplate';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password, email };
    dispatch(login(userData)); // Simülasyon: Kayıt ve login
  };

  const fields = {
    username: {
      label: 'Username',
      type: 'text',
      value: username,
      onChange: (e) => setUsername(e.target.value), // HATA BURADA DÜZELTİLDİ
      placeholder: 'Enter your username',
    },
    email: {
      label: 'Email',
      type: 'email',
      value: email,
      onChange: (e) => setEmail(e.target.value), // HATA BURADA DÜZELTİLDİ
      placeholder: 'Enter your email',
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
    <AuthTemplate title="Register">
      <Form fields={fields} onSubmit={handleSubmit} buttonText="Register" />
    </AuthTemplate>
  );
};

export default RegisterPage;
