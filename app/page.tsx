import CourseCard from "@/components/CourseCard"
import RecentPlayCardProps from "@/components/RecentPlayCard"
import {courseData} from "@/constants"

export default function Page() {
  return (
    <main className="flex flex-col gap-4  overflow-y-auto">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 cursor-pointer">
        {courseData.map((course, index) => (
          <CourseCard
            key={index}
            thumbnail={course.thumbnail}
            title={course.title}
            ratings={course.ratings}
            isPaid={course.isPaid}
            difficulty={course.difficulty}
            description={course.description}
          />
        ))}
      </div>
    </main>
  )
}
