"use client"

import type { User } from "./models"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { users } from "./mock-data"

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (usernameOrEmail: string, password: string) => Promise<boolean>
  register: (userData: Partial<User>, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const API_URL = "https://serverjobhub2.onrender.com"

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("currentUser")
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
      } catch (error) {
        console.error("Failed to parse stored user:", error)
        localStorage.removeItem("currentUser")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (usernameOrEmail: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: usernameOrEmail, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Convert server user to our app user format
        const loggedInUser: User = {
          id: data.user.id.toString(),
          name: data.user.username,
          email: data.user.username, // We'll use username as email for now
          avatar: "/placeholder-user.jpg",
          userType: "jobseeker",
          location: {
            country: "O'zbekiston",
            region: "",
            city: "",
          },
          createdAt: new Date(),
          lastActive: new Date(),
          verificationStatus: "unverified",
          subscription: "free",
        };
        
        setUser(loggedInUser);
        localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  const register = async (userData: Partial<User>, password: string): Promise<boolean> => {
    setIsLoading(true)
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userData.name,
          email: userData.email,
          password,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        // After successful registration, we can login the user
        return await login(userData.email || '', password);
      } else {
        console.error("Registration failed:", data.message);
        return false;
      }
    } catch (error) {
      console.error("Registration error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("currentUser")
  }

  return <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
