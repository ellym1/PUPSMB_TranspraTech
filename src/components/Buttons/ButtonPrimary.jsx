import React from 'react';

export default function ButtonPrimary({ children, className = "" }) {
  return (
    <button 
      className={`py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}