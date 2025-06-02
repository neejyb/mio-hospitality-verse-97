import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, MapPin, Users, Clock, Car, Plane, Home, Wrench, Palette, Video, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ServiceLayout from '@/components/ServiceLayout';
import { cars } from '@/data/cars';
import { jets } from '@/data/jets';

interface SelectedItem {
  id: number;
  name: string;
  image: string;
  price: string | number;
  tag: string;
  description: string;
  features: string[];
}

const Book = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('car-hire');
  const [selectedCar, setSelectedCar] = useState<SelectedItem | null>(null);
  const [selectedJet, setSelectedJet] = useState<SelectedItem | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupDate: '',
    returnDate: '',
    pickupLocation: '',
    dropoffLocation: '',
    passengers: '',
    specialRequests: '',
    selectedVehicle: '',
    selectedAircraft: ''
  });

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
          setFormData(prev => ({ ...prev, selectedVehicle: `${carData.name} - $${carData.price}/day` }));
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
          setFormData(prev => ({ ...prev, selectedAircraft: `${jetData.name} - $${jetData.price}/hour` }));
        } catch (error) {
          console.error('Error parsing jet data:', error);
        }
      }
    } else if (service) {
      setActiveTab(service);
    }
  }, [searchParams]);

  const handleCarSelection = (carId: string) => {
    const car = cars.find(c => c.id === parseInt(carId));
    if (car) {
      const carData: SelectedItem = {
        id: car.id,
        name: car.name,
        image: car.image,
        price: car.price,
        tag: car.category,
        description: car.description,
        features: car.features
      };
      setSelectedCar(carData);
      setFormData(prev => ({ ...prev, selectedVehicle: `${car.name} - $${car.price}/day` }));
    }
  };

  const handleJetSelection = (jetId: string) => {
    const jet = jets.find(j => j.id === parseInt(jetId));
    if (jet) {
      const jetData: SelectedItem = {
        id: jet.id,
        name: jet.name,
        image: jet.image,
        price: jet.price,
        tag: jet.category,
        description: jet.description,
        features: jet.features
      };
      setSelectedJet(jetData);
      setFormData(prev => ({ ...prev, selectedAircraft: `${jet.name} - $${jet.price}/hour` }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted",
      description: "We'll contact you within 24 hours to confirm your booking details.",
    });
  };

  const PreviewCard = ({ item, type }: { item: SelectedItem; type: 'car' | 'jet' }) => (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-48 h-32 relative overflow-hidden rounded-lg">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-red-950 text-white px-2 py-1 rounded text-xs font-medium">
              {item.tag}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
            <p className="text-[#D4AF37] font-semibold mb-2">
              ${item.price}/{type === 'car' ? 'day' : 'hour'}
            </p>
            <p className="text-gray-600 text-sm mb-3">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.features.slice(0, 3).map((feature, idx) => (
                <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const services = [
    { id: 'service-1', name: 'Car Hire', icon: <Car className="w-4 h-4" />, value: 'car-hire' },
    { id: 'service-2', name: 'Jet Charter', icon: <Plane className="w-4 h-4" />, value: 'jet-charter' },
    { id: 'service-3', name: 'Yacht Charter', icon: <Video className="w-4 h-4" />, value: 'yacht-charter' },
    { id: 'service-4', name: 'Villa Rental', icon: <Home className="w-4 h-4" />, value: 'villa-rental' },
    { id: 'service-5', name: 'Concierge', icon: <Wrench className="w-4 h-4" />, value: 'concierge' },
    { id: 'service-6', name: 'Event Planning', icon: <Palette className="w-4 h-4" />, value: 'event-planning' },
    { id: 'service-7', name: 'Security', icon: <Shield className="w-4 h-4" />, value: 'security' },
  ];

  return (
    <ServiceLayout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Book a Service
              </h1>
              <p className="text-gray-600 text-lg">
                Choose from our premium services and let us create an unforgettable experience for you
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8">
                <TabsTrigger value="car-hire" className="flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  <span className="hidden sm:inline">Car Hire</span>
                </TabsTrigger>
                <TabsTrigger value="jet-charter" className="flex items-center gap-2">
                  <Plane className="w-4 h-4" />
                  <span className="hidden sm:inline">Jet Charter</span>
                </TabsTrigger>
                {services.slice(2).map((service) => (
                  <TabsTrigger key={service.id} value={service.value} className="flex items-center gap-2">
                    {service.icon}
                    <span className="hidden sm:inline">{service.name}</span>
                  </TabsTrigger>
                ))}
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
                  <CardContent>
                    {selectedCar && <PreviewCard item={selectedCar} type="car" />}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="vehicle">Choose a Vehicle</Label>
                          <Select 
                            value={formData.selectedVehicle} 
                            onValueChange={(value) => {
                              setFormData(prev => ({ ...prev, selectedVehicle: value }));
                              const carId = value.split(' - ')[0];
                              const car = cars.find(c => c.name === carId);
                              if (car) handleCarSelection(car.id.toString());
                            }}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a vehicle" />
                            </SelectTrigger>
                            <SelectContent>
                              {cars.map((car) => (
                                <SelectItem key={car.id} value={`${car.name} - $${car.price}/day`}>
                                  {car.name} - ${car.price}/day
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john.doe@example.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 555-123-4567"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pickupDate">Pickup Date</Label>
                          <Input
                            type="date"
                            id="pickupDate"
                            value={formData.pickupDate}
                            onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="returnDate">Return Date</Label>
                          <Input
                            type="date"
                            id="returnDate"
                            value={formData.returnDate}
                            onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pickupLocation">Pickup Location</Label>
                          <Input
                            type="text"
                            id="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                            placeholder="Airport, Hotel, Address"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dropoffLocation">Drop-off Location</Label>
                          <Input
                            type="text"
                            id="dropoffLocation"
                            value={formData.dropoffLocation}
                            onChange={(e) => setFormData({ ...formData, dropoffLocation: e.target.value })}
                            placeholder="Same as pickup, Different location"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="passengers">Number of Passengers</Label>
                          <Input
                            type="number"
                            id="passengers"
                            value={formData.passengers}
                            onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                            placeholder="1, 2, 3..."
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="specialRequests">Special Requests</Label>
                        <Textarea
                          id="specialRequests"
                          value={formData.specialRequests}
                          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                          placeholder="Additional information or specific needs"
                          rows={3}
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Submit Booking Request
                      </Button>
                    </form>
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
                  <CardContent>
                    {selectedJet && <PreviewCard item={selectedJet} type="jet" />}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="aircraft">Select an Aircraft</Label>
                          <Select 
                            value={formData.selectedAircraft} 
                            onValueChange={(value) => {
                              setFormData(prev => ({ ...prev, selectedAircraft: value }));
                              const jetId = value.split(' - ')[0];
                              const jet = jets.find(j => j.name === jetId);
                              if (jet) handleJetSelection(jet.id.toString());
                            }}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select an aircraft" />
                            </SelectTrigger>
                            <SelectContent>
                              {jets.map((jet) => (
                                <SelectItem key={jet.id} value={`${jet.name} - $${jet.price}/hour`}>
                                  {jet.name} - ${jet.price}/hour
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john.doe@example.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 555-123-4567"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pickupDate">Departure Date</Label>
                          <Input
                            type="date"
                            id="pickupDate"
                            value={formData.pickupDate}
                            onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="returnDate">Arrival Date</Label>
                          <Input
                            type="date"
                            id="returnDate"
                            value={formData.returnDate}
                            onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pickupLocation">Departure Location</Label>
                          <Input
                            type="text"
                            id="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                            placeholder="Airport, Private Terminal"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dropoffLocation">Arrival Location</Label>
                          <Input
                            type="text"
                            id="dropoffLocation"
                            value={formData.dropoffLocation}
                            onChange={(e) => setFormData({ ...formData, dropoffLocation: e.target.value })}
                            placeholder="Same as departure, Different location"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="passengers">Number of Passengers</Label>
                          <Input
                            type="number"
                            id="passengers"
                            value={formData.passengers}
                            onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                            placeholder="1, 2, 3..."
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="specialRequests">Special Requests</Label>
                        <Textarea
                          id="specialRequests"
                          value={formData.specialRequests}
                          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                          placeholder="Catering, Specific Aircraft Needs"
                          rows={3}
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Submit Booking Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {services.slice(2).map((service) => (
                <TabsContent key={service.id} value={service.value}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {service.icon}
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Content for {service.name} will go here.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Book;
