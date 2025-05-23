
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface JetFeature {
  id: string;
  name: string;
}

export interface Jet {
  id: number;
  name: string;
  model: string;
  capacity: number;
  range: string;
  price: number;
  image: string;
  features: JetFeature[];
  description: string;
}

interface JetCardProps {
  jet: Jet;
  onCharterNow?: () => void;
  showCharterButton?: boolean;
}

const JetCard: React.FC<JetCardProps> = ({ jet, onCharterNow, showCharterButton = true }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={jet.image} 
          alt={jet.name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        <div className="absolute top-2 right-2 bg-[#D4AF37]/90 text-white px-3 py-1 rounded-full text-sm">
          ${jet.price}/hour
        </div>
      </div>
      <CardContent className="flex-grow p-4">
        <h3 className="text-xl font-bold mb-1">{jet.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{jet.model}</p>
        
        <div className="flex flex-wrap gap-3 mb-3">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
            Capacity: {jet.capacity} passengers
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
            Range: {jet.range}
          </span>
        </div>
        
        <p className="text-sm text-gray-700 mb-3 line-clamp-2">{jet.description}</p>
        
        <div className="grid grid-cols-2 gap-2">
          {jet.features.slice(0, 4).map((feature) => (
            <div key={feature.id} className="flex items-center text-sm">
              <Check size={16} className="text-[#D4AF37] mr-1" />
              <span>{feature.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
      
      {showCharterButton && (
        <CardFooter className="p-4 pt-0">
          <Button 
            onClick={onCharterNow}
            className="w-full bg-[#D4AF37] hover:bg-[#B4941F]"
          >
            Charter Now
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default JetCard;
