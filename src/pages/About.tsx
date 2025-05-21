
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';
import CertificateCarousel from '@/components/CertificateCarousel';
import { Shield, Award, Check } from 'lucide-react';

const About = () => {
  // Team Members Data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop",
      bio: "Sarah Johnson founded Mio's Hospitality & Co in 2015 with a vision to revolutionize the hospitality industry. With over 15 years of experience in luxury hotel management and interior design, she brings a unique perspective to every project.\n\nAfter graduating with honors from Cornell's School of Hotel Administration, Sarah worked with several international hotel chains before identifying a gap in the market for integrated hospitality solutions.\n\nUnder her leadership, Mio's has grown from a small startup to an industry leader known for exceptional service and innovative approaches to hospitality management.",
      socialLinks: {
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
        facebook: "https://facebook.com/"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop",
      bio: "Michael Rodriguez oversees all operational aspects of Mio's Hospitality & Co, ensuring seamless execution of our diverse service offerings. With a background in hotel management and an MBA from INSEAD, Michael brings analytical rigor and operational excellence to our team.\n\nBefore joining Mio's, Michael served as Operations Director for a leading European hotel chain, managing properties across five countries. His expertise in process optimization and team management has been instrumental in scaling our operations while maintaining our commitment to quality.",
      socialLinks: {
        linkedin: "https://linkedin.com/"
      }
    },
    {
      name: "Aisha Patel",
      role: "Head of Interior Design",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1374&auto=format&fit=crop",
      bio: "Aisha Patel leads our award-winning interior design division, bringing spaces to life with her unique blend of contemporary aesthetics and functional design. A graduate of Parsons School of Design, Aisha has over a decade of experience in residential and commercial design.\n\nHer work has been featured in Architectural Digest, Elle Decor, and House Beautiful. At Mio's Hospitality & Co, Aisha has transformed hundreds of properties, creating memorable spaces that enhance the guest experience while maximizing property value.",
      socialLinks: {
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
      }
    },
    {
      name: "David Chen",
      role: "Director of Property Management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
      bio: "David Chen directs our comprehensive property management services, overseeing a portfolio of luxury properties across multiple markets. With a background in real estate and hospitality, David ensures that every property under our management maintains the highest standards.\n\nPrior to joining Mio's, David managed operations for a boutique hotel group and consulted for real estate developers on hospitality projects. His expertise in regulatory compliance, staff training, and property optimization makes him an invaluable asset to our team and clients.",
      socialLinks: {
        facebook: "https://facebook.com/",
        linkedin: "https://linkedin.com/"
      }
    }
  ];

  // Certificates Data
  const certificates = [
    {
      id: 1,
      name: "Hospitality Excellence Certification",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2532&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Interior Design Association Membership",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2532&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Property Management License",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2532&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Sustainable Tourism Certification",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2532&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Luxury Service Provider Accreditation",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2532&auto=format&fit=crop"
    }
  ];

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

        {/* Meet the Executives */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Executives</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our leadership team brings together decades of experience in hospitality, design, and property management to deliver exceptional service to our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TeamMember {...member} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We pride ourselves on delivering a level of service that goes beyond the ordinary. Here's what makes Mio's Hospitality & Co different.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <Shield className="text-mio-orange h-8 w-8 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Certified Professionals</h3>
                </div>
                <p className="text-gray-600 flex-grow">
                  Our team comprises certified hospitality professionals with extensive training and experience in their respective fields, ensuring the highest standards of service delivery.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <Award className="text-mio-orange h-8 w-8 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">End-to-End Solutions</h3>
                </div>
                <p className="text-gray-600 flex-grow">
                  From initial concept to ongoing management, we provide comprehensive hospitality solutions under one roof, eliminating the need for multiple service providers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <Check className="text-mio-orange h-8 w-8 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Personalized Approach</h3>
                </div>
                <p className="text-gray-600 flex-grow">
                  We recognize that each client and property is unique. Our tailored approach ensures that our services align perfectly with your specific needs and objectives.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Legal Documents & Certifications */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Certifications & Legal Documents</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We maintain all necessary certifications and legal documentation to ensure our services meet industry standards and regulatory requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CertificateCarousel certificates={certificates} />
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
