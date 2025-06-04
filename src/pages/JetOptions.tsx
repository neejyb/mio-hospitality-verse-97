
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import ServiceLayout from '@/components/ServiceLayout';
import WhatsAppCTA from '@/components/WhatsAppCTA';

const JetOptions = () => {
  const navigate = useNavigate();
  
  const jets = [{
    id: 1,
    name: 'Gulfstream G650',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070',
    shortDescription: '16-seat · Executive Cabin · WiFi Included',
    fullDescription: 'The flagship of luxury aviation, the Gulfstream G650 offers unparalleled comfort and range. With its spacious cabin and advanced avionics, it sets the standard for ultra-long-range business jets.',
    specs: ['Range: 7,000 nautical miles', 'Max Speed: Mach 0.925', 'Cabin Height: 6.2 feet', 'High-Speed Internet', 'Luxury Galley', 'Private Lavatory'],
    price: '$8,500/hour',
    tag: 'Ultra Long Range'
  }, {
    id: 2,
    name: 'Bombardier Global 7500',
    image: 'https://images.unsplash.com/photo-1583992781145-4b80b2dd2ba0?q=80&w=2070',
    shortDescription: '14-seat · Four Living Spaces · Master Suite',
    fullDescription: 'The world\'s largest and longest-range business jet, featuring four distinct living spaces including a master suite with a permanent bed and stand-up shower.',
    specs: ['Range: 7,700 nautical miles', 'Max Speed: Mach 0.925', 'Four Living Spaces', 'Master Suite with Bed', 'Stand-up Shower', 'Advanced Connectivity'],
    price: '$9,200/hour',
    tag: 'Ultra Long Range'
  }, {
    id: 3,
    name: 'Cessna Citation X+',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070',
    shortDescription: '10-seat · High Speed · Premium Cabin',
    fullDescription: 'The fastest civilian aircraft in the world, the Citation X+ combines speed with luxury. Perfect for time-sensitive travel with its ability to reach Mach 0.935.',
    specs: ['Range: 3,460 nautical miles', 'Max Speed: Mach 0.935', 'Fastest Civilian Aircraft', 'Advanced Flight Deck', 'Premium Materials', 'Spacious Cabin'],
    price: '$5,800/hour',
    tag: 'Super Mid-Size'
  }, {
    id: 4,
    name: 'Embraer Phenom 300E',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070',
    shortDescription: '8-seat · Light Jet · Efficient Performance',
    fullDescription: 'The most delivered light jet for multiple years running, the Phenom 300E offers excellent performance and comfort for shorter regional flights with surprising cabin space.',
    specs: ['Range: 2,010 nautical miles', 'Max Speed: 464 knots', 'Largest Cabin in Class', 'Advanced Avionics', 'Quiet Cabin', 'Excellent Fuel Efficiency'],
    price: '$3,200/hour',
    tag: 'Light Jet'
  }];

  const handleBookNow = (jet: typeof jets[0]) => {
    const jetData = {
      id: jet.id,
      name: jet.name,
      image: jet.image,
      price: jet.price,
      tag: jet.tag,
      description: jet.fullDescription,
      features: jet.specs
    };
    navigate(`/book?service=jet-hire&selectedJet=${encodeURIComponent(JSON.stringify(jetData))}`);
  };

  return (
    <ServiceLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-blue-900/80 to-blue-700/80">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074)'
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
                Elevate Your Journey
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-blue-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover our premium private jet experiences
              </motion.p>
            </div>
          </div>
        </section>

        {/* Jets Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {jets.map((jet, index) => (
                <motion.div 
                  key={jet.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={jet.image} 
                        alt={jet.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070';
                        }}
                      />
                      <div className="absolute top-2 right-2 text-white px-2 py-1 rounded text-xs font-medium bg-red-950">
                        {jet.tag}
                      </div>
                    </div>
                    <CardContent className="p-4 flex-grow flex flex-col">
                      <h3 className="text-lg font-bold mb-1 line-clamp-2">{jet.name}</h3>
                      <p className="text-[#D4AF37] font-semibold mb-2">{jet.price}</p>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{jet.shortDescription}</p>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full h-10 text-white font-medium rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 bg-[#4b1604]">
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] h-[600px] p-0 gap-0 overflow-hidden flex flex-col">
                          <DialogHeader className="p-6 pb-0 flex-shrink-0">
                            <DialogTitle className="text-2xl font-bold">{jet.name}</DialogTitle>
                          </DialogHeader>
                          <div className="flex-1 overflow-y-auto p-6 pt-0">
                            <div className="space-y-4">
                              <img 
                                src={jet.image} 
                                alt={jet.name} 
                                className="w-full h-64 object-cover rounded-lg"
                                onError={(e) => {
                                  e.currentTarget.src = 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070';
                                }}
                              />
                              <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold text-[#D4AF37]">{jet.price}</span>
                                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">{jet.tag}</span>
                              </div>
                              <p className="text-gray-700">{jet.fullDescription}</p>
                              <div>
                                <h4 className="font-semibold mb-2">Specifications:</h4>
                                <ul className="grid grid-cols-1 gap-2">
                                  {jet.specs.map((spec, idx) => (
                                    <li key={idx} className="text-sm text-gray-600">• {spec}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="p-6 pt-0 flex-shrink-0">
                            <Button 
                              onClick={() => handleBookNow(jet)}
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
      </div>
    </ServiceLayout>
  );
};

export default JetOptions;
