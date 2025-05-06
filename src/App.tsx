
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
import AllProperties from "./pages/AllProperties";

// Import service pages
import InteriorDesign from "./pages/Services/InteriorDesign";
import AirbnbServices from "./pages/Services/AirbnbServices";
import Videography from "./pages/Services/Videography";
import CarHire from "./pages/Services/CarHire";
import JetHire from "./pages/Services/JetHire";
import Maintenance from "./pages/Services/Maintenance";
import PropertyManagement from "./pages/Services/PropertyManagement";
import FacilitySupport from "./pages/Services/FacilitySupport";

// Create a client
const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
        <Route path="/properties" element={<AllProperties />} />
        
        {/* Service Routes */}
        <Route path="/services/interior-design" element={<InteriorDesign />} />
        <Route path="/services/airbnb" element={<AirbnbServices />} />
        <Route path="/services/videography" element={<Videography />} />
        <Route path="/services/car-hire" element={<CarHire />} />
        <Route path="/services/jet-hire" element={<JetHire />} />
        <Route path="/services/maintenance" element={<Maintenance />} />
        <Route path="/services/property-management" element={<PropertyManagement />} />
        <Route path="/services/facility-support" element={<FacilitySupport />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AnimatedRoutes />
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
