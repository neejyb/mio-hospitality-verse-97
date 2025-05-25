
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SelectedItemCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  highlights: string;
  category: string;
  type: 'car' | 'jet';
}

const SelectedItemCard: React.FC<SelectedItemCardProps> = ({
  name,
  image,
  price,
  highlights,
  category,
  type
}) => {
  return (
    <Card className="bg-gray-50 border-l-4 border-l-[#D6AC2E] mb-6">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-20 h-16 object-cover rounded-md"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-lg">{name}</h4>
              <Badge variant="secondary" className="text-xs">
                {category}
              </Badge>
            </div>
            <p className="text-[#D6AC2E] font-bold text-lg">
              ${price}/{type === 'car' ? 'day' : 'hour'}
            </p>
            <p className="text-sm text-gray-600">{highlights}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SelectedItemCard;
