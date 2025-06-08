
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type Artisan = Tables<'artisans'>;

export const useFeaturedArtisans = () => {
  return useQuery({
    queryKey: ['featured-artisans'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('artisans')
        .select('*')
        .eq('is_featured', true)
        .eq('is_active', true)
        .limit(4);
      
      if (error) throw error;
      return data;
    },
  });
};

export const useAllArtisans = () => {
  return useQuery({
    queryKey: ['all-artisans'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('artisans')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });
};
