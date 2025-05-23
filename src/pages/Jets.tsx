
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import JetGrid from '@/components/Jets/JetGrid';
import { jetsData } from '@/data/jetsData';
import { Button } from '@/components/ui/button';

const Jets = () => {
  const navigate = useNavigate();
  
  const handleCharterNow = (jetId: number) => {
    navigate(`/book?service=jet-hire&jetId=${jetId}`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-cover bg-center flex items-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=2071')"
        }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Available Private Jets</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Discover our exclusive collection of private jets available for charter. Experience luxury travel at its finest.
            </p>
          </div>
        </div>
        
        {/* Jets Listing */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">Our Jet Fleet</h2>
                <Button 
                  onClick={() => navigate('/book?service=jet-hire')}
                  className="bg-[#D4AF37] hover:bg-[#B4941F]"
                >
                  Charter a Jet Now
                </Button>
              </div>
              
              <JetGrid jets={jetsData} onCharterNow={handleCharterNow} />
            </motion.div>
          </div>
        </section>
        
        {/* Charter Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Benefits of Private Jet Charter</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Time Efficiency</h3>
                  <p className="text-gray-600">Avoid long security lines and arrive just minutes before departure. Fly directly to your destination with no connections.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Ultimate Privacy</h3>
                  <p className="text-gray-600">Conduct meetings, relax, or work in complete privacy with only your selected guests onboard.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Unparalleled Comfort</h3>
                  <p className="text-gray-600">Spacious cabins, luxurious amenities, and personalized service create an exceptional travel experience.</p>
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

export default Jets;
