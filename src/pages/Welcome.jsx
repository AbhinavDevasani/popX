import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end min-h-screen bg-[#F7F8FA] px-5 pb-8">
      <div className="flex-grow"></div>

      <div className="space-y-6 max-w-sm w-full mx-auto">
        <div className="space-y-2 text-left">
          <h1 className="text-[28px] font-bold text-[#1D2229] leading-tight tracking-tight">
            Welcome to PopX
          </h1>
          <p className="text-[14px] text-[#667085] leading-relaxed font-medium">
            Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Button 
            variant="primary" 
            onClick={() => navigate('/register')}
          >
            Create Account
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => navigate('/login')}
          >
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  );
}
