export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      artisans: {
        Row: {
          availability: string | null
          bio: string | null
          created_at: string
          experience_years: number
          id: string
          images: string[] | null
          is_active: boolean | null
          is_featured: boolean | null
          main_image: string
          name: string
          rating: number
          specialty: Database["public"]["Enums"]["artisan_specialty"]
          tagline: string | null
          updated_at: string
          verified: boolean | null
        }
        Insert: {
          availability?: string | null
          bio?: string | null
          created_at?: string
          experience_years?: number
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          is_featured?: boolean | null
          main_image: string
          name: string
          rating?: number
          specialty: Database["public"]["Enums"]["artisan_specialty"]
          tagline?: string | null
          updated_at?: string
          verified?: boolean | null
        }
        Update: {
          availability?: string | null
          bio?: string | null
          created_at?: string
          experience_years?: number
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          is_featured?: boolean | null
          main_image?: string
          name?: string
          rating?: number
          specialty?: Database["public"]["Enums"]["artisan_specialty"]
          tagline?: string | null
          updated_at?: string
          verified?: boolean | null
        }
        Relationships: []
      }
      cars: {
        Row: {
          category: Database["public"]["Enums"]["car_category"]
          created_at: string
          description: string | null
          features: string[] | null
          id: string
          images: string[] | null
          is_active: boolean | null
          is_featured: boolean | null
          main_image: string
          name: string
          price_per_day: number
          specifications: string[] | null
          updated_at: string
        }
        Insert: {
          category: Database["public"]["Enums"]["car_category"]
          created_at?: string
          description?: string | null
          features?: string[] | null
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          is_featured?: boolean | null
          main_image: string
          name: string
          price_per_day: number
          specifications?: string[] | null
          updated_at?: string
        }
        Update: {
          category?: Database["public"]["Enums"]["car_category"]
          created_at?: string
          description?: string | null
          features?: string[] | null
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          is_featured?: boolean | null
          main_image?: string
          name?: string
          price_per_day?: number
          specifications?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      jets: {
        Row: {
          category: Database["public"]["Enums"]["jet_category"]
          created_at: string
          description: string | null
          features: string[] | null
          id: string
          images: string[] | null
          is_active: boolean | null
          is_featured: boolean | null
          main_image: string
          name: string
          price_per_hour: number
          short_description: string | null
          specifications: string[] | null
          updated_at: string
        }
        Insert: {
          category: Database["public"]["Enums"]["jet_category"]
          created_at?: string
          description?: string | null
          features?: string[] | null
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          is_featured?: boolean | null
          main_image: string
          name: string
          price_per_hour: number
          short_description?: string | null
          specifications?: string[] | null
          updated_at?: string
        }
        Update: {
          category?: Database["public"]["Enums"]["jet_category"]
          created_at?: string
          description?: string | null
          features?: string[] | null
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          is_featured?: boolean | null
          main_image?: string
          name?: string
          price_per_hour?: number
          short_description?: string | null
          specifications?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      properties: {
        Row: {
          amenities: string[] | null
          category: Database["public"]["Enums"]["property_category"]
          created_at: string
          description: string | null
          features: string[] | null
          id: string
          images: string[] | null
          is_active: boolean | null
          is_featured: boolean | null
          location: string
          main_image: string
          name: string
          price_per_night: number
          updated_at: string
        }
        Insert: {
          amenities?: string[] | null
          category: Database["public"]["Enums"]["property_category"]
          created_at?: string
          description?: string | null
          features?: string[] | null
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          is_featured?: boolean | null
          location: string
          main_image: string
          name: string
          price_per_night: number
          updated_at?: string
        }
        Update: {
          amenities?: string[] | null
          category?: Database["public"]["Enums"]["property_category"]
          created_at?: string
          description?: string | null
          features?: string[] | null
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          is_featured?: boolean | null
          location?: string
          main_image?: string
          name?: string
          price_per_night?: number
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      artisan_specialty:
        | "electrician"
        | "plumber"
        | "painter"
        | "carpenter"
        | "hvac"
        | "cleaning"
        | "landscaping"
        | "security"
        | "handyman"
        | "appliance_repair"
      car_category:
        | "luxury_sedan"
        | "sports_car"
        | "luxury_suv"
        | "executive_sedan"
        | "supercar"
        | "grand_tourer"
        | "ultra_luxury"
        | "electric_luxury"
      jet_category:
        | "light_jet"
        | "super_mid_size"
        | "ultra_long_range"
        | "super_long_range"
      property_category:
        | "apartment"
        | "villa"
        | "cabin"
        | "loft"
        | "cottage"
        | "penthouse"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      artisan_specialty: [
        "electrician",
        "plumber",
        "painter",
        "carpenter",
        "hvac",
        "cleaning",
        "landscaping",
        "security",
        "handyman",
        "appliance_repair",
      ],
      car_category: [
        "luxury_sedan",
        "sports_car",
        "luxury_suv",
        "executive_sedan",
        "supercar",
        "grand_tourer",
        "ultra_luxury",
        "electric_luxury",
      ],
      jet_category: [
        "light_jet",
        "super_mid_size",
        "ultra_long_range",
        "super_long_range",
      ],
      property_category: [
        "apartment",
        "villa",
        "cabin",
        "loft",
        "cottage",
        "penthouse",
      ],
    },
  },
} as const
