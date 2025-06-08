
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import ImageUpload from '@/components/Admin/ImageUpload';
import { useToast } from '@/hooks/use-toast';

const JetManagement = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price_per_hour: '',
    description: '',
    short_description: '',
    range: '',
    max_speed: '',
    passenger_capacity: '',
    features: [] as string[],
    specifications: [] as string[],
    is_featured: false,
    main_image: null as File | null,
  });

  const [newFeature, setNewFeature] = useState('');
  const [newSpec, setNewSpec] = useState('');

  const jetCategories = [
    'light_jet', 'super_mid_size', 'ultra_long_range', 'super_long_range'
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
      console.log('Jet form data:', formData);
      
      toast({
        title: "Success",
        description: "Jet listing saved successfully!",
      });
      
      // Reset form
      setFormData({
        name: '',
        category: '',
        price_per_hour: '',
        description: '',
        short_description: '',
        range: '',
        max_speed: '',
        passenger_capacity: '',
        features: [],
        specifications: [],
        is_featured: false,
        main_image: null,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save jet listing. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Jet Listings</h1>
        <p className="text-gray-600 mt-2">Manage your private jet listings</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Jet Listing</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageUpload
                label="Main Jet Image"
                onChange={(file) => setFormData(prev => ({ ...prev, main_image: file }))}
              />
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Jet Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Bombardier Global 7500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Jet Category</Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full p-2 border rounded-md"
                    required
                  >
                    <option value="">Select category</option>
                    {jetCategories.map(category => (
                      <option key={category} value={category}>
                        {category.split('_').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Price per Hour ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price_per_hour}
                    onChange={(e) => setFormData(prev => ({ ...prev, price_per_hour: e.target.value }))}
                    placeholder="15000"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="short_description">Short Description</Label>
                <Textarea
                  id="short_description"
                  value={formData.short_description}
                  onChange={(e) => setFormData(prev => ({ ...prev, short_description: e.target.value }))}
                  placeholder="Brief overview of the jet..."
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Full Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Detailed description of the jet..."
                  rows={2}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="range">Range (nautical miles)</Label>
                <Input
                  id="range"
                  value={formData.range}
                  onChange={(e) => setFormData(prev => ({ ...prev, range: e.target.value }))}
                  placeholder="7700"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="max_speed">Max Speed (Mach)</Label>
                <Input
                  id="max_speed"
                  value={formData.max_speed}
                  onChange={(e) => setFormData(prev => ({ ...prev, max_speed: e.target.value }))}
                  placeholder="0.925"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="passenger_capacity">Passenger Capacity</Label>
                <Input
                  id="passenger_capacity"
                  type="number"
                  value={formData.passenger_capacity}
                  onChange={(e) => setFormData(prev => ({ ...prev, passenger_capacity: e.target.value }))}
                  placeholder="19"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label>Features</Label>
              <div className="flex gap-2">
                <Input
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  placeholder="Add a feature (e.g., WiFi, Suite, Shower)"
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
                  placeholder="Add a specification"
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
              <Label>Featured Jet</Label>
            </div>

            <div className="flex justify-end">
              <Button type="submit" className="bg-[#D4AF37] hover:bg-[#B4941F]">
                Save Jet Listing
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default JetManagement;
