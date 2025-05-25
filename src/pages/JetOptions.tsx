
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';

const JetOptions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCapacity, setSelectedCapacity] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const jets = [
    {
      id: 1,
      name: 'Gulfstream G650',
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070',
      price: 8500,
      capacity: '16-seat',
      features: ['Ultra Long Range', 'Executive Cabin', 'WiFi Included', 'Luxury Galley'],
      description: 'The flagship of luxury aviation, the Gulfstream G650 offers unparalleled comfort and range. With its spacious cabin and advanced avionics, it sets the standard for ultra-long-range business jets.',
      specs: ['Range: 7,000 nautical miles', 'Max Speed: Mach 0.925', 'Cabin Height: 6.2 feet', 'High-Speed Internet', 'Luxury Galley', 'Private Lavatory']
    },
    {
      id: 2,
      name: 'Bombardier Global 7500',
      image: 'https://images.unsplash.com/photo-1583992781145-4b80b2dd2ba0?q=80&w=2070',
      price: 9200,
      capacity: '14-seat',
      features: ['Longest Range', 'Four Living Spaces', 'Master Suite', 'Stand-up Shower'],
      description: 'The world\'s largest and longest-range business jet, featuring four distinct living spaces including a master suite with a permanent bed and stand-up shower.',
      specs: ['Range: 7,700 nautical miles', 'Max Speed: Mach 0.925', 'Four Living Spaces', 'Master Suite with Bed', 'Stand-up Shower', 'Advanced Connectivity']
    },
    {
      id: 3,
      name: 'Cessna Citation X+',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070',
      price: 4800,
      capacity: '10-seat',
      features: ['Fastest Speed', 'High Speed', 'Premium Cabin', 'Advanced Flight Deck'],
      description: 'The fastest civilian aircraft in the world, the Citation X+ combines speed with luxury. Perfect for time-sensitive travel with its ability to reach Mach 0.935.',
      specs: ['Range: 3,460 nautical miles', 'Max Speed: Mach 0.935', 'Fastest Civilian Aircraft', 'Advanced Flight Deck', 'Premium Materials', 'Spacious Cabin']
    },
    {
      id: 4,
      name: 'Embraer Phenom 300E',
      image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070',
      price: 3200,
      capacity: '8-seat',
      features: ['Light Jet', 'Efficient Performance', 'Largest Cabin', 'Quiet Cabin'],
      description: 'The most delivered light jet for multiple years running, the Phenom 300E offers excellent performance and comfort for shorter regional flights with surprising cabin space.',
      specs: ['Range: 2,010 nautical miles', 'Max Speed: 464 knots', 'Largest Cabin in Class', 'Advanced Avionics', 'Quiet Cabin', 'Excellent Fuel Efficiency']
    }
  ];

  const filteredJets = jets.filter(jet => {
    const matchesSearch = jet.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCapacity = selectedCapacity === 'all' || jet.capacity === selectedCapacity;
    const matchesPrice = jet.price >= priceRange[0] && jet.price <= priceRange[1];
    return matchesSearch && matchesCapacity && matchesPrice;
  });

  return (
    <ServiceLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section 
          className="relative h-[60vh] bg-cover bg-center flex items-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070)' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10 text-white">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Available Private Jets
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore our executive charter jet options built for speed, luxury, and privacy.
            </motion.p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by jet name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <label className="block text-sm font-medium mb-2">Seating Capacity</label>
                <Select value={selectedCapacity} onValueChange={setSelectedCapacity}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Capacities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Capacities</SelectItem>
                    <SelectItem value="8-seat">8-seat</SelectItem>
                    <SelectItem value="10-seat">10-seat</SelectItem>
                    <SelectItem value="14-seat">14-seat</SelectItem>
                    <SelectItem value="16-seat">16-seat</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-64">
                <label className="block text-sm font-medium mb-2">Price Range (per hour)</label>
                <div className="px-3">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={10000}
                    min={0}
                    step={500}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jets Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJets.map((jet, index) => (
                <motion.div
                  key={jet.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-48">
                      <img
                        src={jet.image}
                        alt={jet.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{jet.name}</h3>
                      <p className="text-2xl font-bold text-[#D6AC2E] mb-3">${jet.price}/hour</p>
                      <ul className="space-y-1 mb-4">
                        {jet.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600">• {feature}</li>
                        ))}
                      </ul>
                      
                      <div className="flex gap-3">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="flex-1 border-[#D6AC2E] text-[#D6AC2E] hover:bg-[#D6AC2E] hover:text-white">
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
                              <p className="text-gray-700">{jet.description}</p>
                              <div>
                                <h4 className="font-semibold mb-2">Specifications:</h4>
                                <ul className="grid grid-cols-1 gap-2">
                                  {jet.specs.map((spec, idx) => (
                                    <li key={idx} className="text-sm text-gray-600">• {spec}</li>
                                  ))}
                                </ul>
                              </div>
                              <Link to={`/book?service=jet-hire&selected=${jet.id}`}>
                                <Button className="w-full bg-[#8B0000] hover:bg-[#6B0000] text-white">
                                  Book Now
                                </Button>
                              </Link>
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        <Link to={`/book?service=jet-hire&selected=${jet.id}`} className="flex-1">
                          <Button className="w-full bg-[#8B0000] hover:bg-[#6B0000] text-white">
                            Book Now
                          </Button>
                        </Link>
                      </div>
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
