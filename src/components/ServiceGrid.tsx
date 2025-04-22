
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { House, Bed, Film, Car, Plane, Wrench, Building, Wrench as WrenchIcon } from 'lucide-react';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    id: 'interior-design',
    icon: <House className="w-8 h-8 text-mio-orange" />,
    title: 'Interior Design',
    description: 'Transform your space with our expert interior design services.',
    link: '/services/interior-design'
  },
  {
    id: 'airbnb',
    icon: <Bed className="w-8 h-8 text-mio-orange" />,
    title: 'Airbnb Services',
    description: 'Premium accommodation management and booking services.',
    link: '/services/airbnb'
  },
  {
    id: 'videography',
    icon: <Film className="w-8 h-8 text-mio-orange" />,
    title: 'Videography',
    description: 'Professional video production for your property or event.',
    link: '/services/videography'
  },
  {
    id: 'car-hire',
    icon: <Car className="w-8 h-8 text-mio-orange" />,
    title: 'Car Hire',
    description: 'Luxury vehicle rentals for any occasion or requirement.',
    link: '/services/car-hire'
  },
  {
    id: 'jet-hire',
    icon: <Plane className="w-8 h-8 text-mio-orange" />,
    title: 'Private Jet Hire',
    description: 'Exclusive private jet charter services for seamless travel.',
    link: '/services/jet-hire'
  },
  {
    id: 'maintenance',
    icon: <Wrench className="w-8 h-8 text-mio-orange" />,
    title: 'Maintenance Services',
    description: 'Comprehensive property maintenance and repair solutions.',
    link: '/services/maintenance'
  },
  {
    id: 'property-management',
    icon: <Building className="w-8 h-8 text-mio-orange" />,
    title: 'Property Management',
    description: 'End-to-end property management and upkeep services.',
    link: '/services/property-management'
  },
  {
    id: 'facility-support',
    icon: <WrenchIcon className="w-8 h-8 text-mio-orange" />,
    title: 'Facility Support',
    description: 'Professional support services for commercial facilities.',
    link: '/services/facility-support'
  }
];

const ServiceGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our comprehensive range of hospitality and lifestyle services
          tailored to meet your needs.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={service.link} className="block h-full">
                <div className="service-card h-full flex flex-col">
                  <div className="p-6 flex-grow">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className="p-4 bg-gray-50 border-t border-gray-100">
                    <span className="text-mio-orange font-medium flex items-center">
                      Learn more
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="ml-1">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
