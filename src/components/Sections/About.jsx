import React from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import ButtonSecondary from '../Buttons/ButtonSecondary';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="/about-image.jpg" 
              alt="TransparaTech Team" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About TransparaTech
            </h2>
            
            <p className="text-gray-600 mb-6">
              Founded in 2020, TransparaTech was born from a simple idea: technology should be transparent, 
              understandable, and accessible to everyone. We believe that technology solutions shouldn't 
              feel like black boxes - our clients deserve to understand what they're investing in.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our team of experts is passionate about demystifying complex technology and creating 
              solutions that are not only powerful but also transparent in their operation and value. 
              Whether it's custom software development, data analytics, or cloud solutions, we approach 
              each project with clarity and open communication.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Core Values</h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Transparency in all our processes and communication</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Innovation that solves real-world problems</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Accessibility for users of all technical backgrounds</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Excellence in every aspect of our work</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <ButtonPrimary>Our Team</ButtonPrimary>
              <ButtonSecondary>Company History</ButtonSecondary>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}