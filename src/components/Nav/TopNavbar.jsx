import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/Logo';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import ButtonSecondary from '../Buttons/ButtonSecondary';

export default function TopNavbar({ handleLoginClick }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-8 flex justify-between items-center transition-all duration-300 ${
      scrollPosition > 50 ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <a className="flex items-center" href="/">
        <Logo className="h-10" />
      </a>
      <div className="hidden md:flex items-center space-x-10">
        <ul className="flex items-center space-x-8">
          <li>
            <a href="#home" className={`font-medium hover:text-blue-600 transition-colors duration-300 ${
              scrollPosition > 50 ? 'text-gray-800' : 'text-white'
            }`}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" className={`font-medium hover:text-blue-600 transition-colors duration-300 ${
              scrollPosition > 50 ? 'text-gray-800' : 'text-white'
            }`}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" className={`font-medium hover:text-blue-600 transition-colors duration-300 ${
              scrollPosition > 50 ? 'text-gray-800' : 'text-white'
            }`}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" className={`font-medium hover:text-blue-600 transition-colors duration-300 ${
              scrollPosition > 50 ? 'text-gray-800' : 'text-white'
            }`}>
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <ButtonSecondary onClick={handleLoginClick}>Log In</ButtonSecondary>
          <Link to="/signup">
            <ButtonPrimary>Sign Up</ButtonPrimary>
          </Link>
        </div>
      </div>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden text-gray-800"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-5">
          <ul className="flex flex-col space-y-4">
            <li>
              <a 
                href="#home" 
                className="font-medium text-gray-800 hover:text-blue-600 block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className="font-medium text-gray-800 hover:text-blue-600 block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="font-medium text-gray-800 hover:text-blue-600 block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="font-medium text-gray-800 hover:text-blue-600 block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            <li className="pt-4">
              <ButtonSecondary onClick={() => { handleLoginClick(); setMobileMenuOpen(false); }} className="w-full">Log In</ButtonSecondary>
            </li>
            <li>
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                <ButtonPrimary className="w-full">Sign Up</ButtonPrimary>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
