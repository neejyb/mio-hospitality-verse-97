
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';

const serviceOptions = [{
  value: 'interior-design',
  label: 'Interior Design'
}, {
  value: 'airbnb',
  label: 'Airbnb Services'
}, {
  value: 'videography',
  label: 'Videography'
}, {
  value: 'car-hire',
  label: 'Car Hire'
}, {
  value: 'jet-hire',
  label: 'Private Jet Hire'
}, {
  value: 'maintenance',
  label: 'Maintenance Services'
}, {
  value: 'property-management',
  label: 'Property Management'
}, {
  value: 'facility-support',
  label: 'Facility Support'
}];

const Book = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';
  const initialProperty = searchParams.get('property') || '';
  const [formData, setFormData] = useState({
    service: initialService,
    name: '',
    email: '',
    phone: '',
    date: null as Date | null,
    message: '',
    property: initialProperty
  });
  const [selectedTab, setSelectedTab] = useState('general');
  const [loading, setLoading] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (initialService === 'airbnb') {
      setSelectedTab('airbnb');
    } else if (initialService === 'car-hire') {
      setSelectedTab('car');
    } else if (initialService === 'jet-hire') {
      setSelectedTab('jet');
    }
  }, [initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData(prev => ({
      ...prev,
      date
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast.success('Your booking request has been received. We will contact you shortly!');
      setFormData({
        service: '',
        name: '',
        email: '',
        phone: '',
        date: null,
        message: '',
        property: ''
      });
      setLoading(false);
    }, 1500);
  };

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="relative h-[40vh] bg-cover bg-center flex items-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506485338023-6ce5f36692df?q=80&w=2070')"
      }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Book a Service</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Fill out the form below to request our services and we'll get back to you promptly.
            </p>
          </div>
        </div>
        
        <section className="py-8 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow-lg">
              <Tabs defaultValue={selectedTab} value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                <div className="mb-6 overflow-x-auto pb-2">
                  <TabsList className={`${isMobile ? 'flex w-full' : 'grid grid-cols-4 w-full'}`}>
                    <TabsTrigger 
                      value="general" 
                      className="text-wine-950 py-3 px-4 text-base"
                    >
                      General Booking
                    </TabsTrigger>
                    <TabsTrigger 
                      value="airbnb" 
                      className="text-wine-950 py-3 px-4 text-base"
                    >
                      Airbnb Booking
                    </TabsTrigger>
                    <TabsTrigger 
                      value="car" 
                      className="text-wine-950 py-3 px-4 text-base"
                    >
                      Car Hire
                    </TabsTrigger>
                    <TabsTrigger 
                      value="jet" 
                      className="text-wine-950 py-3 px-4 text-base"
                    >
                      Jet Charter
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="general" className="px-1 md:px-4">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Type
                      </label>
                      <Select value={formData.service} onValueChange={value => handleSelectChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map(option => <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" required />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Date
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              {formData.date ? format(formData.date, 'PPP') : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-white pointer-events-auto">
                            <Calendar mode="single" selected={formData.date || undefined} onSelect={handleDateChange} initialFocus className="p-3" />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Details
                      </label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Please provide any specific requirements or questions about our services..." rows={4} />
                    </div>
                    
                    <Button type="submit" disabled={loading} className="w-full text-white transition-colors bg-wine-500 hover:bg-wine-600">
                      {loading ? 'Submitting...' : 'Submit Booking Request'}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="airbnb" className="px-1 md:px-4">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="service" value="airbnb" />
                    
                    <div>
                      <label htmlFor="property" className="block text-sm font-medium text-gray-700 mb-1">
                        Select Property
                      </label>
                      <Select value={formData.property} onValueChange={value => handleSelectChange('property', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a property" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="luxury-apartment">Luxury Downtown Apartment</SelectItem>
                          <SelectItem value="beachfront-villa">Beachfront Villa</SelectItem>
                          <SelectItem value="modern-loft">Modern Urban Loft</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Check-in Date
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              {formData.date ? format(formData.date, 'PPP') : <span>Select check-in date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-white pointer-events-auto">
                            <Calendar mode="single" selected={formData.date || undefined} onSelect={handleDateChange} initialFocus className="p-3" disabled={date => date < new Date()} />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div>
                        <label htmlFor="nights" className="block text-sm font-medium text-gray-700 mb-1">
                          Number of Nights
                        </label>
                        <Select defaultValue="3">
                          <SelectTrigger>
                            <SelectValue placeholder="Select number of nights" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 14, 30].map(num => <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? 'night' : 'nights'}
                              </SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">
                          Adults
                        </label>
                        <Select defaultValue="2">
                          <SelectTrigger>
                            <SelectValue placeholder="Number of adults" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6].map(num => <SelectItem key={num} value={num.toString()}>
                                {num}
                              </SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">
                          Children
                        </label>
                        <Select defaultValue="0">
                          <SelectTrigger>
                            <SelectValue placeholder="Number of children" />
                          </SelectTrigger>
                          <SelectContent>
                            {[0, 1, 2, 3, 4].map(num => <SelectItem key={num} value={num.toString()}>
                                {num}
                              </SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" required />
                    </div>
                    
                    <div>
                      <label htmlFor="airbnb-message" className="block text-sm font-medium text-gray-700 mb-1">
                        Special Requests
                      </label>
                      <Textarea id="airbnb-message" name="message" value={formData.message} onChange={handleChange} placeholder="Any special requirements for your stay..." rows={4} />
                    </div>
                    
                    <Button type="submit" disabled={loading} className="w-full text-white transition-colors bg-wine-500 hover:bg-wine-600">
                      {loading ? 'Processing...' : 'Reserve Property'}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="car" className="px-1 md:px-4">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="service" value="car-hire" />
                    
                    <div>
                      <label htmlFor="car-model" className="block text-sm font-medium text-gray-700 mb-1">
                        Choose a Vehicle
                      </label>
                      <Select defaultValue="luxury-sedan">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a vehicle" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="luxury-sedan">Luxury Sedan - Mercedes S-Class</SelectItem>
                          <SelectItem value="sports-car">Sports Car - Porsche 911</SelectItem>
                          <SelectItem value="suv">SUV - Range Rover Autobiography</SelectItem>
                          <SelectItem value="exotic">Exotic - Lamborghini Huracán</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Pickup Date
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal text-stone-950 bg-slate-50">
                              {formData.date ? format(formData.date, 'PPP') : <span>Select pickup date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-white pointer-events-auto">
                            <Calendar mode="single" selected={formData.date || undefined} onSelect={handleDateChange} initialFocus className="p-3" disabled={date => date < new Date()} />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div>
                        <label htmlFor="rental-duration" className="block text-sm font-medium text-gray-700 mb-1">
                          Rental Duration
                        </label>
                        <Select defaultValue="1">
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 14, 30].map(num => <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? 'day' : 'days'}
                              </SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="pickup-location" className="block text-sm font-medium text-gray-700 mb-1">
                          Pickup Location
                        </label>
                        <Select defaultValue="office">
                          <SelectTrigger>
                            <SelectValue placeholder="Select pickup location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="office">Our Office</SelectItem>
                            <SelectItem value="airport">Airport</SelectItem>
                            <SelectItem value="hotel">Your Hotel</SelectItem>
                            <SelectItem value="custom">Custom Address</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label htmlFor="driver" className="block text-sm font-medium text-gray-700 mb-1">
                          Driver Service
                        </label>
                        <Select defaultValue="self">
                          <SelectTrigger>
                            <SelectValue placeholder="Select driver option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="self">Self-Drive</SelectItem>
                            <SelectItem value="chauffeur">With Chauffeur</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" required />
                    </div>
                    
                    <Button type="submit" disabled={loading} className="w-full transition-colors bg-wine-500 hover:bg-wine-600 text-amber-50">
                      {loading ? 'Processing...' : 'Reserve Vehicle'}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="jet" className="px-1 md:px-4">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="service" value="jet-hire" />
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Available Private Jet</h3>
                      <p className="text-gray-600 mb-4">
                        We currently have one luxury private jet available for charter:
                      </p>
                      <div className="flex items-center">
                        <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070" alt="Private Jet" className="w-24 h-24 object-cover rounded-md mr-4" />
                        <div>
                          <h4 className="font-medium text-gray-900">Gulfstream G650</h4>
                          <p className="text-gray-600 text-sm">Capacity: 16 passengers</p>
                          <p className="text-gray-600 text-sm">Range: Long-haul international flights</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Departure Date
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              {formData.date ? format(formData.date, 'PPP') : <span>Select departure date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-white pointer-events-auto">
                            <Calendar mode="single" selected={formData.date || undefined} onSelect={handleDateChange} initialFocus className="p-3" disabled={date => date < new Date()} />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div>
                        <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">
                          Number of Passengers
                        </label>
                        <Select defaultValue="4">
                          <SelectTrigger>
                            <SelectValue placeholder="Select number of passengers" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16].map(num => <SelectItem key={num} value={num.toString()}>
                                {num}
                              </SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="departure" className="block text-sm font-medium text-gray-700 mb-1">
                          Departure Location
                        </label>
                        <Input id="departure" placeholder="City or Airport" required />
                      </div>
                      
                      <div>
                        <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                          Destination
                        </label>
                        <Input id="destination" placeholder="City or Airport" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" required />
                    </div>
                    
                    <div>
                      <label htmlFor="jet-message" className="block text-sm font-medium text-gray-700 mb-1">
                        Special Requirements
                      </label>
                      <Textarea id="jet-message" name="message" value={formData.message} onChange={handleChange} placeholder="Catering preferences, ground transportation needs, etc." rows={4} />
                    </div>
                    
                    <Button type="submit" disabled={loading} className="w-full text-white transition-colors bg-wine-500 hover:bg-wine-600">
                      {loading ? 'Processing...' : 'Request Jet Charter'}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};

export default Book;
