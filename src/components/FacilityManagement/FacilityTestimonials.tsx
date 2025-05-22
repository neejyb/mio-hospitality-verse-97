
import React from 'react';
import ServiceTestimonials from '@/components/ServiceTestimonials';

interface TestimonialItem {
  id: string;
  content: string;
  author: string;
  position?: string;
  company?: string;
  avatar?: string;
}

const FacilityTestimonials: React.FC = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 'testimonial-1',
      content: "Since partnering with Mio's Facility Management, we've seen a 20% reduction in operational costs and significant improvements in building efficiency. Their proactive approach has transformed our facility management.",
      author: "Jennifer Blackwood",
      position: "Operations Director",
      company: "Global Commerce Center",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200"
    },
    {
      id: 'testimonial-2',
      content: "Mio's property management team helped us transition our long-term rental to a vacation property. Their market analysis, pricing strategy, and management execution resulted in revenue that exceeded our expectations by 30%.",
      author: "Elena Rodriguez",
      position: "Vacation Property Owner",
      avatar: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=200"
    },
    {
      id: 'testimonial-3',
      content: "When a pipe burst at 2:00 AM in our rental property, Mio's emergency team arrived within 30 minutes. They not only fixed the issue but handled the entire water damage restoration process seamlessly. Their rapid response saved us thousands in potential damages.",
      author: "Carlos Menendez",
      position: "Investment Property Manager",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200"
    },
  ];

  return (
    <ServiceTestimonials
      testimonials={testimonials}
      darkMode={true}
    />
  );
};

export default FacilityTestimonials;
