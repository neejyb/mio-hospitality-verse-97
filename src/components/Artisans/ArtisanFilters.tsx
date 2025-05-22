
import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Star } from 'lucide-react';

interface ArtisanFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  experienceFilter: string;
  setExperienceFilter: (filter: string) => void;
  ratingFilter: string;
  setRatingFilter: (filter: string) => void;
  serviceFilter: string;
  handleTabChange: (value: string) => void;
}

const ArtisanFilters: React.FC<ArtisanFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  experienceFilter,
  setExperienceFilter,
  ratingFilter,
  setRatingFilter,
  serviceFilter,
  handleTabChange
}) => {
  return (
    <>
      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search artisans..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                <SelectTrigger className="w-[140px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Experience</SelectItem>
                  <SelectItem value="5plus">5+ Years</SelectItem>
                  <SelectItem value="10plus">10+ Years</SelectItem>
                  <SelectItem value="15plus">15+ Years</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger className="w-[140px]">
                  <Star className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Rating</SelectItem>
                  <SelectItem value="4plus">4+ Stars</SelectItem>
                  <SelectItem value="4.5plus">4.5+ Stars</SelectItem>
                  <SelectItem value="5only">5 Stars Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Tabs */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <Tabs value={serviceFilter} onValueChange={handleTabChange} className="w-full">
            <TabsList className="mb-8 w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-2">
              <TabsTrigger value="all">All Services</TabsTrigger>
              <TabsTrigger value="electrical">Electrical</TabsTrigger>
              <TabsTrigger value="plumbing">Plumbing</TabsTrigger>
              <TabsTrigger value="hvac">HVAC</TabsTrigger>
              <TabsTrigger value="general">General</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default ArtisanFilters;
