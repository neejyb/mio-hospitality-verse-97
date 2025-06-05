
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Feature {
  id: string;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  darkMode?: boolean;
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({
  title,
  subtitle,
  features,
  darkMode = false
}) => {
  return (
    <section className={`mobile-section-padding ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
      <div className="container mx-auto mobile-container-padding">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="responsive-heading font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className={`responsive-body max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Features Grid */}
        <div className="service-features-grid">
          {features.map((feature) => (
            <Card key={feature.id} className={`h-full ${darkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
              <CardHeader className="pb-4">
                <CardTitle className={`text-lg sm:text-xl ${darkMode ? 'text-white' : ''}`}>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`responsive-body ${darkMode ? 'text-gray-300' : ''}`}>
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
