import React from 'react';

export default function ButtonSecondary({ children, className = "", border = true }) {
  return (
    <button 
      className={`py-3 px-6 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-full transition-all duration-300 ${border ? "border border-blue-600" : ""} ${className}`}
    >
      {children}
    </button>
  );
}