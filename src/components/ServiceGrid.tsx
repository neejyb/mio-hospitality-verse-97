
import { ConciergeBell, Bath, Car, Martini } from "lucide-react";
import { motion } from 'framer-motion';

const featuredServices = [
  {
    id: 'front-desk',
    icon: ConciergeBell,
    title: '24/7 Front Desk',
    description:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies',
  },
  {
    id: 'spa-suites',
    icon: Bath,
    title: 'Spa Suites',
    description:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies',
  },
  {
    id: 'transfer-services',
    icon: Car,
    title: 'Transfer Services',
    description:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies',
  },
  {
    id: 'restaurant-bar',
    icon: Martini,
    title: 'Restaurant & Bar',
    description:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies',
  }
];

const ServiceGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Discover our comprehensive range of hospitality and lifestyle services tailored to your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="mb-6 flex items-center justify-center w-28 h-28 rounded-full bg-gray-100 shadow-sm">
                  <Icon size={56} color="#1EAEDB" strokeWidth={2.2} />
                </div>
                <h3 className="text-2xl font-semibold font-serif mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base max-w-xs">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
