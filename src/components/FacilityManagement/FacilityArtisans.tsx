import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plug, ShowerHead, Users, Star, Hammer, Wrench } from 'lucide-react';

interface Artisan {
  id: number;
  name: string;
  image: string;
  serviceType: string;
  experience: number;
  tagline: string;
  verified: boolean;
}

interface ServiceCategory {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

const FacilityArtisans: React.FC = () => {
  // Featured artisans
  const featuredArtisans = [
    {
      id: 1,
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300',
      serviceType: 'Electrician',
      experience: 12,
      tagline: 'Certified master electrician specializing in commercial wiring and smart systems',
      verified: true,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?q=80&w=300',
      serviceType: 'Plumber',
      experience: 8,
      tagline: 'Expert in plumbing repairs, installations and water system optimization',
      verified: true,
    },
    {
      id: 3,
      name: 'David Williams',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300',
      serviceType: 'HVAC Specialist',
      experience: 15,
      tagline: 'Specializing in commercial HVAC systems installation and maintenance',
      verified: true,
    },
    {
      id: 4,
      name: 'Elena Rodriguez',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300',
      serviceType: 'Cleaning Supervisor',
      experience: 6,
      tagline: 'Leads teams for commercial deep cleaning and sanitization services',
      verified: true,
    },
  ];

  // Service categories
  const serviceCategories = [
    { id: 'all', label: 'All Services' },
    { id: 'electrical', label: 'Electrical', icon: <Plug className="h-4 w-4 mr-1" /> },
    { id: 'plumbing', label: 'Plumbing', icon: <ShowerHead className="h-4 w-4 mr-1" /> },
    { id: 'general', label: 'General Maintenance', icon: <Hammer className="h-4 w-4 mr-1" /> },
    { id: 'hvac', label: 'HVAC', icon: <Wrench className="h-4 w-4 mr-1" /> },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Professional Artisans</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Access our network of vetted and experienced professionals specialized in various aspects of facility management and maintenance. Our artisans are available for both scheduled services and emergency responses.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto mb-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
            {serviceCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center justify-center">
                {category.icon}
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredArtisans.map((artisan) => (
                <Card key={artisan.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={artisan.image} 
                      alt={artisan.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{artisan.name}</h3>
                      {artisan.verified && (
                        <Badge variant="outline" className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]">
                          <Star className="h-3 w-3 mr-1 fill-[#D4AF37]" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="mb-3">
                      <span className="text-[#D4AF37] font-medium">{artisan.serviceType}</span>
                      <span className="text-gray-500 text-sm ml-2">{artisan.experience} years exp.</span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">{artisan.tagline}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline-gold" size="sm" className="w-full">
                      Request Service
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/artisans">
                <Button variant="default" size="lg">
                  <Users className="mr-2 h-5 w-5" />
                  View All Artisans
                </Button>
              </Link>
            </div>
          </TabsContent>
          
          {/* Other tabs would show filtered artisans */}
          {serviceCategories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredArtisans
                  .filter(a => 
                    (category.id === 'electrical' && a.serviceType === 'Electrician') ||
                    (category.id === 'plumbing' && a.serviceType === 'Plumber') ||
                    (category.id === 'hvac' && a.serviceType === 'HVAC Specialist') ||
                    (category.id === 'general' && ['Cleaning Supervisor'].includes(a.serviceType))
                  )
                  .map((artisan) => (
                    <Card key={artisan.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-square relative overflow-hidden">
                        <img 
                          src={artisan.image} 
                          alt={artisan.name} 
                          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">{artisan.name}</h3>
                          {artisan.verified && (
                            <Badge variant="outline" className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]">
                              <Star className="h-3 w-3 mr-1 fill-[#D4AF37]" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="mb-3">
                          <span className="text-[#D4AF37] font-medium">{artisan.serviceType}</span>
                          <span className="text-gray-500 text-sm ml-2">{artisan.experience} years exp.</span>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-2">{artisan.tagline}</p>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button variant="outline-gold" size="sm" className="w-full">
                          Request Service
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
              
              <div className="mt-10 text-center">
                <Link to={`/artisans?filter=${category.id}`}>
                  <Button variant="default" size="lg">
                    <Users className="mr-2 h-5 w-5" />
                    View All {category.label}
                  </Button>
                </Link>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FacilityArtisans;
