
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Search, Filter, Calendar, CircleCheck } from 'lucide-react';

const Artisans = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialFilter = queryParams.get('filter') || 'all';

  const [searchTerm, setSearchTerm] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('any');
  const [ratingFilter, setRatingFilter] = useState('any');
  const [serviceFilter, setServiceFilter] = useState(initialFilter);

  // Artisans data - in a real app, this would come from an API
  const allArtisans = [
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

  // Update service filter when URL parameter changes
  useEffect(() => {
    const filter = queryParams.get('filter') || 'all';
    setServiceFilter(filter);
  }, [location.search]);

  const handleBookNow = (artisanId) => {
    navigate(`/book?service=facility-management&artisan=${artisanId}`);
  };

  const handleTabChange = (value) => {
    setServiceFilter(value);
    navigate(value === 'all' ? '/artisans' : `/artisans?filter=${value}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#1A1A1A] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Facility Artisans</h1>
              <p className="text-lg text-gray-300 mb-8">
                Discover our network of expert artisans specializing in all aspects of facility management and maintenance. Every professional is vetted, experienced, and ready to deliver exceptional service.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search artisans..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                  <SelectTrigger className="w-[140px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Experience</SelectItem>
                    <SelectItem value="5plus">5+ Years</SelectItem>
                    <SelectItem value="10plus">10+ Years</SelectItem>
                    <SelectItem value="15plus">15+ Years</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={ratingFilter} onValueChange={setRatingFilter}>
                  <SelectTrigger className="w-[140px]">
                    <Star className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Rating</SelectItem>
                    <SelectItem value="4plus">4+ Stars</SelectItem>
                    <SelectItem value="4.5plus">4.5+ Stars</SelectItem>
                    <SelectItem value="5only">5 Stars Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Tabs */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <Tabs value={serviceFilter} onValueChange={handleTabChange} className="w-full">
              <TabsList className="mb-8 w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-2">
                <TabsTrigger value="all">All Services</TabsTrigger>
                <TabsTrigger value="electrical">Electrical</TabsTrigger>
                <TabsTrigger value="plumbing">Plumbing</TabsTrigger>
                <TabsTrigger value="hvac">HVAC</TabsTrigger>
                <TabsTrigger value="general">General</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </section>
        
        {/* Artisans Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                {filteredArtisans.length} Artisans Available
              </h2>
            </div>
            
            {filteredArtisans.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredArtisans.map((artisan) => (
                  <Card key={artisan.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={artisan.image} 
                        alt={artisan.name} 
                        className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                      />
                      {artisan.verified && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-[#D4AF37] text-white">
                            <CircleCheck className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="pt-6 flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{artisan.name}</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-[#D4AF37] fill-[#D4AF37]" />
                          <span className="ml-1 text-sm font-medium">{artisan.rating}</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <span className="text-[#D4AF37] font-medium">{artisan.serviceType}</span>
                        <span className="text-gray-500 text-sm ml-2">{artisan.experience} years exp.</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{artisan.tagline}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {artisan.availability}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button 
                        variant="default" 
                        className="w-full" 
                        onClick={() => handleBookNow(artisan.id)}
                      >
                        Request Service
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <div className="mx-auto w-16 h-16 mb-4 text-gray-300">
                  <Search className="w-full h-full" />
                </div>
                <h3 className="text-xl font-medium mb-2">No artisans found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your filters or search term.</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setServiceFilter('all');
                    setExperienceFilter('any');
                    setRatingFilter('any');
                    navigate('/artisans');
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* CTA Section */}
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
                onClick={() => navigate('/book?service=facility-management')}
              >
                Request Consultation
              </Button>
              <Button 
                variant="outline-gold" 
                size="lg" 
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Artisans;
