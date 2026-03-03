'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Initialize from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('smartlocker_user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error('Failed to parse stored user:', error)
        localStorage.removeItem('smartlocker_user')
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Mock API call - in production, call your actual API
      if (!email || !password) {
        throw new Error('Email and password are required')
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))

      // Create mock user
      const mockUser: User = {
        id: `user_${Date.now()}`,
        email,
        name: email.split('@')[0],
      }

      setUser(mockUser)
      localStorage.setItem('smartlocker_user', JSON.stringify(mockUser))
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true)
    try {
      if (!email || !password || !name) {
        throw new Error('All fields are required')
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))

      // Create mock user
      const mockUser: User = {
        id: `user_${Date.now()}`,
        email,
        name,
      }

      setUser(mockUser)
      localStorage.setItem('smartlocker_user', JSON.stringify(mockUser))
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('smartlocker_user')
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
