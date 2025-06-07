
import React from 'react';
import { Button } from '@/components/ui/button';

interface MobileButtonGroupProps {
  primaryButton?: {
    text: string;
    onClick?: () => void;
    href?: string;
    variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
    href?: string;
    variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  };
  className?: string;
}

const MobileButtonGroup: React.FC<MobileButtonGroupProps> = ({
  primaryButton,
  secondaryButton,
  className = ''
}) => {
  const renderButton = (button: any, isPrimary: boolean = false) => {
    const buttonProps = {
      className: `mobile-btn flex-1 sm:flex-none ${isPrimary ? 'bg-[#D4AF37] hover:bg-[#B4941F]' : ''}`,
      variant: button.variant || (isPrimary ? 'default' : 'outline'),
      onClick: button.onClick
    };

    if (button.href) {
      return (
        <Button key={button.text} asChild {...buttonProps}>
          <a href={button.href}>{button.text}</a>
        </Button>
      );
    }

    return (
      <Button key={button.text} {...buttonProps}>
        {button.text}
      </Button>
    );
  };

  return (
    <div className={`mobile-btn-group ${className}`}>
      {primaryButton && renderButton(primaryButton, true)}
      {secondaryButton && renderButton(secondaryButton, false)}
    </div>
  );
};

export default MobileButtonGroup;
