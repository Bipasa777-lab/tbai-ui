// components/LayoutWrapper.tsx
"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { PageLoader } from "./PageLoader"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const previousPath = useRef<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (previousPath.current && previousPath.current !== pathname) {
      setLoading(true)
      const timeout = setTimeout(() => {
        setLoading(false)
        previousPath.current = pathname
      }, 800)

      return () => clearTimeout(timeout)
    }

    previousPath.current = pathname
  }, [pathname])

  return (
    <>
      {loading && <PageLoader />}
      {children}
    </>
  )
}
