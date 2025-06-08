
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import ImageUpload from '@/components/Admin/ImageUpload';
import { useToast } from '@/hooks/use-toast';

const CarManagement = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price_per_day: '',
    description: '',
    features: [] as string[],
    specifications: [] as string[],
    is_featured: false,
    main_image: null as File | null,
  });

  const [newFeature, setNewFeature] = useState('');
  const [newSpec, setNewSpec] = useState('');

  const carCategories = [
    'luxury_sedan', 'sports_car', 'luxury_suv', 'executive_sedan',
    'supercar', 'grand_tourer', 'ultra_luxury', 'electric_luxury'
  ];

  const addFeature = () => {
    if (newFeature.trim()) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  const removeFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const addSpecification = () => {
    if (newSpec.trim()) {
      setFormData(prev => ({
        ...prev,
        specifications: [...prev.specifications, newSpec.trim()]
      }));
      setNewSpec('');
    }
  };

  const removeSpecification = (index: number) => {
    setFormData(prev => ({
      ...prev,
      specifications: prev.specifications.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Here you would upload image to Supabase Storage and save data to database
      console.log('Car form data:', formData);
      
      toast({
        title: "Success",
        description: "Car listing saved successfully!",
      });
      
      // Reset form
      setFormData({
        name: '',
        category: '',
        price_per_day: '',
        description: '',
        features: [],
        specifications: [],
        is_featured: false,
        main_image: null,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save car listing. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Car Listings</h1>
        <p className="text-gray-600 mt-2">Manage your luxury car listings</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Car Listing</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageUpload
                label="Primary Display Image"
                onChange={(file) => setFormData(prev => ({ ...prev, main_image: file }))}
              />
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Model Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Porsche 911 Carrera"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Car Category</Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full p-2 border rounded-md"
                    required
                  >
                    <option value="">Select category</option>
                    {carCategories.map(category => (
                      <option key={category} value={category}>
                        {category.split('_').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Price per Day ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price_per_day}
                    onChange={(e) => setFormData(prev => ({ ...prev, price_per_day: e.target.value }))}
                    placeholder="500"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Short Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe the car's key features and appeal..."
                rows={3}
              />
            </div>

            <div className="space-y-4">
              <Label>Key Features</Label>
              <div className="flex gap-2">
                <Input
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  placeholder="Add a feature (e.g., Leather Interior)"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                />
                <Button type="button" onClick={addFeature} variant="outline">
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {feature}
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Label>Specifications</Label>
              <div className="flex gap-2">
                <Input
                  value={newSpec}
                  onChange={(e) => setNewSpec(e.target.value)}
                  placeholder="Add a specification (e.g., 0-60 mph in 3.2s)"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSpecification())}
                />
                <Button type="button" onClick={addSpecification} variant="outline">
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.specifications.map((spec, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {spec}
                    <button
                      type="button"
                      onClick={() => removeSpecification(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                checked={formData.is_featured}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, is_featured: checked }))
                }
              />
              <Label>Featured Car</Label>
            </div>

            <div className="flex justify-end">
              <Button type="submit" className="bg-[#D4AF37] hover:bg-[#B4941F]">
                Save Car Listing
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarManagement;
