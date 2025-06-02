import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Car, Clock, MapPin, Plane, Star, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format, parseISO } from 'date-fns';
import ServiceLayout from '@/components/ServiceLayout';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { useSearchParams } from 'react-router-dom';

const Book = () => {
  const [searchParams] = useSearchParams();
  const [selectedTab, setSelectedTab] = useState<string>('car-hire');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedCar, setSelectedCar] = useState<string>('');
  const [selectedJet, setSelectedJet] = useState<string>('');
  const [selectedCarData, setSelectedCarData] = useState<any>(null);
  const [selectedJetData, setSelectedJetData] = useState<any>(null);

  // All cars data
  const cars = [
    { id: 1, name: 'Mercedes S-Class', price: '$350/day' },
    { id: 2, name: 'Porsche 911 Carrera', price: '$450/day' },
    { id: 3, name: 'Range Rover Autobiography', price: '$400/day' },
    { id: 4, name: 'BMW 7 Series', price: '$320/day' },
    { id: 5, name: 'Lamborghini Huracán', price: '$800/day' },
    { id: 6, name: 'Bentley Continental GT', price: '$600/day' },
    { id: 7, name: 'Audi R8', price: '$750/day' },
    { id: 8, name: 'Ferrari 488 GTB', price: '$900/day' },
    { id: 9, name: 'Rolls-Royce Ghost', price: '$1200/day' },
    { id: 10, name: 'McLaren 720S', price: '$850/day' },
    { id: 11, name: 'Tesla Model S Plaid', price: '$300/day' },
    { id: 12, name: 'Maserati Quattroporte', price: '$380/day' },
    { id: 13, name: 'Jaguar F-Type R', price: '$420/day' },
    { id: 14, name: 'Aston Martin DB11', price: '$650/day' },
    { id: 15, name: 'Cadillac Escalade', price: '$280/day' }
  ];

  // All jets data
  const jets = [
    { id: 1, name: 'Gulfstream G650', price: '$8,500/hour' },
    { id: 2, name: 'Bombardier Global 7500', price: '$9,200/hour' },
    { id: 3, name: 'Cessna Citation X+', price: '$5,800/hour' },
    { id: 4, name: 'Embraer Phenom 300E', price: '$3,200/hour' }
  ];

  // Handle URL parameters on component mount
  useEffect(() => {
    const service = searchParams.get('service');
    const selectedCarParam = searchParams.get('selectedCar');
    const selectedJetParam = searchParams.get('selectedJet');

    if (service === 'car-hire') {
      setSelectedTab('car-hire');
      if (selectedCarParam) {
        try {
          const carData = JSON.parse(decodeURIComponent(selectedCarParam));
          setSelectedCarData(carData);
          setSelectedCar(`${carData.name} - ${carData.price}`);
        } catch (error) {
          console.error('Error parsing car data:', error);
        }
      }
    } else if (service === 'jet-hire') {
      setSelectedTab('jet-charter');
      if (selectedJetParam) {
        try {
          const jetData = JSON.parse(decodeURIComponent(selectedJetParam));
          setSelectedJetData(jetData);
          setSelectedJet(`${jetData.name} - ${jetData.price}`);
        } catch (error) {
          console.error('Error parsing jet data:', error);
        }
      }
    }
  }, [searchParams]);

  // Handle car selection from dropdown
  const handleCarSelection = (value: string) => {
    setSelectedCar(value);
    const carName = value.split(' - ')[0];
    const car = cars.find(c => c.name === carName);
    if (car) {
      // Clear the selected car data when manually selecting from dropdown
      setSelectedCarData(null);
    }
  };

  // Handle jet selection from dropdown
  const handleJetSelection = (value: string) => {
    setSelectedJet(value);
    const jetName = value.split(' - ')[0];
    const jet = jets.find(j => j.name === jetName);
    if (jet) {
      // Clear the selected jet data when manually selecting from dropdown
      setSelectedJetData(null);
    }
  };

  return (
    <ServiceLayout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Service</h1>
              <p className="text-xl text-gray-600">Choose from our premium services and book your experience</p>
            </div>

            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid w-full grid-cols-7 mb-8">
                <TabsTrigger value="car-hire" className="flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  Car Hire
                </TabsTrigger>
                <TabsTrigger value="jet-charter" className="flex items-center gap-2">
                  <Plane className="w-4 h-4" />
                  Jet Charter
                </TabsTrigger>
                <TabsTrigger value="property-management">Property Mgmt</TabsTrigger>
                <TabsTrigger value="interior-design">Interior Design</TabsTrigger>
                <TabsTrigger value="airbnb-services">Airbnb Services</TabsTrigger>
                <TabsTrigger value="facility-management">Facility Mgmt</TabsTrigger>
                <TabsTrigger value="videography">Videography</TabsTrigger>
              </TabsList>

              {/* Car Hire Tab */}
              <TabsContent value="car-hire">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Car className="w-5 h-5" />
                      Luxury Car Hire
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Selected Car Preview */}
                    {selectedCarData && (
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 border">
                        <h3 className="text-lg font-semibold mb-4">Selected Vehicle</h3>
                        <div className="flex flex-col md:flex-row gap-4">
                          <img 
                            src={selectedCarData.image} 
                            alt={selectedCarData.name}
                            className="w-full md:w-32 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-lg">{selectedCarData.name}</h4>
                              <span className="bg-gray-200 px-2 py-1 rounded text-sm font-medium">
                                {selectedCarData.tag}
                              </span>
                            </div>
                            <p className="text-lg font-semibold text-[#D4AF37] mb-2">{selectedCarData.price}</p>
                            <p className="text-gray-600 text-sm mb-3">{selectedCarData.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {selectedCarData.features?.slice(0, 3).map((feature: string, idx: number) => (
                                <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="car-selection">Choose a Vehicle</Label>
                          <Select value={selectedCar} onValueChange={handleCarSelection}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a vehicle" />
                            </SelectTrigger>
                            <SelectContent>
                              {cars.map((car) => (
                                <SelectItem key={car.id} value={`${car.name} - ${car.price}`}>
                                  {car.name} - {car.price}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="pickup-date">Pickup Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !selectedDate && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div>
                          <Label htmlFor="pickup-location">Pickup Location</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input id="pickup-location" placeholder="Enter pickup address" className="pl-10" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="duration">Rental Duration</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-day">1 Day</SelectItem>
                              <SelectItem value="2-3-days">2-3 Days</SelectItem>
                              <SelectItem value="1-week">1 Week</SelectItem>
                              <SelectItem value="custom">Custom Duration</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="special-requests">Special Requests</Label>
                          <Textarea 
                            id="special-requests" 
                            placeholder="Any special requirements or requests..."
                            className="min-h-[100px]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="contact-name">Full Name</Label>
                          <Input id="contact-name" placeholder="Enter your full name" />
                        </div>
                        <div>
                          <Label htmlFor="contact-phone">Phone Number</Label>
                          <Input id="contact-phone" placeholder="Enter your phone number" />
                        </div>
                        <div>
                          <Label htmlFor="contact-email">Email Address</Label>
                          <Input id="contact-email" type="email" placeholder="Enter your email" />
                        </div>
                        <div>
                          <Label htmlFor="driver-license">Driver's License</Label>
                          <Input id="driver-license" placeholder="License number (if self-driving)" />
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-[#D4AF37] hover:bg-[#B4941F] text-white py-3">
                      Request Car Hire Quote
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Jet Charter Tab */}
              <TabsContent value="jet-charter">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plane className="w-5 h-5" />
                      Private Jet Charter
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Selected Jet Preview */}
                    {selectedJetData && (
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border">
                        <h3 className="text-lg font-semibold mb-4">Selected Aircraft</h3>
                        <div className="flex flex-col md:flex-row gap-4">
                          <img 
                            src={selectedJetData.image} 
                            alt={selectedJetData.name}
                            className="w-full md:w-32 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-lg">{selectedJetData.name}</h4>
                              <span className="bg-blue-200 px-2 py-1 rounded text-sm font-medium">
                                {selectedJetData.tag}
                              </span>
                            </div>
                            <p className="text-lg font-semibold text-[#D4AF37] mb-2">{selectedJetData.price}</p>
                            <p className="text-gray-600 text-sm mb-3">{selectedJetData.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {selectedJetData.features?.slice(0, 3).map((feature: string, idx: number) => (
                                <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="jet-selection">Select an Aircraft</Label>
                          <Select value={selectedJet} onValueChange={handleJetSelection}>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose your aircraft" />
                            </SelectTrigger>
                            <SelectContent>
                              {jets.map((jet) => (
                                <SelectItem key={jet.id} value={`${jet.name} - ${jet.price}`}>
                                  {jet.name} - {jet.price}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="departure-date">Departure Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !selectedDate && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {selectedDate ? format(selectedDate, "PPP") : "Select departure date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div>
                          <Label htmlFor="departure-airport">Departure Airport</Label>
                          <Input id="departure-airport" placeholder="Enter departure airport" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="passengers">Number of Passengers</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select passenger count" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-2">1-2 Passengers</SelectItem>
                              <SelectItem value="3-6">3-6 Passengers</SelectItem>
                              <SelectItem value="7-12">7-12 Passengers</SelectItem>
                              <SelectItem value="13+">13+ Passengers</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="destination-airport">Destination Airport</Label>
                          <Input id="destination-airport" placeholder="Enter destination airport" />
                        </div>

                        <div>
                          <Label htmlFor="flight-type">Flight Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select flight type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="one-way">One Way</SelectItem>
                              <SelectItem value="round-trip">Round Trip</SelectItem>
                              <SelectItem value="multi-leg">Multi-leg Journey</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="jet-special-requests">Special Requests & Catering</Label>
                      <Textarea 
                        id="jet-special-requests" 
                        placeholder="Dietary requirements, special occasions, ground transportation needs..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="border-t pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="lead-passenger">Lead Passenger Name</Label>
                          <Input id="lead-passenger" placeholder="Enter lead passenger name" />
                        </div>
                        <div>
                          <Label htmlFor="contact-phone-jet">Contact Number</Label>
                          <Input id="contact-phone-jet" placeholder="Enter contact number" />
                        </div>
                        <div>
                          <Label htmlFor="contact-email-jet">Email Address</Label>
                          <Input id="contact-email-jet" type="email" placeholder="Enter email address" />
                        </div>
                        <div>
                          <Label htmlFor="company">Company (Optional)</Label>
                          <Input id="company" placeholder="Company name if applicable" />
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-[#D4AF37] hover:bg-[#B4941F] text-white py-3">
                      Request Jet Charter Quote
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Other tabs remain unchanged */}
              <TabsContent value="property-management">
                <Card>
                  <CardHeader>
                    <CardTitle>Property Management Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">
                      Comprehensive property management solutions for luxury residences and commercial properties.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="property-type">Property Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="mixed-use">Mixed Use</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="property-address">Property Address</Label>
                        <Input id="property-address" placeholder="Enter property address" />
                      </div>
                      <div>
                        <Label htmlFor="service-needed">Services Needed</Label>
                        <Textarea 
                          id="service-needed" 
                          placeholder="Describe the management services you require..."
                          className="min-h-[120px]"
                        />
                      </div>
                      <Button className="w-full bg-[#D4AF37] hover:bg-[#B4941F] text-white">
                        Request Property Management Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="interior-design">
                <Card>
                  <CardHeader>
                    <CardTitle>Interior Design Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">
                      Transform your space with our expert interior design consultation and implementation services.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="design-type">Design Service Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consultation">Design Consultation</SelectItem>
                            <SelectItem value="full-service">Full Service Design</SelectItem>
                            <SelectItem value="renovation">Renovation & Remodel</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="space-type">Space Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select space type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="office">Office</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="hospitality">Hospitality</SelectItem>
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
                            <SelectItem value="immediate">ASAP</SelectItem>
                            <SelectItem value="1-3-months">1-3 Months</SelectItem>
                            <SelectItem value="3-6-months">3-6 Months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="design-vision">Design Vision & Requirements</Label>
                        <Textarea 
                          id="design-vision" 
                          placeholder="Describe your vision, style preferences, and specific requirements..."
                          className="min-h-[120px]"
                        />
                      </div>
                      <Button className="w-full bg-[#D4AF37] hover:bg-[#B4941F] text-white">
                        Request Design Consultation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="airbnb-services">
                <Card>
                  <CardHeader>
                    <CardTitle>Airbnb Management Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">
                      Complete Airbnb hosting and management services to maximize your property's potential.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="property-location">Property Location</Label>
                        <Input id="property-location" placeholder="Enter property address" />
                      </div>
                      <div>
                        <Label htmlFor="property-details">Property Details</Label>
                        <div className="grid grid-cols-2 gap-4">
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Bedrooms" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Bedroom</SelectItem>
                              <SelectItem value="2">2 Bedrooms</SelectItem>
                              <SelectItem value="3">3 Bedrooms</SelectItem>
                              <SelectItem value="4+">4+ Bedrooms</SelectItem>
                            </SelectContent>
                          </Select>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Bathrooms" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Bathroom</SelectItem>
                              <SelectItem value="2">2 Bathrooms</SelectItem>
                              <SelectItem value="3">3 Bathrooms</SelectItem>
                              <SelectItem value="4+">4+ Bathrooms</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="current-status">Current Listing Status</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select current status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New to Airbnb</SelectItem>
                            <SelectItem value="existing">Existing Listing</SelectItem>
                            <SelectItem value="considering">Considering Airbnb</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="services-interest">Services of Interest</Label>
                        <Textarea 
                          id="services-interest" 
                          placeholder="What services are you interested in? (listing optimization, guest communication, cleaning, maintenance, etc.)"
                          className="min-h-[100px]"
                        />
                      </div>
                      <Button className="w-full bg-[#D4AF37] hover:bg-[#B4941F] text-white">
                        Request Airbnb Services Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="facility-management">
                <Card>
                  <CardHeader>
                    <CardTitle>Facility Management Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">
                      Professional facility management for commercial properties, estates, and luxury residences.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="facility-type">Facility Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select facility type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="office-building">Office Building</SelectItem>
                            <SelectItem value="luxury-residence">Luxury Residence</SelectItem>
                            <SelectItem value="estate">Private Estate</SelectItem>
                            <SelectItem value="retail">Retail Space</SelectItem>
                            <SelectItem value="industrial">Industrial Facility</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="facility-size">Facility Size</Label>
                        <Input id="facility-size" placeholder="Square footage or property size" />
                      </div>
                      <div>
                        <Label htmlFor="management-scope">Management Scope Required</Label>
                        <Textarea 
                          id="management-scope" 
                          placeholder="Describe the facility management services needed (maintenance, security, cleaning, landscaping, etc.)"
                          className="min-h-[120px]"
                        />
                      </div>
                      <Button className="w-full bg-[#D4AF37] hover:bg-[#B4941F] text-white">
                        Request Facility Management Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="videography">
                <Card>
                  <CardHeader>
                    <CardTitle>Professional Videography Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">
                      High-end videography services for events, properties, corporate content, and special occasions.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="video-type">Video Project Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="event">Event Coverage</SelectItem>
                            <SelectItem value="property">Property Showcase</SelectItem>
                            <SelectItem value="corporate">Corporate Video</SelectItem>
                            <SelectItem value="wedding">Wedding Videography</SelectItem>
                            <SelectItem value="commercial">Commercial/Marketing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="event-date">Event/Shoot Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !selectedDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {selectedDate ? format(selectedDate, "PPP") : "Select event date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <Label htmlFor="video-location">Event/Shoot Location</Label>
                        <Input id="video-location" placeholder="Enter location address" />
                      </div>
                      <div>
                        <Label htmlFor="video-duration">Expected Duration</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="half-day">Half Day (4 hours)</SelectItem>
                            <SelectItem value="full-day">Full Day (8 hours)</SelectItem>
                            <SelectItem value="multi-day">Multiple Days</SelectItem>
                            <SelectItem value="custom">Custom Duration</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="video-requirements">Project Requirements & Vision</Label>
                        <Textarea 
                          id="video-requirements" 
                          placeholder="Describe your vision, specific shots needed, delivery format, timeline, etc."
                          className="min-h-[120px]"
                        />
                      </div>
                      <Button className="w-full bg-[#D4AF37] hover:bg-[#B4941F] text-white">
                        Request Videography Quote
                      </Button>
                    </div>
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
