
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

interface ServiceGalleryProps {
  title: string;
  subtitle?: string;
  images: GalleryImage[];
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({
  title,
  subtitle,
  images
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  // Show first 9 images for 3x3 grid on mobile
  const displayImages = images.slice(0, 9);

  return (
    <section className="mobile-section-padding bg-white">
      <div className="container mx-auto mobile-container-padding">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="responsive-heading font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="responsive-body text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Gallery Grid - 3x3 on mobile/tablet */}
        <div className="mobile-portfolio-grid">
          {displayImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Show more indicator if there are more than 9 images */}
        {images.length > 9 && (
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              +{images.length - 9} more images
            </p>
          </div>
        )}
      </div>
      
      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="mobile-modal bg-white rounded-lg overflow-hidden">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-opacity touch-target"
              >
                <X size={20} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="mobile-modal-image"
              />
            </div>
            <div className="mobile-modal-content">
              <h3 className="font-semibold text-lg mb-2">{selectedImage.alt}</h3>
              <p className="text-gray-600 responsive-body">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceGallery;
