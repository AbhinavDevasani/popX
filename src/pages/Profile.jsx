import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile({ user, onSelectPhoto }) {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const defaultAvatar = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150";

  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (onSelectPhoto) {
          onSelectPhoto(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white animate-slide-in">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      <div className="border-b border-[#E8EAEB] px-5 py-4 bg-white sticky top-0 z-10 text-left">
        <h1 className="text-[18px] font-semibold text-[#1D2229]">
          Account Settings
        </h1>
      </div>

      <div className="bg-[#F7F8FA] p-5 pb-7 flex flex-col space-y-5 text-left">
        <div className="flex items-center space-x-4">
          <div className="relative inline-block">
            <div className="w-[76px] h-[76px] rounded-full overflow-hidden border border-gray-200 bg-white">
              <img
                src={user?.avatar || defaultAvatar}
                alt="Profile Avatar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.classList.add('flex', 'items-center', 'justify-center', 'bg-popx-primary', 'text-white', 'text-xl', 'font-bold');
                  e.target.parentNode.innerText = user?.name ? user.name.charAt(0).toUpperCase() : 'M';
                }}
              />
            </div>
            <button
              onClick={handleCameraClick}
              aria-label="Change Profile Photo"
              className="absolute bottom-0 right-0 w-[24px] h-[24px] rounded-full bg-popx-primary hover:bg-[#581cdb] flex items-center justify-center border-2 border-white shadow-md transition-colors duration-200"
            >
              <svg
                className="w-[12px] h-[12px] text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
            </button>
          </div>

          <div className="space-y-0.5">
            <h2 className="text-[16px] font-bold text-[#1D2229] leading-tight">
              {user?.name || 'Marry Doe'}
            </h2>
            <p className="text-[13px] text-[#667085] font-medium leading-tight">
              {user?.email || 'Marry@Gmail.com'}
            </p>
          </div>
        </div>

        <div>
          <p className="text-[13px] text-[#1D2229] leading-[20px] font-medium opacity-90">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>

      <div className="border-t border-dashed border-[#CBCBCB] w-full"></div>

      <div className="flex-grow bg-white px-5 py-6 flex flex-col justify-between">
        <button
          onClick={() => navigate('/')}
          className="w-full py-3 border border-gray-200 rounded-lg text-sm font-semibold text-red-500 hover:bg-red-50 active:scale-[0.99] transition-all mt-auto"
        >
          Sign Out
        </button>
      </div>

      <div className="border-t border-dashed border-[#CBCBCB] w-full mt-auto"></div>
    </div>
  );
}
