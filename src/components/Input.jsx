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
          className="absolute left-3 -top-2 px-1 bg-[#F7F8FA] text-[11px] font-semibold text-popx-primary z-10 flex items-center leading-none"
        >
          <span className="text-popx-primary opacity-90">{label}</span>
          {required && <span className="text-red-500 ml-0.5 font-bold">*</span>}
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
          error ? 'border-red-500' : 'border-[#D8DADC] focus:border-popx-primary focus:ring-1 focus:ring-popx-primary'
        } rounded-lg text-[13px] text-[#1D2229] font-medium placeholder-gray-400 focus:outline-none transition-all duration-200`}
        {...props}
      />
      {error && <span className="text-xs text-red-500 mt-1 block pl-1">{error}</span>}
    </div>
  );
}
