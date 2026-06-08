import React from 'react';

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className = '',
  ...props
}) {
  const baseClasses = 'w-full py-3.5 px-4 rounded-lg font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-popx-primary focus:ring-offset-2 text-center flex items-center justify-center';

  const variantClasses = {
    primary: 'bg-popx-primary hover:bg-[#581cdb] text-white active:scale-[0.99]',
    secondary: 'bg-[#DDD6FE] hover:bg-[#C7D2FE] text-popx-dark text-[#1F1A3A] active:scale-[0.99]',
    disabled: 'bg-[#CBCBCB] text-white cursor-not-allowed',
  };

  const selectedVariant = disabled ? 'disabled' : variant;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || selectedVariant === 'disabled'}
      className={`${baseClasses} ${variantClasses[selectedVariant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
