import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <svg 
      className={`${className}`} 
      width="150" 
      height="40" 
      viewBox="0 0 150 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M23.5 7H26.5L23.5 0H16.5L13.5 7H16.5L13.5 14H16.5L13.5 21H16.5L13.5 28H16.5L13.5 35H20.5L23.5 28H20.5L23.5 21H20.5L23.5 14H20.5L23.5 7Z" 
        fill="#0065BD"
      />
      <text 
        x="35" 
        y="23" 
        fontFamily="Arial, sans-serif" 
        fontSize="18" 
        fontWeight="bold" 
        fill="#0065BD"
      >
        TransparaTech
      </text>
    </svg>
  );
};

export default Logo;