
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const ManagementSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg bg-gray-50 h-full">
              <CardContent className="pt-6 px-6 pb-8">
                <h2 className="text-3xl font-bold mb-6 text-zinc-800">Airbnb Management</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our Airbnb management service handles everything for you — from guest check-in and support to cleaning coordination, property maintenance, and ensuring five-star reviews. Whether you're a frequent traveler or a hands-off investor, we offer end-to-end management that keeps your rental running efficiently and profitably.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2070" 
              alt="Premium vacation rental maintenance" 
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
