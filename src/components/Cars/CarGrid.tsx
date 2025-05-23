
import React from 'react';
import CarCard, { Car } from './CarCard';

interface CarGridProps {
  cars: Car[];
  onBookNow: (carId: number) => void;
}

const CarGrid: React.FC<CarGridProps> = ({ cars, onBookNow }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard 
          key={car.id} 
          car={car} 
          onBookNow={() => onBookNow(car.id)} 
        />
      ))}
    </div>
  );
};

export default CarGrid;
