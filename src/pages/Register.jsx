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

    if (!formData.fullName.trim())
      newErrors.fullName = 'Full Name is required';

    if (!formData.phone.trim())
      newErrors.phone = 'Phone number is required';

    if (!formData.email.trim())
      newErrors.email = 'Email address is required';

    if (!formData.password.trim())
      newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onRegister(formData.fullName, formData.email);
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] px-5 pt-10 pb-6 animate-slide-in">
      <div className="max-w-sm w-full mx-auto flex flex-col min-h-[calc(100vh-64px)]">
        <div className="text-left">
          <h1 className="text-[28px] leading-[36px] font-medium text-[#1D2226]">
            Create your
            <br />
            PopX account
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 mt-8"
        >
          <div className="space-y-4">

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
              type="password"
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
            <div className="text-left pt-1">
              <span className="text-[13px] text-[#1D2229] flex items-center">
                Are you an Agency?
                <span className="text-red-500 ml-0.5">*</span>
              </span>

              <div className="flex items-center space-x-6 mt-3">

                <label className="flex items-center cursor-pointer space-x-2">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={formData.isAgency === 'yes'}
                    onChange={() => handleRadioChange('yes')}
                    className="sr-only"
                  />

                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.isAgency === 'yes'
                        ? 'border-[#6C25FF]'
                        : 'border-gray-400'
                    }`}
                  >
                    {formData.isAgency === 'yes' && (
                      <span className="w-[10px] h-[10px] rounded-full bg-[#6C25FF]" />
                    )}
                  </span>

                  <span className="text-[14px] text-[#1D2229]">
                    Yes
                  </span>
                </label>

                <label className="flex items-center cursor-pointer space-x-2">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={formData.isAgency === 'no'}
                    onChange={() => handleRadioChange('no')}
                    className="sr-only"
                  />

                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.isAgency === 'no'
                        ? 'border-[#6C25FF]'
                        : 'border-gray-400'
                    }`}
                  >
                    {formData.isAgency === 'no' && (
                      <span className="w-[10px] h-[10px] rounded-full bg-[#6C25FF]" />
                    )}
                  </span>

                  <span className="text-[14px] text-[#1D2229]">
                    No
                  </span>
                </label>

              </div>
            </div>
          </div>
          <div className="mt-[240px]">
  <Button type="submit" variant="primary" className="h-[46px] rounded-[6px] bg-[#6C25FF] text-white text-[16px] font-medium">
    Create Account
  </Button>
</div>
        </form>
      </div>
    </div>
  );
}