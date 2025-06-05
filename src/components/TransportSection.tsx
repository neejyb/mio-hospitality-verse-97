
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TransportSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#500303] to-[#320202] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Premium Transportation</h2>
        <p className="text-base sm:text-lg text-gray-300 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Experience luxury on the road and in the air with our exclusive car and private jet rental services.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Car Hire */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }} 
            className="relative rounded-xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070" 
              alt="Luxury Car Rental" 
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Luxury Car Hire</h3>
              <p className="text-gray-200 mb-3 sm:mb-4 max-w-md text-sm sm:text-base">
                Choose from our fleet of premium vehicles for any occasion, from sleek sports cars to elegant sedans.
              </p>
              <Link to="/services/car-hire" className="inline-block">
                <button className="text-white font-semibold py-2 px-4 sm:px-6 rounded-md transition-colors duration-300 inline-flex items-center bg-[#500303] hover:bg-[#320202] text-sm sm:text-base min-h-[44px]">
                  Explore Cars
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="ml-2 sm:w-5 sm:h-5">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </Link>
            </div>
          </motion.div>
          
          {/* Jet Hire */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            viewport={{ once: true }} 
            className="relative rounded-xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070" 
              alt="Private Jet Charter" 
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Private Jet Charter</h3>
              <p className="text-gray-200 mb-3 sm:mb-4 max-w-md text-sm sm:text-base">
                Travel in ultimate luxury with our private jet charter services, offering unparalleled comfort and convenience.
              </p>
              <Link to="/services/jet-hire" className="inline-block">
                <button className="text-white font-semibold py-2 px-4 sm:px-6 rounded-md transition-colors duration-300 inline-flex items-center bg-[#500303] hover:bg-[#320202] text-sm sm:text-base min-h-[44px]">
                  Explore Jets
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="ml-2 sm:w-5 sm:h-5">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TransportSection;
