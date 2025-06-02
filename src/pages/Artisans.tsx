
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useArtisanData } from '@/hooks/useArtisanData';
import ArtisanFilters from '@/components/Artisans/ArtisanFilters';
import ArtisanGrid from '@/components/Artisans/ArtisanGrid';
import ArtisanCTA from '@/components/Artisans/ArtisanCTA';
import WhatsAppCTA from '@/components/WhatsAppCTA';

const Artisans = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialFilter = queryParams.get('filter') || 'all';

  const { 
    searchTerm, 
    setSearchTerm,
    experienceFilter, 
    setExperienceFilter,
    ratingFilter, 
    setRatingFilter,
    serviceFilter, 
    setServiceFilter,
    filteredArtisans 
  } = useArtisanData(initialFilter);

  // Update service filter when URL parameter changes
  useEffect(() => {
    const filter = queryParams.get('filter') || 'all';
    setServiceFilter(filter);
  }, [location.search]);

  const handleBookNow = (artisanId: number, artisanName: string, serviceType: string, image: string) => {
    const artisanSlug = artisanName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/book?service=facility-management&artisan=${artisanSlug}&artisanId=${artisanId}&artisanType=${serviceType}&artisanImage=${encodeURIComponent(image)}`);
  };

  const handleTabChange = (value: string) => {
    setServiceFilter(value);
    navigate(value === 'all' ? '/artisans' : `/artisans?filter=${value}`);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setServiceFilter('all');
    setExperienceFilter('any');
    setRatingFilter('any');
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
              backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076)'
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
            <div className="text-white">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Trusted Hands
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-orange-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Connect with top-rated service professionals near you
              </motion.p>
            </div>
          </div>
        </section>
        
        <ArtisanFilters 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          experienceFilter={experienceFilter}
          setExperienceFilter={setExperienceFilter}
          ratingFilter={ratingFilter}
          setRatingFilter={setRatingFilter}
          serviceFilter={serviceFilter}
          handleTabChange={handleTabChange}
        />
        
        <ArtisanGrid 
          filteredArtisans={filteredArtisans}
          onBookNow={handleBookNow}
          onResetFilters={handleResetFilters}
        />
        
        <ArtisanCTA onNavigate={navigate} />
        
        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Artisans;
