
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { cars } from '@/data/cars';

const CarFleet = () => {
  const navigate = useNavigate();

  const handleBookNow = (car: typeof cars[0]) => {
    const carData = {
      id: car.id,
      name: car.name,
      image: car.image,
      price: car.price,
      category: car.category,
      description: car.description,
      features: car.features
    };
    navigate(`/book?service=car-hire&selectedCar=${encodeURIComponent(JSON.stringify(carData))}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-gray-900/80 to-gray-700/80">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070)'
            }}
          />
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

        {/* Cars Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {cars.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={car.image} 
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070';
                        }}
                      />
                      <div className="absolute top-2 right-2 bg-[#D4AF37] text-white px-2 py-1 rounded text-xs font-medium">
                        {car.category}
                      </div>
                    </div>
                    <CardContent className="p-4 flex-grow flex flex-col">
                      <h3 className="text-lg font-bold mb-1 line-clamp-2">{car.name}</h3>
                      <p className="text-[#D4AF37] font-semibold mb-2">${car.price}/day</p>
                      <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">{car.description}</p>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="w-full h-10 bg-[#D4AF37] hover:bg-[#B4941F] text-white font-medium rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
                          >
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
                                src={car.image} 
                                alt={car.name}
                                className="w-full h-64 object-cover rounded-lg"
                                onError={(e) => {
                                  e.currentTarget.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070';
                                }}
                              />
                              <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold text-[#D4AF37]">${car.price}/day</span>
                                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">{car.category}</span>
                              </div>
                              <p className="text-gray-700">{car.description}</p>
                              <div>
                                <h4 className="font-semibold mb-2">Features:</h4>
                                <ul className="grid grid-cols-1 gap-2">
                                  {car.features.map((feature, idx) => (
                                    <li key={idx} className="text-sm text-gray-600">• {feature}</li>
                                  ))}
                                </ul>
                              </div>
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
          </div>
        </section>
        
        <WhatsAppCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default CarFleet;
