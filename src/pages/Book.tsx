import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, Clock, MapPin, Users, Phone, Mail } from 'lucide-react';
import { cars } from '@/data/cars';
import { jets } from '@/data/jets';

const Book = () => {
  const [searchParams] = useSearchParams();
  const preSelectedService = searchParams.get('service');
  const preSelectedId = searchParams.get('selected');
  
  const [selectedCar, setSelectedCar] = useState<typeof cars[0] | null>(null);
  const [selectedJet, setSelectedJet] = useState<typeof jets[0] | null>(null);

  useEffect(() => {
    if (preSelectedService === 'car-hire' && preSelectedId) {
      const car = cars.find(c => c.id === parseInt(preSelectedId));
      if (car) setSelectedCar(car);
    } else if (preSelectedService === 'jet-hire' && preSelectedId) {
      const jet = jets.find(j => j.id === parseInt(preSelectedId));
      if (jet) setSelectedJet(jet);
    }
  }, [preSelectedService, preSelectedId]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Our Services</h1>
            <p className="text-xl text-gray-600">Select a service below and fill out the details to get started</p>
          </div>

          <Tabs defaultValue={preSelectedService || "jet-hire"} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="jet-hire">Jet Charter</TabsTrigger>
              <TabsTrigger value="car-hire">Car Hire</TabsTrigger>
              <TabsTrigger value="property-management">Property</TabsTrigger>
              <TabsTrigger value="interior-design">Interior</TabsTrigger>
              <TabsTrigger value="facility-management">Facility</TabsTrigger>
            </TabsList>

            {/* Jet Charter Tab */}
            <TabsContent value="jet-hire">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Private Jet Charter
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {selectedJet && (
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <h3 className="font-semibold mb-3">Selected Jet</h3>
                      <div className="flex gap-4">
                        <img
                          src={selectedJet.image}
                          alt={selectedJet.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-lg">{selectedJet.name}</h4>
                          <p className="text-[#D6AC2E] font-semibold">${selectedJet.price}/hour</p>
                          <p className="text-sm text-gray-600">
                            {selectedJet.features.slice(0, 2).join(' · ')}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="jet-selection">Select Aircraft</Label>
                      <Select value={selectedJet?.id.toString() || ''} onValueChange={(value) => {
                        const jet = jets.find(j => j.id === parseInt(value));
                        setSelectedJet(jet || null);
                      }}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an aircraft" />
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
                          <SelectItem value="1-4">1-4 passengers</SelectItem>
                          <SelectItem value="5-8">5-8 passengers</SelectItem>
                          <SelectItem value="9-12">9-12 passengers</SelectItem>
                          <SelectItem value="13+">13+ passengers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="departure">Departure Location</Label>
                      <Input id="departure" placeholder="City or airport code" />
                    </div>
                    <div>
                      <Label htmlFor="destination">Destination</Label>
                      <Input id="destination" placeholder="City or airport code" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="departure-date">Departure Date</Label>
                      <Input id="departure-date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="departure-time">Departure Time</Label>
                      <Input id="departure-time" type="time" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="special-requests">Special Requests</Label>
                    <Textarea 
                      id="special-requests" 
                      placeholder="Catering preferences, ground transportation, special accommodations..."
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name">Full Name</Label>
                      <Input id="contact-name" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email</Label>
                      <Input id="contact-email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input id="contact-phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <Button className="w-full bg-[#D6AC2E] hover:bg-[#B8941F] text-white">
                    Request Quote
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Car Hire Tab */}
            <TabsContent value="car-hire">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Luxury Car Hire
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {selectedCar && (
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <h3 className="font-semibold mb-3">Selected Vehicle</h3>
                      <div className="flex gap-4">
                        <img
                          src={selectedCar.image}
                          alt={selectedCar.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-lg">{selectedCar.name}</h4>
                          <p className="text-[#D6AC2E] font-semibold">${selectedCar.price}/day</p>
                          <p className="text-sm text-gray-600">
                            {selectedCar.features.slice(0, 2).join(' · ')}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="car-selection">Select Vehicle</Label>
                      <Select value={selectedCar?.id.toString() || ''} onValueChange={(value) => {
                        const car = cars.find(c => c.id === parseInt(value));
                        setSelectedCar(car || null);
                      }}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a vehicle" />
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
                      <Label htmlFor="service-type">Service Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="self-drive">Self Drive</SelectItem>
                          <SelectItem value="chauffeur">With Chauffeur</SelectItem>
                          <SelectItem value="airport-transfer">Airport Transfer</SelectItem>
                          <SelectItem value="event-transport">Event Transportation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="pickup-date">Pickup Date</Label>
                      <Input id="pickup-date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="return-date">Return Date</Label>
                      <Input id="return-date" type="date" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="pickup-location">Pickup Location</Label>
                    <Input id="pickup-location" placeholder="Address or location" />
                  </div>

                  <div>
                    <Label htmlFor="car-special-requests">Special Requests</Label>
                    <Textarea 
                      id="car-special-requests" 
                      placeholder="Child seats, specific routes, additional services..."
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="car-contact-name">Full Name</Label>
                      <Input id="car-contact-name" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="car-contact-email">Email</Label>
                      <Input id="car-contact-email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="car-contact-phone">Phone Number</Label>
                    <Input id="car-contact-phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <Button className="w-full bg-[#D6AC2E] hover:bg-[#B8941F] text-white">
                    Request Quote
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Property Management Tab */}
            <TabsContent value="property-management">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Property Management Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="property-type">Property Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential Property</SelectItem>
                          <SelectItem value="commercial">Commercial Property</SelectItem>
                          <SelectItem value="vacation">Vacation Rental</SelectItem>
                          <SelectItem value="luxury-estate">Luxury Estate</SelectItem>
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
                    <Input id="property-address" placeholder="Full property address" />
                  </div>

                  <div>
                    <Label htmlFor="services-needed">Services Needed</Label>
                    <Textarea 
                      id="services-needed" 
                      placeholder="Describe the management services you require..."
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="prop-contact-name">Full Name</Label>
                      <Input id="prop-contact-name" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="prop-contact-email">Email</Label>
                      <Input id="prop-contact-email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="prop-contact-phone">Phone Number</Label>
                    <Input id="prop-contact-phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <Button className="w-full bg-[#D6AC2E] hover:bg-[#B8941F] text-white">
                    Request Consultation
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Interior Design Tab */}
            <TabsContent value="interior-design">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Interior Design Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="project-type">Project Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-redesign">Full Redesign</SelectItem>
                          <SelectItem value="room-specific">Specific Room</SelectItem>
                          <SelectItem value="consultation">Consultation Only</SelectItem>
                          <SelectItem value="staging">Property Staging</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget-range">Budget Range</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                          <SelectItem value="over-250k">Over $250,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="project-address">Project Address</Label>
                    <Input id="project-address" placeholder="Property address" />
                  </div>

                  <div>
                    <Label htmlFor="design-requirements">Design Requirements</Label>
                    <Textarea 
                      id="design-requirements" 
                      placeholder="Describe your vision, style preferences, and specific requirements..."
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="design-contact-name">Full Name</Label>
                      <Input id="design-contact-name" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="design-contact-email">Email</Label>
                      <Input id="design-contact-email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="design-contact-phone">Phone Number</Label>
                    <Input id="design-contact-phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <Button className="w-full bg-[#D6AC2E] hover:bg-[#B8941F] text-white">
                    Request Consultation
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Facility Management Tab */}
            <TabsContent value="facility-management">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Facility Management Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          <SelectItem value="mixed-use">Mixed Use</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="facility-size">Facility Size</Label>
                      <Input id="facility-size" placeholder="Square footage" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="facility-address">Facility Address</Label>
                    <Input id="facility-address" placeholder="Full facility address" />
                  </div>

                  <div>
                    <Label htmlFor="facility-services">Services Required</Label>
                    <Textarea 
                      id="facility-services" 
                      placeholder="Describe the facility management services you need..."
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="facility-contact-name">Full Name</Label>
                      <Input id="facility-contact-name" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="facility-contact-email">Email</Label>
                      <Input id="facility-contact-email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="facility-contact-phone">Phone Number</Label>
                    <Input id="facility-contact-phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <Button className="w-full bg-[#D6AC2E] hover:bg-[#B8941F] text-white">
                    Request Consultation
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Book;
