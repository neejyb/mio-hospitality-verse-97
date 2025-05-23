
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CarGrid from '@/components/Cars/CarGrid';
import { carsData } from '@/data/carsData';
import { Button } from '@/components/ui/button';

const Fleet = () => {
  const navigate = useNavigate();
  
  const handleBookNow = (carId: number) => {
    navigate(`/book?service=car-hire&carId=${carId}`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-cover bg-center flex items-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format')"
        }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Luxury Fleet</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Explore our collection of premium vehicles available for hire. From luxury sedans to exotic supercars.
            </p>
          </div>
        </div>
        
        {/* Fleet Listing */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">Available Vehicles</h2>
                <Button 
                  onClick={() => navigate('/book?service=car-hire')}
                  className="bg-[#D4AF37] hover:bg-[#B4941F]"
                >
                  Book a Car Now
                </Button>
              </div>
              
              <CarGrid cars={carsData} onBookNow={handleBookNow} />
            </motion.div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Choose Our Car Hire Service</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Premium Vehicles</h3>
                  <p className="text-gray-600">Our fleet consists of only the finest luxury and performance vehicles, meticulously maintained to ensure your satisfaction.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Flexible Rental Options</h3>
                  <p className="text-gray-600">From hourly rentals to long-term leases, we offer customizable options to suit your specific needs.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Exceptional Service</h3>
                  <p className="text-gray-600">Our dedicated team ensures a seamless experience from reservation to return, with 24/7 support throughout your rental period.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Fleet;
