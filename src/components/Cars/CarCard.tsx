
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface CarFeature {
  id: string;
  name: string;
}

export interface Car {
  id: number;
  model: string;
  type: string;
  price: number;
  image: string;
  features: CarFeature[];
  description: string;
}

interface CarCardProps {
  car: Car;
  onBookNow?: () => void;
  showBookButton?: boolean;
}

const CarCard: React.FC<CarCardProps> = ({ car, onBookNow, showBookButton = true }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.model}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        <div className="absolute top-2 right-2 bg-[#D4AF37]/90 text-white px-3 py-1 rounded-full text-sm">
          ${car.price}/day
        </div>
      </div>
      <CardContent className="flex-grow p-4">
        <h3 className="text-xl font-bold mb-1">{car.model}</h3>
        <p className="text-gray-600 text-sm mb-3">{car.type}</p>
        <p className="text-sm text-gray-700 mb-3 line-clamp-2">{car.description}</p>
        
        <div className="grid grid-cols-2 gap-2">
          {car.features.slice(0, 4).map((feature) => (
            <div key={feature.id} className="flex items-center text-sm">
              <Check size={16} className="text-[#D4AF37] mr-1" />
              <span>{feature.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
      
      {showBookButton && (
        <CardFooter className="p-4 pt-0">
          <Button 
            onClick={onBookNow}
            className="w-full bg-[#D4AF37] hover:bg-[#B4941F]"
          >
            Book Now
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default CarCard;
