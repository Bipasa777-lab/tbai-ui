import CourseCard from "@/components/CourseCard";
import { courseData } from "@/constants";


export default function EnrolledCoursePage() {
    return (
        <main className="flex flex-col gap-4  overflow-y-auto pt-6">
            <div className="flex justify-end">
                <button className="text-blue-600 hover:underline font-medium text-md cursor-pointer">
                    View All
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 cursor-pointer">
                {courseData.map((course, index) => (
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
        </main>

    )

}