
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import ImageUpload from '@/components/Admin/ImageUpload';
import { useToast } from '@/hooks/use-toast';

const ArtisanManagement = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    experience_years: '',
    rating: '',
    tagline: '',
    bio: '',
    availability: '',
    verified: false,
    is_featured: false,
    main_image: null as File | null,
  });

  const artisanSpecialties = [
    'electrician', 'plumber', 'painter', 'carpenter', 'hvac',
    'cleaning', 'landscaping', 'security', 'handyman', 'appliance_repair'
  ];

  const availabilityOptions = [
    'Available Now', 'Available in 1-2 days', 'Available in 3-5 days',
    'Available next week', 'Booked until further notice'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check featured artisan limit
    if (formData.is_featured) {
      // Mock check - replace with actual count from Supabase
      const featuredCount = 3; // This should come from your database
      if (featuredCount >= 4) {
        toast({
          title: "Limit Reached",
          description: "You can only feature up to 4 artisans.",
          variant: "destructive",
        });
        return;
      }
    }

    try {
      console.log('Artisan form data:', formData);
      
      toast({
        title: "Success",
        description: "Artisan profile saved successfully!",
      });
      
      // Reset form
      setFormData({
        name: '',
        specialty: '',
        experience_years: '',
        rating: '',
        tagline: '',
        bio: '',
        availability: '',
        verified: false,
        is_featured: false,
        main_image: null,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save artisan profile. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Artisan Management</h1>
        <p className="text-gray-600 mt-2">Manage your service professional profiles</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Artisan</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageUpload
                label="Artisan Photo"
                onChange={(file) => setFormData(prev => ({ ...prev, main_image: file }))}
              />
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Michael Chen"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialty">Specialty / Role</Label>
                  <select
                    id="specialty"
                    value={formData.specialty}
                    onChange={(e) => setFormData(prev => ({ ...prev, specialty: e.target.value }))}
                    className="w-full p-2 border rounded-md"
                    required
                  >
                    <option value="">Select specialty</option>
                    {artisanSpecialties.map(specialty => (
                      <option key={specialty} value={specialty}>
                        {specialty.split('_').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input
                      id="experience"
                      type="number"
                      value={formData.experience_years}
                      onChange={(e) => setFormData(prev => ({ ...prev, experience_years: e.target.value }))}
                      placeholder="8"
                      min="0"
                      max="50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rating">Rating (out of 5)</Label>
                    <Input
                      id="rating"
                      type="number"
                      step="0.1"
                      value={formData.rating}
                      onChange={(e) => setFormData(prev => ({ ...prev, rating: e.target.value }))}
                      placeholder="4.6"
                      min="0"
                      max="5"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tagline">Short Description (1-2 lines)</Label>
              <Input
                id="tagline"
                value={formData.tagline}
                onChange={(e) => setFormData(prev => ({ ...prev, tagline: e.target.value }))}
                placeholder="Specialized in electrical installations and smart home systems"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Full Bio</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                placeholder="Detailed description of expertise, certifications, and background..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="availability">Availability</Label>
              <select
                id="availability"
                value={formData.availability}
                onChange={(e) => setFormData(prev => ({ ...prev, availability: e.target.value }))}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="">Select availability</option>
                {availabilityOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  checked={formData.verified}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, verified: checked }))
                  }
                />
                <Label>Verified Badge</Label>
                <span className="text-sm text-gray-500">(Shows verification checkmark)</span>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  checked={formData.is_featured}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, is_featured: checked }))
                  }
                />
                <Label>Add to Professional Artisans Section</Label>
                <span className="text-sm text-gray-500">(Max 4 artisans)</span>
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="submit" className="bg-[#D4AF37] hover:bg-[#B4941F]">
                Save Artisan Profile
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArtisanManagement;
