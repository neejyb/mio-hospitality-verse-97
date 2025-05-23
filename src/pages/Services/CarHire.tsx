
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceHero from '@/components/ServiceHero';
import ServiceIntroduction from '@/components/ServiceIntroduction';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceGallery from '@/components/ServiceGallery';
import ServiceTestimonials from '@/components/ServiceTestimonials';
import ServiceCta from '@/components/ServiceCta';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';

const CarHire = () => {
  // Features data
  const features = [
    {
      id: "feature-1",
      title: "Premium Vehicle Selection",
      description: "Choose from our fleet of luxury and exotic cars for any occasion.",
      icon: <Car className="h-12 w-12 text-wine-500" />
    },
    {
      id: "feature-2",
      title: "Chauffeur Service",
      description: "Opt for our professional chauffeurs for a truly luxurious experience.",
      icon: <Car className="h-12 w-12 text-wine-500" />
    },
    {
      id: "feature-3",
      title: "Flexible Rental Options",
      description: "From hourly rentals to monthly leases, we offer options to suit your needs.",
      icon: <Car className="h-12 w-12 text-wine-500" />
    },
    {
      id: "feature-4",
      title: "Delivery & Pickup",
      description: "We deliver the vehicle to your location and pick it up when you're done.",
      icon: <Car className="h-12 w-12 text-wine-500" />
    }
  ];

  // Gallery images
  const galleryImages = [
    { 
      id: "gallery-1",
      src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070",
      alt: "Luxury Car on Road",
      caption: "Premium sports cars for an exceptional driving experience"
    },
    { 
      id: "gallery-2",
      src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070",
      alt: "Sports Car Interior",
      caption: "Luxurious interiors for maximum comfort"
    },
    { 
      id: "gallery-3",
      src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=2070",
      alt: "Car Keys Handover",
      caption: "Seamless rental experience from start to finish"
    },
    { 
      id: "gallery-4",
      src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070",
      alt: "Classic sports car on road",
      caption: "Experience the thrill of driving iconic vehicles"
    },
    { 
      id: "gallery-5",
      src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070",
      alt: "Luxury sedan",
      caption: "Elegant sedans for business and special occasions"
    },
    { 
      id: "gallery-6",
      src: "https://images.unsplash.com/photo-1560177112-fbfd5fde9566?q=80&w=2070",
      alt: "Luxury SUV",
      caption: "Premium SUVs for versatility and comfort"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: "testimonial-1",
      content: "The Porsche 911 I rented was the highlight of my weekend getaway. Impeccable service from start to finish.",
      author: "James Wilson",
      position: "Executive",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
    },
    {
      id: "testimonial-2",
      content: "Having a chauffeur drive us in the S-Class made our anniversary celebration truly special and memorable.",
      author: "Sarah & Michael",
      position: "Clients",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"
    },
    {
      id: "testimonial-3",
      content: "As a car enthusiast, I was impressed by the condition of the vehicle and the team's attention to detail.",
      author: "David Chen",
      position: "Car Collector",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
    },
    {
      id: "testimonial-4",
      content: "The convenience of having the car delivered directly to my hotel made my business trip so much smoother.",
      author: "Elizabeth Taylor",
      position: "Business Traveler",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
    }
  ];

  return (
    <ServiceLayout>
      <ServiceHero
        title="Luxury Car Hire"
        subtitle="Experience the thrill of driving the world's finest automobiles"
        backgroundImage="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070"
      />
      
      <ServiceIntroduction
        description={
          <>
            <p className="text-gray-600 mb-4">
              Our luxury car hire service offers you access to a curated collection of the world's most prestigious automobiles. Whether you're seeking the thrill of a high-performance sports car, the refinement of a luxury sedan, or the versatility of a premium SUV, our fleet caters to the most discerning tastes.
            </p>
            <p className="text-gray-600">
              Each vehicle in our collection is meticulously maintained to ensure an exceptional driving experience. From airport transfers and business travel to special occasions and weekend getaways, we provide the perfect vehicle paired with impeccable service.
            </p>
          </>
        }
        image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070"
        imageAlt="Luxury car rental"
      />
      
      <ServiceFeatures
        title="Our Car Hire Services"
        subtitle="Exceptional vehicles and service for every occasion"
        features={features}
        darkMode={true}
      />
      
      <ServiceGallery
        title="Luxury Fleet Gallery"
        subtitle="Browse our collection of premium vehicles"
        images={galleryImages}
      />
      
      <ServiceTestimonials
        testimonials={testimonials}
        darkMode={true}
      />
      
      <ServiceCta
        title="Ready to Experience Luxury on Wheels?"
        description="Book your premium vehicle today and make your journey as exceptional as your destination."
        primaryButtonText="Book Now"
        primaryButtonLink="/book?service=car-hire"
        secondaryButtonText="View Fleet"
        secondaryButtonLink="/fleet"
        backgroundImage="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=2070"
      />
    </ServiceLayout>
  );
};

export default CarHire;
