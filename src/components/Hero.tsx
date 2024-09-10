import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-96 flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Digital Footprint"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Manage Your Digital Footprint</h1>
        <p className="text-xl mb-8">Take control of your online presence and protect your digital identity</p>
        <a href="#what-is" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;