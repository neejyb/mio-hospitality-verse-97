import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceHero from '@/components/ServiceHero';
import ServiceIntroduction from '@/components/ServiceIntroduction';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceGallery from '@/components/ServiceGallery';
import ServiceTestimonials from '@/components/ServiceTestimonials';
import ServiceCta from '@/components/ServiceCta';

const Videography = () => {
  // Features data
  const features = [
    {
      id: 'feature-1',
      title: 'Property Showcases',
      description: 'Cinematic property tours that highlight architectural details, interior design, and unique features to attract potential buyers or renters.',
    },
    {
      id: 'feature-2',
      title: 'Aerial Videography',
      description: 'Stunning drone footage that captures your property from impressive angles, showcasing the location, surroundings, and full scope.',
    },
    {
      id: 'feature-3',
      title: 'Virtual Tours',
      description: '360° interactive virtual tours that allow viewers to explore properties remotely with an immersive experience.',
    },
    {
      id: 'feature-4',
      title: 'Event Coverage',
      description: 'Professional documentation of hospitality events, from grand openings to exclusive private gatherings.',
    },
    {
      id: 'feature-5',
      title: 'Brand Stories',
      description: 'Compelling narrative videos that communicate your brand identity, values, and unique selling propositions to your target audience.',
    },
    {
      id: 'feature-6',
      title: 'Social Media Content',
      description: 'Engaging short-form videos optimized for social platforms to increase engagement and drive traffic to your properties.',
    },
  ];

  // Gallery images
  const galleryImages = [
    {
      id: 'gallery-1',
      src: 'https://images.unsplash.com/photo-1585813375255-6c8dfabd8f6f?q=80&w=2080',
      alt: 'Professional videography equipment',
      caption: 'State-of-the-art camera equipment for cinematic quality'
    },
    {
      id: 'gallery-2',
      src: 'https://images.unsplash.com/photo-1617191979714-ea21a8cb4657?q=80&w=2070',
      alt: 'Aerial drone footage',
      caption: 'Capturing stunning aerial perspectives of properties'
    },
    {
      id: 'gallery-3',
      src: 'https://images.unsplash.com/photo-1579965342575-16428a7c8881?q=80&w=2070',
      alt: 'Video editing process',
      caption: 'Professional post-production and color grading'
    },
    {
      id: 'gallery-4',
      src: 'https://images.unsplash.com/photo-1626316687099-7df7bb5f2dd5?q=80&w=2070',
      alt: 'Virtual tour setup',
      caption: '360° camera setup for immersive virtual tours'
    },
    {
      id: 'gallery-5',
      src: 'https://images.unsplash.com/photo-1560163363-c8f9e0d27ec4?q=80&w=2071',
      alt: 'Property showcase video',
      caption: 'Highlighting architectural features through video'
    },
    {
      id: 'gallery-6',
      src: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?q=80&w=2070',
      alt: 'Interview setup',
      caption: 'Professional lighting for testimonial interviews'
    },
    {
      id: 'gallery-7',
      src: 'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?q=80&w=2071',
      alt: 'Luxury property filming',
      caption: 'Capturing the essence of luxury properties'
    },
    {
      id: 'gallery-8',
      src: 'https://images.unsplash.com/photo-1512025316832-8658f04f8a83?q=80&w=2071',
      alt: 'Event videography',
      caption: 'Documenting special events and gatherings'
    },
    {
      id: 'gallery-9',
      src: 'https://images.unsplash.com/photo-1518136247453-74e7b5265980?q=80&w=2080',
      alt: 'Interior filming',
      caption: 'Showcasing interior design through video'
    },
    {
      id: 'gallery-10',
      src: 'https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?q=80&w=2070',
      alt: 'Video equipment setup',
      caption: 'Professional lighting and camera setup'
    },
    {
      id: 'gallery-11',
      src: 'https://images.unsplash.com/photo-1540655037529-9f05a1032d2d?q=80&w=2070',
      alt: 'Cityscape aerial footage',
      caption: 'Stunning aerial footage of urban properties'
    },
    {
      id: 'gallery-12',
      src: 'https://images.unsplash.com/photo-1616469829581-73809ce3e055?q=80&w=2070',
      alt: 'Social media content creation',
      caption: 'Creating engaging content for digital platforms'
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 'testimonial-1',
      content: "The property video Mio's created for our luxury listing generated more inquiries in one week than we'd received in the previous month. The quality and storytelling were exceptional.",
      author: "Alexandra Reeves",
      position: "Real Estate Agent",
      company: "Premier Properties",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200"
    },
    {
      id: 'testimonial-2',
      content: "Working with Mio's videography team was effortless. They understood our vision immediately and delivered a virtual tour that has significantly reduced physical showings while increasing serious buyer interest.",
      author: "James Williamson",
      position: "Property Developer",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200"
    },
    {
      id: 'testimonial-3',
      content: "The drone footage and editing quality from Mio's is unmatched. They captured our beachfront property in a way that truly showcases its unique location and features. Worth every penny.",
      author: "Sophia Chen",
      position: "Vacation Rental Owner",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200"
    },
    {
      id: 'testimonial-4',
      content: "Mio's videography team documented our hotel launch event with such creativity and professionalism. The final video has become a key marketing asset that continues to generate business months later.",
      author: "Marcus Johnson",
      position: "Hotel General Manager",
      avatar: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=200"
    },
  ];

  return (
    <ServiceLayout>
      <ServiceHero
        title="Professional Videography"
        subtitle="Showcase your property with stunning cinematic videography and virtual tours"
        backgroundImage="https://images.unsplash.com/photo-1601987177651-8edfe6c20009?q=80&w=1974"
      />
      
      <ServiceIntroduction
        description={
          <>
            <p className="text-gray-600 mb-4">
              In today's digital-first world, professional video content is essential for effectively marketing properties and hospitality services. Mio's Videography services combine artistic vision with technical excellence to create compelling visual stories that engage viewers and drive action.
            </p>
            <p className="text-gray-600">
              Our team of experienced videographers and editors specializes in real estate and hospitality content, understanding the unique aspects that need to be highlighted to appeal to your target audience. From cinematic property tours to aerial drone footage and interactive virtual experiences, we deliver high-quality video assets that showcase your properties at their absolute best.
            </p>
          </>
        }
        image="https://images.unsplash.com/photo-1585813375255-6c8dfabd8f6f?q=80&w=2080"
        imageAlt="Professional videographer with equipment"
        buttonText="View Our Showreel"
        buttonLink="/contact"
      />
      
      <ServiceFeatures
        title="Our Videography Services"
        subtitle="From property showcases to virtual tours, we create compelling visual content for all your needs"
        features={features}
        darkMode={true}
      />
      
      <ServiceGallery
        title="Video Production Portfolio"
        subtitle="Explore samples from our video projects across luxury real estate and hospitality"
        images={galleryImages}
      />
      
      <ServiceTestimonials
        testimonials={testimonials}
        darkMode={true}
      />
      
      <ServiceCta
        title="Ready to Showcase Your Property?"
        description="Contact us today to discuss your videography needs and how we can help your property stand out in a competitive market."
        primaryButtonText="Book a Shoot"
        primaryButtonLink="/book?service=videography"
        secondaryButtonText="View Demo Reel"
        secondaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1617191979714-ea21a8cb4657?q=80&w=2070"
      />
    </ServiceLayout>
  );
};

export default Videography;
