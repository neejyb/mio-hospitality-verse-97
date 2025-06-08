
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceGalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

interface ServiceGalleryProps {
  title: string;
  subtitle: string;
  images: ServiceGalleryImage[];
}

const ServiceGallery = ({ title, subtitle, images }: ServiceGalleryProps) => {
  // Limit to 9 images for mobile 3x3 grid
  const displayImages = images.slice(0, 9);

  return (
    <section id="portfolio-section" className="mobile-section-padding bg-white">
      <div className="container mx-auto mobile-container-padding">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="responsive-heading font-bold text-gray-900 mb-2 sm:mb-4"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="responsive-body text-gray-600 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>
        
        <div className="mobile-portfolio-grid">
          {displayImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                <div className="w-full p-2 sm:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs sm:text-sm font-medium line-clamp-2">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGallery;
