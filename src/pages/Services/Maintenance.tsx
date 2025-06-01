
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceHero from '@/components/ServiceHero';
import ServiceIntroduction from '@/components/ServiceIntroduction';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceGallery from '@/components/ServiceGallery';
import ServiceTestimonials from '@/components/ServiceTestimonials';
import ServiceCta from '@/components/ServiceCta';
import WhatsAppCTA from '@/components/WhatsAppCTA';

const Maintenance = () => {
  // Features data
  const features = [
    {
      id: 'feature-1',
      title: 'Regular Inspections',
      description: 'Comprehensive property checks to identify and address issues before they become costly problems, preserving your investment.',
    },
    {
      id: 'feature-2',
      title: 'Emergency Response',
      description: '24/7 support for urgent maintenance issues with rapid response teams ready to resolve problems at any hour.',
    },
    {
      id: 'feature-3',
      title: 'Seasonal Maintenance',
      description: 'Scheduled seasonal services including HVAC servicing, gutter cleaning, weatherproofing, and landscape preparation.',
    },
    {
      id: 'feature-4',
      title: 'Renovation Services',
      description: 'Complete renovation and updating solutions to enhance property value and appeal, from minor refreshes to major overhauls.',
    },
    {
      id: 'feature-5',
      title: 'Specialized Services',
      description: 'Expert care for unique features like pools, spas, smart home systems, luxury appliances, and custom installations.',
    },
    {
      id: 'feature-6',
      title: 'Preventative Programs',
      description: 'Customized maintenance programs designed to prevent issues and maintain optimal condition of all property systems.',
    },
  ];

  const galleryImages = [
    {
      id: 'gallery-1',
      src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069',
      alt: 'Professional maintenance technician',
      caption: 'Expert technicians with specialized training'
    },
    {
      id: 'gallery-2',
      src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070',
      alt: 'Plumbing repair',
      caption: 'Professional plumbing services and repairs'
    },
    {
      id: 'gallery-3',
      src: 'https://images.unsplash.com/photo-1613323593608-abc90fec84ff?q=80&w=2070',
      alt: 'Electrical maintenance',
      caption: 'Certified electrical system maintenance and upgrades'
    },
    {
      id: 'gallery-4',
      src: 'https://images.unsplash.com/photo-1584622816228-7a21c2f605a2?q=80&w=2070',
      alt: 'HVAC servicing',
      caption: 'Comprehensive HVAC system maintenance'
    },
    {
      id: 'gallery-5',
      src: 'https://images.unsplash.com/photo-1604754742629-3e0474ce5927?q=80&w=2070',
      alt: 'Interior painting',
      caption: 'Professional interior painting and finishing'
    },
    {
      id: 'gallery-6',
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070',
      alt: 'Property cleaning',
      caption: 'Deep cleaning and property refreshing'
    },
    {
      id: 'gallery-7',
      src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070',
      alt: 'Kitchen appliance repair',
      caption: 'Luxury appliance maintenance and repair'
    },
    {
      id: 'gallery-8',
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074',
      alt: 'Home inspection',
      caption: 'Detailed property inspection and reporting'
    },
    {
      id: 'gallery-9',
      src: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=2073',
      alt: 'Pool maintenance',
      caption: 'Swimming pool and water feature maintenance'
    },
    {
      id: 'gallery-10',
      src: 'https://images.unsplash.com/photo-1608613304899-ea8098577e38?q=80&w=2069',
      alt: 'Smart home systems',
      caption: 'Smart home system installation and servicing'
    },
    {
      id: 'gallery-11',
      src: 'https://images.unsplash.com/photo-1527131113603-7922e9379f17?q=80&w=2070',
      alt: 'Landscape maintenance',
      caption: 'Professional landscape care and maintenance'
    },
    {
      id: 'gallery-12',
      src: 'https://images.unsplash.com/photo-1632149877166-f75d49000351?q=80&w=2064',
      alt: 'Emergency repair',
      caption: '24/7 emergency maintenance response'
    },
  ];

  const testimonials = [
    {
      id: 'testimonial-1',
      content: "Mio's maintenance team has been servicing our vacation property for three years. Their attention to detail and proactive approach has prevented several potential issues and kept our home in perfect condition for both our stays and rental guests.",
      author: "Rebecca Anderson",
      position: "Property Owner",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200"
    },
    {
      id: 'testimonial-2',
      content: "When a pipe burst at 2:00 AM in our rental property, Mio's emergency team arrived within 30 minutes. They not only fixed the issue but handled the entire water damage restoration process seamlessly. Their rapid response saved us thousands in potential damages.",
      author: "Carlos Menendez",
      position: "Investment Property Manager",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200"
    },
    {
      id: 'testimonial-3',
      content: "We contracted Mio's for a complete bathroom renovation in our rental units, and they delivered exceptional quality on time and within budget. The upgraded bathrooms have significantly increased our rental income and guest satisfaction ratings.",
      author: "Lisa Zhang",
      position: "Boutique Hotel Owner",
      avatar: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?q=80&w=200"
    },
    {
      id: 'testimonial-4',
      content: "The seasonal maintenance program from Mio's has simplified property ownership for me. Their thorough approach and detailed reporting give me complete peace of mind while I'm away from my second home for most of the year.",
      author: "Thomas Wright",
      position: "International Homeowner",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
    },
  ];

  return (
    <ServiceLayout>
      <ServiceHero
        title="Property Maintenance Services"
        subtitle="Comprehensive maintenance solutions to protect and enhance your property investment"
        backgroundImage="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069"
      />
      
      <ServiceIntroduction
        description={
          <>
            <p className="text-gray-600 mb-4">
              Mio's Maintenance Services provides comprehensive property care solutions designed to preserve and enhance your real estate investment. Our team of skilled professionals handles everything from routine maintenance and emergency repairs to complete renovation projects, ensuring your property remains in optimal condition year-round.
            </p>
            <p className="text-gray-600">
              We understand that proper maintenance is crucial not only for protecting your investment but also for ensuring the comfort and satisfaction of occupants, whether they're long-term residents or short-term guests. Our proactive approach to property maintenance identifies potential issues before they become problematic, saving you time, money, and stress while extending the lifespan of your property's systems and structures.
            </p>
          </>
        }
        image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070"
        imageAlt="Professional maintenance service"
        reversed={true}
      />
      
      <ServiceFeatures
        title="Our Maintenance Solutions"
        subtitle="Comprehensive care for all aspects of your property's needs"
        features={features}
        darkMode={true}
      />
      
      <ServiceGallery
        title="Maintenance Portfolio"
        subtitle="View examples of our professional maintenance and renovation services"
        images={galleryImages}
      />
      
      <ServiceTestimonials
        testimonials={testimonials}
        darkMode={true}
      />
      
      <ServiceCta
        title="Keep Your Property in Perfect Condition"
        description="Contact us today to discuss your maintenance needs or to schedule a property assessment."
        primaryButtonText="Schedule Service"
        primaryButtonLink="/book?service=maintenance"
        secondaryButtonText="Request Inspection"
        secondaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070"
      />
      
      <WhatsAppCTA />
    </ServiceLayout>
  );
};

export default Maintenance;
