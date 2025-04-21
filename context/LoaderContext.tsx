// context/LoaderContext.tsx
"use client"

import { createContext, useContext, useState } from "react"

type LoaderContextType = {
  isLoading: boolean
  setLoading: (loading: boolean) => void
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined)

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState(false)

  return (
    <LoaderContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  )
}

export const useLoader = (): LoaderContextType => {
  const context = useContext(LoaderContext)
  if (!context) throw new Error("useLoader must be used within LoaderProvider")
  return context
}
