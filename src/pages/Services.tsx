import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

interface ServiceInfo {
  title: string;
  subtitle: string;
  description: string[];
  coverImage: string;
  detailImages: string[];
  features: string[];
  process: {
    title: string;
    description: string;
  }[];
  cta: {
    text: string;
    link: string;
  };
}

const serviceData: Record<string, ServiceInfo> = {
  'interior-design': {
    title: 'Interior Design',
    subtitle: 'Transform your space with our expert interior design services',
    description: ['At Mio\'s Hospitality & Co, we believe that interior design is about more than just aesthetics – it\'s about creating spaces that reflect your personality, meet your functional needs, and enhance your quality of life.', 'Our team of experienced designers works closely with you to understand your vision, lifestyle, and preferences. Whether you\'re looking to refresh a single room or transform an entire property, we deliver tailored solutions that exceed expectations.'],
    coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932',
    detailImages: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158', 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2080'],
    features: ['Comprehensive design consultations', 'Custom furniture selection and procurement', 'Color scheme and material selection', 'Space planning and layout optimization', 'Lighting design and specification', 'Art and accessory curation', 'Project management and implementation'],
    process: [{
      title: 'Initial Consultation',
      description: 'We begin with a thorough discussion of your needs, preferences, and budget constraints.'
    }, {
      title: 'Concept Development',
      description: 'Our designers create conceptual designs, mood boards, and preliminary layouts for your approval.'
    }, {
      title: 'Detailed Design',
      description: 'We finalize selections for all elements including furnishings, materials, colors, and accessories.'
    }, {
      title: 'Implementation',
      description: 'Our team manages the entire installation process, ensuring attention to every detail.'
    }],
    cta: {
      text: 'Book a Design Consultation',
      link: '/book?service=interior-design'
    }
  },
  'airbnb': {
    title: 'Airbnb Services',
    subtitle: 'Premium accommodation management and booking services',
    description: ['Our Airbnb Services division provides comprehensive management and optimization for property owners looking to maximize their investment returns through short-term rentals.', 'For guests, we offer a curated selection of exceptional properties that combine luxury amenities with the comfort and authenticity of a home away from home. Each property in our portfolio is personally vetted and maintained to our exacting standards.'],
    coverImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070',
    detailImages: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070', 'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2070', 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000'],
    features: ['Professional property styling and staging', 'Professional photography and listing optimization', 'Dynamic pricing strategy', 'Guest screening and communication', '24/7 guest support', 'Premium cleaning and maintenance services', 'Regular performance reporting for property owners'],
    process: [{
      title: 'Property Assessment',
      description: 'We evaluate your property\'s potential and recommend improvements to maximize returns.'
    }, {
      title: 'Setup & Optimization',
      description: 'Our team handles photography, listing creation, and optimization across platforms.'
    }, {
      title: 'Guest Experience',
      description: 'We manage all aspects of the guest experience from booking to checkout.'
    }, {
      title: 'Maintenance & Reporting',
      description: 'Regular property maintenance and detailed performance reports keep you informed.'
    }],
    cta: {
      text: 'Explore Available Properties',
      link: '/properties'
    }
  },
  'videography': {
    title: 'Videography',
    subtitle: 'Professional video production for your property or event',
    description: ['Our professional videography services capture the essence and unique features of your property or event with cinematic quality and artistic direction.', 'Whether you need compelling footage for marketing your Airbnb property, documenting a special event, or creating promotional content for your business, our videography team delivers polished, engaging visual stories that resonate with your target audience.'],
    coverImage: 'https://images.unsplash.com/photo-1679430764089-e9197afaa4e5?q=80&w=2070',
    detailImages: ['https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?q=80&w=2074', 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071', 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=2069'],
    features: ['Property showcase videos', 'Event documentation', 'Aerial drone footage', 'Virtual tours', 'Promotional content creation', 'Professional editing and post-production', 'Distribution-ready formats for all platforms'],
    process: [{
      title: 'Creative Briefing',
      description: 'We discuss your vision, goals, and specific requirements for the video project.'
    }, {
      title: 'Pre-Production Planning',
      description: 'Our team develops a shooting script, timeline, and technical plan.'
    }, {
      title: 'Filming',
      description: 'Professional videographers capture footage using state-of-the-art equipment.'
    }, {
      title: 'Post-Production',
      description: 'Expert editors transform raw footage into a polished final product with your feedback.'
    }],
    cta: {
      text: 'Request Videography Services',
      link: '/book?service=videography'
    }
  },
  'car-hire': {
    title: 'Car Hire',
    subtitle: 'Luxury vehicle rentals for any occasion or requirement',
    description: ['Our Car Hire service offers an exceptional fleet of luxury and performance vehicles for your transportation needs. From chauffeur-driven elegance to self-drive thrills, we provide premium automotive experiences that complement your lifestyle.', 'Each vehicle in our collection is maintained to the highest standards of performance and cleanliness, ensuring a memorable and comfortable experience every time you drive with us.'],
    coverImage: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2025',
    detailImages: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070', 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070', 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070'],
    features: ['Diverse fleet of luxury and performance vehicles', 'Chauffeur-driven service available', 'Flexible rental periods', 'Door-to-door delivery and pickup', 'Airport transfer options', 'Special occasion packages', 'Corporate rental programs'],
    process: [{
      title: 'Vehicle Selection',
      description: 'Browse our collection and select the perfect vehicle for your needs.'
    }, {
      title: 'Booking Confirmation',
      description: 'Secure your reservation with flexible scheduling options.'
    }, {
      title: 'Vehicle Delivery',
      description: 'We deliver the vehicle to your preferred location, fully prepared for your journey.'
    }, {
      title: 'Drive & Return',
      description: 'Enjoy your luxury driving experience, then simply return the vehicle or arrange for collection.'
    }],
    cta: {
      text: 'Reserve a Luxury Vehicle',
      link: '/book?service=car-hire'
    }
  },
  'jet-hire': {
    title: 'Private Jet Hire',
    subtitle: 'Exclusive private jet charter services for seamless travel',
    description: ['Experience the pinnacle of luxury travel with our Private Jet Charter service. We provide access to exceptional aircraft for business or leisure travel, offering unparalleled comfort, privacy, and convenience.', 'Our jet charter service eliminates the hassles of commercial travel, allowing you to fly on your schedule to destinations worldwide. Whether for business efficiency or leisure luxury, our private aviation solutions are tailored to exceed your expectations.'],
    coverImage: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070',
    detailImages: ['https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070', 'https://images.unsplash.com/photo-1566472546919-37e4ddb08e9a?q=80&w=2097', 'https://images.unsplash.com/photo-1551651059-87c7348dcc65?q=80&w=2070'],
    features: ['Access to premium private jets', 'Flexible scheduling', 'Direct flights to thousands of airports worldwide', 'Luxurious cabin amenities', 'Personalized catering options', 'Ground transportation coordination', 'Dedicated flight attendants for larger aircraft'],
    process: [{
      title: 'Flight Consultation',
      description: 'We discuss your travel needs, preferences, and determine the ideal aircraft.'
    }, {
      title: 'Itinerary Planning',
      description: 'Our team arranges all flight details and coordinates ground services.'
    }, {
      title: 'Pre-Flight Preparation',
      description: 'We prepare the aircraft with your requested amenities and catering.'
    }, {
      title: 'Your Journey',
      description: 'Enjoy seamless travel with attentive service from departure to arrival.'
    }],
    cta: {
      text: 'Inquire About Jet Charter',
      link: '/book?service=jet-hire'
    }
  },
  'maintenance': {
    title: 'Maintenance Services',
    subtitle: 'Comprehensive property maintenance and repair solutions',
    description: ['Our Maintenance Services division provides reliable, high-quality property care and repairs for residential and commercial properties. We handle everything from routine maintenance to emergency repairs with promptness and professionalism.', 'With a team of skilled technicians and contractors, we ensure your property remains in optimal condition while minimizing disruption to occupants. Our preventative maintenance programs help avoid costly repairs and extend the life of your property\'s systems and structures.'],
    coverImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069',
    detailImages: ['https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070', 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=2070', 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070'],
    features: ['Routine property inspections', 'Preventative maintenance programs', 'Plumbing and electrical repairs', 'HVAC service and maintenance', 'Interior and exterior repairs', 'Emergency response services', 'Renovation and improvement projects'],
    process: [{
      title: 'Initial Assessment',
      description: 'We evaluate your property\'s maintenance needs and develop a customized plan.'
    }, {
      title: 'Scheduled Maintenance',
      description: 'Our team performs regular maintenance according to an agreed schedule.'
    }, {
      title: 'Rapid Response',
      description: 'When issues arise, we provide quick, effective solutions to minimize disruption.'
    }, {
      title: 'Reporting & Documentation',
      description: 'Detailed documentation of all maintenance activities keeps you informed.'
    }],
    cta: {
      text: 'Schedule a Maintenance Consultation',
      link: '/book?service=maintenance'
    }
  },
  'property-management': {
    title: 'Property Management',
    subtitle: 'End-to-end property management and upkeep services',
    description: ['Our comprehensive Property Management services handle all aspects of property ownership, allowing you to enjoy the benefits of your investment without the day-to-day responsibilities.', 'From tenant acquisition and management to financial oversight and maintenance coordination, our experienced property managers serve as your trusted partners in maximizing returns while preserving and enhancing your property\'s value.'],
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
    detailImages: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073', 'https://images.unsplash.com/photo-1577173632711-e8c0fbe8f3e9?q=80&w=2046', 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2596'],
    features: ['Tenant acquisition and screening', 'Rent collection and accounting', 'Regular property inspections', 'Maintenance coordination', 'Financial reporting and analysis', 'Lease negotiation and renewal', 'Legal compliance management'],
    process: [{
      title: 'Property Evaluation',
      description: 'We assess your property\'s condition, market position, and revenue potential.'
    }, {
      title: 'Management Strategy',
      description: 'Together, we develop a customized management plan aligned with your goals.'
    }, {
      title: 'Implementation',
      description: 'Our team handles all day-to-day operations, from marketing to maintenance.'
    }, {
      title: 'Ongoing Optimization',
      description: 'We continuously review performance and adjust strategies to maximize returns.'
    }],
    cta: {
      text: 'Discuss Your Property Management Needs',
      link: '/book?service=property-management'
    }
  },
  'facility-support': {
    title: 'Facility Support Services',
    subtitle: 'Professional support services for commercial facilities',
    description: ['Our Facility Support Services provide comprehensive solutions for commercial properties, ensuring smooth operations and optimal functionality of your business environment.', 'From cleaning and security to equipment maintenance and space management, our team of specialists delivers reliable, efficient services that allow you to focus on your core business activities while maintaining a professional, productive facility.'],
    coverImage: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=2032',
    detailImages: ['https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070', 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070'],
    features: ['Janitorial and cleaning services', 'Security personnel and systems', 'Equipment maintenance and repair', 'Space planning and management', 'Energy efficiency optimization', 'Health and safety compliance', 'Event setup and logistics support'],
    process: [{
      title: 'Needs Assessment',
      description: 'We analyze your facility\'s specific requirements and challenges.'
    }, {
      title: 'Service Planning',
      description: 'Our team develops a customized support plan tailored to your operations.'
    }, {
      title: 'Implementation',
      description: 'Professional staff deliver services according to agreed schedules and standards.'
    }, {
      title: 'Quality Assurance',
      description: 'Regular reviews and adjustments ensure consistent service excellence.'
    }],
    cta: {
      text: 'Request Facility Support Services',
      link: '/book?service=facility-support'
    }
  }
};

