import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceHero from '@/components/ServiceHero';
import ServiceIntroduction from '@/components/ServiceIntroduction';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceGallery from '@/components/ServiceGallery';
import ServiceTestimonials from '@/components/ServiceTestimonials';
import ServiceCta from '@/components/ServiceCta';

const CarHire = () => {
  // Features data
  const features = [
    {
      id: 'feature-1',
      title: 'Luxury Fleet',
      description: 'Access to a curated collection of premium and luxury vehicles from renowned brands like Mercedes-Benz, BMW, Porsche, and more.',
    },
    {
      id: 'feature-2',
      title: 'Chauffeur Services',
      description: 'Professional, discreet drivers available for airport transfers, event transportation, or full-day service during your stay.',
    },
    {
      id: 'feature-3',
      title: 'Self-Drive Options',
      description: 'Flexible self-drive rentals with comprehensive insurance coverage for those who prefer to take the wheel themselves.',
    },
    {
      id: 'feature-4',
      title: 'Concierge Delivery',
      description: 'Convenient vehicle delivery and pickup at your location—hotel, villa, airport, or any address within our service area.',
    },
    {
      id: 'feature-5',
      title: 'Special Occasions',
      description: 'Custom packages for weddings, anniversaries, photo shoots, and other special events requiring distinctive transportation.',
    },
    {
      id: 'feature-6',
      title: 'Corporate Solutions',
      description: 'Tailored transportation solutions for business events, executive travel, and corporate retreats with account management.',
    },
  ];

  // Gallery images
  const galleryImages = [
    {
      id: 'gallery-1',
      src: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2025',
      alt: 'Luxury sports car',
      caption: 'Porsche 911 Carrera - Perfect for weekend getaways'
    },
    {
      id: 'gallery-2',
      src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070',
      alt: 'Convertible sports car',
      caption: 'Mercedes-Benz AMG GT Roadster - Open-top luxury'
    },
    {
      id: 'gallery-3',
      src: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?q=80&w=2070',
      alt: 'Luxury sedan',
      caption: 'Bentley Continental - Ultimate executive transport'
    },
    {
      id: 'gallery-4',
      src: 'https://images.unsplash.com/photo-1619551734325-81aaf323686c?q=80&w=2070',
      alt: 'Premium SUV',
      caption: 'Range Rover Autobiography - Sophisticated comfort'
    },
    {
      id: 'gallery-5',
      src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070',
      alt: 'Exotic supercar',
      caption: 'Lamborghini Huracan - Unforgettable driving experience'
    },
    {
      id: 'gallery-6',
      src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2080',
      alt: 'Classic vintage car',
      caption: 'Classic Mercedes SL - Timeless elegance'
    },
    {
      id: 'gallery-7',
      src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2068',
      alt: 'Professional chauffeur',
      caption: 'Professional chauffeur service available'
    },
    {
      id: 'gallery-8',
      src: 'https://images.unsplash.com/photo-1564836235910-c3055ca0f912?q=80&w=2070',
      alt: 'Luxury car interior',
      caption: 'Premium interior finishes and amenities'
    },
    {
      id: 'gallery-9',
      src: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069',
      alt: 'Wedding car service',
      caption: 'Special occasion transportation for weddings'
    },
    {
      id: 'gallery-10',
      src: 'https://images.unsplash.com/photo-1632548260498-ce952b194048?q=80&w=2070',
      alt: 'Sports car convoy',
      caption: 'Group rentals for special events and experiences'
    },
    {
      id: 'gallery-11',
      src: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2070',
      alt: 'Scenic driving route',
      caption: 'Custom driving routes through scenic landscapes'
    },
    {
      id: 'gallery-12',
      src: 'https://images.unsplash.com/photo-1622687468310-14c3e9883e89?q=80&w=2070',
      alt: 'Car keys handover',
      caption: 'Personalized concierge vehicle delivery'
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 'testimonial-1',
      content: "The Porsche 911 I rented from Mio's was immaculate, and the delivery to my hotel was right on time. The entire booking process was seamless, and I appreciated the thorough orientation to the vehicle.",
      author: "Jonathan Reed",
      position: "Business Executive",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200"
    },
    {
      id: 'testimonial-2',
      content: "We used Mio's chauffeur service for our wedding day, and everything was perfect. The cars were stunning, and the drivers were professional and accommodating with all our photo requests.",
      author: "Olivia & Mark Thompson",
      position: "Newlyweds",
      avatar: "https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?q=80&w=200"
    },
    {
      id: 'testimonial-3',
      content: "As a film producer, I needed specific cars for a location shoot with minimal notice. Mio's not only delivered the exact models we needed but also assisted with logistics on set. Exceptional service.",
      author: "Daniel Croft",
      position: "Film Producer",
      company: "Apex Productions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
    },
    {
      id: 'testimonial-4',
      content: "I've rented luxury cars worldwide, and Mio's stands out for their attention to detail and personalized service. The Range Rover was delivered with my preferred drinks already chilled in the fridge—impressive!",
      author: "Sophia Laurent",
      position: "International Traveler",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200"
    },
  ];

  return (
    <ServiceLayout>
      <ServiceHero
        title="Luxury Car Hire"
        subtitle="Experience exceptional driving with our premium and exotic car rental services"
        backgroundImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070"
      />
      
      <ServiceIntroduction
        description={
          <>
            <p className="text-gray-600 mb-4">
              Mio's Luxury Car Hire offers a premium selection of high-performance vehicles, elegant sedans, and exclusive supercars for any occasion. Whether you're seeking to make an impression at a special event, enhance your travel experience, or simply enjoy the thrill of driving an exceptional automobile, our fleet represents the pinnacle of automotive excellence.
            </p>
            <p className="text-gray-600">
              We distinguish ourselves through impeccable service, flexible rental options, and meticulous attention to every detail. From the moment you request a vehicle to the final return, our team ensures a seamless, personalized experience tailored to your specific needs and preferences. With options for both self-drive and chauffeur service, we provide the perfect transportation solution for any requirement.
            </p>
          </>
        }
        image="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2025"
        imageAlt="Luxury sports car from our fleet"
        reversed={true}
        buttonText="Browse Our Fleet"
        buttonLink="/contact"
      />
      
      <ServiceFeatures
        title="Exceptional Car Hire Services"
        subtitle="Discover the range of premium services offered with our luxury vehicle rentals"
        features={features}
        darkMode={true}
      />
      
      <ServiceGallery
        title="Our Exclusive Fleet"
        subtitle="Explore our collection of luxury, sports, and exotic vehicles available for your next journey"
        images={galleryImages}
      />
      
      <ServiceTestimonials
        testimonials={testimonials}
        darkMode={true}
      />
      
      <ServiceCta
        title="Ready to Experience Luxury on the Road?"
        description="Contact us to reserve your preferred vehicle or discuss custom transportation requirements for your upcoming needs."
        primaryButtonText="Book a Vehicle"
        primaryButtonLink="/book?service=car-hire"
        secondaryButtonText="View Fleet Details"
        secondaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2070"
      />
    </ServiceLayout>
  );
};

export default CarHire;
