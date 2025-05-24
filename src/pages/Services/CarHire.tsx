
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import { Check } from 'lucide-react';

const CarHire = () => {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center flex items-center" 
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070)` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Luxury Car Hire
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Experience exceptional driving with our premium and exotic car rental services
            </p>
          </div>
        </div>
      </div>

      {/* Exceptional Car Hire Services Section */}
      <section className="py-20" style={{ backgroundColor: '#330000' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Exceptional Car Hire Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Discover the range of premium services offered with our luxury vehicle rentals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Row 1 */}
            <div className="bg-black/40 p-8 rounded-lg">
              <div className="flex items-start mb-4">
                <Check className="h-6 w-6 text-[#D4AF37] mr-4 mt-1 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">Luxury Fleet</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Access to a curated collection of premium and luxury vehicles from renowned brands like Mercedes-Benz, BMW, Porsche, and more.
              </p>
            </div>

            <div className="bg-black/40 p-8 rounded-lg">
              <div className="flex items-start mb-4">
                <Check className="h-6 w-6 text-[#D4AF37] mr-4 mt-1 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">Chauffeur Services</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Professional, discreet drivers available for airport transfers, event transportation, or full-day service during your stay.
              </p>
            </div>

            <div className="bg-black/40 p-8 rounded-lg">
              <div className="flex items-start mb-4">
                <Check className="h-6 w-6 text-[#D4AF37] mr-4 mt-1 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">Self-Drive Options</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Flexible self-drive rentals with comprehensive insurance coverage for those who prefer to take the wheel themselves.
              </p>
            </div>

            {/* Row 2 */}
            <div className="bg-black/40 p-8 rounded-lg">
              <div className="flex items-start mb-4">
                <Check className="h-6 w-6 text-[#D4AF37] mr-4 mt-1 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">Concierge Delivery</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Convenient vehicle delivery and pickup at your location—hotel, villa, airport, or any address within our service area.
              </p>
            </div>

            <div className="bg-black/40 p-8 rounded-lg">
              <div className="flex items-start mb-4">
                <Check className="h-6 w-6 text-[#D4AF37] mr-4 mt-1 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">Special Occasions</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Custom packages for weddings, anniversaries, photo shoots, and other special events requiring distinctive transportation.
              </p>
            </div>

            <div className="bg-black/40 p-8 rounded-lg">
              <div className="flex items-start mb-4">
                <Check className="h-6 w-6 text-[#D4AF37] mr-4 mt-1 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">Corporate Solutions</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Tailored transportation solutions for business events, executive travel, and corporate retreats with account management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Exclusive Fleet Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Exclusive Fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Explore our collection of luxury, sports, and exotic vehicles available for your next journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600",
                caption: "Sports car convoy"
              },
              {
                src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600",
                caption: "Professional chauffeur service available"
              },
              {
                src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=600",
                caption: "Car keys handover"
              },
              {
                src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=600",
                caption: "Mercedes-AMG GT"
              },
              {
                src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600",
                caption: "Porsche 911 Carrera"
              },
              {
                src: "https://images.unsplash.com/photo-1560177112-fbfd5fde9566?q=80&w=600",
                caption: "BMW X7 Luxury SUV"
              },
              {
                src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=600",
                caption: "Lamborghini Huracán"
              },
              {
                src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600",
                caption: "Mercedes S-Class"
              },
              {
                src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600",
                caption: "BMW M4 Convertible"
              },
              {
                src: "https://images.unsplash.com/photo-1549927681-0b673b922890?q=80&w=600",
                caption: "Porsche Cayenne"
              },
              {
                src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=600",
                caption: "Ferrari 488 Spider"
              },
              {
                src: "https://images.unsplash.com/photo-1553978297-833d09932d96?q=80&w=600",
                caption: "Audi R8 V10"
              }
            ].map((car, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={car.src} 
                      alt={car.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 font-medium text-center">{car.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default CarHire;
