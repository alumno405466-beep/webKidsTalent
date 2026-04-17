export type LeadStage = 'new' | 'started' | 'submitted'

export type LeadProfile = {
  stage: LeadStage
  guardianName: string
  email: string
  phone: string
  kidName: string
  kidAge: number | null
  interests: string[]
  consent: boolean
  createdAt: string
  updatedAt: string
}

