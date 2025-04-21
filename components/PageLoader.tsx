// components/PageLoader.tsx
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useLoader } from "@/context/LoaderContext"
import clsx from "clsx"

export function PageLoader() {
  const { isLoading } = useLoader()

  return (
    <AnimatePresence>
      {isLoading && (
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
