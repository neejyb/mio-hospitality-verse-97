
import { useState, useEffect } from 'react';

interface Artisan {
  id: number;
  name: string;
  image: string;
  serviceType: string;
  serviceCategory: string;
  experience: number;
  rating: number;
  tagline: string;
  bio: string;
  verified: boolean;
  availability: string;
}

export const useArtisanData = (initialFilter: string) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('any');
  const [ratingFilter, setRatingFilter] = useState('any');
  const [serviceFilter, setServiceFilter] = useState(initialFilter);

  // Artisans data - in a real app, this would come from an API
  const allArtisans: Artisan[] = [
    {
      id: 1,
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300',
      serviceType: 'Electrician',
      serviceCategory: 'electrical',
      experience: 12,
      rating: 4.9,
      tagline: 'Certified master electrician specializing in commercial wiring and smart systems',
      bio: 'With over a decade of experience in commercial and residential electrical work, Michael specializes in complex wiring systems, smart home integration, and energy-efficient solutions. Licensed and insured with a perfect safety record.',
      verified: true,
      availability: 'Available next week',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?q=80&w=300',
      serviceType: 'Plumber',
      serviceCategory: 'plumbing',
      experience: 8,
      rating: 4.8,
      tagline: 'Expert in plumbing repairs, installations and water system optimization',
      bio: 'Sarah specializes in commercial plumbing systems, water efficiency solutions, and complex installations. Her expertise extends to troubleshooting difficult issues and implementing preventative maintenance programs.',
      verified: true,
      availability: 'Available now',
    },
    {
      id: 3,
      name: 'David Williams',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300',
      serviceType: 'HVAC Specialist',
      serviceCategory: 'hvac',
      experience: 15,
      rating: 5.0,
      tagline: 'Specializing in commercial HVAC systems installation and maintenance',
      bio: 'David is a certified HVAC specialist with extensive experience in both installation and maintenance of commercial systems. He specializes in optimizing systems for maximum efficiency and implementing preventative maintenance programs.',
      verified: true,
      availability: 'Available in 3 days',
    },
    {
      id: 4,
      name: 'Elena Rodriguez',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300',
      serviceType: 'Cleaning Supervisor',
      serviceCategory: 'general',
      experience: 6,
      rating: 4.7,
      tagline: 'Leads teams for commercial deep cleaning and sanitization services',
      bio: 'Elena manages professional cleaning teams for commercial properties, focusing on thorough sanitization, special event preparation, and maintaining pristine facility conditions. She implements customized cleaning protocols for different facility types.',
      verified: true,
      availability: 'Available tomorrow',
    },
    {
      id: 5,
      name: 'James Wilson',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300',
      serviceType: 'Security Systems Technician',
      serviceCategory: 'general',
      experience: 10,
      rating: 4.9,
      tagline: 'Expert in modern security systems installation and maintenance',
      bio: 'James specializes in designing and implementing comprehensive security solutions for commercial properties. His expertise includes access control systems, video surveillance, and integrating security with building management systems.',
      verified: true,
      availability: 'Available next week',
    },
    {
      id: 6,
      name: 'Lisa Zhang',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=300',
      serviceType: 'Electrician',
      serviceCategory: 'electrical',
      experience: 7,
      rating: 4.8,
      tagline: 'Specializing in energy-efficient lighting and electrical systems',
      bio: 'Lisa focuses on energy-efficient electrical solutions for commercial spaces. Her work includes LED lighting retrofits, smart control systems, and electrical system audits to identify efficiency improvements and cost savings.',
      verified: true,
      availability: 'Available in 2 days',
    },
    {
      id: 7,
      name: 'Robert Taylor',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300',
      serviceType: 'Plumber',
      serviceCategory: 'plumbing',
      experience: 20,
      rating: 4.9,
      tagline: 'Master plumber specializing in commercial systems and water conservation',
      bio: 'With two decades of experience, Robert is an expert in complex commercial plumbing systems. He specializes in water conservation solutions, backflow prevention, and troubleshooting challenging plumbing issues in large facilities.',
      verified: true,
      availability: 'Available next week',
    },
    {
      id: 8,
      name: 'Sophia Martinez',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300',
      serviceType: 'HVAC Specialist',
      serviceCategory: 'hvac',
      experience: 9,
      rating: 4.7,
      tagline: 'Specializing in energy-efficient HVAC solutions and indoor air quality',
      bio: 'Sophia focuses on optimizing HVAC systems for energy efficiency while maintaining excellent indoor air quality. She has extensive experience with various commercial HVAC systems and specializes in troubleshooting complex issues.',
      verified: true,
      availability: 'Available now',
    },
    {
      id: 9,
      name: 'Daniel Kim',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=300',
      serviceType: 'Handyman',
      serviceCategory: 'general',
      experience: 15,
      rating: 4.8,
      tagline: 'Multi-skilled maintenance professional for a wide range of facility needs',
      bio: 'Daniel handles a diverse range of maintenance tasks from carpentry and drywall repair to basic plumbing and electrical work. His versatile skillset makes him ideal for general facility maintenance and quick repairs.',
      verified: true,
      availability: 'Available tomorrow',
    },
    {
      id: 10,
      name: 'Aisha Jackson',
      image: 'https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=300',
      serviceType: 'Electrician',
      serviceCategory: 'electrical',
      experience: 5,
      rating: 4.6,
      tagline: 'Specializing in commercial electrical installations and troubleshooting',
      bio: 'Aisha is skilled in commercial electrical systems, focusing on troubleshooting complex issues and implementing reliable solutions. She is experienced in working with various building types from offices to retail spaces.',
      verified: false,
      availability: 'Available in 3 days',
    },
    {
      id: 11,
      name: 'Thomas Wright',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300',
      serviceType: 'Plumber',
      serviceCategory: 'plumbing',
      experience: 12,
      rating: 4.7,
      tagline: 'Expert in commercial plumbing systems and water efficiency solutions',
      bio: 'Thomas specializes in complex commercial plumbing systems with a focus on water efficiency and conservation. He has extensive experience with large-scale plumbing projects and preventative maintenance programs.',
      verified: true,
      availability: 'Available next week',
    },
    {
      id: 12,
      name: 'Maria Garcia',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300',
      serviceType: 'HVAC Specialist',
      serviceCategory: 'hvac',
      experience: 8,
      rating: 4.8,
      tagline: 'Specializing in commercial HVAC maintenance and optimization',
      bio: 'Maria is an HVAC specialist with expertise in maintaining and optimizing commercial heating and cooling systems. She focuses on improving energy efficiency while ensuring reliable performance and comfort.',
      verified: true,
      availability: 'Available in 2 days',
    },
  ];

  // Apply filters
  const filteredArtisans = allArtisans.filter((artisan) => {
    // Filter by search term
    if (searchTerm && !artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !artisan.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !artisan.tagline.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Filter by service type
    if (serviceFilter !== 'all' && artisan.serviceCategory !== serviceFilter) {
      return false;
    }
    
    // Filter by experience
    if (experienceFilter === '5plus' && artisan.experience < 5) return false;
    if (experienceFilter === '10plus' && artisan.experience < 10) return false;
    if (experienceFilter === '15plus' && artisan.experience < 15) return false;
    
    // Filter by rating
    if (ratingFilter === '4plus' && artisan.rating < 4) return false;
    if (ratingFilter === '4.5plus' && artisan.rating < 4.5) return false;
    if (ratingFilter === '5only' && artisan.rating < 5) return false;
    
    return true;
  });

  return {
    searchTerm,
    setSearchTerm,
    experienceFilter,
    setExperienceFilter,
    ratingFilter,
    setRatingFilter,
    serviceFilter,
    setServiceFilter,
    filteredArtisans
  };
};
