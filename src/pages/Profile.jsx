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
    <div className="min-h-screen bg-[#F7F8FA] animate-slide-in">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <div className="h-[68px] bg-white border-b border-[#E5E5E5] flex items-center px-4">
        <h1 className="text-left text-[18px] leading-[21px] font-normal text-[#1D2226] capitalize">
          Account Settings
        </h1>
      </div>
      <div className="bg-[#F7F8FA] px-4 pt-6 pb-5">
        <div className="flex items-start gap-4">
          <div className="relative w-[76px] h-[76px]">
            <img
              src={user?.avatar || defaultAvatar}
              alt="Profile"
              className="w-[76px] h-[76px] rounded-full object-cover"
            />

            <button
              onClick={handleCameraClick}
              className="
    absolute
    bottom-[6px]
    right-[-4px]
    w-[23px]
    h-[23px]
    rounded-full
    bg-[#6C25FF]
    flex
    items-center
    justify-center
    shadow-sm
  "
            >
              <img src="https://res.cloudinary.com/dudjdf428/image/upload/v1780939606/Group_1585_1_d2rhxx.png" />
            </button>
          </div>

          <div className="pt-1">
            <h2 className="text-left text-[15px] leading-[19px] font-medium text-[#1D2226] capitalize">
              {user?.name || 'Marry Doe'}
            </h2>

            <p className="text-left text-[14px] leading-[19px] font-normal text-[#1D2226] capitalize">
              {user?.email || 'Marry@Gmail.com'}
            </p>
          </div>
        </div>
        <p className="mt-[20px] text-left text-[14px] leading-[22px] font-normal text-[#1D2226] capitalize">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
      <div className="mt-[10px] border-t border-dashed border-[#D6D6D6]" />

      <div className="h-[477px]" />

      <div className="border-t border-dashed border-[#D6D6D6]" />
    </div>
  );
}
