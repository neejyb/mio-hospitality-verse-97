import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Link, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import WhatsAppCTA from '@/components/WhatsAppCTA';

const CarFleet = () => {
  const navigate = useNavigate();
  
  const cars = [{
    id: 1,
    name: 'Mercedes S-Class',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
    shortDescription: 'Luxury Sedan · Leather Interior · V8 Engine',
    fullDescription: 'Experience ultimate luxury with the flagship Mercedes S-Class. This premium sedan features advanced driver assistance, massage seats, and a whisper-quiet cabin perfect for executive travel.',
    specs: ['V8 Twin-Turbo Engine', 'Massage Seats', 'Premium Sound System', 'Advanced Safety Features'],
    price: '$350/day',
    tag: 'Luxury Sedan'
  }, {
    id: 2,
    name: 'Porsche 911 Carrera',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070',
    shortDescription: 'Sports Car · Manual/Auto · Flat-6 Engine',
    fullDescription: 'The iconic Porsche 911 delivers pure driving excitement with its legendary flat-six engine and precise handling. Perfect for weekend getaways and special occasions.',
    specs: ['3.0L Flat-6 Engine', 'Sport Chrono Package', 'Premium Audio', 'Carbon Fiber Accents'],
    price: '$450/day',
    tag: 'Sports Car'
  }, {
    id: 3,
    name: 'Range Rover Autobiography',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2070',
    shortDescription: 'Luxury SUV · All-Terrain · Luxury Interior',
    fullDescription: 'Command any terrain with the Range Rover Autobiography. This luxury SUV combines off-road capability with on-road refinement and executive-level comfort.',
    specs: ['All-Terrain Capability', 'Air Suspension', 'Luxury Interior', 'Advanced Infotainment'],
    price: '$400/day',
    tag: 'Luxury SUV'
  }, {
    id: 4,
    name: 'BMW 7 Series',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070',
    shortDescription: 'Executive Sedan · Executive Lounge · Twin-Turbo',
    fullDescription: 'The BMW 7 Series redefines luxury sedan standards with its spacious executive lounge rear compartment and cutting-edge technology.',
    specs: ['Executive Lounge Seating', 'Gesture Control', 'Surround Sound', 'Active Comfort'],
    price: '$320/day',
    tag: 'Executive Sedan'
  }, {
    id: 5,
    name: 'Lamborghini Huracán',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2070',
    shortDescription: 'Supercar · Manual · V10 Engine',
    fullDescription: 'Experience pure Italian performance with the Lamborghini Huracán. This supercar delivers breathtaking acceleration and head-turning style.',
    specs: ['5.2L V10 Engine', 'Carbon Fiber Body', 'Sport Exhaust', 'Track Performance'],
    price: '$800/day',
    tag: 'Supercar'
  }, {
    id: 6,
    name: 'Bentley Continental GT',
    image: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?q=80&w=2070',
    shortDescription: 'Grand Tourer · Handcrafted Interior · W12 Engine',
    fullDescription: 'The Bentley Continental GT combines British luxury with impressive performance. Handcrafted details and a powerful W12 engine create an unforgettable driving experience.',
    specs: ['6.0L W12 Engine', 'Handcrafted Interior', 'Diamond Quilted Seats', 'Naim Audio'],
    price: '$600/day',
    tag: 'Grand Tourer'
  }, {
    id: 7,
    name: 'Audi R8',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070',
    shortDescription: 'Supercar · Automatic · V10 Plus',
    fullDescription: 'The Audi R8 brings race-inspired performance to the road with its naturally aspirated V10 engine and quattro all-wheel drive system.',
    specs: ['5.2L V10 Plus', 'Carbon Fiber Cabin', 'Quattro AWD', 'Virtual Cockpit'],
    price: '$750/day',
    tag: 'Supercar'
  }, {
    id: 8,
    name: 'Ferrari 488 GTB',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070',
    shortDescription: 'Supercar · Manual · Twin-Turbo V8',
    fullDescription: 'The Ferrari 488 GTB delivers exceptional performance with its twin-turbocharged V8 engine and aerodynamic design inspired by Formula 1.',
    specs: ['3.9L Twin-Turbo V8', 'Racing Technology', 'Aerodynamic Design', 'Launch Control'],
    price: '$900/day',
    tag: 'Supercar'
  }, {
    id: 9,
    name: 'Rolls-Royce Ghost',
    image: 'https://images.unsplash.com/photo-1631295868785-d4f06cd7a6e6?q=80&w=2070',
    shortDescription: 'Ultra Luxury · Automatic · V12 Engine',
    fullDescription: 'The Rolls-Royce Ghost represents the pinnacle of automotive luxury with its serene cabin, powerful V12 engine, and meticulous attention to detail.',
    specs: ['6.75L V12 Engine', 'Magic Carpet Ride', 'Starlight Headliner', 'Bespoke Interior'],
    price: '$1200/day',
    tag: 'Ultra Luxury'
  }, {
    id: 10,
    name: 'McLaren 720S',
    image: 'https://images.unsplash.com/photo-1558618047-0c4c245e28e0?q=80&w=2070',
    shortDescription: 'Supercar · Automatic · Twin-Turbo V8',
    fullDescription: 'The McLaren 720S combines supercar performance with everyday usability, featuring advanced aerodynamics and a lightweight carbon fiber chassis.',
    specs: ['4.0L Twin-Turbo V8', 'Carbon Fiber Chassis', 'Active Aerodynamics', 'Track Telemetry'],
    price: '$850/day',
    tag: 'Supercar'
  }, {
    id: 11,
    name: 'Tesla Model S Plaid',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070',
    shortDescription: 'Electric Sedan · Autopilot · Tri-Motor',
    fullDescription: 'The Tesla Model S Plaid delivers incredible acceleration with its tri-motor setup while offering cutting-edge technology and sustainable luxury.',
    specs: ['Tri-Motor Setup', 'Autopilot', '17" Touchscreen', 'Supercharging'],
    price: '$300/day',
    tag: 'Electric Luxury'
  }, {
    id: 12,
    name: 'Maserati Quattroporte',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2070',
    shortDescription: 'Executive Sedan · V6 Engine · Italian Luxury',
    fullDescription: 'The Maserati Quattroporte combines Italian elegance with executive comfort, featuring a powerful V6 engine and distinctive styling.',
    specs: ['3.0L V6 Twin-Turbo', 'Italian Leather', 'Bowers & Wilkins Audio', 'Sport Mode'],
    price: '$380/day',
    tag: 'Executive Sedan'
  }, {
    id: 13,
    name: 'Jaguar F-Type R',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070',
    shortDescription: 'Sports Car · Convertible · V8 Engine',
    fullDescription: 'The Jaguar F-Type R offers thrilling performance with its supercharged V8 engine and stunning convertible design perfect for spirited drives.',
    specs: ['5.0L Supercharged V8', 'Convertible Top', 'Meridian Audio', 'Performance Exhaust'],
    price: '$420/day',
    tag: 'Sports Car'
  }, {
    id: 14,
    name: 'Aston Martin DB11',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?q=80&w=2070',
    shortDescription: 'Grand Tourer · V8 Engine · British Luxury',
    fullDescription: 'The Aston Martin DB11 epitomizes British grand touring with its elegant design, powerful V8 engine, and handcrafted luxury interior.',
    specs: ['4.0L V8 Twin-Turbo', 'Carbon Fiber', 'Bang & Olufsen Audio', 'Adaptive Dampers'],
    price: '$650/day',
    tag: 'Grand Tourer'
  }, {
    id: 15,
    name: 'Cadillac Escalade',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2070',
    shortDescription: 'Luxury SUV · V8 Engine · 7-Seater',
    fullDescription: 'The Cadillac Escalade provides spacious luxury for large groups with its commanding presence, premium interior, and advanced technology.',
    specs: ['6.2L V8 Engine', '7-Passenger Seating', '36-Speaker Audio', 'Super Cruise'],
    price: '$280/day',
    tag: 'Luxury SUV'
  }];

  const handleBookNow = (car: typeof cars[0]) => {
    const carData = {
      id: car.id,
      name: car.name,
      image: car.image,
      price: car.price,
      tag: car.tag,
      description: car.fullDescription,
      features: car.specs
    };
    navigate(`/book?service=car-hire&selectedCar=${encodeURIComponent(JSON.stringify(carData))}`);
  };

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
              <motion.h1 className="text-4xl md:text-6xl font-bold mb-4" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }}>
                Drive in Style
              </motion.h1>
              <motion.p className="text-xl md:text-2xl text-gray-200" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
                Explore our curated fleet of luxury vehicles
              </motion.p>
            </div>
          </div>
        </section>

        {/* Fleet Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {cars.map((car, index) => (
                <motion.div key={car.id} initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.5,
                  delay: index * 0.05
                }} viewport={{
                  once: true
                }}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={e => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070';
                      }} />
                      <div className="absolute top-2 right-2 text-white px-2 py-1 rounded text-xs font-medium bg-red-950">
                        {car.tag}
                      </div>
                    </div>
                    <CardContent className="p-4 flex-grow flex flex-col">
                      <h3 className="text-lg font-bold mb-1 line-clamp-2">{car.name}</h3>
                      <p className="text-[#D4AF37] font-semibold mb-2">{car.price}</p>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{car.shortDescription}</p>
                      
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
                              <img src={car.image} alt={car.name} className="w-full h-64 object-cover rounded-lg" onError={e => {
                                e.currentTarget.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070';
                              }} />
                              <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold text-[#D4AF37]">{car.price}</span>
                                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">{car.tag}</span>
                              </div>
                              <p className="text-gray-700">{car.fullDescription}</p>
                              <div>
                                <h4 className="font-semibold mb-2">Key Features:</h4>
                                <ul className="grid grid-cols-2 gap-2">
                                  {car.specs.map((spec, idx) => (
                                    <li key={idx} className="text-sm text-gray-600">• {spec}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="p-6 pt-0 flex-shrink-0">
                            <Button onClick={() => handleBookNow(car)} className="w-full h-12 bg-[#D4AF37] hover:bg-[#B4941F] text-white font-medium rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
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
      </div>
    </ServiceLayout>
  );
};

export default CarFleet;
