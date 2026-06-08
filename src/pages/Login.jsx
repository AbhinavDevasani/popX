import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } 
    if (!password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onLogin(email);
    navigate('/profile');
  };

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F8FA] px-5 py-8 justify-between animate-slide-in">
      <div className="max-w-sm w-full mx-auto space-y-8">
        <div className="space-y-2 text-left pt-4">
          <h1 className="text-[28px] font-bold text-[#1D2229] leading-tight tracking-tight">
            Signin to your<br />PopX account
          </h1>
          <p className="text-[14px] text-[#667085] leading-relaxed font-medium">
            Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-1">
          <Input
            label="Email Address"
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            placeholder="Enter email address"
            error={errors.email}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) setErrors({ ...errors, password: '' });
            }}
            placeholder="Enter password"
            error={errors.password}
          />

          <div className="pt-4">
            <Button
              type="submit"
              variant={isFormValid ? 'primary' : 'disabled'}
              disabled={!isFormValid}
            >
              Login
            </Button>
          </div>
        </form>
      </div>

      <div className="text-center text-sm font-medium text-[#667085] mt-6">
        Don't have an account?{' '}
        <button
          onClick={() => navigate('/register')}
          className="text-popx-primary font-bold hover:underline"
        >
          Register
        </button>
      </div>
    </div>
  );
}
