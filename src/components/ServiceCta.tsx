
import React from 'react';
import { motion } from 'framer-motion';
import MobileButtonGroup from '@/components/MobileButtonGroup';
import { Link } from 'react-router-dom';

interface ServiceCtaProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
}

const ServiceCta = ({ 
  title, 
  description, 
  primaryButtonText, 
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage = "https://images.unsplash.com/photo-1506485338023-6ce5f36692df?q=80&w=2070"
}: ServiceCtaProps) => {
  return (
    <section className="mobile-section-padding relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="container mx-auto mobile-container-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="responsive-heading font-bold mb-2 sm:mb-4"
          >
            {title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: -10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="responsive-body mb-6 sm:mb-8"
          >
            {description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MobileButtonGroup
              primaryButton={{
                text: primaryButtonText,
                href: primaryButtonLink
              }}
              secondaryButton={secondaryButtonText && secondaryButtonLink ? {
                text: secondaryButtonText,
                href: secondaryButtonLink,
                variant: 'outline'
              } : undefined}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCta;
