
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  thumbnail: string;
  fullSize?: string;
  videoUrl?: string;
  caption: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'interior-1',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932',
    fullSize: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932',
    caption: 'Modern minimalist living room design',
    category: 'Interior Design'
  },
  {
    id: 'interior-2',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
    fullSize: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
    caption: 'Luxury bedroom with panoramic views',
    category: 'Interior Design'
  },
  {
    id: 'airbnb-1',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070',
    fullSize: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070',
    caption: 'Elegant apartment in downtown',
    category: 'Airbnb'
  },
  {
    id: 'car-1',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2025',
    fullSize: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2025',
    caption: 'Luxury sports car available for rent',
    category: 'Car Hire'
  },
  {
    id: 'video-1',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?q=80&w=1974',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    caption: 'Promotional video for luxury property',
    category: 'Videography'
  },
  {
    id: 'jet-1',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070',
    fullSize: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070',
    caption: 'Private jet interior - luxury travel',
    category: 'Jet Hire'
  },
  {
    id: 'property-1',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
    fullSize: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
    caption: 'Exclusive property under our management',
    category: 'Property Management'
  },
  {
    id: 'maintenance-1',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069',
    fullSize: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069',
    caption: 'Professional maintenance services',
    category: 'Maintenance'
  }
];

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category)))];
  
  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Gallery</h2>
        <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Explore our previous projects and experiences through our curated gallery.
        </p>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category 
                  ? 'bg-mio-orange text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-medium text-sm">{item.category}</p>
                <h3 className="text-white font-semibold">{item.caption}</h3>
                {item.type === 'video' && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox modal */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black overflow-hidden">
          <div className="w-full h-full">
            {selectedItem?.type === 'image' ? (
              <img
                src={selectedItem.fullSize || selectedItem.thumbnail}
                alt={selectedItem.caption}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            ) : selectedItem?.type === 'video' && selectedItem.videoUrl ? (
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={selectedItem.videoUrl}
                  title={selectedItem.caption}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : null}
            
            <div className="p-4 bg-black text-white">
              <h3 className="text-xl font-bold">{selectedItem?.caption}</h3>
              <p className="text-gray-300">{selectedItem?.category}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
