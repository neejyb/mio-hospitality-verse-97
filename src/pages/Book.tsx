import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, MapPin, Users, Clock, Phone, Mail } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'react-router-dom';
import AirbnbBooking from '@/components/AirbnbBooking';

const Book = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('property-booking');
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [selectedJet, setSelectedJet] = useState<any>(null);
  const [date, setDate] = useState<Date>();

  // Handle service type and selected item from URL parameters
  useEffect(() => {
    const service = searchParams.get('service');
    const selectedCarData = searchParams.get('selectedCar');
    const selectedJetData = searchParams.get('selectedJet');

    if (service === 'car-hire') {
      setActiveTab('car-hire');
      if (selectedCarData) {
        try {
          const carData = JSON.parse(decodeURIComponent(selectedCarData));
          setSelectedCar(carData);
        } catch (error) {
          console.error('Error parsing car data:', error);
        }
      }
    } else if (service === 'jet-hire') {
      setActiveTab('jet-charter');
      if (selectedJetData) {
        try {
          const jetData = JSON.parse(decodeURIComponent(selectedJetData));
          setSelectedJet(jetData);
        } catch (error) {
          console.error('Error parsing jet data:', error);
        }
      }
    }
  }, [searchParams]);

  // Car options for dropdown
  const carOptions = [
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

  // Jet options for dropdown
  const jetOptions = [
    { id: 1, name: 'Gulfstream G650', price: '$8,500/hour' },
    { id: 2, name: 'Bombardier Global 7500', price: '$9,200/hour' },
    { id: 3, name: 'Cessna Citation X+', price: '$5,800/hour' },
    { id: 4, name: 'Embraer Phenom 300E', price: '$3,200/hour' }
  ];

  const handleCarSelection = (carName: string) => {
    const car = carOptions.find(c => c.name === carName);
    if (car) {
      // Create a simplified car object for the preview card
      setSelectedCar({
        id: car.id,
        name: car.name,
        price: car.price,
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
        tag: 'Luxury Vehicle',
        description: `Experience luxury and comfort with the ${car.name}.`,
        features: ['Premium Interior', 'Professional Service', 'Fully Insured']
      });
    }
  };

  const handleJetSelection = (jetName: string) => {
    const jet = jetOptions.find(j => j.name === jetName);
    if (jet) {
      // Create a simplified jet object for the preview card
      setSelectedJet({
        id: jet.id,
        name: jet.name,
        price: jet.price,
        image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070',
        tag: 'Private Jet',
        description: `Experience premium private aviation with the ${jet.name}.`,
        features: ['Luxury Cabin', 'Professional Crew', 'Global Access']
      });
    }
  };

  const renderSelectedItemCard = (item: any) => (
    <Card className="mb-6 border-2 border-[#D4AF37] shadow-lg">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-32 md:h-24 object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <span className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">{item.tag}</span>
            </div>
            <p className="text-[#D4AF37] font-semibold mb-2">{item.price}</p>
            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.features?.slice(0, 3).map((feature: string, idx: number) => (
                <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

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
            <h1 className="text-4xl font-bold mb-4">Book a Service</h1>
            <p className="text-gray-600">Choose from our premium services and let us create an unforgettable experience</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="property-booking">Property Booking</TabsTrigger>
              <TabsTrigger value="car-hire">Car Hire</TabsTrigger>
              <TabsTrigger value="jet-charter">Jet Charter</TabsTrigger>
              <TabsTrigger value="facility-management">Facility Management</TabsTrigger>
              <TabsTrigger value="interior-design">Interior Design</TabsTrigger>
            </TabsList>

            <TabsContent value="property-booking">
              <AirbnbBooking />
            </TabsContent>

            <TabsContent value="car-hire">
              <Card>
                <CardHeader>
                  <CardTitle>Car Hire Service</CardTitle>
                  <CardDescription>Book your luxury vehicle for any occasion</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {selectedCar && renderSelectedItemCard(selectedCar)}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="car-select">Choose a Vehicle</Label>
                      <Select 
                        value={selectedCar?.name || ''} 
                        onValueChange={handleCarSelection}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a car" />
                        </SelectTrigger>
                        <SelectContent>
                          {carOptions.map((car) => (
                            <SelectItem key={car.id} value={car.name}>
                              {car.name} - {car.price}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pickup-date">Pickup Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pickup-location">Pickup Location</Label>
                      <Input id="pickup-location" placeholder="Enter pickup location" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="4-hours">4 Hours</SelectItem>
                          <SelectItem value="8-hours">8 Hours</SelectItem>
                          <SelectItem value="1-day">1 Day</SelectItem>
                          <SelectItem value="2-days">2 Days</SelectItem>
                          <SelectItem value="1-week">1 Week</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="special-requests">Special Requests</Label>
                    <Textarea
                      id="special-requests"
                      placeholder="Any special requirements or requests..."
                      rows={3}
                    />
                  </div>

                  <Button className="w-full bg-[#D4AF37] hover:bg-[#B4941F] text-white">
                    Book Car Hire
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="jet-charter">
              <Card>
                <CardHeader>
                  <CardTitle>Private Jet Charter</CardTitle>
                  <CardDescription>Experience luxury air travel with our premium fleet</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {selectedJet && renderSelectedItemCard(selectedJet)}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="aircraft-select">Select Aircraft</Label>
                      <Select 
                        value={selectedJet?.name || ''} 
                        onValueChange={handleJetSelection}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an aircraft" />
                        </SelectTrigger>
                        <SelectContent>
                          {jetOptions.map((jet) => (
                            <SelectItem key={jet.id} value={jet.name}>
                              {jet.name} - {jet.price}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="departure-date">Departure Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="departure-location">Departure Airport</Label>
                      <Input id="departure-location" placeholder="Enter departure airport" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination Airport</Label>
                      <Input id="destination" placeholder="Enter destination airport" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="passengers">Number of Passengers</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select passengers" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 Passengers</SelectItem>
                          <SelectItem value="3-4">3-4 Passengers</SelectItem>
                          <SelectItem value="5-8">5-8 Passengers</SelectItem>
                          <SelectItem value="9-12">9-12 Passengers</SelectItem>
                          <SelectItem value="13+">13+ Passengers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="flight-type">Flight Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select flight type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="one-way">One Way</SelectItem>
                          <SelectItem value="round-trip">Round Trip</SelectItem>
                          <SelectItem value="multi-leg">Multi-Leg</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="flight-requests">Special Requests</Label>
                    <Textarea
                      id="flight-requests"
                      placeholder="Catering preferences, ground transportation, special requirements..."
                      rows={3}
                    />
                  </div>

                  <Button className="w-full bg-[#D4AF37] hover:bg-[#B4941F] text-white">
                    Request Quote
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="facility-management">
              <Card>
                <CardHeader>
                  <CardTitle>Facility Management</CardTitle>
                  <CardDescription>Optimize your property with our expert management services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="property-type">Property Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="industrial">Industrial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service-type">Service Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maintenance">Maintenance</SelectItem>
                          <SelectItem value="security">Security</SelectItem>
                          <SelectItem value="cleaning">Cleaning</SelectItem>
                          <SelectItem value="landscaping">Landscaping</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="property-size">Property Size (sq ft)</Label>
                      <Input id="property-size" placeholder="Enter property size" type="number" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="frequency">Service Frequency</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                          <SelectItem value="annually">Annually</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additional-details">Additional Details</Label>
                    <Textarea
                      id="additional-details"
                      placeholder="Specific requirements, concerns, or requests..."
                      rows={3}
                    />
                  </div>

                  <Button className="w-full bg-[#D4AF37] hover:bg-[#B4941F] text-white">
                    Request a Quote
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="interior-design">
              <Card>
                <CardHeader>
                  <CardTitle>Interior Design</CardTitle>
                  <CardDescription>Transform your space with our expert design services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="design-style">Design Style</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select design style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="modern">Modern</SelectItem>
                          <SelectItem value="contemporary">Contemporary</SelectItem>
                          <SelectItem value="minimalist">Minimalist</SelectItem>
                          <SelectItem value="traditional">Traditional</SelectItem>
                          <SelectItem value="eclectic">Eclectic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="room-type">Room Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="living-room">Living Room</SelectItem>
                          <SelectItem value="bedroom">Bedroom</SelectItem>
                          <SelectItem value="kitchen">Kitchen</SelectItem>
                          <SelectItem value="bathroom">Bathroom</SelectItem>
                          <SelectItem value="office">Office</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget</Label>
                      <Input id="budget" placeholder="Enter your budget" type="number" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-month">1 Month</SelectItem>
                          <SelectItem value="3-months">3 Months</SelectItem>
                          <SelectItem value="6-months">6 Months</SelectItem>
                          <SelectItem value="12-months">12 Months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="design-brief">Design Brief</Label>
                    <Textarea
                      id="design-brief"
                      placeholder="Describe your vision, preferences, and requirements..."
                      rows={3}
                    />
                  </div>

                  <Button className="w-full bg-[#D4AF37] hover:bg-[#B4941F] text-white">
                    Request a Consultation
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
