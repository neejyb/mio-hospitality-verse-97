
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminAuthProvider } from "@/hooks/useAdminAuth";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import AllProperties from "./pages/AllProperties";
import PropertyDetails from "./pages/PropertyDetails";
import CarFleet from "./pages/CarFleet";
import JetOptions from "./pages/JetOptions";
import Artisans from "./pages/Artisans";
import ExploreServices from "./pages/ExploreServices";
import NotFound from "./pages/NotFound";

// Service pages
import AirbnbServices from "./pages/Services/AirbnbServices";
import PropertyManagement from "./pages/Services/PropertyManagement";
import InteriorDesign from "./pages/Services/InteriorDesign";
import Maintenance from "./pages/Services/Maintenance";
import CarHire from "./pages/Services/CarHire";
import JetHire from "./pages/Services/JetHire";
import FacilityManagement from "./pages/Services/FacilityManagement";
import FacilitySupport from "./pages/Services/FacilitySupport";
import Videography from "./pages/Services/Videography";

// Admin pages
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminLayout from "./components/Admin/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import AirbnbManagement from "./pages/Admin/AirbnbManagement";
import CarManagement from "./pages/Admin/CarManagement";
import JetManagement from "./pages/Admin/JetManagement";
import ArtisanManagement from "./pages/Admin/ArtisanManagement";
import AllListings from "./pages/Admin/AllListings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AdminAuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Book />} />
            <Route path="/properties" element={<AllProperties />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/car-fleet" element={<CarFleet />} />
            <Route path="/jet-options" element={<JetOptions />} />
            <Route path="/artisans" element={<Artisans />} />
            <Route path="/explore-services" element={<ExploreServices />} />

            {/* Service pages */}
            <Route path="/services/airbnb-services" element={<AirbnbServices />} />
            <Route path="/services/property-management" element={<PropertyManagement />} />
            <Route path="/services/interior-design" element={<InteriorDesign />} />
            <Route path="/services/maintenance" element={<Maintenance />} />
            <Route path="/services/car-hire" element={<CarHire />} />
            <Route path="/services/jet-hire" element={<JetHire />} />
            <Route path="/services/facility-management" element={<FacilityManagement />} />
            <Route path="/services/facility-support" element={<FacilitySupport />} />
            <Route path="/services/videography" element={<Videography />} />

            {/* Admin routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="airbnb" element={<AirbnbManagement />} />
              <Route path="cars" element={<CarManagement />} />
              <Route path="jets" element={<JetManagement />} />
              <Route path="artisans" element={<ArtisanManagement />} />
              <Route path="all-listings" element={<AllListings />} />
            </Route>

            {/* Catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AdminAuthProvider>
  </QueryClientProvider>
);

export default App;
