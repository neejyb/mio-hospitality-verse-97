
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
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import PropertyDetails from "./pages/PropertyDetails";
import BookAirbnb from "./pages/BookAirbnb";
import AllProperties from "./pages/AllProperties";

const queryClient = new QueryClient();

// Create a component to wrap the Routes with AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
        <Route path="/services/:serviceId" element={<Services />} />
        <Route path="/property/:propertyId" element={<PropertyDetails />} />
        <Route path="/book-airbnb" element={<BookAirbnb />} />
        <Route path="/properties" element={<AllProperties />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
