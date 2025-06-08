
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import ArtisanCard from './ArtisanCard';

interface ArtisanGridProps {
  filteredArtisans: Array<{
    id: number;
    name: string;
    image: string;
    serviceType: string;
    serviceCategory: string;
    experience: number;
    rating: number;
    tagline: string;
    bio: string;
    verified: boolean;
    availability: string;
  }>;
  onBookNow: (artisanId: number, artisanName: string, serviceType: string, image: string) => void;
  onResetFilters: () => void;
}

const ArtisanGrid: React.FC<ArtisanGridProps> = ({ 
  filteredArtisans, 
  onBookNow,
  onResetFilters
}) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            {filteredArtisans.length} Artisans Available
          </h2>
        </div>
        
        {filteredArtisans.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredArtisans.map((artisan) => (
              <ArtisanCard
                key={artisan.id}
                artisan={artisan}
                onBookNow={onBookNow}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="mx-auto w-16 h-16 mb-4 text-gray-300">
              <Search className="w-full h-full" />
            </div>
            <h3 className="text-xl font-medium mb-2">No artisans found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your filters or search term.</p>
            <Button 
              variant="outline" 
              onClick={onResetFilters}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArtisanGrid;
