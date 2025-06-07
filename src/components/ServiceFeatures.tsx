
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
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>{title}</h2>
          {subtitle && <p className={`text-lg max-w-2xl mx-auto ${descriptionColor}`}>{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-[#4a1403]/80' : 'bg-white'}`}
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 text-[#D4AF37]">
                  {feature.icon || <Check size={20} />}
                </div>
                <h3 className={`text-xl font-bold ${textColor}`}>{feature.title}</h3>
              </div>
              <p className={descriptionColor}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
