
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ServiceLayoutProps {
  children: React.ReactNode;
}

const ServiceLayout = ({ children }: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ServiceLayout;
