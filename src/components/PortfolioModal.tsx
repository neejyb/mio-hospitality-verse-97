
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: PortfolioImage[];
  initialImageIndex?: number;
  title?: string;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  images,
  initialImageIndex = 0,
  title = "Portfolio Gallery"
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') previousImage();
    if (e.key === 'Escape') onClose();
  };

  if (!images || images.length === 0) return null;

  const currentImage = images[currentImageIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-6xl w-[95vw] h-[90vh] p-0 overflow-hidden"
        onKeyDown={handleKeyDown}
      >
        <DialogHeader className="absolute top-4 left-6 right-6 z-10 bg-black/50 backdrop-blur-sm rounded-lg p-4">
          <DialogTitle className="text-white text-lg font-semibold">
            {title}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-2 right-2 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </Button>
        </DialogHeader>

        <div className="relative w-full h-full flex items-center justify-center bg-black">
          {/* Main Image Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white h-12 w-12 rounded-full backdrop-blur-sm"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white h-12 w-12 rounded-full backdrop-blur-sm"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} of {images.length}
            </div>
          )}

          {/* Image Caption */}
          {currentImage.caption && (
            <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-sm text-white p-4 rounded-lg">
              <p className="text-sm leading-relaxed">{currentImage.caption}</p>
            </div>
          )}
        </div>

        {/* Thumbnail Strip (for mobile/tablet) */}
        {images.length > 1 && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 md:hidden">
            <div className="flex gap-2 bg-black/50 backdrop-blur-sm p-2 rounded-lg max-w-[90vw] overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-12 h-12 rounded border-2 overflow-hidden ${
                    index === currentImageIndex ? 'border-white' : 'border-white/30'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal;
