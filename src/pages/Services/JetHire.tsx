
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceHero from '@/components/ServiceHero';
import ServiceIntroduction from '@/components/ServiceIntroduction';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceGallery from '@/components/ServiceGallery';
import ServiceTestimonials from '@/components/ServiceTestimonials';
import ServiceCta from '@/components/ServiceCta';
import { Plane } from 'lucide-react';

const JetHire = () => {
  // Features data
  const features = [
    {
      id: "feature-1",
      title: "Elite Aircraft Fleet",
      description: "Access to premium private jets for domestic and international travel.",
      icon: <Plane className="h-12 w-12 text-wine-500" />
    },
    {
      id: "feature-2",
      title: "Bespoke Itineraries",
      description: "Customized flight plans tailored to your specific travel needs.",
      icon: <Plane className="h-12 w-12 text-wine-500" />
    },
    {
      id: "feature-3",
      title: "Luxury Amenities",
      description: "Gourmet catering, premium beverages, and exceptional in-flight service.",
      icon: <Plane className="h-12 w-12 text-wine-500" />
    },
    {
      id: "feature-4",
      title: "Concierge Service",
      description: "Ground transportation, accommodation, and activity arrangements.",
      icon: <Plane className="h-12 w-12 text-wine-500" />
    }
  ];

  // Gallery images
  const galleryImages = [
    { 
      id: "gallery-1",
      src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070",
      alt: "Private Jet Exterior",
      caption: "Luxury private jets for any destination"
    },
    { 
      id: "gallery-2",
      src: "https://images.unsplash.com/photo-1583440302929-af1e521e434f?q=80&w=2070",
      alt: "Luxury Jet Interior",
      caption: "Opulent interiors for maximum comfort"
    },
    { 
      id: "gallery-3",
      src: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=2071",
      alt: "Private Jet on Runway",
      caption: "Ready for departure at a moment's notice"
    },
    { 
      id: "gallery-4",
      src: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070",
      alt: "Private jet in flight",
      caption: "Experience the freedom of private aviation"
    },
    { 
      id: "gallery-5",
      src: "https://images.unsplash.com/photo-1626491902584-cfa289bd6cce?q=80&w=2070",
      alt: "Jet interior with catering",
      caption: "Gourmet catering and premium amenities"
    },
    { 
      id: "gallery-6",
      src: "https://images.unsplash.com/photo-1608236497639-30e3eeab079c?q=80&w=2070",
      alt: "Aircraft cabin",
      caption: "Spacious cabins for business or leisure"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: "testimonial-1",
      content: "The private jet service was impeccable. From the personalized catering to the attentive crew, every detail was perfect.",
      author: "Richard Thompson",
      position: "CEO",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
    },
    {
      id: "testimonial-2",
      content: "Being able to fly directly to my destination without the hassle of commercial travel saved me countless hours and stress.",
      author: "Amanda Chen",
      position: "Executive",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
    },
    {
      id: "testimonial-3",
      content: "The level of luxury and convenience exceeded my expectations. This is how travel should be.",
      author: "Jonathan Miller",
      position: "Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
    },
    {
      id: "testimonial-4",
      content: "For our family vacation, the private jet experience made all the difference. No airport lines, no delays, just pure convenience.",
      author: "Sophia Williams",
      position: "Family Traveler",
      avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=200"
    }
  ];

  return (
    <ServiceLayout>
      <ServiceHero 
        title="Private Jet Charter" 
        subtitle="Experience the pinnacle of luxury air travel"
        backgroundImage="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070"
      />
      
      <ServiceIntroduction 
        description={
          <>
            <p className="text-gray-600 mb-4">
              Our private jet charter service offers unparalleled convenience, comfort, and privacy for both business and leisure travel. With access to a fleet of world-class aircraft and a team dedicated to exceeding your expectations, we transform your journey into an extraordinary experience.
            </p>
            <p className="text-gray-600">
              From light jets for short trips to long-range aircraft for international journeys, our diverse fleet ensures we have the perfect aircraft for your specific requirements. Enjoy the freedom to create your own schedule, access smaller airports closer to your final destination, and travel with complete privacy.
            </p>
          </>
        }
        image="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070"
        imageAlt="Private jet charter"
      />
      
      <ServiceFeatures 
        title="Our Jet Charter Services"
        subtitle="Elevating your travel experience to new heights"
        features={features}
        darkMode={true}
      />
      
      <ServiceGallery 
        title="Private Jet Gallery"
        subtitle="Glimpse into our world of luxury aviation"
        images={galleryImages}
      />
      
      <ServiceTestimonials 
        testimonials={testimonials}
        darkMode={true}
      />
      
      <ServiceCta 
        title="Ready to Elevate Your Travel Experience?"
        description="Book your private jet charter today and enjoy the freedom, flexibility, and luxury of private aviation."
        primaryButtonText="Charter Now"
        primaryButtonLink="/book?service=jet-hire"
        secondaryButtonText="View Jets"
        secondaryButtonLink="/jets"
        backgroundImage="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070"
      />
    </ServiceLayout>
  );
};

export default JetHire;
