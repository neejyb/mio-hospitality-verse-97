
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
      title: "Premium Vehicle Selection",
      description: "Choose from our fleet of luxury and exotic cars for any occasion.",
      icon: <Car className="h-12 w-12 text-wine-500" />
    },
    {
      title: "Chauffeur Service",
      description: "Opt for our professional chauffeurs for a truly luxurious experience.",
      icon: <Car className="h-12 w-12 text-wine-500" />
    },
    {
      title: "Flexible Rental Options",
      description: "From hourly rentals to monthly leases, we offer options to suit your needs.",
      icon: <Car className="h-12 w-12 text-wine-500" />
    },
    {
      title: "Delivery & Pickup",
      description: "We deliver the vehicle to your location and pick it up when you're done.",
      icon: <Car className="h-12 w-12 text-wine-500" />
    }
  ];

  const gallery = [
    { 
      src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070",
      alt: "Luxury Car on Road"
    },
    { 
      src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070",
      alt: "Sports Car Interior"
    },
    { 
      src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=2070",
      alt: "Car Keys Handover"
    }
  ];

  const testimonials = [
    {
      quote: "The Porsche 911 I rented was the highlight of my weekend getaway. Impeccable service from start to finish.",
      author: "James Wilson",
      role: "Executive"
    },
    {
      quote: "Having a chauffeur drive us in the S-Class made our anniversary celebration truly special and memorable.",
      author: "Sarah & Michael",
      role: "Clients"
    },
    {
      quote: "As a car enthusiast, I was impressed by the condition of the vehicle and the team's attention to detail.",
      author: "David Chen",
      role: "Car Collector"
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
        heading="Premium Car Rental Services"
        subheading="Elevate your journey with our exceptional vehicles"
        description="Our luxury car hire service offers you access to a curated collection of the world's most prestigious automobiles. Whether you're seeking the thrill of a high-performance sports car, the refinement of a luxury sedan, or the versatility of a premium SUV, our fleet caters to the most discerning tastes."
      />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-center">
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
        </div>
      </section>
      
      <ServiceFeatures 
        heading="Our Car Hire Services"
        subheading="Exceptional vehicles and service for every occasion"
        features={features}
      />
      
      <ServiceGallery 
        heading="Luxury Fleet Gallery"
        subheading="Browse our collection of premium vehicles"
        images={gallery}
      />
      
      <ServiceTestimonials 
        heading="What Our Clients Say"
        subheading="Hear from those who've experienced our car hire service"
        testimonials={testimonials}
      />
      
      <ServiceCta 
        heading="Ready to Experience Luxury on Wheels?"
        description="Book your premium vehicle today and make your journey as exceptional as your destination."
        buttonText="Book Now"
        buttonLink="/book?service=car-hire"
      />
    </ServiceLayout>
  );
};

export default CarHire;
