
import Hero from '@/components/Hero';
import ServiceGrid from '@/components/ServiceGrid';
import AirbnbBooking from '@/components/AirbnbBooking';
import TransportSection from '@/components/TransportSection';
import GallerySection from '@/components/GallerySection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServiceGrid />
      <AirbnbBooking />
      <TransportSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
