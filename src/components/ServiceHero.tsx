
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const ServiceHero = ({ title, subtitle, backgroundImage }: ServiceHeroProps) => {
  return (
    <div 
      className="relative h-[50vh] bg-cover bg-center flex items-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};

export default ServiceHero;
