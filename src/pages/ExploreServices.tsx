
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check, Users, Clock, Zap, DollarSign } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';

const ExploreServices = () => {
  const navigate = useNavigate();

  const serviceCategories = [
    {
      id: 1,
      title: 'Hotels & Guesthouses',
      description: 'Plumbing, electrical work, AC support, and light repairs for seamless guest experiences.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2965'
    },
    {
      id: 2,
      title: 'Offices (Private & Shared)',
      description: 'Lighting fixes, outlet repairs, HVAC support, and general handyman services for productive workspaces.',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=5760'
    },
    {
      id: 3,
      title: 'Residential Homes',
      description: 'Local plumbers, electricians, AC repairers, and cleaning services for comfortable living.',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=3011'
    },
    {
      id: 4,
      title: 'Airbnb & Shortlets',
      description: 'Quick fixes for guest turnover, repairs, and deep cleaning to maintain 5-star ratings.',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=7504'
    },
    {
      id: 5,
      title: 'Event Venues',
      description: 'On-demand handy crew for setup, takedown, and urgent fixes during events.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070'
    },
    {
      id: 6,
      title: 'Shops & Retail Spaces',
      description: 'Minor fixes, light installations, and routine maintenance for smooth business operations.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070'
    },
    {
      id: 7,
      title: 'Government/Institutional Spaces',
      description: 'Light facility work by verified artisans including fittings, repairs, and maintenance.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=6000'
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Verified Local Artisans',
      description: 'All our professionals are thoroughly vetted and certified'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock support for urgent repairs and maintenance'
    },
    {
      icon: Zap,
      title: 'Fast Turnaround Time',
      description: 'Quick response and efficient service delivery'
    },
    {
      icon: DollarSign,
      title: 'Affordable & Transparent Pricing',
      description: 'No hidden fees, competitive rates with upfront pricing'
    }
  ];

  const handleRequestService = () => {
    navigate('/book');
  };

  const handleViewArtisans = () => {
    navigate('/artisans');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-orange-900/80 to-orange-700/80">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=6000)'
            }} 
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
            <div className="text-white max-w-4xl">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-4" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
              >
                Explore Our Services
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-50 mb-8"
              >
                Get access to trusted local artisans for reliable support across homes, offices, shortlets, hotels, and more.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button 
                  size="lg" 
                  className="bg-[#D4AF37] hover:bg-[#B4941F] text-white px-8 py-3 text-lg font-semibold"
                  onClick={handleRequestService}
                >
                  Request a Service
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional artisan services tailored for different types of properties and facilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{category.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Artisan CTA Section */}
        <section className="py-16 bg-[#4f1002]">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need a Specific Artisan?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Browse our verified professionals — electricians, plumbers, HVAC experts, and more.
              </p>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[#D4AF37] bg-transparent text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 py-3 text-lg font-semibold"
                onClick={handleViewArtisans}
              >
                View All Artisans
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600">
                Experience the difference with our professional artisan services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-[#D4AF37] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#D4AF37] to-[#B4941F]">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Book?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get started today and connect with trusted artisans for all your property maintenance needs.
              </p>
              <Button 
                size="lg"
                className="bg-white text-[#4f1002] hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                onClick={handleRequestService}
              >
                Book a Service Now
              </Button>
            </motion.div>
          </div>
        </section>

        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ExploreServices;
