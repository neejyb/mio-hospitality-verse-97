
import React from 'react';
import MobileButtonGroup from '@/components/MobileButtonGroup';

interface ServiceIntroductionProps {
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  reversed?: boolean;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const ServiceIntroduction: React.FC<ServiceIntroductionProps> = ({
  description,
  image,
  imageAlt,
  reversed = false,
  primaryButtonText = "Get Started",
  primaryButtonLink = "/book",
  secondaryButtonText,
  secondaryButtonLink
}) => {
  return (
    <section className="mobile-section-padding bg-white">
      <div className="container mx-auto mobile-container-padding">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}>
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className="responsive-body space-y-4">
              {description}
            </div>
            
            <div className="pt-4">
              <MobileButtonGroup
                primaryText={primaryButtonText}
                primaryLink={primaryButtonLink}
                secondaryText={secondaryButtonText}
                secondaryLink={secondaryButtonLink}
                className="max-w-md"
              />
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-1">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntroduction;
