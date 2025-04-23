
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed z-30 top-0 left-0 w-full transition-colors ${isScrolled ? 'bg-white shadow' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-0">
        <Link to="/" className="flex items-center space-x-3">
          <span className="sr-only">Mio's Hospitality & Co</span>
          <img src="/lovable-uploads/b4196b07-03dc-40ee-a6b4-34e891c1b9bd.png" alt="Logo" className="h-10 w-auto" />
          <h1 className={`text-xl font-bold tracking-widest uppercase hidden sm:block
            ${isScrolled ? 'text-mio-orange' : 'text-white'}`}>
            Mio's Hospitality & Co
          </h1>
        </Link>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={isScrolled ? 'text-mio-orange' : 'text-white'}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-6 h-6" viewBox="0 0 24 24">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/about" className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-mio-orange' : 'text-white hover:text-mio-orange'}`}>
            About Us
          </Link>
          <Link to="/services/interior-design" className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-mio-orange' : 'text-white hover:text-mio-orange'}`}>
            Interior Design
          </Link>
          <Link to="/services/airbnb" className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-mio-orange' : 'text-white hover:text-mio-orange'}`}>
            Airbnb Management
          </Link>
          <Link to="/services/transport" className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-mio-orange' : 'text-white hover:text-mio-orange'}`}>
            Transport Services
          </Link>
          <Link to="/contact" className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-mio-orange' : 'text-white hover:text-mio-orange'}`}>
            Contact
          </Link>
          <Link to="/book">
            <Button size="custom" variant="outline-mio">
              Book a Service
            </Button>
          </Link>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 animate-slide-in">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link to="/about" className="text-mio-orange font-semibold">About Us</Link>
            <Link to="/services/interior-design" className="text-mio-orange font-semibold">Interior Design</Link>
            <Link to="/services/airbnb" className="text-mio-orange font-semibold">Airbnb Management</Link>
            <Link to="/services/transport" className="text-mio-orange font-semibold">Transport Services</Link>
            <Link to="/contact" className="text-mio-orange font-semibold">Contact</Link>
            <Link to="/book">
              <Button size="custom" variant="outline-mio">
                Book a Service
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
