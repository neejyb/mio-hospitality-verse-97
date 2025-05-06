
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceHero from '@/components/ServiceHero';
import ServiceIntroduction from '@/components/ServiceIntroduction';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceGallery from '@/components/ServiceGallery';
import ServiceTestimonials from '@/components/ServiceTestimonials';
import ServiceCta from '@/components/ServiceCta';

const FacilitySupport = () => {
  // Features data
  const features = [
    {
      id: 'feature-1',
      title: 'Building Operations',
      description: 'Comprehensive management of building systems, equipment maintenance, and operational efficiency for optimal facility performance.',
    },
    {
      id: 'feature-2',
      title: 'Janitorial Services',
      description: 'Professional cleaning and sanitation to maintain pristine facility conditions that create positive impressions and healthy environments.',
    },
    {
      id: 'feature-3',
      title: 'Security Solutions',
      description: 'Tailored security services from personnel to advanced access control systems to protect your facility, assets, and occupants.',
    },
    {
      id: 'feature-4',
      title: 'Environmental Services',
      description: 'Sustainable facility management practices and energy optimization to reduce environmental impact and operating costs.',
    },
    {
      id: 'feature-5',
      title: 'Space Management',
      description: 'Strategic planning and optimization of facility space to enhance functionality, workflow, and occupant satisfaction.',
    },
    {
      id: 'feature-6',
      title: 'Event Support',
      description: 'Comprehensive logistical and technical support for facility events, from planning and setup to execution and breakdown.',
    },
  ];

  // Gallery images
  const galleryImages = [
    {
      id: 'gallery-1',
      src: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?q=80&w=2070',
      alt: 'Facility management team',
      caption: 'Professional facility management personnel'
    },
    {
      id: 'gallery-2',
      src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069',
      alt: 'Building maintenance',
      caption: 'Comprehensive building systems maintenance'
    },
    {
      id: 'gallery-3',
      src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070',
      alt: 'Technical repairs',
      caption: 'Expert technical systems repair'
    },
    {
      id: 'gallery-4',
      src: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070',
      alt: 'Janitorial services',
      caption: 'Professional cleaning and sanitation services'
    },
    {
      id: 'gallery-5',
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      alt: 'Commercial facility',
      caption: 'Commercial facility management'
    },
    {
      id: 'gallery-6',
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070',
      alt: 'Security systems',
      caption: 'Advanced security monitoring and control'
    },
    {
      id: 'gallery-7',
      src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070',
      alt: 'Office space management',
      caption: 'Strategic office space planning and optimization'
    },
    {
      id: 'gallery-8',
      src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069',
      alt: 'Building systems',
      caption: 'Building systems monitoring and maintenance'
    },
    {
      id: 'gallery-9',
      src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070',
      alt: 'Event setup',
      caption: 'Professional event space preparation and management'
    },
    {
      id: 'gallery-10',
      src: 'https://images.unsplash.com/photo-1527689368864-4dbcb132065c?q=80&w=2070',
      alt: 'Sustainable practices',
      caption: 'Implementing sustainable facility management practices'
    },
    {
      id: 'gallery-11',
      src: 'https://images.unsplash.com/photo-1556156653-e5a7c69cc263?q=80&w=2070',
      alt: 'Facility inspection',
      caption: 'Thorough facility inspection and reporting'
    },
    {
      id: 'gallery-12',
      src: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2070',
      alt: 'Facility analytics',
      caption: 'Data-driven facility management solutions'
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 'testimonial-1',
      content: "Since partnering with Mio's Facility Support, we've seen a 20% reduction in operational costs and significant improvements in building efficiency. Their proactive approach has transformed our facility management.",
      author: "Jennifer Blackwood",
      position: "Operations Director",
      company: "Global Commerce Center",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200"
    },
    {
      id: 'testimonial-2',
      content: "The transition to Mio's integrated facility services was seamless. Their team rapidly identified inefficiencies in our systems and implemented solutions that have improved both performance and occupant comfort.",
      author: "Robert Chen",
      position: "Building Manager",
      company: "Pinnacle Tower",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
    },
    {
      id: 'testimonial-3',
      content: "Mio's event support team has been instrumental in the success of our corporate functions. Their attention to detail, technical expertise, and ability to anticipate needs has made our events run flawlessly.",
      author: "Alicia Montgomery",
      position: "Events Coordinator",
      company: "Innovation Conference Center",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200"
    },
    {
      id: 'testimonial-4',
      content: "The security solutions provided by Mio's have significantly enhanced our facility's safety profile. Their integrated approach combining personnel, technology, and protocols has given us complete confidence in our security posture.",
      author: "Daniel Washington",
      position: "Security Director",
      company: "Metropolitan Business Complex",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
    },
  ];

  return (
    <ServiceLayout>
      <ServiceHero
        title="Facility Support Services"
        subtitle="Comprehensive facility management solutions to optimize operations and enhance occupant experience"
        backgroundImage="https://images.unsplash.com/photo-1588421357574-87938a86fa28?q=80&w=2070"
      />
      
      <ServiceIntroduction
        description={
          <>
            <p className="text-gray-600 mb-4">
              Mio's Facility Support delivers integrated management solutions that enhance your facility's functionality, efficiency, and occupant experience. We provide a comprehensive suite of services designed to optimize building operations, address maintenance needs promptly, and create environments that support organizational objectives.
            </p>
            <p className="text-gray-600">
              Our approach combines experienced personnel, innovative technology, and proven processes to deliver facility management that goes beyond standard maintenance. Whether you operate a commercial office building, hospitality venue, or institutional facility, our customized solutions address your specific needs while reducing operational costs and enhancing asset value.
            </p>
          </>
        }
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
        imageAlt="Professional facility management"
        reversed={true}
      />
      
      <ServiceFeatures
        title="Integrated Facility Services"
        subtitle="Our comprehensive range of facility support solutions"
        features={features}
        darkMode={true}
      />
      
      <ServiceGallery
        title="Facility Solutions Portfolio"
        subtitle="View examples of our professional facility management services"
        images={galleryImages}
      />
      
      <ServiceTestimonials
        testimonials={testimonials}
        darkMode={true}
      />
      
      <ServiceCta
        title="Optimize Your Facility Operations"
        description="Contact us today to discover how our facility support services can enhance efficiency and reduce operational costs."
        primaryButtonText="Request Assessment"
        primaryButtonLink="/book?service=facility-support"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
      />
    </ServiceLayout>
  );
};

export default FacilitySupport;
