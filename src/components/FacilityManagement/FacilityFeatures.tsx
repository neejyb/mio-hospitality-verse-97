
import React from 'react';
import ServiceFeatures from '@/components/ServiceFeatures';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

const FacilityFeatures: React.FC = () => {
  // Features data
  const features = [
    {
      id: 'feature-1',
      title: 'Comprehensive Maintenance',
      description: 'Regular inspections and maintenance to preserve your property with 24/7 emergency response for urgent issues.',
    },
    {
      id: 'feature-2',
      title: 'Property Management',
      description: 'End-to-end management solutions including tenant screening, rent collection, financial reporting, and legal compliance.',
    },
    {
      id: 'feature-3',
      title: 'Facility Operations',
      description: 'Building systems oversight, equipment maintenance, and operational efficiency optimization for peak facility performance.',
    },
    {
      id: 'feature-4',
      title: 'Environmental Services',
      description: 'Sustainable facility management practices and energy optimization to reduce environmental impact and operating costs.',
    },
    {
      id: 'feature-5',
      title: 'Space Management',
      description: 'Strategic planning and optimization of facility space to enhance functionality, workflow, and occupant satisfaction.',
    },
    {
      id: 'feature-6',
      title: 'Security Solutions',
      description: 'Tailored security services from personnel to advanced access control systems to protect your facility, assets, and occupants.',
    },
  ];

  return (
    <ServiceFeatures
      title="Our Facility Management Solutions"
      subtitle="Comprehensive services to optimize and protect your property investment"
      features={features}
    />
  );
};

export default FacilityFeatures;
