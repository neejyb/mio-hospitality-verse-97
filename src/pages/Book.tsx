import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Users, Clock, Car, Plane, Wrench, Camera, Palette, Home, User, MessageSquare } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useArtisanData } from '@/hooks/useArtisanData';
import { cars } from '@/data/cars';
import { jets } from '@/data/jets';

const Book = () => {
  const [searchParams] = useSearchParams();
  const { artisans } = useArtisanData();
  const [selectedArtisan, setSelectedArtisan] = useState<any>(null);
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [selectedJet, setSelectedJet] = useState<any>(null);

  // Ensure cars and jets are arrays with fallbacks
  const carsData = cars || [];
  const jetsData = jets || [];

  // Check for URL parameters to pre-select service
  useEffect(() => {
    const service = searchParams.get('service');
    const selectedCarData = searchParams.get('selectedCar');
    const selectedJetData = searchParams.get('selectedJet');

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
  }, [searchParams]);

  const defaultTab = searchParams.get('service') === 'jet-hire' ? 'jet-charter' : 
                    searchParams.get('service') === 'car-hire' ? 'car-hire' : 
                    'property-management';

  const handleArtisanSelect = (artisanId: string) => {
    const artisan = artisans.find(a => a.id === artisanId);
    setSelectedArtisan(artisan);
  };

  const handleCarSelect = (carId: string) => {
    const car = carsData.find(c => c.id === parseInt(carId));
    setSelectedCar(car);
  };

  const handleJetSelect = (jetId: string) => {
    const jet = jetsData.find(j => j.id === parseInt(jetId));
    setSelectedJet(jet);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book a Service
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our premium services and let us create an exceptional experience for you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="property-management" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Property</span>
              </TabsTrigger>
              <TabsTrigger value="car-hire" className="flex items-center gap-2">
                <Car className="w-4 h-4" />
                <span className="hidden sm:inline">Car Hire</span>
              </TabsTrigger>
              <TabsTrigger value="jet-charter" className="flex items-center gap-2">
                <Plane className="w-4 h-4" />
                <span className="hidden sm:inline">Jet Charter</span>
              </TabsTrigger>
              <TabsTrigger value="maintenance" className="flex items-center gap-2">
                <Wrench className="w-4 h-4" />
                <span className="hidden sm:inline">Maintenance</span>
              </TabsTrigger>
              <TabsTrigger value="videography" className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                <span className="hidden sm:inline">Video</span>
              </TabsTrigger>
              <TabsTrigger value="book-artisans" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Artisans</span>
              </TabsTrigger>
            </TabsList>

            {/* Property Management Tab */}
            <TabsContent value="property-management">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <Home className="w-6 h-6" />
                    Property Management Service
                  </h2>
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
                            <SelectItem value="luxury-estate">Luxury Estate</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="property-location">Location</Label>
                        <Input id="property-location" placeholder="Property address" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="service-date">Preferred Start Date</Label>
                        <Input id="service-date" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="budget">Monthly Budget</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                            <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                            <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10000+">$10,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="services-needed">Services Needed</Label>
                      <Textarea
                        id="services-needed"
                        placeholder="Describe the property management services you need..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full">Request Property Management Quote</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Car Hire Tab */}
            <TabsContent value="car-hire">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <Car className="w-6 h-6" />
                    Luxury Car Hire
                  </h2>
                  
                  {/* Selected Car Preview */}
                  {selectedCar && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 border rounded-lg bg-gray-50"
                    >
                      <h3 className="font-semibold mb-3 text-gray-800">Selected Vehicle</h3>
                      <div className="flex flex-col md:flex-row gap-4">
                        <img
                          src={selectedCar.image}
                          alt={selectedCar.name}
                          className="w-full md:w-32 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-lg">{selectedCar.name}</h4>
                            <span className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">{selectedCar.category}</span>
                          </div>
                          <p className="text-[#D4AF37] font-semibold mb-2">${selectedCar.price}/day</p>
                          <p className="text-gray-600 text-sm mb-2">{selectedCar.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedCar.features?.slice(0, 3).map((feature, idx) => (
                              <span key={idx} className="text-xs bg-white px-2 py-1 rounded border">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="car-selection">Select a Vehicle</Label>
                      <Select onValueChange={handleCarSelect} value={selectedCar?.id?.toString() || ""}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a vehicle" />
                        </SelectTrigger>
                        <SelectContent>
                          {carsData.map((car) => (
                            <SelectItem key={car.id} value={car.id.toString()}>
                              {car.name} – ${car.price}/day
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="pickup-date">Pickup Date</Label>
                        <Input id="pickup-date" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="return-date">Return Date</Label>
                        <Input id="return-date" type="date" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="pickup-location">Pickup Location</Label>
                        <Input id="pickup-location" placeholder="Enter pickup address" />
                      </div>
                      <div>
                        <Label htmlFor="driver-option">Driver Option</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select driver option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="self-drive">Self Drive</SelectItem>
                            <SelectItem value="chauffeur">With Chauffeur</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="car-notes">Special Requirements</Label>
                      <Textarea
                        id="car-notes"
                        placeholder="Any special requests or requirements..."
                        rows={3}
                      />
                    </div>
                    <Button className="w-full">Book Car Hire</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Jet Charter Tab */}
            <TabsContent value="jet-charter">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <Plane className="w-6 h-6" />
                    Private Jet Charter
                  </h2>
                  
                  {/* Selected Jet Preview */}
                  {selectedJet && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 border rounded-lg bg-gray-50"
                    >
                      <h3 className="font-semibold mb-3 text-gray-800">Selected Aircraft</h3>
                      <div className="flex flex-col md:flex-row gap-4">
                        <img
                          src={selectedJet.image}
                          alt={selectedJet.name}
                          className="w-full md:w-32 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-lg">{selectedJet.name}</h4>
                            <span className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">{selectedJet.category}</span>
                          </div>
                          <p className="text-[#D4AF37] font-semibold mb-2">${selectedJet.price}/hour</p>
                          <p className="text-gray-600 text-sm mb-2">{selectedJet.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedJet.features?.slice(0, 3).map((feature, idx) => (
                              <span key={idx} className="text-xs bg-white px-2 py-1 rounded border">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="jet-selection">Select an Aircraft</Label>
                      <Select onValueChange={handleJetSelect} value={selectedJet?.id?.toString() || ""}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an aircraft" />
                        </SelectTrigger>
                        <SelectContent>
                          {jetsData.map((jet) => (
                            <SelectItem key={jet.id} value={jet.id.toString()}>
                              {jet.name} – ${jet.price}/hour
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="departure-airport">Departure Airport</Label>
                        <Input id="departure-airport" placeholder="Enter departure airport" />
                      </div>
                      <div>
                        <Label htmlFor="arrival-airport">Arrival Airport</Label>
                        <Input id="arrival-airport" placeholder="Enter destination airport" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="departure-date">Departure Date</Label>
                        <Input id="departure-date" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="departure-time">Departure Time</Label>
                        <Input id="departure-time" type="time" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="passengers">Number of Passengers</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select passengers" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-2">1-2 passengers</SelectItem>
                            <SelectItem value="3-4">3-4 passengers</SelectItem>
                            <SelectItem value="5-8">5-8 passengers</SelectItem>
                            <SelectItem value="9-12">9-12 passengers</SelectItem>
                            <SelectItem value="13+">13+ passengers</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="trip-type">Trip Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select trip type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="one-way">One Way</SelectItem>
                            <SelectItem value="round-trip">Round Trip</SelectItem>
                            <SelectItem value="multi-leg">Multi-leg</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="jet-notes">Special Requirements</Label>
                      <Textarea
                        id="jet-notes"
                        placeholder="Catering preferences, ground transportation, special requests..."
                        rows={3}
                      />
                    </div>
                    <Button className="w-full">Book Jet Charter</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Maintenance Tab */}
            <TabsContent value="maintenance">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <Wrench className="w-6 h-6" />
                    Maintenance Services
                  </h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="maintenance-type">Service Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select maintenance type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="plumbing">Plumbing</SelectItem>
                            <SelectItem value="electrical">Electrical</SelectItem>
                            <SelectItem value="hvac">HVAC</SelectItem>
                            <SelectItem value="general">General Maintenance</SelectItem>
                            <SelectItem value="emergency">Emergency Repair</SelectItem>
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
                            <SelectItem value="emergency">Emergency (Same Day)</SelectItem>
                            <SelectItem value="urgent">Urgent (Within 24 hours)</SelectItem>
                            <SelectItem value="normal">Normal (Within Week)</SelectItem>
                            <SelectItem value="scheduled">Scheduled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="maintenance-location">Property Address</Label>
                      <Input id="maintenance-location" placeholder="Enter property address" />
                    </div>
                    <div>
                      <Label htmlFor="maintenance-description">Issue Description</Label>
                      <Textarea
                        id="maintenance-description"
                        placeholder="Describe the maintenance issue in detail..."
                        rows={4}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="preferred-date">Preferred Date</Label>
                        <Input id="preferred-date" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="preferred-time">Preferred Time</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                            <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button className="w-full">Book Maintenance Service</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Videography Tab */}
            <TabsContent value="videography">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <Camera className="w-6 h-6" />
                    Professional Videography
                  </h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="video-type">Video Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select video type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="property-showcase">Property Showcase</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="event">Event Coverage</SelectItem>
                            <SelectItem value="drone">Drone/Aerial</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="video-duration">Expected Duration</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30-60s">30-60 seconds</SelectItem>
                            <SelectItem value="1-2min">1-2 minutes</SelectItem>
                            <SelectItem value="2-5min">2-5 minutes</SelectItem>
                            <SelectItem value="5min+">5+ minutes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="shoot-location">Shoot Location</Label>
                      <Input id="shoot-location" placeholder="Enter shoot location address" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="shoot-date">Preferred Shoot Date</Label>
                        <Input id="shoot-date" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="delivery-date">Required Delivery Date</Label>
                        <Input id="delivery-date" type="date" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="video-brief">Project Brief</Label>
                      <Textarea
                        id="video-brief"
                        placeholder="Describe your vision, style preferences, key shots needed..."
                        rows={4}
                      />
                    </div>
                    <div>
                      <Label htmlFor="video-budget">Budget Range</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                          <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                          <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10000+">$10,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">Book Videography Service</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Book Artisans Tab */}
            <TabsContent value="book-artisans">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <User className="w-6 h-6" />
                    Book Professional Artisans
                  </h2>
                  
                  {/* Selected Artisan Preview */}
                  {selectedArtisan && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 border rounded-lg bg-gray-50"
                    >
                      <h3 className="font-semibold mb-3 text-gray-800">Selected Artisan</h3>
                      <div className="flex flex-col md:flex-row gap-4">
                        <img
                          src={selectedArtisan.image}
                          alt={selectedArtisan.name}
                          className="w-full md:w-16 h-16 object-cover rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-lg">{selectedArtisan.name}</h4>
                            <span className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">{selectedArtisan.specialty}</span>
                          </div>
                          <p className="text-[#D4AF37] font-semibold mb-2">${selectedArtisan.rate}/hour</p>
                          <p className="text-gray-600 text-sm mb-2">{selectedArtisan.experience} years experience</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedArtisan.skills?.slice(0, 3).map((skill, idx) => (
                              <span key={idx} className="text-xs bg-white px-2 py-1 rounded border">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="artisan-selection">Select an Artisan</Label>
                      <Select onValueChange={handleArtisanSelect} value={selectedArtisan?.id || ""}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an artisan" />
                        </SelectTrigger>
                        <SelectContent>
                          {artisans.map((artisan) => (
                            <SelectItem key={artisan.id} value={artisan.id}>
                              {artisan.name} - {artisan.specialty} (${artisan.rate}/hour)
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="project-start">Project Start Date</Label>
                        <Input id="project-start" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="project-duration">Estimated Duration</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="half-day">Half Day (4 hours)</SelectItem>
                            <SelectItem value="full-day">Full Day (8 hours)</SelectItem>
                            <SelectItem value="2-3-days">2-3 Days</SelectItem>
                            <SelectItem value="1-week">1 Week</SelectItem>
                            <SelectItem value="2-weeks">2 Weeks</SelectItem>
                            <SelectItem value="1-month">1 Month</SelectItem>
                            <SelectItem value="custom">Custom Duration</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="project-location">Project Location</Label>
                      <Input id="project-location" placeholder="Enter project address" />
                    </div>
                    <div>
                      <Label htmlFor="project-description">Project Description</Label>
                      <Textarea
                        id="project-description"
                        placeholder="Describe your project requirements, style preferences, and any specific details..."
                        rows={4}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="project-budget">Budget Range</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                            <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                            <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                            <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10000+">$10,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="materials-provided">Materials Provided By</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="client">Client Provides</SelectItem>
                            <SelectItem value="artisan">Artisan Provides</SelectItem>
                            <SelectItem value="shared">Shared Responsibility</SelectItem>
                            <SelectItem value="discuss">To Be Discussed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button className="w-full">Book Artisan</Button>
                  </form>
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
