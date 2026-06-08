import React from 'react';

export default function Input({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  error = '',
  placeholder = ' ',
  className = '',
  ...props
}) {
  return (
    <div className={`relative w-full mb-6 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="absolute left-3 -top-2 px-1 bg-[#F7F8FA] text-[13px] font-normal text-[#6C25FF] z-10 flex items-center leading-none"
        >
          <span>{label}</span>
          {required && <span className="text-[#DD4A3D] ml-0.5 font-normal">*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-[#F7F8FA] border ${
          error ? 'border-[#DD4A3D]' : 'border-[#D8DADC] focus:border-[#6C25FF] focus:ring-1 focus:ring-[#6C25FF]'
        } rounded-lg text-[13px] text-[#1D2226] font-normal placeholder-gray-400 focus:outline-none transition-all duration-200`}
        {...props}
      />
      {error && <span className="text-[13px] text-[#DD4A3D] mt-1 block pl-1">{error}</span>}
    </div>
  );
}
