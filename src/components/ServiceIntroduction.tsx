
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ServiceIntroductionProps {
  description: string | React.ReactNode;
  image: string;
  imageAlt: string;
  reversed?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const ServiceIntroduction = ({ 
  description, 
  image, 
  imageAlt, 
  reversed = false,
  buttonText,
  buttonLink 
}: ServiceIntroductionProps) => {
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
            
            {buttonText && buttonLink && (
              <div className="mt-6">
                <Button 
                  asChild
                  className="bg-[#FFC107] hover:bg-[#E0A800] text-black font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <a href={buttonLink}>{buttonText}</a>
                </Button>
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
