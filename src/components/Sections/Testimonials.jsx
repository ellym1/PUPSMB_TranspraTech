import React from 'react';

function TestimonialCard({ name, position, company, content, image }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
      <div className="flex items-center mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-lg text-gray-800">{name}</h4>
          <p className="text-gray-500">{position}, {company}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{content}"</p>
      <div className="mt-6 flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg 
            key={star}
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-yellow-400" 
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about 
            TransparaTech's transparent approach to technology solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Sarah Johnson"
            position="CTO"
            company="InnovateCorp"
            content="TransparaTech transformed our data processing systems with complete transparency. They explained every step of the implementation, and we finally understand the technology we're using."
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
          />
          
          <TestimonialCard 
            name="Michael Chen"
            position="Director of Operations"
            company="GlobalTech"
            content="We've worked with many IT consultants, but TransparaTech stands out for their clear communication and transparency. No more hidden fees or unexplained processes."
            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
          />
          
          <TestimonialCard 
            name="Amanda Rodriguez"
            position="CEO"
            company="StartupVision"
            content="As a non-technical founder, I was worried about working with tech consultants. TransparaTech made everything accessible and clear, empowering me to make informed decisions."
            image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
          />
        </div>
      </div>
    </section>
  );
}