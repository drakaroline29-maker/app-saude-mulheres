import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types para o banco de dados
export type Profile = {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  is_pregnant: boolean
  due_date?: string
  has_pcos: boolean
  is_postpartum: boolean
  postpartum_date?: string
  subscription_tier: 'free' | 'premium'
  created_at: string
  updated_at: string
}

export type SymptomEntry = {
  id: string
  user_id: string
  date: string
  symptom_type: string
  severity: number
  notes?: string
  tags: string[]
  created_at: string
}

export type PregnancyMilestone = {
  id: string
  user_id: string
  week: number
  title: string
  description: string
  completed: boolean
  created_at: string
}

export type PCOSTracking = {
  id: string
  user_id: string
  date: string
  cycle_day?: number
  weight?: number
  mood: string
  symptoms: string[]
  notes?: string
  created_at: string
}

export type CommunityPost = {
  id: string
  user_id: string
  author_name: string
  title: string
  content: string
  category: string
  likes: number
  comments_count: number
  created_at: string
}

export type AIConversation = {
  id: string
  user_id: string
  messages: { role: 'user' | 'assistant', content: string }[]
  created_at: string
}
