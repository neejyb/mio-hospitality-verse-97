
import React from 'react';
import { Button } from '@/components/ui/button';

interface ArtisanCTAProps {
  onNavigate: (path: string) => void;
}

const ArtisanCTA: React.FC<ArtisanCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-300">
          Our team can help you find the right professionals for your specific facility management needs, whether it's a one-time project or ongoing support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="default" 
            size="lg" 
            onClick={() => onNavigate('/book?service=facility-management')}
          >
            Request Consultation
          </Button>
          <Button 
            variant="outline-gold" 
            size="lg" 
            onClick={() => onNavigate('/contact')}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtisanCTA;
