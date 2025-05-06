
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceHero from '@/components/ServiceHero';
import ServiceIntroduction from '@/components/ServiceIntroduction';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceGallery from '@/components/ServiceGallery';
import ServiceTestimonials from '@/components/ServiceTestimonials';
import ServiceCta from '@/components/ServiceCta';

const PropertyManagement = () => {
  // Features data
  const features = [
    {
      id: 'feature-1',
      title: 'Full-Service Management',
      description: 'End-to-end property management including tenant screening, rent collection, maintenance coordination, and financial reporting.',
    },
    {
      id: 'feature-2',
      title: 'Investment Analysis',
      description: 'Expert assessment of property performance and market conditions to optimize returns and inform investment decisions.',
    },
    {
      id: 'feature-3',
      title: 'Marketing & Leasing',
      description: 'Strategic property marketing, professional showings, and thorough tenant screening to minimize vacancies and secure quality tenants.',
    },
    {
      id: 'feature-4',
      title: 'Financial Management',
      description: 'Comprehensive accounting services including rent collection, expense management, and detailed financial reporting and analysis.',
    },
    {
      id: 'feature-5',
      title: 'Property Inspections',
      description: 'Regular scheduled inspections to maintain property condition, ensure tenant compliance, and identify maintenance needs.',
    },
    {
      id: 'feature-6',
      title: 'Legal Compliance',
      description: 'Management of all legal requirements including lease agreements, local regulations, eviction proceedings, and safety compliance.',
    },
  ];

  // Gallery images
  const galleryImages = [
    {
      id: 'gallery-1',
      src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2070',
      alt: 'Property manager and client',
      caption: 'Personalized property management consultation'
    },
    {
      id: 'gallery-2',
      src: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073',
      alt: 'Luxury apartment building',
      caption: 'Multi-unit residential property management'
    },
    {
      id: 'gallery-3',
      src: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070',
      alt: 'Property inspection',
      caption: 'Thorough property inspection process'
    },
    {
      id: 'gallery-4',
      src: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070',
      alt: 'Property maintenance',
      caption: 'Professional property maintenance coordination'
    },
    {
      id: 'gallery-5',
      src: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=2070',
      alt: 'Financial analysis',
      caption: 'Detailed financial reporting and analysis'
    },
    {
      id: 'gallery-6',
      src: 'https://images.unsplash.com/photo-1600607686527-dca0ca9b7e2e?q=80&w=2072',
      alt: 'Property showing',
      caption: 'Professional property showings for prospective tenants'
    },
    {
      id: 'gallery-7',
      src: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?q=80&w=2073',
      alt: 'Commercial property',
      caption: 'Commercial property management services'
    },
    {
      id: 'gallery-8',
      src: 'https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=2070',
      alt: 'Digital property management',
      caption: 'Advanced property management technology platform'
    },
    {
      id: 'gallery-9',
      src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070',
      alt: 'Property repairs',
      caption: 'Responsive maintenance and repair coordination'
    },
    {
      id: 'gallery-10',
      src: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2070',
      alt: 'Market research',
      caption: 'Market analysis and investment strategy'
    },
    {
      id: 'gallery-11',
      src: 'https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=2070',
      alt: 'Tenant screening',
      caption: 'Comprehensive tenant screening process'
    },
    {
      id: 'gallery-12',
      src: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=2070',
      alt: 'Property documentation',
      caption: 'Detailed documentation and record keeping'
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 'testimonial-1',
      content: "Switching to Mio's Property Management has been transformative for our investment portfolio. Their proactive approach has increased our rental income by 15% while reducing vacancy periods to almost zero.",
      author: "Michael Harrison",
      position: "Real Estate Investor",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=200"
    },
    {
      id: 'testimonial-2',
      content: "As an overseas investor, I needed a property management company I could trust completely. Mio's detailed reporting, transparent practices, and excellent communication give me complete peace of mind despite being thousands of miles away.",
      author: "Sophia Chen",
      position: "International Property Owner",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200"
    },
    {
      id: 'testimonial-3',
      content: "The legal expertise at Mio's has been invaluable in navigating complex tenant issues and local regulations. Their knowledge prevented what could have been a costly legal dispute and protected our investment.",
      author: "James Wilson",
      position: "Property Portfolio Manager",
      company: "Wilson Investments",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
    },
    {
      id: 'testimonial-4',
      content: "Mio's property management team helped us transition our long-term rental to a vacation property. Their market analysis, pricing strategy, and management execution resulted in revenue that exceeded our expectations by 30%.",
      author: "Elena Rodriguez",
      position: "Vacation Property Owner",
      avatar: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=200"
    },
  ];

  return (
    <ServiceLayout>
      <ServiceHero
        title="Property Management"
        subtitle="Professional management solutions to maximize your property's potential and investment returns"
        backgroundImage="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2070"
      />
      
      <ServiceIntroduction
        description={
          <>
            <p className="text-gray-600 mb-4">
              Mio's Property Management delivers comprehensive management solutions designed to optimize your property investment while eliminating the stress of day-to-day management responsibilities. Our expertise spans residential, commercial, and vacation properties, with specialized strategies for each property type and market.
            </p>
            <p className="text-gray-600">
              We combine industry experience with innovative technology to provide seamless management services that enhance property performance, maintain asset value, and create exceptional experiences for tenants and guests. Our full-service approach covers everything from marketing and tenant relations to maintenance coordination and financial management, allowing you to enjoy the benefits of property ownership without the demands of hands-on management.
            </p>
          </>
        }
        image="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073"
        imageAlt="Professional property management"
      />
      
      <ServiceFeatures
        title="Comprehensive Management Services"
        subtitle="Explore our complete range of property management solutions"
        features={features}
      />
      
      <ServiceGallery
        title="Property Management Showcase"
        subtitle="View examples of our professional property management services in action"
        images={galleryImages}
      />
      
      <ServiceTestimonials
        testimonials={testimonials}
      />
      
      <ServiceCta
        title="Ready to Optimize Your Property Investment?"
        description="Contact us today for a property evaluation and discover how our management services can enhance your returns."
        primaryButtonText="Request Consultation"
        primaryButtonLink="/book?service=property-management"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073"
      />
    </ServiceLayout>
  );
};

export default PropertyManagement;
