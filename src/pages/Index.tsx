
import Hero from '@/components/Hero';
import ServiceGrid from '@/components/ServiceGrid';
import AirbnbBooking from '@/components/AirbnbBooking';
import TransportSection from '@/components/TransportSection';
import GallerySection from '@/components/GallerySection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServiceGrid />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AirbnbBooking />
        <TransportSection />
        <GallerySection />
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Index;
