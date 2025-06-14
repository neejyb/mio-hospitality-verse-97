import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Check, MapPin, X, Bed, Bath, Wifi, Car, Tv, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PropertyFeature {
  id: string;
  name: string;
  icon?: string;
}

interface Property {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  features: PropertyFeature[];
  description?: string;
  images?: string[];
}

interface PropertyModalProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: (propertyId: number) => void;
}

// Helper function to get the appropriate icon for a feature
const getFeatureIcon = (featureName: string) => {
  const lowerName = featureName.toLowerCase();
  if (lowerName.includes('bedroom') || lowerName.includes('bed')) return <Bed className="h-3 w-3 sm:h-4 sm:w-4" />;
  if (lowerName.includes('bath')) return <Bath className="h-3 w-3 sm:h-4 sm:w-4" />;
  if (lowerName.includes('wifi') || lowerName.includes('internet')) return <Wifi className="h-3 w-3 sm:h-4 sm:w-4" />;
  if (lowerName.includes('car') || lowerName.includes('parking')) return <Car className="h-3 w-3 sm:h-4 sm:w-4" />;
  if (lowerName.includes('tv') || lowerName.includes('television')) return <Tv className="h-3 w-3 sm:h-4 sm:w-4" />;
  if (lowerName.includes('kitchen') || lowerName.includes('equipped')) return <Utensils className="h-3 w-3 sm:h-4 sm:w-4" />;
  
  // Default icon if no specific match
  return <Check className="h-3 w-3 sm:h-4 sm:w-4" />;
};

const PropertyModal = ({ property, isOpen, onClose, onBookNow }: PropertyModalProps) => {
  const [activeTab, setActiveTab] = useState('photos');
  
  // Use property.images if available, otherwise create an array with just the main image
  const propertyImages = property.images || [property.image];
  
  // Generate a simple description if one is not provided
  const description = property.description || `This beautiful ${property.name} is located in ${property.location}. It offers ${property.features.map(f => f.name).join(', ')}. It's perfect for your next getaway.`;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) onClose();
    }}>
      <DialogContent className="mobile-modal sm:max-w-[900px] p-0 gap-0 overflow-hidden flex flex-col">
        <DialogHeader className="p-3 sm:p-4 flex flex-row justify-between items-center border-b shrink-0">
          <DialogTitle className="text-base sm:text-lg md:text-xl font-bold pr-2 sm:pr-4 line-clamp-1">{property.name}</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-3 sm:p-4 md:p-6">
              {/* Location */}
              <div className="flex items-center mb-4 sm:mb-6 text-gray-600">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base">{property.location}</span>
              </div>
              
              <Tabs defaultValue="photos" value={activeTab} onValueChange={setActiveTab} className="w-full mb-4 sm:mb-6 md:mb-8">
                <TabsList className="grid w-full grid-cols-4 mb-3 sm:mb-4 md:mb-6 h-8 sm:h-9 md:h-10">
                  <TabsTrigger value="photos" className="transition-all duration-200 text-xs sm:text-sm">Photos</TabsTrigger>
                  <TabsTrigger value="amenities" className="transition-all duration-200 text-xs sm:text-sm">Amenities</TabsTrigger>
                  <TabsTrigger value="details" className="transition-all duration-200 text-xs sm:text-sm">Details</TabsTrigger>
                  <TabsTrigger value="pricing" className="transition-all duration-200 text-xs sm:text-sm">Pricing</TabsTrigger>
                </TabsList>
                
                <div className="min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[400px]">
                  <AnimatePresence mode="wait">
                    <TabsContent value="photos" className="w-full">
                      <motion.div
                        key="photos"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Carousel className="w-full">
                          <CarouselContent>
                            {propertyImages.map((image, index) => (
                              <CarouselItem key={`${property.id}-image-${index}`} className="basis-full">
                                <div className="aspect-video w-full overflow-hidden rounded-lg">
                                  <img 
                                    src={image} 
                                    alt={`${property.name} - Image ${index + 1}`} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-1 sm:left-2 h-6 w-6 sm:h-8 sm:w-8" />
                          <CarouselNext className="right-1 sm:right-2 h-6 w-6 sm:h-8 sm:w-8" />
                        </Carousel>
                      </motion.div>
                    </TabsContent>
                    
                    <TabsContent value="amenities">
                      <motion.div
                        key="amenities"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"
                      >
                        {property.features.map(feature => (
                          <motion.div 
                            key={feature.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            className="flex items-center p-2 sm:p-3 border rounded-md"
                          >
                            <div className="mr-2 sm:mr-3 text-green-500 flex-shrink-0">
                              {getFeatureIcon(feature.name)}
                            </div>
                            <span className="text-xs sm:text-sm md:text-base">{feature.name}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </TabsContent>
                    
                    <TabsContent value="details">
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="prose max-w-none"
                      >
                        <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">{description}</p>
                      </motion.div>
                    </TabsContent>
                    
                    <TabsContent value="pricing">
                      <motion.div
                        key="pricing"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2 sm:space-y-3"
                      >
                        <div className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded-md">
                          <span className="font-medium text-xs sm:text-sm md:text-base">Nightly Rate</span>
                          <span className="text-[#ea384c] font-bold text-sm sm:text-lg md:text-xl">${property.price}</span>
                        </div>
                        <div className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded-md">
                          <span className="font-medium text-xs sm:text-sm md:text-base">Weekly Rate (7 nights)</span>
                          <span className="text-[#ea384c] font-bold text-sm sm:text-lg md:text-xl">${property.price * 7}</span>
                        </div>
                        <div className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded-md">
                          <span className="font-medium text-xs sm:text-sm md:text-base">Monthly Rate (30 nights)</span>
                          <span className="text-[#ea384c] font-bold text-sm sm:text-lg md:text-xl">${Math.round(property.price * 30 * 0.9)}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 mt-2">* Monthly stays include a 10% discount</p>
                      </motion.div>
                    </TabsContent>
                  </AnimatePresence>
                </div>
              </Tabs>
              
              <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-end">
                <Button 
                  variant="outline-gold" 
                  onClick={onClose}
                  className="mobile-btn text-xs sm:text-sm md:text-base"
                >
                  Close
                </Button>
                <Button 
                  onClick={() => onBookNow(property.id)}
                  className="mobile-btn text-xs sm:text-sm md:text-base"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyModal;
