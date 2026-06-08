import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Register({ onRegister }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleRadioChange = (val) => {
    setFormData({
      ...formData,
      isAgency: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onRegister(formData.fullName, formData.email);
    navigate('/profile');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F8FA] px-5 py-8 justify-between animate-slide-in">
      <div className="max-w-sm w-full mx-auto space-y-6">
        <div className="text-left pt-2 pb-2">
          <h1 className="text-[28px] font-bold text-[#1D2229] leading-tight tracking-tight">
            Create your<br />PopX account
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            error={errors.fullName}
          />

          <Input
            label="Phone number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            error={errors.phone}
          />

          <Input
            label="Email address"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            error={errors.email}
          />

          <Input
            label="Password"
            id="password"
            name="password"
            type="text"
            value={formData.password}
            onChange={handleChange}
            required
            error={errors.password}
          />

          <Input
            label="Company name"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />

          <div className="text-left space-y-2 pt-1 pb-6">
            <span className="text-[13px] font-semibold text-[#1D2229] flex items-center">
              Are you an Agency?<span className="text-red-500 ml-0.5 font-bold">*</span>
            </span>
            <div className="flex items-center space-x-6 pt-1">
              <label className="flex items-center cursor-pointer space-x-2 text-sm text-[#1D2229] font-medium">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={() => handleRadioChange('yes')}
                  className="sr-only"
                />
                <span className={`w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center transition-all ${
                  formData.isAgency === 'yes' ? 'border-popx-primary' : 'border-gray-400'
                }`}>
                  {formData.isAgency === 'yes' && (
                    <span className="w-[10px] h-[10px] rounded-full bg-popx-primary"></span>
                  )}
                </span>
                <span>Yes</span>
              </label>

              <label className="flex items-center cursor-pointer space-x-2 text-sm text-[#1D2229] font-medium">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={() => handleRadioChange('no')}
                  className="sr-only"
                />
                <span className={`w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center transition-all ${
                  formData.isAgency === 'no' ? 'border-popx-primary' : 'border-gray-400'
                }`}>
                  {formData.isAgency === 'no' && (
                    <span className="w-[10px] h-[10px] rounded-full bg-popx-primary"></span>
                  )}
                </span>
                <span>No</span>
              </label>
            </div>
          </div>

          <div className="pt-2">
            <Button type="submit" variant="primary">
              Create Account
            </Button>
          </div>
        </form>
      </div>

      <div className="text-center text-sm font-medium text-[#667085] mt-6">
        Already have an account?{' '}
        <button
          onClick={() => navigate('/login')}
          className="text-popx-primary font-bold hover:underline"
        >
          Login
        </button>
      </div>
    </div>
  );
}
