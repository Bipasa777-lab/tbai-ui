// hooks/useRouteLoader.ts
"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import { useLoader } from "@/context/LoaderContext"

export const useRouteLoader = () => {
  const pathname = usePathname()
  const previousPath = useRef<string | null>(null)
  const { setLoading } = useLoader()

  useEffect(() => {
    if (previousPath.current && previousPath.current !== pathname) {
      setLoading(true)
      const timeout = setTimeout(() => setLoading(false), 700)
      return () => clearTimeout(timeout)
    }
    previousPath.current = pathname
  }, [pathname, setLoading])
}
