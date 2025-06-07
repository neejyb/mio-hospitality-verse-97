
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
    <section className={`mobile-testimonial-section ${bgColor}`}>
      <div className="container mx-auto mobile-container-padding">
        <div className="text-center mb-4 sm:mb-6 md:mb-10">
          <h2 className={`mobile-heading-sm font-bold ${textColor}`}>{title}</h2>
        </div>
        
        <div 
          className="max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] pl-2 sm:pl-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`mobile-testimonial-card rounded-lg shadow-lg h-full ${darkMode ? 'bg-[#4a1403]/80' : 'bg-white'}`}
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-2 sm:mb-4 text-[#D4AF37] text-2xl sm:text-4xl">"</div>
                      <p className={`mb-3 sm:mb-6 italic flex-grow mobile-text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {testimonial.content}
                      </p>
                      <div className="flex items-center">
                        {testimonial.avatar && (
                          <div className="mr-2 sm:mr-4">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.author} 
                              className="rounded-full w-8 h-8 sm:w-12 sm:h-12 object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <h4 className={`font-bold mobile-text-sm ${textColor}`}>{testimonial.author}</h4>
                          {(testimonial.position || testimonial.company) && (
                            <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
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
          <div className="mt-4 sm:mt-8 flex justify-center gap-1 sm:gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? `bg-[#D4AF37] w-4 sm:w-6` 
                    : `${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'}`
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex items-center justify-center mt-4 sm:mt-8 gap-1 sm:gap-2">
            {/* Create a proper Carousel context for the navigation buttons */}
            <Carousel>
              <CarouselContent>
                <CarouselItem className="p-0 basis-auto">
                  <div className="flex gap-1 sm:gap-2">
                    <CarouselPrevious 
                      onClick={() => emblaApi?.scrollPrev()} 
                      className={`static translate-y-0 w-8 h-8 sm:w-10 sm:h-10 ${darkMode ? 'bg-[#D4AF37] text-white hover:bg-[#B4941F]' : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10'}`} 
                    />
                    <CarouselNext 
                      onClick={() => emblaApi?.scrollNext()} 
                      className={`static translate-y-0 w-8 h-8 sm:w-10 sm:h-10 ${darkMode ? 'bg-[#D4AF37] text-white hover:bg-[#B4941F]' : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10'}`} 
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
