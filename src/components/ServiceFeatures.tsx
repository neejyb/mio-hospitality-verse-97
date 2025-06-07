
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ServiceFeaturesProps {
  title: string;
  subtitle?: string;
  features: ServiceFeature[];
  darkMode?: boolean;
}

const ServiceFeatures = ({ title, subtitle, features, darkMode = false }: ServiceFeaturesProps) => {
  const bgColor = darkMode ? 'bg-[#370202]' : 'bg-gray-50';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const descriptionColor = darkMode ? 'text-gray-300' : 'text-gray-600';

  return (
    <section className={`mobile-management-section ${bgColor}`}>
      <div className="container mx-auto mobile-container-padding">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className={`responsive-heading font-bold mb-2 sm:mb-4 ${textColor}`}>{title}</h2>
          {subtitle && <p className={`responsive-body max-w-2xl mx-auto ${descriptionColor}`}>{subtitle}</p>}
        </div>
        
        <div className="mobile-design-services-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mobile-design-services-card rounded-lg shadow-lg ${darkMode ? 'bg-[#4a1403]/80' : 'bg-white'}`}
            >
              <div className="flex items-start mb-2 sm:mb-3 md:mb-4">
                <div className="mr-2 sm:mr-3 md:mr-4 text-[#D4AF37]">
                  {feature.icon || <Check className="mobile-design-services-icon" />}
                </div>
                <h3 className={`mobile-design-services-title font-bold ${textColor}`}>{feature.title}</h3>
              </div>
              <p className={`${descriptionColor} mobile-design-services-description`}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
