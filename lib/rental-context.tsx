'use client'

import React, { createContext, useContext, useState } from 'react'
import type { LockerSize } from '@/lib/mock-data'

interface RentalData {
  selectedSize: LockerSize | null
  days: number
  startDate: Date | null
  totalPrice: number
}

interface RentalContextType {
  rentalData: RentalData
  setSelectedSize: (size: LockerSize) => void
  setDays: (days: number) => void
  setStartDate: (date: Date) => void
  resetRental: () => void
}

const RentalContext = createContext<RentalContextType | undefined>(undefined)

const initialData: RentalData = {
  selectedSize: null,
  days: 1,
  startDate: null,
  totalPrice: 0,
}

export function RentalProvider({ children }: { children: React.ReactNode }) {
  const [rentalData, setRentalData] = useState<RentalData>(initialData)

  const setSelectedSize = (size: LockerSize) => {
    setRentalData((prev) => ({
      ...prev,
      selectedSize: size,
      totalPrice: size.pricePerDay * prev.days,
    }))
  }

  const setDays = (days: number) => {
    setRentalData((prev) => ({
      ...prev,
      days,
      totalPrice: (prev.selectedSize?.pricePerDay || 0) * days,
    }))
  }

  const setStartDate = (date: Date) => {
    setRentalData((prev) => ({
      ...prev,
      startDate: date,
    }))
  }

  const resetRental = () => {
    setRentalData(initialData)
  }

  return (
    <RentalContext.Provider
      value={{
        rentalData,
        setSelectedSize,
        setDays,
        setStartDate,
        resetRental,
      }}
    >
      {children}
    </RentalContext.Provider>
  )
}

export function useRental() {
  const context = useContext(RentalContext)
  if (context === undefined) {
    throw new Error('useRental must be used within a RentalProvider')
  }
  return context
}
