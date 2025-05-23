
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
import { Image } from 'lucide-react';

const JetHire = () => {
  const navigate = useNavigate();

  const features = [
    {
      id: "feature-1",
      title: "Elite Aircraft Fleet",
      description: "Access to premium private jets for domestic and international travel.",
      icon: <Image className="h-12 w-12 text-wine-500" />
    },
    {
      id: "feature-2",
      title: "Bespoke Itineraries",
      description: "Customized flight plans tailored to your specific travel needs.",
      icon: <Image className="h-12 w-12 text-wine-500" />
    },
    {
      id: "feature-3",
      title: "Luxury Amenities",
      description: "Gourmet catering, premium beverages, and exceptional in-flight service.",
      icon: <Image className="h-12 w-12 text-wine-500" />
    },
    {
      id: "feature-4",
      title: "Concierge Service",
      description: "Ground transportation, accommodation, and activity arrangements.",
      icon: <Image className="h-12 w-12 text-wine-500" />
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

  return (
    <ServiceLayout>
      <ServiceHero 
        title="Private Jet Charter" 
        subtitle="Experience the pinnacle of luxury air travel"
        backgroundImage="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070"
      />
      
      <ServiceIntroduction 
        description="Our private jet charter service offers unparalleled convenience, comfort, and privacy for both business and leisure travel. With access to a fleet of world-class aircraft and a team dedicated to exceeding your expectations, we transform your journey into an extraordinary experience."
        image="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070"
        imageAlt="Private jet charter"
      />
      
      <section className="py-12 bg-white w-full">
        <div className="container mx-auto flex flex-col md:flex-row gap-6 items-center justify-center">
          <Button 
            className="w-full md:w-auto bg-wine-500 hover:bg-wine-600 text-white"
            onClick={() => navigate('/jets')}
            size="lg"
          >
            View Our Jets
          </Button>
          
          <Button 
            variant="outline-gold"
            className="w-full md:w-auto"
            onClick={() => navigate('/book?service=jet-hire')}
            size="lg"
          >
            Charter a Jet Now
          </Button>
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
        title="Client Experiences"
        testimonials={testimonials}
      />
      
      <ServiceCta 
        title="Ready to Elevate Your Travel Experience?"
        description="Book your private jet charter today and enjoy the freedom, flexibility, and luxury of private aviation."
        primaryButtonText="Charter Now"
        primaryButtonLink="/book?service=jet-hire"
      />
    </ServiceLayout>
  );
};

export default JetHire;
