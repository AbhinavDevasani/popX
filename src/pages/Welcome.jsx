import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end min-h-full bg-[#F7F8FA] px-5 pb-8">
      <div className="flex-grow"></div>

      <div className="space-y-6 max-w-sm w-full mx-auto pb-4">
        <div className="space-y-2 text-left">
          <h1 className="text-[28px] font-medium text-[#1D2226] leading-tight tracking-tight">
            Welcome to PopX
          </h1>
          <p className="text-[18px] text-[#1D2226] opacity-60 leading-relaxed font-normal">
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
