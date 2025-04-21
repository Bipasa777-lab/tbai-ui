// components/PageLoader.tsx
"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import clsx from "clsx"

export function PageLoader() {
  const pathname = usePathname()
  const previousPath = useRef<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (previousPath.current && previousPath.current !== pathname) {
      setLoading(true)
      const timeout = setTimeout(() => {
        setLoading(false)
        previousPath.current = pathname
      }, 800) // Simulated loading duration

      return () => clearTimeout(timeout)
    }

    previousPath.current = pathname
  }, [pathname])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-white/60 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className={clsx(
                  "w-4 h-4 rounded-full",
                  i % 2 === 0 ? "bg-red-500" : "bg-gray-300"
                )}
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    repeat: Infinity,
                    duration: 0.6,
                    delay: i * 0.1,
                  },
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
