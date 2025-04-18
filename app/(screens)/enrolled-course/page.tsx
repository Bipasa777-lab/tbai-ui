import CourseCard from "@/components/CourseCard";
import { courseData } from "@/constants";


export default function EnrolledCoursePage() {
    return (
        <main className="flex flex-col gap-4  overflow-y-auto">
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