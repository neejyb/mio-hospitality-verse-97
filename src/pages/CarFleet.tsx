
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import ServiceLayout from '@/components/ServiceLayout';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { useAllCars, type Car } from '@/hooks/useCars';

const CarFleet = () => {
  const navigate = useNavigate();
  const { data: cars = [], isLoading } = useAllCars();

  const handleBookNow = (car: Car) => {
    const carData = {
      id: car.id,
      name: car.name,
      image: car.main_image,
      price: `$${car.price_per_day}/day`,
      tag: car.category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: car.description || '',
      features: car.features || []
    };
    navigate(`/book?service=car-hire&selectedCar=${encodeURIComponent(JSON.stringify(carData))}`);
  };

  const formatCategory = (category: string) => {
    return category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  if (isLoading) {
    return (
      <ServiceLayout>
        <div className="min-h-screen bg-white">
          <section className="relative h-96 bg-gradient-to-r from-gray-900/80 to-gray-700/80">
            <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070)'
            }} />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Drive in Style</h1>
                <p className="text-xl md:text-2xl text-gray-200">Loading our curated fleet...</p>
              </div>
            </div>
          </section>
        </div>
      </ServiceLayout>
    );
  }

  return (
    <ServiceLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-gray-900/80 to-gray-700/80">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070)'
          }} />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
            <div className="text-white">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-4" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
              >
                Drive in Style
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-200" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Explore our curated fleet of luxury vehicles
              </motion.p>
            </div>
          </div>
        </section>

        {/* Fleet Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {cars.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">No vehicles available</h3>
                <p className="text-gray-600">Please check back later for our luxury car fleet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {cars.map((car, index) => (
                  <motion.div 
                    key={car.id} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: index * 0.05 }} 
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={car.main_image} 
                          alt={car.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070';
                          }} 
                        />
                        <div className="absolute top-2 right-2 text-white px-2 py-1 rounded text-xs font-medium bg-red-950">
                          {formatCategory(car.category)}
                        </div>
                      </div>
                      <CardContent className="p-4 flex-grow flex flex-col">
                        <h3 className="text-lg font-bold mb-1 line-clamp-2">{car.name}</h3>
                        <p className="text-[#D4AF37] font-semibold mb-2">${car.price_per_day}/day</p>
                        <p className="text-gray-600 text-sm mb-4 flex-grow">
                          {car.description || `${formatCategory(car.category)} vehicle`}
                        </p>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full h-10 text-white font-medium rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 bg-[#450800]">
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] h-[600px] p-0 gap-0 overflow-hidden flex flex-col">
                            <DialogHeader className="p-6 pb-0 flex-shrink-0">
                              <DialogTitle className="text-2xl font-bold">{car.name}</DialogTitle>
                            </DialogHeader>
                            <div className="flex-1 overflow-y-auto p-6 pt-0">
                              <div className="space-y-4">
                                <img 
                                  src={car.main_image} 
                                  alt={car.name} 
                                  className="w-full h-64 object-cover rounded-lg" 
                                  onError={(e) => {
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070';
                                  }} 
                                />
                                <div className="flex justify-between items-center">
                                  <span className="text-2xl font-bold text-[#D4AF37]">${car.price_per_day}/day</span>
                                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                                    {formatCategory(car.category)}
                                  </span>
                                </div>
                                <p className="text-gray-700">{car.description}</p>
                                {car.features && car.features.length > 0 && (
                                  <div>
                                    <h4 className="font-semibold mb-2">Key Features:</h4>
                                    <ul className="grid grid-cols-2 gap-2">
                                      {car.features.map((feature, idx) => (
                                        <li key={idx} className="text-sm text-gray-600">• {feature}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="p-6 pt-0 flex-shrink-0">
                              <Button 
                                onClick={() => handleBookNow(car)} 
                                className="w-full h-12 bg-[#D4AF37] hover:bg-[#B4941F] text-white font-medium rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
                              >
                                Book Now
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
        
        <WhatsAppCTA />
      </div>
    </ServiceLayout>
  );
};

export default CarFleet;
