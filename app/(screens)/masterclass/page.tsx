import { masterclassData } from "@/constants";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookIcon,
  CalendarIcon,
  DollarSignIcon,
  GraduationCapIcon,
  StarIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function MasterClassPage() {
  return (
    <main className="flex flex-col gap-8 px-4 md:px-8 lg:px-16 py-8 overflow-y-auto ">
      {/* Header */}
      <div className="flex justify-end">
        <button className="text-blue-600 hover:underline font-medium text-md cursor-pointer">
          View All
        </button>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 gap-8">
        {masterclassData.map((course, index) => (
          <Card
            key={index}
            className="overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-[320px] h-[240px] md:h-auto">
                <img
                  className="w-full h-full object-cover"
                  alt={course.title}
                  src={course.thumbnail || "/api/placeholder/640/360"}
                />
              </div>

              <CardContent className="flex-1 p-6 md:p-8 space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {course.title}
                </h2>

                <p className="text-sm md:text-base text-gray-700 line-clamp-3">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium text-gray-800">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-gray-600" />
                    <span>{course.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookIcon className="h-4 w-4 text-gray-600" />
                    <span>{course.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCapIcon className="h-4 w-4 text-gray-600" />
                    <span>Dept: {course.department}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Button className="bg-green-500 text-white hover:bg-green-600 rounded-full h-10 px-6 font-medium cursor-pointer">
                    Enroll now
                  </Button>

                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 px-3 py-1 border border-gray-200"
                  >
                    <DollarSignIcon className="h-4 w-4" />
                    <span>{course.isPaid ? "Paid" : "Free"}</span>
                  </Badge>

                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 px-3 py-1 border border-gray-200 bg-yellow-50"
                  >
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    <span>{course.rating}</span>
                  </Badge>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
