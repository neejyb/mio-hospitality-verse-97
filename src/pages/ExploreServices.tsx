
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceHero from '@/components/ServiceHero';
import ServiceIntroduction from '@/components/ServiceIntroduction';
import ServiceCta from '@/components/ServiceCta';
import ServiceFeatures from '@/components/ServiceFeatures';
import WhatsAppCTA from '@/components/WhatsAppCTA';

const ExploreServices = () => {
  const serviceCategories = [
    {
      id: 'hotels-guesthouses',
      title: 'Hotels & Guesthouses',
      description: 'Plumbing, electrical work, AC support, and light repairs for seamless guest experiences and operational excellence.',
    },
    {
      id: 'offices',
      title: 'Offices (Private & Shared)',
      description: 'Lighting fixes, outlet repairs, HVAC support, and general handyman services for productive workspaces.',
    },
    {
      id: 'residential-homes',
      title: 'Residential Homes',
      description: 'Local plumbers, electricians, AC repairers, and cleaning services for comfortable living environments.',
    },
    {
      id: 'airbnb-shortlets',
      title: 'Airbnb & Shortlets',
      description: 'Quick fixes for guest turnover, repairs, and deep cleaning to maintain 5-star ratings and bookings.',
    },
    {
      id: 'event-venues',
      title: 'Event Venues',
      description: 'On-demand handy crew for setup, takedown, and urgent fixes during events and celebrations.',
    },
    {
      id: 'retail-spaces',
      title: 'Shops & Retail Spaces',
      description: 'Minor fixes, light installations, and routine maintenance for smooth business operations.',
    },
    {
      id: 'government-institutional',
      title: 'Government/Institutional Spaces',
      description: 'Light facility work by verified artisans including fittings, repairs, and maintenance services.',
    }
  ];

  return (
    <ServiceLayout>
      <ServiceHero
        title="Explore Our Services"
        subtitle="Reliable handyman support for homes, offices, shortlets, and more"
        backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=6000"
      />
      
      <ServiceIntroduction
        description={
          <>
            <p className="text-gray-600 mb-4">
              Mio's comprehensive service network connects you with trusted local artisans across various property types and facilities. From residential homes to commercial offices, hospitality venues to retail spaces, we provide reliable maintenance and repair solutions tailored to your specific needs.
            </p>
            <p className="text-gray-600">
              Our verified professionals handle everything from emergency repairs to routine maintenance, ensuring your properties remain in optimal condition while delivering exceptional experiences for occupants, guests, and customers. With 24/7 availability and transparent pricing, we're your trusted partner for all facility support needs.
            </p>
          </>
        }
        image="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073"
        imageAlt="Professional artisan services"
        primaryButtonText="Book a Service"
        primaryButtonLink="/book"
        secondaryButtonText="View All Artisans"
        secondaryButtonLink="/artisans"
      />
      
      <ServiceFeatures
        title="Property Types We Support"
        subtitle="Professional artisan services tailored for different types of properties and facilities"
        features={serviceCategories}
      />
      
      <ServiceCta
        title="Ready to Connect with Trusted Artisans?"
        description="Browse our network of verified professionals and book the services you need today."
        primaryButtonText="Book a Service Now"
        primaryButtonLink="/book"
        secondaryButtonText="View All Artisans"
        secondaryButtonLink="/artisans"
        backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070"
      />
      
      <WhatsAppCTA />
    </ServiceLayout>
  );
};

export default ExploreServices;
