import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceHero from '@/components/ServiceHero';
import ServiceIntroduction from '@/components/ServiceIntroduction';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceGallery from '@/components/ServiceGallery';
import ServiceTestimonials from '@/components/ServiceTestimonials';
import ServiceCta from '@/components/ServiceCta';

const JetHire = () => {
  // Features data
  const features = [
    {
      id: 'feature-1',
      title: 'Global Access',
      description: 'Fly to over 5,000 airports worldwide, including private airfields inaccessible to commercial flights for maximum convenience.',
    },
    {
      id: 'feature-2',
      title: 'Fleet Diversity',
      description: 'Access to a wide range of aircraft, from light jets for short trips to long-range luxury aircraft for intercontinental travel.',
    },
    {
      id: 'feature-3',
      title: 'Custom Catering',
      description: 'Personalized in-flight dining experiences with gourmet meals prepared according to your preferences and dietary requirements.',
    },
    {
      id: 'feature-4',
      title: 'Ground Transportation',
      description: 'Seamless connections with our luxury car service for complete transportation from door to door, anywhere in the world.',
    },
    {
      id: 'feature-5',
      title: 'Flexible Scheduling',
      description: 'Departures on your timeline with the ability to modify flight plans, even at short notice, to accommodate changing needs.',
    },
    {
      id: 'feature-6',
      title: 'Concierge Services',
      description: 'Comprehensive travel assistance including accommodations, restaurant reservations, event access, and personalized experiences.',
    },
  ];

  // Gallery images
  const galleryImages = [
    {
      id: 'gallery-1',
      src: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070',
      alt: 'Private jet interior',
      caption: 'Luxurious cabin interior with premium seating'
    },
    {
      id: 'gallery-2',
      src: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070',
      alt: 'Business jet exterior',
      caption: 'Mid-size business jet for comfortable regional travel'
    },
    {
      id: 'gallery-3',
      src: 'https://images.unsplash.com/photo-1575039303300-6b4ddefb29ae?q=80&w=2070',
      alt: 'Private jet cabin',
      caption: 'Spacious main cabin configured for executive meetings'
    },
    {
      id: 'gallery-4',
      src: 'https://images.unsplash.com/photo-1625242661157-e9c40d6e11f5?q=80&w=2071',
      alt: 'In-flight dining',
      caption: 'Gourmet catering options for in-flight dining'
    },
    {
      id: 'gallery-5',
      src: 'https://images.unsplash.com/photo-1583366753992-5361fc12c885?q=80&w=2070',
      alt: 'Private terminal',
      caption: 'Exclusive private terminal facilities for discreet departures'
    },
    {
      id: 'gallery-6',
      src: 'https://images.unsplash.com/photo-1626465609899-3293bf0e3427?q=80&w=2070',
      alt: 'Long range jet',
      caption: 'Long-range executive jet for intercontinental travel'
    },
    {
      id: 'gallery-7',
      src: 'https://images.unsplash.com/photo-1567581226647-c1a40f07f8f5?q=80&w=2067',
      alt: 'Jet boarding',
      caption: 'Direct ramp access for convenient boarding'
    },
    {
      id: 'gallery-8',
      src: 'https://images.unsplash.com/photo-1626455613844-c25c1a71b1c3?q=80&w=2070',
      alt: 'Luxury jet bedroom',
      caption: 'Private bedroom suite on long-range aircraft'
    },
    {
      id: 'gallery-9',
      src: 'https://images.unsplash.com/photo-1624494243817-442226252967?q=80&w=2073',
      alt: 'Helicopter transfer',
      caption: 'Helicopter transfers available for ultimate convenience'
    },
    {
      id: 'gallery-10',
      src: 'https://images.unsplash.com/photo-1593456026758-da69e1e1a0bd?q=80&w=2070',
      alt: 'In-flight entertainment',
      caption: 'State-of-the-art entertainment systems'
    },
    {
      id: 'gallery-11',
      src: 'https://images.unsplash.com/photo-1571543403674-42adbf05be5c?q=80&w=2072',
      alt: 'Light jet',
      caption: 'Light jet option for efficient short-range travel'
    },
    {
      id: 'gallery-12',
      src: 'https://images.unsplash.com/photo-1628502893025-29bf8100ce1b?q=80&w=2070',
      alt: 'Runway takeoff',
      caption: 'Experience the luxury of departure on your schedule'
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 'testimonial-1',
      content: "Mio's Jet Charter service has transformed the way our executive team travels. The time saved and privacy afforded has measurably improved our productivity and deal-making capacity.",
      author: "Elizabeth Morgan",
      position: "Chief Executive Officer",
      company: "Global Ventures Ltd.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200"
    },
    {
      id: 'testimonial-2',
      content: "My family and I have used Mio's for several vacation trips, and the experience has been flawless each time. The ability to bring our pets and depart on our own schedule has eliminated travel stress completely.",
      author: "Richard Hanson",
      position: "Private Client",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
    },
    {
      id: 'testimonial-3',
      content: "When my commercial flight was canceled last-minute before a critical meeting, Mio's arranged a private jet within hours. Their responsiveness in emergency situations is unparalleled and saved our acquisition deal.",
      author: "Christina Wu",
      position: "Investment Director",
      company: "Meridian Capital",
      avatar: "https://images.unsplash.com/photo-1554727242-741c14fa561c?q=80&w=200"
    },
    {
      id: 'testimonial-4',
      content: "For our international tour, Mio's coordinated complex travel between multiple cities with changing schedules. Their flexibility and attention to our specific needs made all the difference.",
      author: "Marcus Rivera",
      position: "Tour Manager",
      company: "Platinum Entertainment",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200"
    },
  ];

  return (
    <ServiceLayout>
      <ServiceHero
        title="Private Jet Charter"
        subtitle="Experience the ultimate in travel luxury with our premium private aviation services"
        backgroundImage="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070"
      />
      
      <ServiceIntroduction
        description={
          <>
            <p className="text-gray-600 mb-4">
              Mio's Private Jet Charter offers unparalleled convenience, comfort, and flexibility for discerning travelers. We provide access to an extensive global network of premium aircraft, allowing you to travel on your schedule to destinations worldwide, including those not served by commercial airlines.
            </p>
            <p className="text-gray-600">
              Our service transcends traditional air travel with personalized attention to every detail of your journey. From custom catering and specialized cabin configurations to ground transportation and destination arrangements, we curate a seamless travel experience tailored precisely to your requirements. Experience the freedom of private aviation with the assurance of our commitment to safety, discretion, and exceptional service.
            </p>
          </>
        }
        image="https://images.unsplash.com/photo-1575039303300-6b4ddefb29ae?q=80&w=2070"
        imageAlt="Luxurious private jet interior"
        buttonText="Check Jet Availability"
        buttonLink="/contact"
      />
      
      <ServiceFeatures
        title="Premium Aviation Services"
        subtitle="Discover the exclusive benefits and features of our private jet charter offerings"
        features={features}
      />
      
      <ServiceGallery
        title="Private Aviation Gallery"
        subtitle="Explore the luxury and convenience of our private jet charter services"
        images={galleryImages}
      />
      
      <ServiceTestimonials
        testimonials={testimonials}
      />
      
      <ServiceCta
        title="Ready for Elevated Travel?"
        description="Contact our aviation specialists to discuss your private jet requirements and experience travel without compromise."
        primaryButtonText="Request a Quote"
        primaryButtonLink="/book?service=jet-hire"
        secondaryButtonText="Learn About Membership"
        secondaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1559060615-2d831388105d?q=80&w=2071"
      />
    </ServiceLayout>
  );
};

export default JetHire;
