"use client"

import type {
  Job,
  Resume,
  Project,
  Company,
  Application,
  Proposal,
  Conversation,
  Message,
  Notification,
} from "./models"
import { createContext, useContext, useState, type ReactNode } from "react"
import {
  jobs as initialJobs,
  resumes as initialResumes,
  projects as initialProjects,
  companies as initialCompanies,
  applications as initialApplications,
  proposals as initialProposals,
  conversations as initialConversations,
  messages as initialMessages,
  notifications as initialNotifications,
} from "./mock-data"
import { useAuth } from "./auth-context"

interface DataContextType {
  jobs: Job[]
  resumes: Resume[]
  projects: Project[]
  companies: Company[]
  applications: Application[]
  proposals: Proposal[]
  conversations: Conversation[]
  messages: Message[]
  notifications: Notification[]
  addJob: (job: Omit<Job, "id" | "createdAt" | "updatedAt" | "views" | "applications" | "verificationStatus">) => void
  addResume: (
    resume: Omit<Resume, "id" | "createdAt" | "updatedAt" | "views" | "downloads" | "status">,
  ) => Promise<Resume>
  addProject: (project: Omit<Project, "id" | "createdAt" | "updatedAt" | "proposals" | "featured">) => Promise<Project>
  applyToJob: (application: Omit<Application, "id" | "appliedAt" | "updatedAt">) => Promise<Application>
  submitProposal: (proposal: Omit<Proposal, "id" | "submittedAt" | "updatedAt">) => Promise<Proposal>
  sendMessage: (message: Omit<Message, "id" | "createdAt" | "updatedAt" | "readBy">) => Promise<Message>
  markNotificationAsRead: (notificationId: string) => void
  markAllNotificationsAsRead: () => void
  getJobById: (id: string) => Job | undefined
  getResumeById: (id: string) => Resume | undefined
  getProjectById: (id: string) => Project | undefined
  getCompanyById: (id: string) => Company | undefined
  getUserApplications: () => Application[]
  getUserProposals: () => Proposal[]
  getUserConversations: () => Conversation[]
  getConversationMessages: (conversationId: string) => Message[]
  getUserNotifications: () => Notification[]
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export function DataProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [jobs, setJobs] = useState<Job[]>(initialJobs)
  const [resumes, setResumes] = useState<Resume[]>(initialResumes)
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [companies, setCompanies] = useState<Company[]>(initialCompanies)
  const [applications, setApplications] = useState<Application[]>(initialApplications)
  const [proposals, setProposals] = useState<Proposal[]>(initialProposals)
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications)

  // Add a new job
  const addJob = (
    jobData: Omit<Job, "id" | "createdAt" | "updatedAt" | "views" | "applications" | "verificationStatus">,
  ) => {
    const newJob: Job = {
      ...jobData,
      id: `${jobs.length + 1}`,
      createdAt: new Date(),
      updatedAt: new Date(),
      views: 0,
      applications: 0,
      verificationStatus: "pending",
    }
    setJobs([...jobs, newJob])
    return newJob
  }

  // Add a new resume
  const addResume = async (
    resumeData: Omit<Resume, "id" | "createdAt" | "updatedAt" | "views" | "downloads" | "status">,
  ): Promise<Resume> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newResume: Resume = {
          ...resumeData,
          id: `${resumes.length + 1}`,
          createdAt: new Date(),
          updatedAt: new Date(),
          views: 0,
          downloads: 0,
          status: "active",
        }
        setResumes([...resumes, newResume])
        resolve(newResume)
      }, 1000)
    })
  }

  // Add a new project
  const addProject = async (
    projectData: Omit<Project, "id" | "createdAt" | "updatedAt" | "proposals" | "featured">,
  ): Promise<Project> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newProject: Project = {
          ...projectData,
          id: `${projects.length + 1}`,
          createdAt: new Date(),
          updatedAt: new Date(),
          proposals: 0,
          featured: false,
        }
        setProjects([...projects, newProject])
        resolve(newProject)
      }, 1000)
    })
  }

  // Apply to a job
  const applyToJob = async (
    applicationData: Omit<Application, "id" | "appliedAt" | "updatedAt">,
  ): Promise<Application> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newApplication: Application = {
          ...applicationData,
          id: `${applications.length + 1}`,
          appliedAt: new Date(),
          updatedAt: new Date(),
        }
        setApplications([...applications, newApplication])

        // Update job applications count
        setJobs(
          jobs.map((job) => {
            if (job.id === applicationData.jobId) {
              return { ...job, applications: job.applications + 1 }
            }
            return job
          }),
        )

        resolve(newApplication)
      }, 1000)
    })
  }

  // Submit a proposal for a project
  const submitProposal = async (
    proposalData: Omit<Proposal, "id" | "submittedAt" | "updatedAt">,
  ): Promise<Proposal> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newProposal: Proposal = {
          ...proposalData,
          id: `${proposals.length + 1}`,
          submittedAt: new Date(),
          updatedAt: new Date(),
        }
        setProposals([...proposals, newProposal])

        // Update project proposals count
        setProjects(
          projects.map((project) => {
            if (project.id === proposalData.projectId) {
              return { ...project, proposals: project.proposals + 1 }
            }
            return project
          }),
        )

        resolve(newProposal)
      }, 1000)
    })
  }

  // Send a message
  const sendMessage = async (
    messageData: Omit<Message, "id" | "createdAt" | "updatedAt" | "readBy">,
  ): Promise<Message> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newMessage: Message = {
          ...messageData,
          id: `${messages.length + 1}`,
          readBy: [messageData.senderId],
          createdAt: new Date(),
          updatedAt: new Date(),
        }
        setMessages([...messages, newMessage])

        // Update conversation lastMessageAt
        setConversations(
          conversations.map((conversation) => {
            if (conversation.id === messageData.conversationId) {
              return {
                ...conversation,
                lastMessageId: newMessage.id,
                lastMessageAt: newMessage.createdAt,
                updatedAt: newMessage.createdAt,
              }
            }
            return conversation
          }),
        )

        resolve(newMessage)
      }, 500)
    })
  }

  // Mark notification as read
  const markNotificationAsRead = (notificationId: string) => {
    setNotifications(
      notifications.map((notification) => {
        if (notification.id === notificationId) {
          return { ...notification, read: true }
        }
        return notification
      }),
    )
  }

  // Mark all notifications as read
  const markAllNotificationsAsRead = () => {
    setNotifications(
      notifications.map((notification) => {
        if (notification.userId === user?.id) {
          return { ...notification, read: true }
        }
        return notification
      }),
    )
  }

  // Get job by ID
  const getJobById = (id: string) => {
    return jobs.find((job) => job.id === id)
  }

  // Get resume by ID
  const getResumeById = (id: string) => {
    return resumes.find((resume) => resume.id === id)
  }

  // Get project by ID
  const getProjectById = (id: string) => {
    return projects.find((project) => project.id === id)
  }

  // Get company by ID
  const getCompanyById = (id: string) => {
    return companies.find((company) => company.id === id)
  }

  // Get user applications
  const getUserApplications = () => {
    if (!user) return []
    return applications.filter((application) => application.userId === user.id)
  }

  // Get user proposals
  const getUserProposals = () => {
    if (!user) return []
    return proposals.filter((proposal) => proposal.freelancerId === user.id)
  }

  // Get user conversations
  const getUserConversations = () => {
    if (!user) return []
    return conversations.filter((conversation) => conversation.participants.includes(user.id))
  }

  // Get conversation messages
  const getConversationMessages = (conversationId: string) => {
    return messages.filter((message) => message.conversationId === conversationId)
  }

  // Get user notifications
  const getUserNotifications = () => {
    if (!user) return []
    return notifications.filter((notification) => notification.userId === user.id)
  }

  return (
    <DataContext.Provider
      value={{
        jobs,
        resumes,
        projects,
        companies,
        applications,
        proposals,
        conversations,
        messages,
        notifications,
        addJob,
        addResume,
        addProject,
        applyToJob,
        submitProposal,
        sendMessage,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        getJobById,
        getResumeById,
        getProjectById,
        getCompanyById,
        getUserApplications,
        getUserProposals,
        getUserConversations,
        getConversationMessages,
        getUserNotifications,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider")
  }
  return context
}
