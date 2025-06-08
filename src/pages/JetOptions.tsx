
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import ServiceLayout from '@/components/ServiceLayout';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { useAllJets, type Jet } from '@/hooks/useJets';

const JetOptions = () => {
  const navigate = useNavigate();
  const { data: jets = [], isLoading } = useAllJets();
  
  const handleBookNow = (jet: Jet) => {
    const jetData = {
      id: jet.id,
      name: jet.name,
      image: jet.main_image,
      price: `$${jet.price_per_hour}/hour`,
      tag: jet.category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: jet.description || '',
      features: jet.specifications || []
    };
    navigate(`/book?service=jet-hire&selectedJet=${encodeURIComponent(JSON.stringify(jetData))}`);
  };

  const formatCategory = (category: string) => {
    return category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  if (isLoading) {
    return (
      <ServiceLayout>
        <div className="min-h-screen bg-white">
          <section className="relative h-96 bg-gradient-to-r from-blue-900/80 to-blue-700/80">
            <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074)'
            }} />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Elevate Your Journey</h1>
                <p className="text-xl md:text-2xl text-blue-200">Loading our premium private jet experiences...</p>
              </div>
            </div>
          </section>
        </div>
      </ServiceLayout>
    );
  }

  return (
    <ServiceLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-blue-900/80 to-blue-700/80">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074)'
          }} />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
            <div className="text-white">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Elevate Your Journey
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-blue-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover our premium private jet experiences
              </motion.p>
            </div>
          </div>
        </section>

        {/* Jets Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {jets.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">No jets available</h3>
                <p className="text-gray-600">Please check back later for our private jet fleet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {jets.map((jet, index) => (
                  <motion.div 
                    key={jet.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={jet.main_image} 
                          alt={jet.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070';
                          }}
                        />
                        <div className="absolute top-2 right-2 text-white px-2 py-1 rounded text-xs font-medium bg-red-950">
                          {formatCategory(jet.category)}
                        </div>
                      </div>
                      <CardContent className="p-4 flex-grow flex flex-col">
                        <h3 className="text-lg font-bold mb-1 line-clamp-2">{jet.name}</h3>
                        <p className="text-[#D4AF37] font-semibold mb-2">${jet.price_per_hour}/hour</p>
                        <p className="text-gray-600 text-sm mb-4 flex-grow">
                          {jet.short_description || jet.description || `${formatCategory(jet.category)} aircraft`}
                        </p>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full h-10 text-white font-medium rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 bg-[#4b1604]">
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] h-[600px] p-0 gap-0 overflow-hidden flex flex-col">
                            <DialogHeader className="p-6 pb-0 flex-shrink-0">
                              <DialogTitle className="text-2xl font-bold">{jet.name}</DialogTitle>
                            </DialogHeader>
                            <div className="flex-1 overflow-y-auto p-6 pt-0">
                              <div className="space-y-4">
                                <img 
                                  src={jet.main_image} 
                                  alt={jet.name} 
                                  className="w-full h-64 object-cover rounded-lg"
                                  onError={(e) => {
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070';
                                  }}
                                />
                                <div className="flex justify-between items-center">
                                  <span className="text-2xl font-bold text-[#D4AF37]">${jet.price_per_hour}/hour</span>
                                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                                    {formatCategory(jet.category)}
                                  </span>
                                </div>
                                <p className="text-gray-700">{jet.description}</p>
                                {jet.specifications && jet.specifications.length > 0 && (
                                  <div>
                                    <h4 className="font-semibold mb-2">Specifications:</h4>
                                    <ul className="grid grid-cols-1 gap-2">
                                      {jet.specifications.map((spec, idx) => (
                                        <li key={idx} className="text-sm text-gray-600">• {spec}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="p-6 pt-0 flex-shrink-0">
                              <Button 
                                onClick={() => handleBookNow(jet)}
                                className="w-full h-12 bg-[#D4AF37] hover:bg-[#B4941F] text-white font-medium rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
                              >
                                Book Now
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
        
        <WhatsAppCTA />
      </div>
    </ServiceLayout>
  );
};

export default JetOptions;
