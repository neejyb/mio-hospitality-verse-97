
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface MobileButtonGroupProps {
  primaryText: string;
  primaryLink: string;
  secondaryText?: string;
  secondaryLink?: string;
  primaryVariant?: "default" | "outline" | "secondary" | "ghost" | "link";
  secondaryVariant?: "default" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
}

const MobileButtonGroup: React.FC<MobileButtonGroupProps> = ({
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
  primaryVariant = "default",
  secondaryVariant = "outline",
  className = ""
}) => {
  return (
    <div className={`mobile-btn-group ${className}`}>
      <Link to={primaryLink} className="flex-1">
        <Button 
          variant={primaryVariant}
          className="w-full mobile-btn responsive-body"
        >
          {primaryText}
        </Button>
      </Link>
      {secondaryText && secondaryLink && (
        <Link to={secondaryLink} className="flex-1">
          <Button 
            variant={secondaryVariant}
            className="w-full mobile-btn responsive-body"
          >
            {secondaryText}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default MobileButtonGroup;
