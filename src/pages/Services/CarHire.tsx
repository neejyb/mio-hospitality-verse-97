
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceHero from '@/components/ServiceHero';
import ServiceIntroduction from '@/components/ServiceIntroduction';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceGallery from '@/components/ServiceGallery';
import ServiceTestimonials from '@/components/ServiceTestimonials';
import ServiceCta from '@/components/ServiceCta';
import { Button } from '@/components/ui/button';
import { Car } from 'lucide-react';

const CarHire = () => {
  const navigate = useNavigate();

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

  const gallery = [
    { 
      id: "gallery-1",
      src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070",
      alt: "Luxury Car on Road"
    },
    { 
      id: "gallery-2",
      src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070",
      alt: "Sports Car Interior"
    },
    { 
      id: "gallery-3",
      src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=2070",
      alt: "Car Keys Handover"
    }
  ];

  const testimonials = [
    {
      id: "testimonial-1",
      content: "The Porsche 911 I rented was the highlight of my weekend getaway. Impeccable service from start to finish.",
      author: "James Wilson",
      position: "Executive"
    },
    {
      id: "testimonial-2",
      content: "Having a chauffeur drive us in the S-Class made our anniversary celebration truly special and memorable.",
      author: "Sarah & Michael",
      position: "Clients"
    },
    {
      id: "testimonial-3",
      content: "As a car enthusiast, I was impressed by the condition of the vehicle and the team's attention to detail.",
      author: "David Chen",
      position: "Car Collector"
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
        description="Our luxury car hire service offers you access to a curated collection of the world's most prestigious automobiles. Whether you're seeking the thrill of a high-performance sports car, the refinement of a luxury sedan, or the versatility of a premium SUV, our fleet caters to the most discerning tastes."
        image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070"
        imageAlt="Luxury car rental"
      />
      
      <section className="py-12 bg-white w-full">
        <div className="container mx-auto flex flex-col md:flex-row gap-6 items-center justify-center">
          <Button 
            className="w-full md:w-auto bg-wine-500 hover:bg-wine-600 text-white"
            onClick={() => navigate('/fleet')}
            size="lg"
          >
            View Our Fleet
          </Button>
          
          <Button 
            variant="outline-gold"
            className="w-full md:w-auto"
            onClick={() => navigate('/book?service=car-hire')}
            size="lg"
          >
            Book a Car Now
          </Button>
        </div>
      </section>
      
      <ServiceFeatures 
        title="Our Car Hire Services"
        subtitle="Exceptional vehicles and service for every occasion"
        features={features}
      />
      
      <ServiceGallery 
        title="Luxury Fleet Gallery"
        subtitle="Browse our collection of premium vehicles"
        images={gallery}
      />
      
      <ServiceTestimonials 
        title="What Our Clients Say"
        testimonials={testimonials}
      />
      
      <ServiceCta 
        title="Ready to Experience Luxury on Wheels?"
        description="Book your premium vehicle today and make your journey as exceptional as your destination."
        primaryButtonText="Book Now"
        primaryButtonLink="/book?service=car-hire"
      />
    </ServiceLayout>
  );
};

export default CarHire;
