
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative h-[50vh] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=2532')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl">
              Discover the story behind Mio's Hospitality & Co and our commitment to excellence in hospitality services.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2015, Mio's Hospitality & Co began with a vision to revolutionize the hospitality industry by offering comprehensive services that go beyond the standard offerings. 
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a small interior design firm quickly expanded into a full-service hospitality company as we recognized the growing demand for integrated solutions that address all aspects of property management and guest experiences.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to offer a diverse range of services including interior design, Airbnb management, videography, luxury transportation, and property maintenance, all delivered with our signature attention to detail and commitment to excellence.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1664575599736-c5197c684153?q=80&w=2070" 
                  alt="Mio's Hospitality team" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Mission & Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission & Values</h2>
              <p className="text-gray-600">
                At Mio's Hospitality & Co, we're driven by a set of core values that guide everything we do. Our mission is to redefine luxury hospitality by creating exceptional experiences that exceed expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="text-4xl text-mio-orange mb-4">✨</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Excellence</h3>
                <p className="text-gray-600">
                  We are committed to delivering excellence in every service we provide, from the smallest detail to the grand vision.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="text-4xl text-mio-orange mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Integrity</h3>
                <p className="text-gray-600">
                  We operate with honesty, transparency, and ethical practices in all our business dealings and client relationships.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="text-4xl text-mio-orange mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation</h3>
                <p className="text-gray-600">
                  We constantly seek new and better ways to serve our clients, embracing technology and creative solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Leadership Team</h2>
              <p className="text-gray-600">
                Meet the passionate individuals who lead Mio's Hospitality & Co and drive our commitment to excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361" 
                    alt="Sophia Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">Sophia Chen</h3>
                <p className="text-mio-orange mb-3">Founder & CEO</p>
                <p className="text-gray-600 max-w-xs mx-auto">
                  With over 15 years in luxury hospitality, Sophia leads our company vision and strategic direction.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374" 
                    alt="Marcus Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">Marcus Johnson</h3>
                <p className="text-mio-orange mb-3">Director of Operations</p>
                <p className="text-gray-600 max-w-xs mx-auto">
                  Marcus ensures our services are delivered with precision and excellence across all divisions.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376" 
                    alt="Elena Rodriguez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">Elena Rodriguez</h3>
                <p className="text-mio-orange mb-3">Head of Design</p>
                <p className="text-gray-600 max-w-xs mx-auto">
                  Elena's creative vision drives our award-winning interior design and property styling services.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