const ServiceDetail = () => {
  const {
    serviceId
  } = useParams<{
    serviceId: string;
  }>();
  const service = serviceId ? serviceData[serviceId] : null;
  if (!service) {
    return <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Service not found</h1>
            <p className="mb-6">The service you're looking for doesn't exist or has been moved.</p>
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>;
  }
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative h-[50vh] bg-cover bg-center flex items-center" style={{
        backgroundImage: `url(${service.coverImage})`
      }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl max-w-2xl">
              {service.subtitle}
            </p>
          </div>
        </div>
        
        {/* Overview section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }}>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
                {service.description.map((paragraph, index) => <p key={index} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>)}
                <Link to={service.cta.link}>
                  <Button className="mt-6 text-white transition-colors bg-red-950 hover:bg-red-800">
                    {service.cta.text}
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }}>
                <div className="grid grid-cols-2 gap-4">
                  {service.detailImages.map((image, index) => <div key={index} className={`rounded-lg overflow-hidden shadow-md ${index === 0 ? 'col-span-2' : 'col-span-1'}`}>
                      <img src={image} alt={`${service.title} detail ${index + 1}`} className="w-full h-full object-cover" />
                    </div>)}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Our Services Include</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="mr-4 text-mio-orange text-xl">✓</div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>
        
        {/* Process section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Our Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="relative">
                  <div className="text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto bg-red-950">
                    {index + 1}
                  </div>
                  
                  {/* Connector line */}
                  {index < service.process.length - 1 && <div className="absolute top-6 left-1/2 w-full h-0.5 bg-gray-200 -z-10 hidden lg:block"></div>}
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>)}
            </div>
            
            <div className="text-center mt-12">
              <Link to={service.cta.link}>
                <Button className="text-white transition-colors bg-[#500303]">
                  {service.cta.text}
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 text-white bg-red-950">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Our {service.title} Services?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your needs and discover how we can exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to={service.cta.link}>
                <Button className="bg-white hover:bg-mio-yellow transition-colors text-red-950">
                  {service.cta.text}
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-mio-darkred transition-colors">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};

export default ServiceDetail;
