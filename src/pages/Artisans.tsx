
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useArtisanData } from '@/hooks/useArtisanData';
import ArtisanHero from '@/components/Artisans/ArtisanHero';
import ArtisanFilters from '@/components/Artisans/ArtisanFilters';
import ArtisanGrid from '@/components/Artisans/ArtisanGrid';
import ArtisanCTA from '@/components/Artisans/ArtisanCTA';

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
        <ArtisanHero />
        
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
      </main>
      <Footer />
    </div>
  );
};

export default Artisans;
