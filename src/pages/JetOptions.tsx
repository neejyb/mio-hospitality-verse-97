
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import ServiceLayout from '@/components/ServiceLayout';

const JetOptions = () => {
  const jets = [
    {
      id: 1,
      name: 'Gulfstream G650',
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070',
      shortDescription: '16-seat · Executive Cabin · WiFi Included',
      fullDescription: 'The flagship of luxury aviation, the Gulfstream G650 offers unparalleled comfort and range. With its spacious cabin and advanced avionics, it sets the standard for ultra-long-range business jets.',
      specs: ['Range: 7,000 nautical miles', 'Max Speed: Mach 0.925', 'Cabin Height: 6.2 feet', 'High-Speed Internet', 'Luxury Galley', 'Private Lavatory']
    },
    {
      id: 2,
      name: 'Bombardier Global 7500',
      image: 'https://images.unsplash.com/photo-1583992781145-4b80b2dd2ba0?q=80&w=2070',
      shortDescription: '14-seat · Four Living Spaces · Master Suite',
      fullDescription: 'The world\'s largest and longest-range business jet, featuring four distinct living spaces including a master suite with a permanent bed and stand-up shower.',
      specs: ['Range: 7,700 nautical miles', 'Max Speed: Mach 0.925', 'Four Living Spaces', 'Master Suite with Bed', 'Stand-up Shower', 'Advanced Connectivity']
    },
    {
      id: 3,
      name: 'Cessna Citation X+',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070',
      shortDescription: '10-seat · High Speed · Premium Cabin',
      fullDescription: 'The fastest civilian aircraft in the world, the Citation X+ combines speed with luxury. Perfect for time-sensitive travel with its ability to reach Mach 0.935.',
      specs: ['Range: 3,460 nautical miles', 'Max Speed: Mach 0.935', 'Fastest Civilian Aircraft', 'Advanced Flight Deck', 'Premium Materials', 'Spacious Cabin']
    },
    {
      id: 4,
      name: 'Embraer Phenom 300E',
      image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070',
      shortDescription: '8-seat · Light Jet · Efficient Performance',
      fullDescription: 'The most delivered light jet for multiple years running, the Phenom 300E offers excellent performance and comfort for shorter regional flights with surprising cabin space.',
      specs: ['Range: 2,010 nautical miles', 'Max Speed: 464 knots', 'Largest Cabin in Class', 'Advanced Avionics', 'Quiet Cabin', 'Excellent Fuel Efficiency']
    }
  ];

  return (
    <ServiceLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Available Jet Options
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Browse our premium charter jets for your next luxury flight.
            </motion.p>
          </div>
        </section>

        {/* Jets Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {jets.map((jet, index) => (
                <motion.div
                  key={jet.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64">
                      <img
                        src={jet.image}
                        alt={jet.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{jet.name}</h3>
                      <p className="text-gray-600 mb-4">{jet.shortDescription}</p>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-[#D6AC2E] hover:bg-[#B8941F] text-white">
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">{jet.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <img
                              src={jet.image}
                              alt={jet.name}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                            <p className="text-gray-700">{jet.fullDescription}</p>
                            <div>
                              <h4 className="font-semibold mb-2">Specifications:</h4>
                              <ul className="grid grid-cols-1 gap-2">
                                {jet.specs.map((spec, idx) => (
                                  <li key={idx} className="text-sm text-gray-600">• {spec}</li>
                                ))}
                              </ul>
                            </div>
                            <Link to="/book?service=jet-hire">
                              <Button className="w-full bg-[#D6AC2E] hover:bg-[#B8941F] text-white">
                                Book a Jet
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

export default JetOptions;
