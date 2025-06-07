
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ServiceIntroductionProps {
  description: string | React.ReactNode;
  image: string;
  imageAlt: string;
  reversed?: boolean;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const ServiceIntroduction = ({ 
  description, 
  image, 
  imageAlt, 
  reversed = false,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}: ServiceIntroductionProps) => {
  const handleSmoothScroll = (link: string) => {
    if (link === '#portfolio-section') {
      const element = document.getElementById('portfolio-section');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      window.location.href = link;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: reversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="prose max-w-none"
          >
            {typeof description === 'string' ? (
              <p className="text-gray-600">{description}</p>
            ) : (
              description
            )}
            
            {(primaryButtonText || secondaryButtonText) && (
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                {primaryButtonText && primaryButtonLink && (
                  <Button 
                    onClick={() => handleSmoothScroll(primaryButtonLink)}
                    className="bg-[#D6AC2E] hover:bg-[#B8941F] text-white font-bold px-6 py-3 rounded-md transition-all duration-300"
                  >
                    {primaryButtonText}
                  </Button>
                )}
                
                {secondaryButtonText && secondaryButtonLink && (
                  <Button 
                    onClick={() => handleSmoothScroll(secondaryButtonLink)}
                    variant="outline"
                    className="border-2 border-[#D6AC2E] bg-transparent text-[#D6AC2E] hover:bg-[#D6AC2E] hover:text-white font-bold px-6 py-3 rounded-md transition-all duration-300"
                  >
                    {secondaryButtonText}
                  </Button>
                )}
              </div>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: reversed ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src={image} 
              alt={imageAlt} 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntroduction;
