
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  Car, 
  Plane, 
  Users, 
  Search, 
  Edit, 
  Trash2,
  Filter 
} from 'lucide-react';

interface Listing {
  id: string;
  type: 'airbnb' | 'car' | 'jet' | 'artisan';
  title: string;
  image: string;
  status: 'published' | 'draft';
  dateCreated: string;
  featured?: boolean;
}

const AllListings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  // Mock data - replace with actual data from Supabase
  const listings: Listing[] = [
    {
      id: '1',
      type: 'airbnb',
      title: 'Ocean View Penthouse',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      status: 'published',
      dateCreated: '2024-01-15',
      featured: true,
    },
    {
      id: '2',
      type: 'car',
      title: 'Porsche 911 Carrera',
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d',
      status: 'published',
      dateCreated: '2024-01-14',
    },
    {
      id: '3',
      type: 'jet',
      title: 'Bombardier Global 7500',
      image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63',
      status: 'draft',
      dateCreated: '2024-01-13',
    },
    {
      id: '4',
      type: 'artisan',
      title: 'Michael Chen - Electrician',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      status: 'published',
      dateCreated: '2024-01-12',
      featured: true,
    },
  ];

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || listing.type === filterType;
    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'airbnb': return <Building className="h-4 w-4" />;
      case 'car': return <Car className="h-4 w-4" />;
      case 'jet': return <Plane className="h-4 w-4" />;
      case 'artisan': return <Users className="h-4 w-4" />;
      default: return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'airbnb': return 'bg-blue-100 text-blue-800';
      case 'car': return 'bg-green-100 text-green-800';
      case 'jet': return 'bg-purple-100 text-purple-800';
      case 'artisan': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleEdit = (id: string, type: string) => {
    console.log('Edit listing:', id, type);
    // Navigate to edit form based on type
  };

  const handleDelete = (id: string) => {
    console.log('Delete listing:', id);
    // Show confirmation dialog and delete
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">All Listings</h1>
        <p className="text-gray-600 mt-2">
          Manage all your listings from one centralized location
        </p>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search listings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="p-2 border rounded-md"
              >
                <option value="all">All Types</option>
                <option value="airbnb">Airbnb</option>
                <option value="car">Cars</option>
                <option value="jet">Jets</option>
                <option value="artisan">Artisans</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((listing) => (
          <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
              {listing.featured && (
                <Badge className="absolute top-2 right-2 bg-[#D4AF37] text-white">
                  Featured
                </Badge>
              )}
            </div>
            
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge className={getTypeColor(listing.type)}>
                    <div className="flex items-center gap-1">
                      {getTypeIcon(listing.type)}
                      {listing.type.charAt(0).toUpperCase() + listing.type.slice(1)}
                    </div>
                  </Badge>
                  <Badge variant={listing.status === 'published' ? 'default' : 'secondary'}>
                    {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-lg leading-tight">
                  {listing.title}
                </h3>
                
                <div className="text-sm text-gray-500">
                  Created: {new Date(listing.dateCreated).toLocaleDateString()}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(listing.id, listing.type)}
                    className="flex-1"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(listing.id)}
                    className="text-red-600 hover:text-red-700 hover:border-red-300"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredListings.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No listings found
            </h3>
            <p className="text-gray-500">
              {searchTerm || filterType !== 'all' 
                ? 'Try adjusting your search or filters'
                : 'Start by adding your first listing'
              }
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AllListings;
