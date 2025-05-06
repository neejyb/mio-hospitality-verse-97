
import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Testimonial {
  id: string;
  content: string;
  author: string;
  position?: string;
  company?: string;
  avatar?: string;
}

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  darkMode?: boolean;
}

const ServiceTestimonials = ({ testimonials, title = "What Our Clients Say", darkMode = false }: ServiceTestimonialsProps) => {
  const bgColor = darkMode ? 'bg-[#370202]' : 'bg-gray-50';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';

  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className={`text-3xl md:text-4xl font-bold ${textColor}`}>{title}</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-6 md:p-8 rounded-lg shadow-lg h-full ${darkMode ? 'bg-[#4a1403]/80' : 'bg-white'}`}
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-4 text-[#D4AF37] text-4xl">"</div>
                      <p className={`mb-6 italic flex-grow ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {testimonial.content}
                      </p>
                      <div className="flex items-center">
                        {testimonial.avatar && (
                          <div className="mr-4">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.author} 
                              className="rounded-full w-12 h-12 object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <h4 className={`font-bold ${textColor}`}>{testimonial.author}</h4>
                          {(testimonial.position || testimonial.company) && (
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {testimonial.position}{testimonial.position && testimonial.company ? ', ' : ''}
                              {testimonial.company}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-8 gap-2">
              <CarouselPrevious className={`static translate-y-0 ${darkMode ? 'bg-[#D4AF37] text-white hover:bg-[#B4941F]' : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10'}`} />
              <CarouselNext className={`static translate-y-0 ${darkMode ? 'bg-[#D4AF37] text-white hover:bg-[#B4941F]' : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10'}`} />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
