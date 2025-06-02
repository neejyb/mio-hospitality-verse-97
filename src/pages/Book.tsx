import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Users, Clock, Star, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { cars } from '@/data/cars';
import { jets } from '@/data/jets';

const Book = () => {
  const [searchParams] = useSearchParams();
  const service = searchParams.get('service') || 'property-management';
  const selectedJetData = searchParams.get('selectedJet');
  const selectedCarData = searchParams.get('selectedCar');
  
  const [selectedCar, setSelectedCar] = useState<typeof cars[0] | null>(null);
  const [selectedJet, setSelectedJet] = useState<typeof jets[0] | null>(null);
  const [activeTab, setActiveTab] = useState('property-management');

  useEffect(() => {
    // Handle selected car data from Car Fleet page
    if (selectedCarData) {
      try {
        const carData = JSON.parse(decodeURIComponent(selectedCarData));
        setSelectedCar(carData);
        setActiveTab('car-hire');
      } catch (error) {
        console.error('Error parsing selected car data:', error);
      }
    }

    // Handle selected jet data from Jet Options page
    if (selectedJetData) {
      try {
        const jetData = JSON.parse(decodeURIComponent(selectedJetData));
        setSelectedJet(jetData);
        setActiveTab('jet-hire');
      } catch (error) {
        console.error('Error parsing selected jet data:', error);
      }
    }

    // Set initial tab based on service parameter
    if (service === 'car-hire') {
      setActiveTab('car-hire');
    } else if (service === 'jet-hire') {
      setActiveTab('jet-hire');
    } else {
      setActiveTab(service);
    }
  }, [selectedCarData, selectedJetData, service]);

  const handleCarSelection = (carId: string) => {
    const car = cars.find(c => c.id.toString() === carId);
    setSelectedCar(car || null);
  };

  const handleJetSelection = (jetId: string) => {
    const jet = jets.find(j => j.id.toString() === jetId);
    setSelectedJet(jet || null);
  };

  const renderSelectedCarCard = () => {
    if (!selectedCar) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img 
                  src={selectedCar.image} 
                  alt={selectedCar.name}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{selectedCar.name}</h3>
                  <span className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedCar.category}
                  </span>
                </div>
                <p className="text-2xl font-bold text-[#D4AF37] mb-3">${selectedCar.price}/day</p>
                <p className="text-gray-600 mb-4">{selectedCar.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedCar.features.map((feature, index) => (
                    <span key={index} className="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  const renderSelectedJetCard = () => {
    if (!selectedJet) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img 
                  src={selectedJet.image} 
                  alt={selectedJet.name}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{selectedJet.name}</h3>
                  <span className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedJet.category}
                  </span>
                </div>
                <p className="text-2xl font-bold text-[#D4AF37] mb-3">${selectedJet.price}/hour</p>
                <p className="text-gray-600 mb-4">{selectedJet.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedJet.features.map((feature, index) => (
                    <span key={index} className="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Service</h1>
            <p className="text-xl text-gray-600">Complete your booking with our premium services</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-7 mb-8">
                <TabsTrigger value="property-management">Property</TabsTrigger>
                <TabsTrigger value="car-hire">Car Hire</TabsTrigger>
                <TabsTrigger value="jet-hire">Jet Charter</TabsTrigger>
                <TabsTrigger value="facility-management">Facility</TabsTrigger>
                <TabsTrigger value="interior-design">Interior</TabsTrigger>
                <TabsTrigger value="videography">Video</TabsTrigger>
                <TabsTrigger value="airbnb-services">Airbnb</TabsTrigger>
              </TabsList>

              {/* Car Hire Tab */}
              <TabsContent value="car-hire">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Luxury Car Hire</h2>
                    
                    {renderSelectedCarCard()}
                    
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="car-selection">Choose a Vehicle</Label>
                          <Select value={selectedCar?.id.toString() || ""} onValueChange={handleCarSelection}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a vehicle" />
                            </SelectTrigger>
                            <SelectContent>
                              {cars.map((car) => (
                                <SelectItem key={car.id} value={car.id.toString()}>
                                  {car.name} - ${car.price}/day
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="rental-duration">Rental Duration</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-day">1 Day</SelectItem>
                              <SelectItem value="2-3-days">2-3 Days</SelectItem>
                              <SelectItem value="1-week">1 Week</SelectItem>
                              <SelectItem value="1-month">1 Month</SelectItem>
                              <SelectItem value="custom">Custom</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="pickup-date">Pickup Date</Label>
                          <Input type="date" id="pickup-date" />
                        </div>
                        <div>
                          <Label htmlFor="return-date">Return Date</Label>
                          <Input type="date" id="return-date" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="pickup-location">Pickup Location</Label>
                        <Input id="pickup-location" placeholder="Enter pickup address" />
                      </div>

                      <div>
                        <Label htmlFor="car-requirements">Special Requirements</Label>
                        <Textarea id="car-requirements" placeholder="Chauffeur service, specific features, etc." />
                      </div>

                      <Button type="submit" className="w-full">
                        Book Car Rental
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Jet Charter Tab */}
              <TabsContent value="jet-hire">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Private Jet Charter</h2>
                    
                    {renderSelectedJetCard()}
                    
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="jet-selection">Select an Aircraft</Label>
                          <Select value={selectedJet?.id.toString() || ""} onValueChange={handleJetSelection}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an aircraft" />
                            </SelectTrigger>
                            <SelectContent>
                              {jets.map((jet) => (
                                <SelectItem key={jet.id} value={jet.id.toString()}>
                                  {jet.name} - ${jet.price}/hour
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="passengers">Number of Passengers</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select passengers" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-4">1-4 Passengers</SelectItem>
                              <SelectItem value="5-8">5-8 Passengers</SelectItem>
                              <SelectItem value="9-12">9-12 Passengers</SelectItem>
                              <SelectItem value="13+">13+ Passengers</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="departure">Departure Airport</Label>
                          <Input id="departure" placeholder="Enter departure airport" />
                        </div>
                        <div>
                          <Label htmlFor="destination">Destination Airport</Label>
                          <Input id="destination" placeholder="Enter destination airport" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="departure-date">Departure Date</Label>
                          <Input type="date" id="departure-date" />
                        </div>
                        <div>
                          <Label htmlFor="departure-time">Departure Time</Label>
                          <Input type="time" id="departure-time" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="jet-requirements">Special Requirements</Label>
                        <Textarea id="jet-requirements" placeholder="Catering preferences, ground transportation, etc." />
                      </div>

                      <Button type="submit" className="w-full">
                        Book Private Jet
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Property Management Tab */}
              <TabsContent value="property-management">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Property Management Services</h2>
                    <form className="space-y-6">
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
                              <SelectItem value="vacation-rental">Vacation Rental</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="property-size">Property Size</Label>
                          <Input id="property-size" placeholder="Square footage or rooms" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="property-address">Property Address</Label>
                        <Input id="property-address" placeholder="Enter full address" />
                      </div>
                      <div>
                        <Label htmlFor="services-needed">Services Needed</Label>
                        <Textarea id="services-needed" placeholder="Describe the services you need" />
                      </div>
                      <Button type="submit" className="w-full">
                        Request Property Services
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="facility-management">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Facility Management</h2>
                    <form className="space-y-6">
                      <div>
                        <Label htmlFor="facility-type">Facility Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select facility type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="office">Office Building</SelectItem>
                            <SelectItem value="retail">Retail Space</SelectItem>
                            <SelectItem value="warehouse">Warehouse</SelectItem>
                            <SelectItem value="residential">Residential Complex</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="facility-description">Service Description</Label>
                        <Textarea id="facility-description" placeholder="Describe your facility management needs" />
                      </div>
                      <Button type="submit" className="w-full">
                        Book Facility Services
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="interior-design">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Interior Design Services</h2>
                    <form className="space-y-6">
                      <div>
                        <Label htmlFor="design-type">Design Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select design type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-design">Full Interior Design</SelectItem>
                            <SelectItem value="consultation">Design Consultation</SelectItem>
                            <SelectItem value="renovation">Renovation Design</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="design-requirements">Design Requirements</Label>
                        <Textarea id="design-requirements" placeholder="Describe your design vision and requirements" />
                      </div>
                      <Button type="submit" className="w-full">
                        Book Design Services
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="videography">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Videography Services</h2>
                    <form className="space-y-6">
                      <div>
                        <Label htmlFor="video-type">Video Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select video type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="property">Property Showcase</SelectItem>
                            <SelectItem value="event">Event Coverage</SelectItem>
                            <SelectItem value="commercial">Commercial Video</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="video-requirements">Video Requirements</Label>
                        <Textarea id="video-requirements" placeholder="Describe your videography needs" />
                      </div>
                      <Button type="submit" className="w-full">
                        Book Video Services
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="airbnb-services">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Airbnb Management Services</h2>
                    <form className="space-y-6">
                      <div>
                        <Label htmlFor="airbnb-service">Service Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-management">Full Management</SelectItem>
                            <SelectItem value="cleaning">Cleaning Services</SelectItem>
                            <SelectItem value="listing-optimization">Listing Optimization</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="airbnb-requirements">Service Requirements</Label>
                        <Textarea id="airbnb-requirements" placeholder="Describe your Airbnb management needs" />
                      </div>
                      <Button type="submit" className="w-full">
                        Book Airbnb Services
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <WhatsAppCTA />
      <Footer />
    </div>
  );
};

export default Book;
