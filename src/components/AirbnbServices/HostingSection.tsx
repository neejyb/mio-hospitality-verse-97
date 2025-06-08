
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const HostingSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070" 
              alt="Cozy Airbnb interior" 
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg bg-white h-full">
              <CardContent className="pt-6 px-6 pb-8">
                <h2 className="text-3xl font-bold mb-6 text-zinc-800">Hosting Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  We help property owners get started with Airbnb the right way. From professional listing creation and strategic pricing to optimized guest communication, our hosting service ensures your property stands out and stays fully booked. We guide you through the setup process, ensuring a smooth and profitable hosting experience.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HostingSection;
