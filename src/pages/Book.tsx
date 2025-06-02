import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Clock, Users, Car, Plane, Home, Wrench, Camera, Palette } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import WhatsAppCTA from '@/components/WhatsAppCTA';

const Book = () => {
  const [selectedService, setSelectedService] = useState('car-hire');
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [selectedJet, setSelectedJet] = useState<any>(null);

  // All cars from CarFleet.tsx
  const allCars = [
    {
      id: 1,
      name: 'Mercedes S-Class',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
      shortDescription: 'Luxury Sedan · Leather Interior · V8 Engine',
      fullDescription: 'Experience ultimate luxury with the flagship Mercedes S-Class. This premium sedan features advanced driver assistance, massage seats, and a whisper-quiet cabin perfect for executive travel.',
      specs: ['V8 Twin-Turbo Engine', 'Massage Seats', 'Premium Sound System', 'Advanced Safety Features'],
      price: '$350/day',
      tag: 'Luxury Sedan'
    },
    {
      id: 2,
      name: 'Porsche 911 Carrera',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070',
      shortDescription: 'Sports Car · Manual/Auto · Flat-6 Engine',
      fullDescription: 'The iconic Porsche 911 delivers pure driving excitement with its legendary flat-six engine and precise handling. Perfect for weekend getaways and special occasions.',
      specs: ['3.0L Flat-6 Engine', 'Sport Chrono Package', 'Premium Audio', 'Carbon Fiber Accents'],
      price: '$450/day',
      tag: 'Sports Car'
    },
    {
      id: 3,
      name: 'Range Rover Autobiography',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2070',
      shortDescription: 'Luxury SUV · All-Terrain · Luxury Interior',
      fullDescription: 'Command any terrain with the Range Rover Autobiography. This luxury SUV combines off-road capability with on-road refinement and executive-level comfort.',
      specs: ['All-Terrain Capability', 'Air Suspension', 'Luxury Interior', 'Advanced Infotainment'],
      price: '$400/day',
      tag: 'Luxury SUV'
    },
    {
      id: 4,
      name: 'BMW 7 Series',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070',
      shortDescription: 'Executive Sedan · Executive Lounge · Twin-Turbo',
      fullDescription: 'The BMW 7 Series redefines luxury sedan standards with its spacious executive lounge rear compartment and cutting-edge technology.',
      specs: ['Executive Lounge Seating', 'Gesture Control', 'Surround Sound', 'Active Comfort'],
      price: '$320/day',
      tag: 'Executive Sedan'
    },
    {
      id: 5,
      name: 'Lamborghini Huracán',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2070',
      shortDescription: 'Supercar · Manual · V10 Engine',
      fullDescription: 'Experience pure Italian performance with the Lamborghini Huracán. This supercar delivers breathtaking acceleration and head-turning style.',
      specs: ['5.2L V10 Engine', 'Carbon Fiber Body', 'Sport Exhaust', 'Track Performance'],
      price: '$800/day',
      tag: 'Supercar'
    },
    {
      id: 6,
      name: 'Bentley Continental GT',
      image: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?q=80&w=2070',
      shortDescription: 'Grand Tourer · Handcrafted Interior · W12 Engine',
      fullDescription: 'The Bentley Continental GT combines British luxury with impressive performance. Handcrafted details and a powerful W12 engine create an unforgettable driving experience.',
      specs: ['6.0L W12 Engine', 'Handcrafted Interior', 'Diamond Quilted Seats', 'Naim Audio'],
      price: '$600/day',
      tag: 'Grand Tourer'
    },
    {
      id: 7,
      name: 'Audi R8',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070',
      shortDescription: 'Supercar · Automatic · V10 Plus',
      fullDescription: 'The Audi R8 brings race-inspired performance to the road with its naturally aspirated V10 engine and quattro all-wheel drive system.',
      specs: ['5.2L V10 Plus', 'Carbon Fiber Cabin', 'Quattro AWD', 'Virtual Cockpit'],
      price: '$750/day',
      tag: 'Supercar'
    },
    {
      id: 8,
      name: 'Ferrari 488 GTB',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070',
      shortDescription: 'Supercar · Manual · Twin-Turbo V8',
      fullDescription: 'The Ferrari 488 GTB delivers exceptional performance with its twin-turbocharged V8 engine and aerodynamic design inspired by Formula 1.',
      specs: ['3.9L Twin-Turbo V8', 'Racing Technology', 'Aerodynamic Design', 'Launch Control'],
      price: '$900/day',
      tag: 'Supercar'
    },
    {
      id: 9,
      name: 'Rolls-Royce Ghost',
      image: 'https://images.unsplash.com/photo-1631295868785-d4f06cd7a6e6?q=80&w=2070',
      shortDescription: 'Ultra Luxury · Automatic · V12 Engine',
      fullDescription: 'The Rolls-Royce Ghost represents the pinnacle of automotive luxury with its serene cabin, powerful V12 engine, and meticulous attention to detail.',
      specs: ['6.75L V12 Engine', 'Magic Carpet Ride', 'Starlight Headliner', 'Bespoke Interior'],
      price: '$1200/day',
      tag: 'Ultra Luxury'
    },
    {
      id: 10,
      name: 'McLaren 720S',
      image: 'https://images.unsplash.com/photo-1558618047-0c4c245e28e0?q=80&w=2070',
      shortDescription: 'Supercar · Automatic · Twin-Turbo V8',
      fullDescription: 'The McLaren 720S combines supercar performance with everyday usability, featuring advanced aerodynamics and a lightweight carbon fiber chassis.',
      specs: ['4.0L Twin-Turbo V8', 'Carbon Fiber Chassis', 'Active Aerodynamics', 'Track Telemetry'],
      price: '$850/day',
      tag: 'Supercar'
    },
    {
      id: 11,
      name: 'Tesla Model S Plaid',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070',
      shortDescription: 'Electric Sedan · Autopilot · Tri-Motor',
      fullDescription: 'The Tesla Model S Plaid delivers incredible acceleration with its tri-motor setup while offering cutting-edge technology and sustainable luxury.',
      specs: ['Tri-Motor Setup', 'Autopilot', '17" Touchscreen', 'Supercharging'],
      price: '$300/day',
      tag: 'Electric Luxury'
    },
    {
      id: 12,
      name: 'Maserati Quattroporte',
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2070',
      shortDescription: 'Executive Sedan · V6 Engine · Italian Luxury',
      fullDescription: 'The Maserati Quattroporte combines Italian elegance with executive comfort, featuring a powerful V6 engine and distinctive styling.',
      specs: ['3.0L V6 Twin-Turbo', 'Italian Leather', 'Bowers & Wilkins Audio', 'Sport Mode'],
      price: '$380/day',
      tag: 'Executive Sedan'
    },
    {
      id: 13,
      name: 'Jaguar F-Type R',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070',
      shortDescription: 'Sports Car · Convertible · V8 Engine',
      fullDescription: 'The Jaguar F-Type R offers thrilling performance with its supercharged V8 engine and stunning convertible design perfect for spirited drives.',
      specs: ['5.0L Supercharged V8', 'Convertible Top', 'Meridian Audio', 'Performance Exhaust'],
      price: '$420/day',
      tag: 'Sports Car'
    },
    {
      id: 14,
      name: 'Aston Martin DB11',
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?q=80&w=2070',
      shortDescription: 'Grand Tourer · V8 Engine · British Luxury',
      fullDescription: 'The Aston Martin DB11 epitomizes British grand touring with its elegant design, powerful V8 engine, and handcrafted luxury interior.',
      specs: ['4.0L V8 Twin-Turbo', 'Carbon Fiber', 'Bang & Olufsen Audio', 'Adaptive Dampers'],
      price: '$650/day',
      tag: 'Grand Tourer'
    },
    {
      id: 15,
      name: 'Cadillac Escalade',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2070',
      shortDescription: 'Luxury SUV · V8 Engine · 7-Seater',
      fullDescription: 'The Cadillac Escalade provides spacious luxury for large groups with its commanding presence, premium interior, and advanced technology.',
      specs: ['6.2L V8 Engine', '7-Passenger Seating', '36-Speaker Audio', 'Super Cruise'],
      price: '$280/day',
      tag: 'Luxury SUV'
    }
  ];

  // All jets from JetOptions.tsx
  const allJets = [
    {
      id: 1,
      name: 'Gulfstream G650',
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070',
      shortDescription: '16-seat · Executive Cabin · WiFi Included',
      fullDescription: 'The flagship of luxury aviation, the Gulfstream G650 offers unparalleled comfort and range. With its spacious cabin and advanced avionics, it sets the standard for ultra-long-range business jets.',
      specs: ['Range: 7,000 nautical miles', 'Max Speed: Mach 0.925', 'Cabin Height: 6.2 feet', 'High-Speed Internet', 'Luxury Galley', 'Private Lavatory'],
      price: '$8,500/hour',
      tag: 'Ultra Long Range'
    },
    {
      id: 2,
      name: 'Bombardier Global 7500',
      image: 'https://images.unsplash.com/photo-1583992781145-4b80b2dd2ba0?q=80&w=2070',
      shortDescription: '14-seat · Four Living Spaces · Master Suite',
      fullDescription: 'The world\'s largest and longest-range business jet, featuring four distinct living spaces including a master suite with a permanent bed and stand-up shower.',
      specs: ['Range: 7,700 nautical miles', 'Max Speed: Mach 0.925', 'Four Living Spaces', 'Master Suite with Bed', 'Stand-up Shower', 'Advanced Connectivity'],
      price: '$9,200/hour',
      tag: 'Ultra Long Range'
    },
    {
      id: 3,
      name: 'Cessna Citation X+',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070',
      shortDescription: '10-seat · High Speed · Premium Cabin',
      fullDescription: 'The fastest civilian aircraft in the world, the Citation X+ combines speed with luxury. Perfect for time-sensitive travel with its ability to reach Mach 0.935.',
      specs: ['Range: 3,460 nautical miles', 'Max Speed: Mach 0.935', 'Fastest Civilian Aircraft', 'Advanced Flight Deck', 'Premium Materials', 'Spacious Cabin'],
      price: '$5,800/hour',
      tag: 'Super Mid-Size'
    },
    {
      id: 4,
      name: 'Embraer Phenom 300E',
      image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070',
      shortDescription: '8-seat · Light Jet · Efficient Performance',
      fullDescription: 'The most delivered light jet for multiple years running, the Phenom 300E offers excellent performance and comfort for shorter regional flights with surprising cabin space.',
      specs: ['Range: 2,010 nautical miles', 'Max Speed: 464 knots', 'Largest Cabin in Class', 'Advanced Avionics', 'Quiet Cabin', 'Excellent Fuel Efficiency'],
      price: '$3,200/hour',
      tag: 'Light Jet'
    }
  ];

  useEffect(() => {
    // Parse URL parameters for selected vehicle/jet
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    const selectedCarData = urlParams.get('selectedCar');
    const selectedJetData = urlParams.get('selectedJet');

    if (service) {
      setSelectedService(service);
    }

    if (selectedCarData) {
      try {
        const carData = JSON.parse(decodeURIComponent(selectedCarData));
        setSelectedCar(carData);
      } catch (error) {
        console.error('Error parsing car data:', error);
      }
    }

    if (selectedJetData) {
      try {
        const jetData = JSON.parse(decodeURIComponent(selectedJetData));
        setSelectedJet(jetData);
      } catch (error) {
        console.error('Error parsing jet data:', error);
      }
    }
  }, []);

  const handleCarSelection = (value: string) => {
    const car = allCars.find(c => c.id.toString() === value);
    setSelectedCar(car || null);
  };

  const handleJetSelection = (value: string) => {
    const jet = allJets.find(j => j.id.toString() === value);
    setSelectedJet(jet || null);
  };

  const services = [
    { id: 'car-hire', name: 'Car Hire', icon: Car },
    { id: 'jet-hire', name: 'Jet Charter', icon: Plane },
    { id: 'property-management', name: 'Property Management', icon: Home },
    { id: 'maintenance', name: 'Maintenance', icon: Wrench },
    { id: 'videography', name: 'Videography', icon: Camera },
    { id: 'interior-design', name: 'Interior Design', icon: Palette },
  ];

  return (
    <ServiceLayout>
      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Book a Service</h1>
            <p className="text-xl text-gray-600">Choose from our premium services</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Tabs value={selectedService} onValueChange={setSelectedService} className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <TabsTrigger
                      key={service.id}
                      value={service.id}
                      className="flex flex-col items-center gap-1 p-3"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-xs hidden sm:inline">{service.name}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              <TabsContent value="car-hire" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-6">Luxury Car Hire</h3>
                    
                    {selectedCar && (
                      <div className="mb-6 p-4 border rounded-lg bg-gray-50">
                        <h4 className="font-semibold mb-3">Selected Vehicle:</h4>
                        <div className="flex flex-col md:flex-row gap-4">
                          <img
                            src={selectedCar.image}
                            alt={selectedCar.name}
                            className="w-full md:w-48 h-32 object-cover rounded-lg"
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070';
                            }}
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="text-lg font-bold">{selectedCar.name}</h5>
                              <span className="bg-[#D4AF37] text-white px-2 py-1 rounded text-sm">
                                {selectedCar.tag}
                              </span>
                            </div>
                            <p className="text-[#D4AF37] font-semibold mb-2">{selectedCar.price}</p>
                            <p className="text-gray-600 text-sm mb-2">{selectedCar.shortDescription}</p>
                            <div className="flex flex-wrap gap-2">
                              {selectedCar.specs?.slice(0, 3).map((spec: string, idx: number) => (
                                <span key={idx} className="text-xs bg-gray-200 px-2 py-1 rounded">
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="car-selection">Choose a Vehicle</Label>
                        <Select value={selectedCar?.id.toString() || ""} onValueChange={handleCarSelection}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a car" />
                          </SelectTrigger>
                          <SelectContent>
                            {allCars.map((car) => (
                              <SelectItem key={car.id} value={car.id.toString()}>
                                {car.name} - {car.price}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="pickup-date">Pickup Date</Label>
                        <Input type="date" id="pickup-date" />
                      </div>

                      <div>
                        <Label htmlFor="return-date">Return Date</Label>
                        <Input type="date" id="return-date" />
                      </div>

                      <div>
                        <Label htmlFor="pickup-location">Pickup Location</Label>
                        <Input id="pickup-location" placeholder="Enter pickup address" />
                      </div>

                      <div>
                        <Label htmlFor="chauffeur">Chauffeur Service</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="self-drive">Self Drive</SelectItem>
                            <SelectItem value="with-chauffeur">With Chauffeur</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="insurance">Insurance Coverage</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select coverage" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="basic">Basic Coverage</SelectItem>
                            <SelectItem value="comprehensive">Comprehensive Coverage</SelectItem>
                            <SelectItem value="premium">Premium Coverage</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Label htmlFor="car-notes">Additional Requirements</Label>
                      <Textarea
                        id="car-notes"
                        placeholder="Any special requests or requirements..."
                        rows={3}
                      />
                    </div>

                    <Button className="w-full mt-6 h-12 bg-[#D4AF37] hover:bg-[#B4941F]">
                      Request Car Hire Quote
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="jet-hire" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-6">Private Jet Charter</h3>
                    
                    {selectedJet && (
                      <div className="mb-6 p-4 border rounded-lg bg-gray-50">
                        <h4 className="font-semibold mb-3">Selected Aircraft:</h4>
                        <div className="flex flex-col md:flex-row gap-4">
                          <img
                            src={selectedJet.image}
                            alt={selectedJet.name}
                            className="w-full md:w-48 h-32 object-cover rounded-lg"
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070';
                            }}
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="text-lg font-bold">{selectedJet.name}</h5>
                              <span className="bg-[#D4AF37] text-white px-2 py-1 rounded text-sm">
                                {selectedJet.tag}
                              </span>
                            </div>
                            <p className="text-[#D4AF37] font-semibold mb-2">{selectedJet.price}</p>
                            <p className="text-gray-600 text-sm mb-2">{selectedJet.shortDescription}</p>
                            <div className="flex flex-wrap gap-2">
                              {selectedJet.specs?.slice(0, 3).map((spec: string, idx: number) => (
                                <span key={idx} className="text-xs bg-gray-200 px-2 py-1 rounded">
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="jet-selection">Choose Aircraft</Label>
                        <Select value={selectedJet?.id.toString() || ""} onValueChange={handleJetSelection}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a jet" />
                          </SelectTrigger>
                          <SelectContent>
                            {allJets.map((jet) => (
                              <SelectItem key={jet.id} value={jet.id.toString()}>
                                {jet.name} - {jet.price}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="departure-date">Departure Date</Label>
                        <Input type="date" id="departure-date" />
                      </div>

                      <div>
                        <Label htmlFor="departure-time">Departure Time</Label>
                        <Input type="time" id="departure-time" />
                      </div>

                      <div>
                        <Label htmlFor="passengers">Number of Passengers</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select passengers" />
                          </SelectTrigger>
                          <SelectContent>
                            {[...Array(16)].map((_, i) => (
                              <SelectItem key={i + 1} value={(i + 1).toString()}>
                                {i + 1} {i + 1 === 1 ? 'Passenger' : 'Passengers'}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="departure-airport">Departure Airport</Label>
                        <Input id="departure-airport" placeholder="Enter departure airport" />
                      </div>

                      <div>
                        <Label htmlFor="arrival-airport">Arrival Airport</Label>
                        <Input id="arrival-airport" placeholder="Enter destination airport" />
                      </div>

                      <div>
                        <Label htmlFor="return-flight">Return Flight</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="one-way">One Way</SelectItem>
                            <SelectItem value="round-trip">Round Trip</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="catering">Catering Preferences</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select catering" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No Catering</SelectItem>
                            <SelectItem value="light">Light Refreshments</SelectItem>
                            <SelectItem value="full">Full Meal Service</SelectItem>
                            <SelectItem value="custom">Custom Menu</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Label htmlFor="jet-notes">Special Requirements</Label>
                      <Textarea
                        id="jet-notes"
                        placeholder="Any special requests, dietary requirements, or additional services..."
                        rows={3}
                      />
                    </div>

                    <Button className="w-full mt-6 h-12 bg-[#D4AF37] hover:bg-[#B4941F]">
                      Request Jet Charter Quote
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="property-management" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-6">Property Management</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="property-type">Property Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="luxury-villa">Luxury Villa</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="property-location">Property Location</Label>
                        <Input id="property-location" placeholder="Enter property address" />
                      </div>
                      <div>
                        <Label htmlFor="service-needed">Service Needed</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-management">Full Management</SelectItem>
                            <SelectItem value="tenant-management">Tenant Management</SelectItem>
                            <SelectItem value="maintenance-only">Maintenance Only</SelectItem>
                            <SelectItem value="consultation">Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="start-date">Preferred Start Date</Label>
                        <Input type="date" id="start-date" />
                      </div>
                    </div>
                    <div className="mt-6">
                      <Label htmlFor="property-notes">Property Details & Requirements</Label>
                      <Textarea
                        id="property-notes"
                        placeholder="Describe your property and specific management needs..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full mt-6 h-12 bg-[#D4AF37] hover:bg-[#B4941F]">
                      Request Property Management Quote
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="maintenance" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-6">Maintenance Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="maintenance-type">Maintenance Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select maintenance type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="electrical">Electrical</SelectItem>
                            <SelectItem value="plumbing">Plumbing</SelectItem>
                            <SelectItem value="hvac">HVAC</SelectItem>
                            <SelectItem value="general-repair">General Repair</SelectItem>
                            <SelectItem value="emergency">Emergency</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="urgency">Urgency Level</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency">Emergency (24hrs)</SelectItem>
                            <SelectItem value="urgent">Urgent (48hrs)</SelectItem>
                            <SelectItem value="standard">Standard (1 week)</SelectItem>
                            <SelectItem value="scheduled">Scheduled Maintenance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="maintenance-location">Service Location</Label>
                        <Input id="maintenance-location" placeholder="Enter service address" />
                      </div>
                      <div>
                        <Label htmlFor="preferred-time">Preferred Time</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8AM-12PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12PM-6PM)</SelectItem>
                            <SelectItem value="evening">Evening (6PM-10PM)</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Label htmlFor="maintenance-description">Issue Description</Label>
                      <Textarea
                        id="maintenance-description"
                        placeholder="Please describe the maintenance issue in detail..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full mt-6 h-12 bg-[#D4AF37] hover:bg-[#B4941F]">
                      Request Maintenance Service
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="videography" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-6">Videography Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="video-type">Video Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select video type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="property-showcase">Property Showcase</SelectItem>
                            <SelectItem value="event">Event Coverage</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="drone">Drone/Aerial</SelectItem>
                            <SelectItem value="virtual-tour">Virtual Tour</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="video-duration">Estimated Duration</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30sec">30 seconds</SelectItem>
                            <SelectItem value="1min">1 minute</SelectItem>
                            <SelectItem value="2-3min">2-3 minutes</SelectItem>
                            <SelectItem value="5min+">5+ minutes</SelectItem>
                            <SelectItem value="custom">Custom Length</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="shoot-location">Shooting Location</Label>
                        <Input id="shoot-location" placeholder="Enter shooting location" />
                      </div>
                      <div>
                        <Label htmlFor="shoot-date">Preferred Shoot Date</Label>
                        <Input type="date" id="shoot-date" />
                      </div>
                      <div>
                        <Label htmlFor="video-style">Video Style</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cinematic">Cinematic</SelectItem>
                            <SelectItem value="documentary">Documentary</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle</SelectItem>
                            <SelectItem value="luxury">Luxury</SelectItem>
                            <SelectItem value="minimalist">Minimalist</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="deliverables">Deliverables</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select deliverables" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="video-only">Video Only</SelectItem>
                            <SelectItem value="video-photos">Video + Photos</SelectItem>
                            <SelectItem value="multiple-versions">Multiple Versions</SelectItem>
                            <SelectItem value="social-media">Social Media Package</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Label htmlFor="video-brief">Project Brief</Label>
                      <Textarea
                        id="video-brief"
                        placeholder="Describe your vision, target audience, and any specific requirements..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full mt-6 h-12 bg-[#D4AF37] hover:bg-[#B4941F]">
                      Request Videography Quote
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="interior-design" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-6">Interior Design</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="design-scope">Design Scope</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select scope" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-home">Full Home</SelectItem>
                            <SelectItem value="single-room">Single Room</SelectItem>
                            <SelectItem value="multiple-rooms">Multiple Rooms</SelectItem>
                            <SelectItem value="consultation">Consultation Only</SelectItem>
                            <SelectItem value="renovation">Renovation Project</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="design-style">Design Style</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="modern">Modern</SelectItem>
                            <SelectItem value="contemporary">Contemporary</SelectItem>
                            <SelectItem value="minimalist">Minimalist</SelectItem>
                            <SelectItem value="luxury">Luxury</SelectItem>
                            <SelectItem value="traditional">Traditional</SelectItem>
                            <SelectItem value="eclectic">Eclectic</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="property-size">Property Size</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="studio">Studio</SelectItem>
                            <SelectItem value="1-bedroom">1 Bedroom</SelectItem>
                            <SelectItem value="2-bedroom">2 Bedroom</SelectItem>
                            <SelectItem value="3-bedroom">3 Bedroom</SelectItem>
                            <SelectItem value="4+bedroom">4+ Bedroom</SelectItem>
                            <SelectItem value="commercial">Commercial Space</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget-range">Budget Range</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k+">$100,000+</SelectItem>
                            <SelectItem value="consultation">Consultation First</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="project-timeline">Project Timeline</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-2months">1-2 Months</SelectItem>
                            <SelectItem value="3-4months">3-4 Months</SelectItem>
                            <SelectItem value="6months">6 Months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="design-location">Project Location</Label>
                        <Input id="design-location" placeholder="Enter project address" />
                      </div>
                    </div>
                    <div className="mt-6">
                      <Label htmlFor="design-brief">Design Brief</Label>
                      <Textarea
                        id="design-brief"
                        placeholder="Describe your vision, lifestyle needs, color preferences, and any specific requirements..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full mt-6 h-12 bg-[#D4AF37] hover:bg-[#B4941F]">
                      Request Design Consultation
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <WhatsAppCTA />
    </ServiceLayout>
  );
};

export default Book;
