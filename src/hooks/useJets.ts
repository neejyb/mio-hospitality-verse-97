
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type Jet = Tables<'jets'>;

export const useAllJets = () => {
  return useQuery({
    queryKey: ['all-jets'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('jets')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });
};
