
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Check, MapPin, X, Bed, Bath, Wifi, Car, Tv, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

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
  if (lowerName.includes('bedroom') || lowerName.includes('bed')) return <Bed className="h-5 w-5" />;
  if (lowerName.includes('bath')) return <Bath className="h-5 w-5" />;
  if (lowerName.includes('wifi') || lowerName.includes('internet')) return <Wifi className="h-5 w-5" />;
  if (lowerName.includes('car') || lowerName.includes('parking')) return <Car className="h-5 w-5" />;
  if (lowerName.includes('tv') || lowerName.includes('television')) return <Tv className="h-5 w-5" />;
  if (lowerName.includes('kitchen') || lowerName.includes('equipped')) return <Utensils className="h-5 w-5" />;
  
  // Default icon if no specific match
  return <Check className="h-5 w-5" />;
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
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] p-0 gap-0 overflow-hidden">
        <DialogHeader className="p-4 flex flex-row justify-between items-center border-b">
          <DialogTitle className="text-xl font-bold">{property.name}</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <ScrollArea className="max-h-[75vh]">
          <div className="p-6">
            {/* Location */}
            <div className="flex items-center mb-6 text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{property.location}</span>
            </div>
            
            <Tabs defaultValue="photos" value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="photos" className="w-full">
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
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </TabsContent>
              
              <TabsContent value="amenities">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.features.map(feature => (
                    <motion.div 
                      key={feature.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center p-3 border rounded-md"
                    >
                      <div className="mr-3 text-green-500">
                        {getFeatureIcon(feature.name)}
                      </div>
                      <span>{feature.name}</span>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="details">
                <div className="prose max-w-none">
                  <p className="text-gray-700">{description}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="pricing">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <span className="font-medium">Nightly Rate</span>
                    <span className="text-[#ea384c] font-bold text-xl">${property.price}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <span className="font-medium">Weekly Rate (7 nights)</span>
                    <span className="text-[#ea384c] font-bold text-xl">${property.price * 7}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <span className="font-medium">Monthly Rate (30 nights)</span>
                    <span className="text-[#ea384c] font-bold text-xl">${Math.round(property.price * 30 * 0.9)}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">* Monthly stays include a 10% discount</p>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
              <Button 
                variant="outline-gold" 
                onClick={onClose}
              >
                Close
              </Button>
              <Button 
                onClick={() => onBookNow(property.id)}
              >
                Book Now
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyModal;
