
import React from 'react';
import JetCard, { Jet } from './JetCard';

interface JetGridProps {
  jets: Jet[];
  onCharterNow: (jetId: number) => void;
}

const JetGrid: React.FC<JetGridProps> = ({ jets, onCharterNow }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jets.map((jet) => (
        <JetCard 
          key={jet.id} 
          jet={jet} 
          onCharterNow={() => onCharterNow(jet.id)} 
        />
      ))}
    </div>
  );
};

export default JetGrid;
