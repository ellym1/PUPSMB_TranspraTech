import React from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import ButtonSecondary from '../Buttons/ButtonSecondary';

export default function Hero() {
  return (
    <section id="home" className="w-full flex flex-col md:flex-row items-center justify-center py-32 px-4 md:px-8 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-3/5 lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Making Technology <span className="text-blue-300">Transparent</span> & Accessible
          </h1>
          <p className="text-lg mb-10 max-w-lg">
            TransparaTech provides innovative technology solutions with transparency
            at the core of everything we do. Building a better future through accessible tech.
          </p>
          <div className="flex flex-wrap gap-4">
            <ButtonPrimary className="min-w-[150px]">Get Started</ButtonPrimary>
            <ButtonSecondary className="min-w-[150px] text-white border-white">Learn More</ButtonSecondary>
          </div>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img 
            src="/hero-image.png" 
            alt="TransparaTech Transparent Technology" 
            className="w-full max-w-lg object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}