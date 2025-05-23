
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
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
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

  const scrollToBookingForm = () => {
    const bookingElement = document.getElementById('booking-section');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/book?service=car-hire';
    }
  };

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
            <p className="text-gray-600 mb-6">
              Each vehicle in our collection is meticulously maintained to ensure an exceptional driving experience. From airport transfers and business travel to special occasions and weekend getaways, we provide the perfect vehicle paired with impeccable service.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button asChild>
                <Link to="/fleet">View Our Fleet</Link>
              </Button>
              <Button 
                variant="outline-gold" 
                onClick={() => navigate('/book?service=car-hire')}
              >
                Book a Car Now
              </Button>
            </div>
          </>
        }
        image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070"
        imageAlt="Luxury car rental"
        reversed={true}
      />

      {/* Luxury Car Service Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070" 
                alt="Luxury car on road" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg bg-white h-full">
                <CardContent className="pt-6 px-6 pb-8">
                  <h2 className="text-3xl font-bold mb-6 text-zinc-800">Prestige Vehicle Rental</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Experience the epitome of luxury with our premium car rental service. Whether you're attending a high-profile event, exploring a new city in style, or simply treating yourself to an extraordinary driving experience, our fleet of prestigious vehicles ensures you make a lasting impression.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chauffeur Service Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg bg-gray-50 h-full">
                <CardContent className="pt-6 px-6 pb-8">
                  <h2 className="text-3xl font-bold mb-6 text-zinc-800">Professional Chauffeur Service</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Elevate your journey with our professional chauffeur service. Our expertly trained drivers provide a seamless, comfortable experience, allowing you to focus on what matters most. Perfect for business travel, airport transfers, or special events when you want to arrive in sophisticated style.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1560232216-3d0dcf7897de?q=80&w=2066" 
                alt="Professional chauffeur service" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
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
        testimonials={testimonials}
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
