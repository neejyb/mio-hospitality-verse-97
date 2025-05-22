
import React from 'react';

const ArtisanHero: React.FC = () => {
  return (
    <section className="relative bg-[#1A1A1A] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Facility Artisans</h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover our network of expert artisans specializing in all aspects of facility management and maintenance. Every professional is vetted, experienced, and ready to deliver exceptional service.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default ArtisanHero;
