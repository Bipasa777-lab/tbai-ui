// app/test/page.tsx
"use client"

import { useLoader } from "@/context/LoaderContext"

export default function TestPage() {
  const { setLoading } = useLoader()

  const handleClick = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate 2s backend call
    setLoading(false)
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl mb-4">Test Loader with Backend</h1>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
      >
        Simulate API Call
      </button>
    </main>
  )
}
