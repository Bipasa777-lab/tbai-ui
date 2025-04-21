"use client"

import { useEffect, useState } from "react"
import CourseCard from "@/components/CourseCard"
import RecentPlayCardProps from "@/components/RecentPlayCard"
import axios from "axios"

interface Course {
  course_id: string
  dept_id: string[]
  course_name: string
  course_duration_hrs: number
  level: string
  rating: number
  isPaid: boolean
  user_id: string
  course_desc: string
  course_banner: string[]
  syllabus: string[]
  start_date: string
  category_id: string
  enrollment_deadline: string
  max_students: number
}

export default function Page() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const response = await axios.get("/v1/courses/view-courses", {
  //         params: {
  //           dept: "TIU_BTECH-CSE",
  //           batch: 0,
  //         },
  //       })
  //       setCourses(response.data)
  //     } catch (err: any) {
  //       setError("Failed to load courses.")
  //       console.error(err)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   fetchCourses()
  // }, [])

  return (
    <main className="flex flex-col gap-4 overflow-y-auto p-4">
      <RecentPlayCardProps
        thumbnail="https://dummyimage.com/600x400/000/fff"
        title="Mastering TypeScript for Web Development"
        ratings={4.6}
        isPaid={false}
        difficulty="Medium"
        description="Learn TypeScript from the ground up and apply it to real-world web development projects. Perfect for developers familiar with JavaScript."
      />

      <div className="flex justify-end">
        <button className="text-blue-600 hover:underline font-medium text-md cursor-pointer">
          View All
        </button>
      </div>

      {loading ? (
        <div className="text-center text-gray-600">Loading courses...</div>
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 cursor-pointer">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              thumbnail={course.course_banner[0] || "https://dummyimage.com/600x400/ccc/000"}
              title={course.course_name}
              ratings={course.rating}
              isPaid={course.isPaid}
              difficulty={course.level}
              description={course.course_desc}
            />
          ))}
        </div>
      )}
    </main>
  )
}
