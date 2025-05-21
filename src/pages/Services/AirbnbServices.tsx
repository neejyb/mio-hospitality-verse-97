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
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const AirbnbServices = () => {
  // Features data
  const features = [
    {
      id: 'feature-1',
      title: 'Property Setup',
      description: 'Complete preparation of your property with professional photography, compelling descriptions, and strategic pricing to maximize bookings.',
    },
    {
      id: 'feature-2',
      title: 'Guest Communication',
      description: 'Prompt and professional communication with guests before, during, and after their stay to ensure satisfaction and positive reviews.',
    },
    {
      id: 'feature-3',
      title: 'Cleaning & Maintenance',
      description: 'Thorough cleaning between stays and regular maintenance checks to keep your property in pristine condition for every guest.',
    },
    {
      id: 'feature-4',
      title: 'Revenue Management',
      description: 'Dynamic pricing strategies based on demand, seasonality, and local events to optimize your rental income throughout the year.',
    },
    {
      id: 'feature-5',
      title: 'Interior Design',
      description: 'Professional styling and design services to create a memorable, Instagram-worthy space that stands out in the marketplace.',
    },
    {
      id: 'feature-6',
      title: 'Concierge Services',
      description: 'Premium guest experiences with optional add-ons like airport transfers, welcome packages, and local experience recommendations.',
    },
  ];

  // Gallery images
  const galleryImages = [
    {
      id: 'gallery-1',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070',
      alt: 'Luxury downtown apartment',
      caption: 'Stylish downtown apartment with city views'
    },
    {
      id: 'gallery-2',
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
      alt: 'Modern beachfront villa',
      caption: 'Beachfront villa with private pool and ocean access'
    },
    {
      id: 'gallery-3',
      src: 'https://images.unsplash.com/photo-1501876725168-00c445821c9e?q=80&w=2070',
      alt: 'Cozy mountain cabin',
      caption: 'Rustic mountain retreat with modern amenities'
    },
    {
      id: 'gallery-4',
      src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070',
      alt: 'Well-equipped kitchen',
      caption: 'Fully stocked chef\'s kitchen for guest use'
    },
    {
      id: 'gallery-5',
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070',
      alt: 'Welcoming guest welcome package',
      caption: 'Curated welcome package with local treats'
    },
    {
      id: 'gallery-6',
      src: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070',
      alt: 'Comfortable bedroom setup',
      caption: 'Luxurious bedroom with hotel-quality linens'
    },
    {
      id: 'gallery-7',
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070',
      alt: 'Property cleaning',
      caption: 'Professional cleaning between guest stays'
    },
    {
      id: 'gallery-8',
      src: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2071',
      alt: 'Guest communication',
      caption: 'Prompt and helpful guest communication'
    },
    {
      id: 'gallery-9',
      src: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070',
      alt: 'Seaside cottage',
      caption: 'Charming seaside cottage with private garden'
    },
    {
      id: 'gallery-10',
      src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070',
      alt: 'Smart home features',
      caption: 'Smart home technology for guest convenience'
    },
    {
      id: 'gallery-11',
      src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
      alt: 'Luxury home exterior',
      caption: 'Striking property exterior with curb appeal'
    },
    {
      id: 'gallery-12',
      src: 'https://images.unsplash.com/photo-1560448075-32cc8b68e9c4?q=80&w=2070',
      alt: 'Penthouse living area',
      caption: 'Spacious penthouse with luxury furnishings'
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 'testimonial-1',
      content: "Since partnering with Mio's for my Airbnb property, my occupancy rate has increased by 40% and my reviews are consistently 5-star. Their attention to detail and guest service is unmatched.",
      author: "Thomas Wilson",
      position: "Property Owner",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
    },
    {
      id: 'testimonial-2',
      content: "As an overseas property investor, I needed a reliable team to manage my rentals. Mio's has exceeded my expectations in every way, handling everything professionally while maximizing my returns.",
      author: "Emma Lee",
      position: "International Investor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"
    },
    {
      id: 'testimonial-3',
      content: "The design and setup services from Mio's transformed my ordinary apartment into a standout rental that commands premium rates. The return on investment has been remarkable.",
      author: "Robert Martinez",
      position: "First-time Host",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200"
    },
    {
      id: 'testimonial-4',
      content: "I was hesitant to use a management service at first, but Mio's has made hosting completely hands-off while increasing my profits. Their communication is excellent, and I couldn't be happier.",
      author: "Grace Patel",
      position: "Multi-property Owner",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200"
    },
  ];

  const scrollToBookingForm = () => {
    const bookingElement = document.getElementById('booking-section');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/book?service=airbnb';
    }
  };

  return (
    <ServiceLayout>
      <ServiceHero
        title="Airbnb Management Services"
        subtitle="Maximize your rental property's potential with our comprehensive Airbnb management solutions"
        backgroundImage="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070"
      />
      
      <ServiceIntroduction
        description={
          <>
            <p className="text-gray-600 mb-4">
              Mio's Hospitality & Co offers end-to-end Airbnb and vacation rental management services designed to maximize your property's income potential while eliminating the hassles of day-to-day management. We handle everything from listing creation and optimization to guest communication, cleaning coordination, and maintenance.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of hospitality experts combines industry knowledge with innovative strategies to ensure your property stands out in a competitive market. Whether you own a single apartment or multiple properties, we provide tailored solutions that drive bookings, maintain five-star reviews, and create memorable guest experiences.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button asChild>
                <Link to="/properties">View All Our Properties</Link>
              </Button>
              <Button 
                variant="outline-gold" 
                onClick={scrollToBookingForm}
              >
                Book This Service
              </Button>
            </div>
          </>
        }
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
        imageAlt="Luxury vacation rental property"
        reversed={true}
      />

      {/* Hosting Services Section - Redesigned */}
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
                src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070" 
                alt="Cozy Airbnb interior" 
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
                  <h2 className="text-3xl font-bold mb-6 text-zinc-800">Hosting Services</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We help property owners get started with Airbnb the right way. From professional listing creation and strategic pricing to optimized guest communication, our hosting service ensures your property stands out and stays fully booked. We guide you through the setup process, ensuring a smooth and profitable hosting experience.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Airbnb Management Section - Redesigned */}
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
                  <h2 className="text-3xl font-bold mb-6 text-zinc-800">Airbnb Management</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our Airbnb management service handles everything for you — from guest check-in and support to cleaning coordination, property maintenance, and ensuring five-star reviews. Whether you're a frequent traveler or a hands-off investor, we offer end-to-end management that keeps your rental running efficiently and profitably.
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
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2070" 
                alt="Premium vacation rental maintenance" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <ServiceFeatures
        title="Comprehensive Management Services"
        subtitle="From guest communications to property maintenance, we handle all aspects of your rental property"
        features={features}
      />
      
      <ServiceGallery
        title="Our Managed Properties"
        subtitle="Browse our portfolio of beautifully managed Airbnb and vacation rental properties"
        images={galleryImages}
      />
      
      <ServiceTestimonials
        testimonials={testimonials}
      />
      
      <ServiceCta
        title="Ready to Maximize Your Rental Income?"
        description="Contact us today to learn how our Airbnb management services can transform your property into a profitable investment with minimal effort on your part."
        primaryButtonText="Get Started"
        primaryButtonLink="/book?service=airbnb"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070"
      />
    </ServiceLayout>
  );
};

export default AirbnbServices;
