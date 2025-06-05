
import React from 'react';
import MobileButtonGroup from '@/components/MobileButtonGroup';

interface ServiceCtaProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
}

const ServiceCta: React.FC<ServiceCtaProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage
}) => {
  return (
    <section className="relative mobile-section-padding">
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </>
      )}
      
      {/* Content */}
      <div className="relative container mx-auto mobile-container-padding text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="responsive-heading font-bold text-white mb-4 sm:mb-6">
            {title}
          </h2>
          <p className="responsive-body text-gray-200 mb-8 sm:mb-10">
            {description}
          </p>
          
          <div className="flex justify-center">
            <MobileButtonGroup
              primaryText={primaryButtonText}
              primaryLink={primaryButtonLink}
              secondaryText={secondaryButtonText}
              secondaryLink={secondaryButtonLink}
              primaryVariant="default"
              secondaryVariant="outline"
              className="max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCta;
