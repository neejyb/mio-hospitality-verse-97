
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

const CarFleet = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const cars = [
    {
      id: 1,
      name: 'Mercedes S-Class',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
      price: 250,
      brand: 'Mercedes',
      features: ['Chauffeur Available', 'Premium Interior', 'V8 Engine', 'Massage Seats'],
      description: 'Experience ultimate luxury with the flagship Mercedes S-Class. This premium sedan features advanced driver assistance, massage seats, and a whisper-quiet cabin perfect for executive travel.',
      specs: ['V8 Twin-Turbo Engine', 'Massage Seats', 'Premium Sound System', 'Advanced Safety Features']
    },
    {
      id: 2,
      name: 'Porsche 911 Carrera',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070',
      price: 450,
      brand: 'Porsche',
      features: ['Sports Seats', 'Flat-6 Engine', 'Manual/Auto', 'Premium Audio'],
      description: 'The iconic Porsche 911 delivers pure driving excitement with its legendary flat-six engine and precise handling. Perfect for weekend getaways and special occasions.',
      specs: ['3.0L Flat-6 Engine', 'Sport Chrono Package', 'Premium Audio', 'Carbon Fiber Accents']
    },
    {
      id: 3,
      name: 'Range Rover Autobiography',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2070',
      price: 320,
      brand: 'Land Rover',
      features: ['All-Terrain', 'Luxury Interior', 'Air Suspension', 'Advanced Tech'],
      description: 'Command any terrain with the Range Rover Autobiography. This luxury SUV combines off-road capability with on-road refinement and executive-level comfort.',
      specs: ['All-Terrain Capability', 'Air Suspension', 'Luxury Interior', 'Advanced Infotainment']
    },
    {
      id: 4,
      name: 'BMW 7 Series',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070',
      price: 280,
      brand: 'BMW',
      features: ['Executive Lounge', 'Twin-Turbo', 'Gesture Control', 'Surround Sound'],
      description: 'The BMW 7 Series redefines luxury sedan standards with its spacious executive lounge rear compartment and cutting-edge technology.',
      specs: ['Executive Lounge Seating', 'Gesture Control', 'Surround Sound', 'Active Comfort']
    },
    {
      id: 5,
      name: 'Lamborghini Huracán',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2070',
      price: 800,
      brand: 'Lamborghini',
      features: ['V10 Engine', 'Carbon Fiber', 'Sport Exhaust', 'Track Performance'],
      description: 'Experience pure Italian performance with the Lamborghini Huracán. This supercar delivers breathtaking acceleration and head-turning style.',
      specs: ['5.2L V10 Engine', 'Carbon Fiber Body', 'Sport Exhaust', 'Track Performance']
    },
    {
      id: 6,
      name: 'Bentley Continental GT',
      image: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?q=80&w=2070',
      price: 650,
      brand: 'Bentley',
      features: ['W12 Engine', 'Handcrafted Interior', 'Diamond Quilted', 'Naim Audio'],
      description: 'The Bentley Continental GT combines British luxury with impressive performance. Handcrafted details and a powerful W12 engine create an unforgettable driving experience.',
      specs: ['6.0L W12 Engine', 'Handcrafted Interior', 'Diamond Quilted Seats', 'Naim Audio']
    }
  ];

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || car.brand === selectedBrand;
    const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
    return matchesSearch && matchesBrand && matchesPrice;
  });

  return (
    <ServiceLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section 
          className="relative h-[60vh] bg-cover bg-center flex items-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2070)' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10 text-white">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Available Cars for Hire
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Choose from our premium selection of luxury, exotic, and executive vehicles.
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
                    placeholder="Search by name or model"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <label className="block text-sm font-medium mb-2">Brand</label>
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Brands" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Brands</SelectItem>
                    <SelectItem value="Mercedes">Mercedes</SelectItem>
                    <SelectItem value="Porsche">Porsche</SelectItem>
                    <SelectItem value="Land Rover">Land Rover</SelectItem>
                    <SelectItem value="BMW">BMW</SelectItem>
                    <SelectItem value="Lamborghini">Lamborghini</SelectItem>
                    <SelectItem value="Bentley">Bentley</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-64">
                <label className="block text-sm font-medium mb-2">Price Range (per day)</label>
                <div className="px-3">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000}
                    min={0}
                    step={50}
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

        {/* Cars Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-48">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                      <p className="text-2xl font-bold text-[#D6AC2E] mb-3">${car.price}/day</p>
                      <ul className="space-y-1 mb-4">
                        {car.features.slice(0, 4).map((feature, idx) => (
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
                              <DialogTitle className="text-2xl font-bold">{car.name}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <img
                                src={car.image}
                                alt={car.name}
                                className="w-full h-64 object-cover rounded-lg"
                              />
                              <p className="text-gray-700">{car.description}</p>
                              <div>
                                <h4 className="font-semibold mb-2">Key Features:</h4>
                                <ul className="grid grid-cols-2 gap-2">
                                  {car.specs.map((spec, idx) => (
                                    <li key={idx} className="text-sm text-gray-600">• {spec}</li>
                                  ))}
                                </ul>
                              </div>
                              <Link to={`/book?service=car-hire&selected=${car.id}`}>
                                <Button className="w-full bg-[#8B0000] hover:bg-[#6B0000] text-white">
                                  Book Now
                                </Button>
                              </Link>
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        <Link to={`/book?service=car-hire&selected=${car.id}`} className="flex-1">
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

export default CarFleet;
