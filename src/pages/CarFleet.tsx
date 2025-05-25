
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';

const CarFleet = () => {
  const cars = [
    {
      id: 1,
      name: 'Mercedes S-Class',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
      shortDescription: 'Automatic · Leather Interior · V8 Engine',
      fullDescription: 'Experience ultimate luxury with the flagship Mercedes S-Class. This premium sedan features advanced driver assistance, massage seats, and a whisper-quiet cabin perfect for executive travel.',
      specs: ['V8 Twin-Turbo Engine', 'Massage Seats', 'Premium Sound System', 'Advanced Safety Features']
    },
    {
      id: 2,
      name: 'Porsche 911 Carrera',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070',
      shortDescription: 'Manual/Auto · Sports Seats · Flat-6 Engine',
      fullDescription: 'The iconic Porsche 911 delivers pure driving excitement with its legendary flat-six engine and precise handling. Perfect for weekend getaways and special occasions.',
      specs: ['3.0L Flat-6 Engine', 'Sport Chrono Package', 'Premium Audio', 'Carbon Fiber Accents']
    },
    {
      id: 3,
      name: 'Range Rover Autobiography',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2070',
      shortDescription: 'Automatic · All-Terrain · Luxury Interior',
      fullDescription: 'Command any terrain with the Range Rover Autobiography. This luxury SUV combines off-road capability with on-road refinement and executive-level comfort.',
      specs: ['All-Terrain Capability', 'Air Suspension', 'Luxury Interior', 'Advanced Infotainment']
    },
    {
      id: 4,
      name: 'BMW 7 Series',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070',
      shortDescription: 'Automatic · Executive Lounge · Twin-Turbo',
      fullDescription: 'The BMW 7 Series redefines luxury sedan standards with its spacious executive lounge rear compartment and cutting-edge technology.',
      specs: ['Executive Lounge Seating', 'Gesture Control', 'Surround Sound', 'Active Comfort']
    },
    {
      id: 5,
      name: 'Lamborghini Huracán',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2070',
      shortDescription: 'Manual · Carbon Fiber · V10 Engine',
      fullDescription: 'Experience pure Italian performance with the Lamborghini Huracán. This supercar delivers breathtaking acceleration and head-turning style.',
      specs: ['5.2L V10 Engine', 'Carbon Fiber Body', 'Sport Exhaust', 'Track Performance']
    },
    {
      id: 6,
      name: 'Bentley Continental GT',
      image: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?q=80&w=2070',
      shortDescription: 'Automatic · Handcrafted Interior · W12 Engine',
      fullDescription: 'The Bentley Continental GT combines British luxury with impressive performance. Handcrafted details and a powerful W12 engine create an unforgettable driving experience.',
      specs: ['6.0L W12 Engine', 'Handcrafted Interior', 'Diamond Quilted Seats', 'Naim Audio']
    },
    {
      id: 7,
      name: 'Audi R8',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070',
      shortDescription: 'Automatic · Carbon Cabin · V10 Plus',
      fullDescription: 'The Audi R8 brings race-inspired performance to the road with its naturally aspirated V10 engine and quattro all-wheel drive system.',
      specs: ['5.2L V10 Plus', 'Carbon Fiber Cabin', 'Quattro AWD', 'Virtual Cockpit']
    },
    {
      id: 8,
      name: 'Ferrari 488 GTB',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070',
      shortDescription: 'Manual · Racing Seats · Twin-Turbo V8',
      fullDescription: 'The Ferrari 488 GTB delivers exceptional performance with its twin-turbocharged V8 engine and aerodynamic design inspired by Formula 1.',
      specs: ['3.9L Twin-Turbo V8', 'Racing Technology', 'Aerodynamic Design', 'Launch Control']
    },
    {
      id: 9,
      name: 'Rolls-Royce Ghost',
      image: 'https://images.unsplash.com/photo-1631295868785-d4f06cd7a6e6?q=80&w=2070',
      shortDescription: 'Automatic · Luxury Cabin · V12 Engine',
      fullDescription: 'The Rolls-Royce Ghost represents the pinnacle of automotive luxury with its serene cabin, powerful V12 engine, and meticulous attention to detail.',
      specs: ['6.75L V12 Engine', 'Magic Carpet Ride', 'Starlight Headliner', 'Bespoke Interior']
    },
    {
      id: 10,
      name: 'McLaren 720S',
      image: 'https://images.unsplash.com/photo-1558618047-0c4c245e28e0?q=80&w=2070',
      shortDescription: 'Automatic · Track Mode · Twin-Turbo V8',
      fullDescription: 'The McLaren 720S combines supercar performance with everyday usability, featuring advanced aerodynamics and a lightweight carbon fiber chassis.',
      specs: ['4.0L Twin-Turbo V8', 'Carbon Fiber Chassis', 'Active Aerodynamics', 'Track Telemetry']
    }
  ];

  return (
    <ServiceLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Explore Our Car Fleet
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Choose from our selection of luxury, exotic, and executive vehicles.
            </motion.p>
          </div>
        </section>

        {/* Fleet Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                      <p className="text-gray-600 mb-4">{car.shortDescription}</p>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-[#D6AC2E] hover:bg-[#B8941F] text-white">
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">{car.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <img
                              src={car.image}
                              alt={car.name}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                            <p className="text-gray-700">{car.fullDescription}</p>
                            <div>
                              <h4 className="font-semibold mb-2">Key Features:</h4>
                              <ul className="grid grid-cols-2 gap-2">
                                {car.specs.map((spec, idx) => (
                                  <li key={idx} className="text-sm text-gray-600">• {spec}</li>
                                ))}
                              </ul>
                            </div>
                            <Link to="/book?service=car-hire">
                              <Button className="w-full bg-[#D6AC2E] hover:bg-[#B8941F] text-white">
                                Book Car
                              </Button>
                            </Link>
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
      </div>
    </ServiceLayout>
  );
};

export default CarFleet;
