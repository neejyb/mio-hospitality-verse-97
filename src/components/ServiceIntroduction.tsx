
import React from 'react';
import { motion } from 'framer-motion';
import MobileButtonGroup from '@/components/MobileButtonGroup';

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
    <section className="mobile-section-padding bg-white">
      <div className="container mx-auto mobile-container-padding">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: reversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="prose max-w-none"
          >
            {typeof description === 'string' ? (
              <p className="text-gray-600 responsive-body">{description}</p>
            ) : (
              description
            )}
            
            {(primaryButtonText || secondaryButtonText) && (
              <div className="mt-4 sm:mt-5">
                <MobileButtonGroup
                  primaryButton={primaryButtonText && primaryButtonLink ? {
                    text: primaryButtonText,
                    onClick: () => handleSmoothScroll(primaryButtonLink)
                  } : undefined}
                  secondaryButton={secondaryButtonText && secondaryButtonLink ? {
                    text: secondaryButtonText,
                    onClick: () => handleSmoothScroll(secondaryButtonLink),
                    variant: 'outline'
                  } : undefined}
                />
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
