import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceHero from '@/components/ServiceHero';
import ServiceIntroduction from '@/components/ServiceIntroduction';
import ServiceCta from '@/components/ServiceCta';
import FacilityFeatures from '@/components/FacilityManagement/FacilityFeatures';
import FacilityArtisans from '@/components/FacilityManagement/FacilityArtisans';
import FacilityTestimonials from '@/components/FacilityManagement/FacilityTestimonials';

const FacilityManagement = () => {
  return (
    <ServiceLayout>
      <ServiceHero
        title="Facility Management"
        subtitle="Comprehensive solutions for property maintenance, management, and facility support"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
      />
      
      <ServiceIntroduction
        description={
          <>
            <p className="text-gray-600 mb-4">
              Mio's Facility Management delivers integrated solutions that enhance your property's functionality, value, and operational efficiency. We combine our expertise in maintenance, property management, and facility support to provide a comprehensive service that meets the unique needs of various facilities—from residential buildings and commercial offices to hotels, retail spaces, government buildings, and healthcare facilities.
            </p>
            <p className="text-gray-600">
              Our team of professionals handles everything from routine maintenance and emergency repairs to tenant relations, financial management, and building systems oversight. We utilize innovative technology and proven processes to optimize operations, reduce costs, and ensure that your property remains in optimal condition while delivering exceptional experiences for occupants and visitors alike.
            </p>
          </>
        }
        image="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073"
        imageAlt="Professional facility management"
        buttonText="Request Facility Support"
        buttonLink="/contact"
      />
      
      <FacilityFeatures />
      
      <FacilityArtisans />
      
      <FacilityTestimonials />
      
      <ServiceCta
        title="Optimize Your Facility Operations"
        description="Contact us today to discover how our facility management services can enhance efficiency and reduce operational costs."
        primaryButtonText="Request Assessment"
        primaryButtonLink="/book?service=facility-management"
        secondaryButtonText="View Our Artisans"
        secondaryButtonLink="/artisans"
        backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070"
      />
    </ServiceLayout>
  );
};

export default FacilityManagement;
