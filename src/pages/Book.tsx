import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import ServiceLayout from '@/components/ServiceLayout';
import SelectedItemCard from '@/components/SelectedItemCard';
import { cars } from '@/data/cars';
import { jets } from '@/data/jets';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  service: z.string().min(1, 'Please select a service'),
  details: z.string().optional(),
  vehicle: z.string().optional(),
  jet: z.string().optional(),
});

const Book = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('interior-design');
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [selectedJet, setSelectedJet] = useState<any>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      details: '',
      vehicle: '',
      jet: '',
    },
  });

  // Handle URL parameters for pre-selected items
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    const vehicleId = urlParams.get('vehicle');
    const jetId = urlParams.get('jet');

    if (service) {
      setActiveTab(service);
      form.setValue('service', service);
    }

    if (vehicleId) {
      const vehicle = cars.find(car => car.id === parseInt(vehicleId));
      if (vehicle) {
        setSelectedVehicle(vehicle);
        form.setValue('vehicle', vehicleId);
      }
    }

    if (jetId) {
      const jet = jets.find(j => j.id === parseInt(jetId));
      if (jet) {
        setSelectedJet(jet);
        form.setValue('jet', jetId);
      }
    }
  }, [form]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Booking Request Submitted",
      description: "We'll contact you shortly to confirm your booking.",
    });
  };

  const handleVehicleChange = (vehicleId: string) => {
    if (vehicleId === 'none') {
      setSelectedVehicle(null);
      form.setValue('vehicle', '');
    } else {
      const vehicle = cars.find(car => car.id === parseInt(vehicleId));
      setSelectedVehicle(vehicle || null);
      form.setValue('vehicle', vehicleId);
    }
  };

  const handleJetChange = (jetId: string) => {
    if (jetId === 'none') {
      setSelectedJet(null);
      form.setValue('jet', '');
    } else {
      const jet = jets.find(j => j.id === parseInt(jetId));
      setSelectedJet(jet || null);
      form.setValue('jet', jetId);
    }
  };

  return (
    <ServiceLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#D6AC2E] to-[#B8941F] text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Book a Service
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Choose from our range of luxury services and let us create an exceptional experience for you.
            </motion.p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
                <TabsTrigger value="interior-design">Interior Design</TabsTrigger>
                <TabsTrigger value="videography">Videography</TabsTrigger>
                <TabsTrigger value="car-hire">Car Hire</TabsTrigger>
                <TabsTrigger value="jet-hire">Jet Charter</TabsTrigger>
                <TabsTrigger value="facility-management">Facility Mgmt</TabsTrigger>
              </TabsList>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Car Hire Tab */}
                  <TabsContent value="car-hire">
                    <Card>
                      <CardHeader>
                        <CardTitle>Car Hire Service</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {selectedVehicle && (
                          <div>
                            <h3 className="text-lg font-semibold mb-3">Selected Vehicle</h3>
                            <SelectedItemCard
                              id={selectedVehicle.id}
                              name={selectedVehicle.name}
                              image={selectedVehicle.image}
                              price={selectedVehicle.price}
                              highlights={selectedVehicle.highlights}
                              category={selectedVehicle.category}
                              type="car"
                            />
                          </div>
                        )}

                        <FormField
                          control={form.control}
                          name="vehicle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Select Vehicle</FormLabel>
                              <Select value={field.value} onValueChange={(value) => {
                                field.onChange(value);
                                handleVehicleChange(value);
                              }}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Choose a vehicle" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="none">None Selected</SelectItem>
                                  {cars.map((car) => (
                                    <SelectItem key={car.id} value={car.id.toString()}>
                                      {car.name} - ${car.price}/day
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="details"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Additional Details</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us about your car hire requirements, dates, special requests..." 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Jet Charter Tab */}
                  <TabsContent value="jet-hire">
                    <Card>
                      <CardHeader>
                        <CardTitle>Private Jet Charter</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {selectedJet && (
                          <div>
                            <h3 className="text-lg font-semibold mb-3">Selected Jet</h3>
                            <SelectedItemCard
                              id={selectedJet.id}
                              name={selectedJet.name}
                              image={selectedJet.image}
                              price={selectedJet.price}
                              highlights={selectedJet.highlights}
                              category={selectedJet.category}
                              type="jet"
                            />
                          </div>
                        )}

                        <FormField
                          control={form.control}
                          name="jet"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Select Jet</FormLabel>
                              <Select value={field.value} onValueChange={(value) => {
                                field.onChange(value);
                                handleJetChange(value);
                              }}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Choose a jet" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="none">None Selected</SelectItem>
                                  {jets.map((jet) => (
                                    <SelectItem key={jet.id} value={jet.id.toString()}>
                                      {jet.name} - ${jet.price}/hour
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="details"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Flight Details</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us about your flight requirements, destinations, dates, passenger count..." 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Other service tabs remain the same */}
                  <TabsContent value="interior-design">
                    <Card>
                      <CardHeader>
                        <CardTitle>Interior Design Service</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="details"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Details</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us about your interior design project, style preferences, timeline..." 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="videography">
                    <Card>
                      <CardHeader>
                        <CardTitle>Videography Service</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="details"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Details</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us about your videography needs, event details, style preferences..." 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="facility-management">
                    <Card>
                      <CardHeader>
                        <CardTitle>Facility Management Service</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="details"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Facility Details</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us about your facility management needs, property details, services required..." 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#D6AC2E] hover:bg-[#B8941F] text-white text-lg py-3"
                  >
                    Submit Booking Request
                  </Button>
                </form>
              </Form>
            </Tabs>
          </div>
        </section>
      </div>
    </ServiceLayout>
  );
};

export default Book;
