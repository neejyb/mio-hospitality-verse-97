
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Book from "./pages/Book";
import AllProperties from "./pages/AllProperties";
import PropertyDetails from "./pages/PropertyDetails";
import Artisans from "./pages/Artisans";
import Fleet from "./pages/Fleet";
import Jets from "./pages/Jets";
import NotFound from "./pages/NotFound";

// Service Pages
import InteriorDesign from "./pages/Services/InteriorDesign";
import AirbnbServices from "./pages/Services/AirbnbServices";
import CarHire from "./pages/Services/CarHire";
import JetHire from "./pages/Services/JetHire";
import Videography from "./pages/Services/Videography";
import FacilityManagement from "./pages/Services/FacilityManagement";

import "./App.css";

function App() {
  useEffect(() => {
    // Scroll to top on initial page load
    window.scrollTo(0, 0);

    // Update document title
    document.title = "Luxe Homes & Co";
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Book />} />
          <Route path="/properties" element={<AllProperties />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          <Route path="/artisans" element={<Artisans />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/jets" element={<Jets />} />
          
          {/* Service Pages */}
          <Route path="/services/interior-design" element={<InteriorDesign />} />
          <Route path="/services/airbnb" element={<AirbnbServices />} />
          <Route path="/services/car-hire" element={<CarHire />} />
          <Route path="/services/jet-hire" element={<JetHire />} />
          <Route path="/services/videography" element={<Videography />} />
          <Route path="/services/facility-management" element={<FacilityManagement />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
