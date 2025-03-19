
import { Database } from '@/integrations/supabase/types';

// Type definitions for our database tables
export type Profile = {
  id: string;
  username: string | null;
  avatar_url: string | null;
  display_name: string | null;
  bio: string | null;
  role: string;
  created_at: string;
  updated_at: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
  author_id: string;
  category: string | null;
  read_time: string | null;
};

// Helper types for Supabase queries
export type Tables = Database['public']['Tables'];
export type Enums = Database['public']['Enums'];
