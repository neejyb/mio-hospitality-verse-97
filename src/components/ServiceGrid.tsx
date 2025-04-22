import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  iconUrl: string;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    id: 'interior-design',
    iconUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=300',
    title: 'Interior Design',
    description: 'Transform your space with our expert interior design services.',
    link: '/services/interior-design'
  },
  {
    id: 'airbnb',
    iconUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=300',
    title: 'Airbnb Services',
    description: 'Premium accommodation management and booking services.',
    link: '/services/airbnb'
  },
  {
    id: 'videography',
    iconUrl: 'https://images.unsplash.com/photo-1585813375255-6c8dfabd8f6f?q=80&w=300',
    title: 'Videography',
    description: 'Professional video production for your property or event.',
    link: '/services/videography'
  },
  {
    id: 'car-hire',
    iconUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=300',
    title: 'Car Hire',
    description: 'Luxury vehicle rentals for any occasion or requirement.',
    link: '/services/car-hire'
  },
  {
    id: 'jet-hire',
    iconUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=300',
    title: 'Private Jet Hire',
    description: 'Exclusive private jet charter services for seamless travel.',
    link: '/services/jet-hire'
  },
  {
    id: 'maintenance',
    iconUrl: 'https://images.unsplash.com/photo-1584637098437-e5e89b789ad6?q=80&w=300',
    title: 'Maintenance Services',
    description: 'Comprehensive property maintenance and repair solutions.',
    link: '/services/maintenance'
  },
  {
    id: 'property-management',
    iconUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=300',
    title: 'Property Management',
    description: 'End-to-end property management and upkeep services.',
    link: '/services/property-management'
  },
  {
    id: 'facility-support',
    iconUrl: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?q=80&w=300',
    title: 'Facility Support',
    description: 'Professional support services for commercial facilities.',
    link: '/services/facility-support'
  }
];

const ServiceGrid = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our comprehensive range of hospitality and lifestyle services
          tailored to meet your needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={service.link} className="block h-full">
                <Card className="group h-full backdrop-blur-sm bg-white/80 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <CardHeader className="p-4">
                    <div className="relative h-40 w-full overflow-hidden rounded-md mb-2">
                      <img 
                        src={service.iconUrl} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <CardDescription className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center text-[#D4AF37] font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 transition-all duration-300">
                      Learn more
                      <ArrowRight size={16} className="ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
