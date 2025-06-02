import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar, CircleCheck } from 'lucide-react';
interface ArtisanCardProps {
  artisan: {
    id: number;
    name: string;
    image: string;
    serviceType: string;
    serviceCategory: string;
    experience: number;
    rating: number;
    tagline: string;
    verified: boolean;
    availability: string;
  };
  onBookNow: (artisanId: number, artisanName: string, serviceType: string, image: string) => void;
}
const ArtisanCard: React.FC<ArtisanCardProps> = ({
  artisan,
  onBookNow
}) => {
  return <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="aspect-square relative overflow-hidden">
        <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" />
        {artisan.verified && <div className="absolute top-3 right-3">
            <Badge className="text-white bg-red-950">
              <CircleCheck className="h-3 w-3 mr-1" />
              Verified
            </Badge>
          </div>}
      </div>
      <CardContent className="pt-6 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{artisan.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-[#D4AF37] fill-[#D4AF37]" />
            <span className="ml-1 text-sm font-medium">{artisan.rating}</span>
          </div>
        </div>
        <div className="mb-3">
          <span className="text-[#D4AF37] font-medium">{artisan.serviceType}</span>
          <span className="text-gray-500 text-sm ml-2">{artisan.experience} years exp.</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{artisan.tagline}</p>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          {artisan.availability}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="default" onClick={() => onBookNow(artisan.id, artisan.name, artisan.serviceType, artisan.image)} className="w-full bg-[#520c00]">
          Request Service
        </Button>
      </CardFooter>
    </Card>;
};
export default ArtisanCard;