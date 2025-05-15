// Asosiy modellar

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  avatar?: string
  userType: "jobseeker" | "employer" | "freelancer" | "admin"
  location?: {
    country: string
    region: string
    city: string
  }
  createdAt: Date
  lastActive: Date
  skills?: Skill[]
  languages?: Language[]
  verificationStatus: "unverified" | "email_verified" | "phone_verified" | "id_verified" | "fully_verified"
  rating?: number
  reviews?: Review[]
  savedJobs?: string[]
  savedCandidates?: string[]
  subscription?: "free" | "basic" | "premium" | "enterprise"
  subscriptionExpiresAt?: Date
}

export interface Resume {
  id: string
  userId: string
  title: string
  summary: string
  experience: WorkExperience[]
  education: Education[]
  skills: Skill[]
  languages: Language[]
  certificates: Certificate[]
  projects: Project[]
  desiredSalary?: {
    amount: number
    currency: string
    period: "hour" | "month" | "year"
  }
  desiredJobType: ("full-time" | "part-time" | "contract" | "remote" | "freelance")[]
  desiredLocation?: string[]
  visibility: "public" | "private" | "premium_only"
  createdAt: Date
  updatedAt: Date
  views: number
  downloads: number
  status: "active" | "inactive" | "featured"
  attachments?: Attachment[]
}

export interface Job {
  id: string
  employerId: string
  companyId?: string
  title: string
  description: string
  requirements: string
  responsibilities: string
  benefits?: string
  category: string[]
  jobType: ("full-time" | "part-time" | "contract" | "remote" | "freelance")[]
  location: {
    country: string
    region: string
    city: string
    remote: boolean
  }
  salary?: {
    min: number
    max: number
    currency: string
    period: "hour" | "month" | "year"
    negotiable: boolean
  }
  experience: {
    min: number
    max?: number
  }
  education?: "none" | "secondary" | "bachelor" | "master" | "phd"
  skills: Skill[]
  languages?: Language[]
  applicationDeadline?: Date
  createdAt: Date
  updatedAt: Date
  status: "active" | "inactive" | "filled" | "expired" | "featured"
  views: number
  applications: number
  urgentHiring: boolean
  verificationStatus: "pending" | "verified" | "rejected"
  attachments?: Attachment[]
}

export interface Project {
  id: string
  clientId: string
  title: string
  description: string
  category: string[]
  budget?: {
    min: number
    max: number
    currency: string
    type: "fixed" | "hourly"
  }
  deadline?: Date
  skills: Skill[]
  attachments?: Attachment[]
  status: "open" | "in_progress" | "completed" | "cancelled"
  visibility: "public" | "private" | "invite_only"
  createdAt: Date
  updatedAt: Date
  proposals: number
  featured: boolean
}

export interface Company {
  id: string
  name: string
  description: string
  logo?: string
  website?: string
  industry: string[]
  size: "1-10" | "11-50" | "51-200" | "201-500" | "501-1000" | "1000+"
  founded?: number
  location: {
    country: string
    region: string
    city: string
    address?: string
  }
  socialMedia?: {
    linkedin?: string
    twitter?: string
    facebook?: string
    instagram?: string
  }
  verificationStatus: "unverified" | "verified" | "premium"
  employees?: User[]
  jobs?: Job[]
  createdAt: Date
  updatedAt: Date
  views: number
  rating?: number
  reviews?: Review[]
}

// Yordamchi modellar

export interface WorkExperience {
  company: string
  position: string
  startDate: Date
  endDate?: Date
  current: boolean
  description: string
  location?: string
}

export interface Education {
  institution: string
  degree: string
  fieldOfStudy: string
  startDate: Date
  endDate?: Date
  current: boolean
  description?: string
}

export interface Skill {
  name: string
  level?: "beginner" | "intermediate" | "advanced" | "expert"
  yearsOfExperience?: number
}

export interface Language {
  name: string
  level: "basic" | "conversational" | "fluent" | "native"
}

export interface Certificate {
  name: string
  issuer: string
  issueDate: Date
  expirationDate?: Date
  credentialId?: string
  credentialUrl?: string
}

export interface Review {
  id: string
  authorId: string
  rating: number
  comment: string
  createdAt: Date
}

export interface Attachment {
  id: string
  name: string
  type: string
  url: string
  size: number
  uploadedAt: Date
}

export interface Application {
  id: string
  jobId: string
  userId: string
  resumeId?: string
  coverLetter?: string
  status: "pending" | "viewed" | "shortlisted" | "rejected" | "interview" | "offer" | "hired"
  appliedAt: Date
  updatedAt: Date
  attachments?: Attachment[]
  expectedSalary?: {
    amount: number
    currency: string
    negotiable: boolean
  }
}

export interface Proposal {
  id: string
  projectId: string
  freelancerId: string
  coverLetter: string
  bid: {
    amount: number
    currency: string
    type: "fixed" | "hourly"
  }
  estimatedDuration?: {
    value: number
    unit: "hour" | "day" | "week" | "month"
  }
  status: "pending" | "viewed" | "shortlisted" | "rejected" | "accepted" | "completed"
  submittedAt: Date
  updatedAt: Date
  attachments?: Attachment[]
}

export interface Contract {
  id: string
  projectId?: string
  jobId?: string
  clientId: string
  freelancerId: string
  title: string
  description?: string
  terms: string
  payment: {
    amount: number
    currency: string
    type: "fixed" | "hourly"
    milestones?: Milestone[]
  }
  startDate: Date
  endDate?: Date
  status: "draft" | "pending" | "active" | "completed" | "cancelled" | "disputed"
  createdAt: Date
  updatedAt: Date
  attachments?: Attachment[]
}

export interface Milestone {
  id: string
  contractId: string
  title: string
  description?: string
  amount: number
  dueDate?: Date
  status: "pending" | "in_progress" | "submitted" | "approved" | "rejected" | "paid"
  createdAt: Date
  updatedAt: Date
}

export interface Message {
  id: string
  conversationId: string
  senderId: string
  content: string
  attachments?: Attachment[]
  readBy: string[]
  createdAt: Date
  updatedAt: Date
}

export interface Conversation {
  id: string
  participants: string[]
  lastMessageId?: string
  lastMessageAt?: Date
  title?: string
  type: "direct" | "group" | "job" | "project"
  relatedId?: string // jobId, projectId, etc.
  createdAt: Date
  updatedAt: Date
}

export interface Notification {
  id: string
  userId: string
  type: string
  title: string
  message: string
  read: boolean
  actionUrl?: string
  createdAt: Date
}

export interface Transaction {
  id: string
  userId: string
  type: "payment" | "withdrawal" | "refund" | "subscription" | "fee"
  amount: number
  currency: string
  status: "pending" | "completed" | "failed" | "cancelled"
  description: string
  relatedId?: string // contractId, milestoneId, etc.
  createdAt: Date
  updatedAt: Date
}

export interface Subscription {
  id: string
  userId: string
  plan: "basic" | "premium" | "enterprise"
  status: "active" | "cancelled" | "expired"
  startDate: Date
  endDate: Date
  autoRenew: boolean
  price: number
  currency: string
  features: string[]
  createdAt: Date
  updatedAt: Date
}
