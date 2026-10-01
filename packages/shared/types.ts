export type UserRole = 'admin' | 'coach' | 'client'

export type Tier = 'monthly' | 'challenge' | '1to1' | 'vip'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  created_at: string
  updated_at: string
}

export interface Client {
  id: string
  user_id: string
  coach_id?: string
  tier: Tier
  status: 'active' | 'inactive' | 'paused'
  joined_at: string
  created_at: string
  updated_at: string
}

export interface Program {
  id: string
  coach_id: string
  name: string
  description: string
  tier: Tier
  weeks: number
  created_at: string
  updated_at: string
}

export interface CheckIn {
  id: string
  client_id: string
  coach_id: string
  type: string
  data: Record<string, any>
  notes?: string
  created_at: string
  updated_at: string
}

export interface Contract {
  id: string
  client_id: string
  coach_id: string
  tier: Tier
  content: string
  signed_at?: string
  signature_metadata?: Record<string, any>
  created_at: string
  updated_at: string
}

export interface Video {
  id: string
  coach_id: string
  title: string
  description?: string
  url: string
  duration?: number
  tier: Tier[]
  created_at: string
  updated_at: string
}

export interface CoachResponse {
  id: string
  coach_id: string
  client_id: string
  checkin_id: string
  content: string
  is_ai_drafted: boolean
  edited_by_coach_at?: string
  sent_at?: string
  created_at: string
  updated_at: string
}

export interface OnboardingFlow {
  id: string
  coach_id: string
  tier: Tier
  name: string
  steps: OnboardingStep[]
  created_at: string
  updated_at: string
}

export interface OnboardingStep {
  id: string
  type: 'form' | 'contract' | 'payment' | 'welcome_message'
  content: Record<string, any>
  order: number
}
