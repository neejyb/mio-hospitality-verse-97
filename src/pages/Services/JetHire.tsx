
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
import { Plane } from 'lucide-react';

const JetHire = () => {
  const navigate = useNavigate();

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

  const gallery = [
    { 
      id: "gallery-1",
      src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070",
      alt: "Private Jet Exterior"
    },
    { 
      id: "gallery-2",
      src: "https://images.unsplash.com/photo-1583440302929-af1e521e434f?q=80&w=2070",
      alt: "Luxury Jet Interior"
    },
    { 
      id: "gallery-3",
      src: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=2071",
      alt: "Private Jet on Runway"
    }
  ];

  const testimonials = [
    {
      id: "testimonial-1",
      content: "The private jet service was impeccable. From the personalized catering to the attentive crew, every detail was perfect.",
      author: "Richard Thompson",
      position: "CEO"
    },
    {
      id: "testimonial-2",
      content: "Being able to fly directly to my destination without the hassle of commercial travel saved me countless hours and stress.",
      author: "Amanda Chen",
      position: "Executive"
    },
    {
      id: "testimonial-3",
      content: "The level of luxury and convenience exceeded my expectations. This is how travel should be.",
      author: "Jonathan Miller",
      position: "Entrepreneur"
    }
  ];

  const scrollToBookingForm = () => {
    const bookingElement = document.getElementById('booking-section');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/book?service=jet-hire';
    }
  };

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
            <p className="text-gray-600 mb-6">
              From light jets for short trips to long-range aircraft for international journeys, our diverse fleet ensures we have the perfect aircraft for your specific requirements. Enjoy the freedom to create your own schedule, access smaller airports closer to your final destination, and travel with complete privacy.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button asChild>
                <Link to="/jets">View Our Jets</Link>
              </Button>
              <Button 
                variant="outline-gold" 
                onClick={() => navigate('/book?service=jet-hire')}
              >
                Charter a Jet Now
              </Button>
            </div>
          </>
        }
        image="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070"
        imageAlt="Private jet charter"
        reversed={true}
      />
      
      {/* Private Jet Service Section */}
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
                src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070" 
                alt="Private jet in flight" 
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
                  <h2 className="text-3xl font-bold mb-6 text-zinc-800">Premium Jet Charter</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Experience the freedom and luxury of private aviation. Our premium jet charter service gives you access to a world-class fleet of aircraft, allowing you to travel on your own schedule without the constraints and hassles of commercial flights.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Concierge Service Section */}
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
                  <h2 className="text-3xl font-bold mb-6 text-zinc-800">Comprehensive Concierge</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our aviation concierge service goes beyond just providing an aircraft. From ground transportation and accommodation arrangements to in-flight catering and special requests, we handle every aspect of your journey to ensure a seamless, luxurious travel experience.
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
                src="https://images.unsplash.com/photo-1583440302929-af1e521e434f?q=80&w=2070" 
                alt="Luxury jet interior" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <ServiceFeatures 
        title="Our Jet Charter Services"
        subtitle="Elevating your travel experience to new heights"
        features={features}
      />
      
      <ServiceGallery 
        title="Private Jet Gallery"
        subtitle="Glimpse into our world of luxury aviation"
        images={gallery}
      />
      
      <ServiceTestimonials 
        testimonials={testimonials}
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
