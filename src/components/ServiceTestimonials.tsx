
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

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
  
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false
  }, [autoplay.current]);

  const handleMouseEnter = useCallback(() => {
    autoplay.current.stop();
  }, []);

  const handleMouseLeave = useCallback(() => {
    autoplay.current.play();
  }, []);

  // Sync the carousel index with the UI
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Navigate to a specific slide when a dot is clicked
  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    // Set up the initial state
    onSelect();
    
    // Subscribe to the select event
    emblaApi.on('select', onSelect);
    
    // Clean up when component unmounts
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className={`text-3xl md:text-4xl font-bold ${textColor}`}>{title}</h2>
        </div>
        
        <div 
          className="max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] pl-4">
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
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? `bg-[#D4AF37] w-6` 
                    : `${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'}`
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex items-center justify-center mt-8 gap-2">
            {/* Create a proper Carousel context for the navigation buttons */}
            <Carousel>
              <CarouselContent>
                <CarouselItem className="p-0 basis-auto">
                  <div className="flex gap-2">
                    <CarouselPrevious 
                      onClick={() => emblaApi?.scrollPrev()} 
                      className={`static translate-y-0 ${darkMode ? 'bg-[#D4AF37] text-white hover:bg-[#B4941F]' : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10'}`} 
                    />
                    <CarouselNext 
                      onClick={() => emblaApi?.scrollNext()} 
                      className={`static translate-y-0 ${darkMode ? 'bg-[#D4AF37] text-white hover:bg-[#B4941F]' : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10'}`} 
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
