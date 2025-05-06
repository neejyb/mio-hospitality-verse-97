
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

interface ServiceGalleryProps {
  title: string;
  subtitle?: string;
  images: GalleryImage[];
}

const ServiceGallery = ({ title, subtitle, images }: ServiceGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSelectedImage(images[(currentImageIndex + 1) % images.length]);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setSelectedImage(images[(currentImageIndex - 1 + images.length) % images.length]);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => openLightbox(image, index)}
            >
              <div className="aspect-square relative overflow-hidden group">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm">{image.caption}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent className="max-w-5xl max-h-[90vh] p-0 bg-black overflow-hidden">
          <div className="relative w-full h-full">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full" 
              onClick={closeLightbox}
            >
              <X size={20} />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full" 
              onClick={goToPreviousImage}
            >
              <ChevronLeft size={20} />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full" 
              onClick={goToNextImage}
            >
              <ChevronRight size={20} />
            </Button>
            
            <div className="flex items-center justify-center h-full">
              {selectedImage && (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[80vh] max-w-full object-contain"
                />
              )}
            </div>
            
            {selectedImage?.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4">
                <p>{selectedImage.caption}</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServiceGallery;
