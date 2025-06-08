
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import ImageUpload from '@/components/Admin/ImageUpload';
import { useToast } from '@/hooks/use-toast';

const AirbnbManagement = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    category: '',
    description: '',
    price_per_night: '',
    is_featured: false,
    main_image: null as File | null,
    image1: null as File | null,
    image2: null as File | null,
    image3: null as File | null,
    amenities: [] as string[],
    features: [] as string[],
  });

  const availableAmenities = [
    'Wi-Fi', 'TV', 'Kitchen', 'Balcony', 'AC', 'Heating', 'Pool', 'Gym',
    'Parking', 'Pet Friendly', 'Smoking Allowed', 'Hot Tub', 'Fireplace',
    'Washer', 'Dryer', 'Iron', 'Hair Dryer', 'Essentials', 'Hangers'
  ];

  const propertyTypes = [
    'apartment', 'villa', 'cabin', 'loft', 'cottage', 'penthouse'
  ];

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      amenities: checked 
        ? [...prev.amenities, amenity]
        : prev.amenities.filter(a => a !== amenity)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check featured property limit
    if (formData.is_featured) {
      // Mock check - replace with actual count from Supabase
      const featuredCount = 2; // This should come from your database
      if (featuredCount >= 3) {
        toast({
          title: "Limit Reached",
          description: "You can only have up to 3 featured properties.",
          variant: "destructive",
        });
        return;
      }
    }

    try {
      // Here you would upload images to Supabase Storage and save data to database
      console.log('Form data:', formData);
      
      toast({
        title: "Success",
        description: "Airbnb listing saved successfully!",
      });
      
      // Reset form
      setFormData({
        name: '',
        location: '',
        category: '',
        description: '',
        price_per_night: '',
        is_featured: false,
        main_image: null,
        image1: null,
        image2: null,
        image3: null,
        amenities: [],
        features: [],
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save listing. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Airbnb Listings</h1>
        <p className="text-gray-600 mt-2">Manage your Airbnb property listings</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Airbnb Listing</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Tabs defaultValue="photos" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
              </TabsList>

              <TabsContent value="photos" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ImageUpload
                    label="Main Display Photo"
                    onChange={(file) => setFormData(prev => ({ ...prev, main_image: file }))}
                  />
                  <ImageUpload
                    label="Photo 1"
                    onChange={(file) => setFormData(prev => ({ ...prev, image1: file }))}
                  />
                  <ImageUpload
                    label="Photo 2"
                    onChange={(file) => setFormData(prev => ({ ...prev, image2: file }))}
                  />
                  <ImageUpload
                    label="Photo 3"
                    onChange={(file) => setFormData(prev => ({ ...prev, image3: file }))}
                  />
                </div>
              </TabsContent>

              <TabsContent value="details" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Property Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Beautiful Ocean View Apartment"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="Miami Beach, FL"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Property Type</Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full p-2 border rounded-md"
                    required
                  >
                    <option value="">Select property type</option>
                    {propertyTypes.map(type => (
                      <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Full Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe your property in detail..."
                    rows={4}
                  />
                </div>
              </TabsContent>

              <TabsContent value="amenities" className="space-y-6">
                <div>
                  <Label className="text-base font-medium">Select Amenities</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {availableAmenities.map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2">
                        <Checkbox
                          id={amenity}
                          checked={formData.amenities.includes(amenity)}
                          onCheckedChange={(checked) => 
                            handleAmenityChange(amenity, checked as boolean)
                          }
                        />
                        <Label htmlFor={amenity} className="text-sm">{amenity}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pricing" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price per Night ($)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={formData.price_per_night}
                      onChange={(e) => setFormData(prev => ({ ...prev, price_per_night: e.target.value }))}
                      placeholder="150"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Featured Property</Label>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.is_featured}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, is_featured: checked }))
                        }
                      />
                      <span className="text-sm text-gray-600">
                        Display on homepage (max 3)
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-end mt-8">
              <Button type="submit" className="bg-[#D4AF37] hover:bg-[#B4941F]">
                Save Listing
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AirbnbManagement;
