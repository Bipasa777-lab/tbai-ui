import { masterclassData } from "@/constants";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Badge,
  BookIcon,
  CalendarIcon,
  DollarSignIcon,
  GraduationCapIcon,
  StarIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MasterClassPage() {
  return (
    <main className="flex flex-col gap-6 px-4 md:px-8 lg:px-16 py-6 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-end">
        <button className="text-blue-600 hover:underline font-medium text-md cursor-pointer">
          View All
        </button>
      </div>

      {/* Course Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
        {masterclassData.map((course, index) => (
          <Card key={index} className="overflow-hidden border-none">
            <div className="flex flex-col md:flex-row">
              <CardContent className="flex-1 p-6 space-y-4">
                <h1 className="text-2xl font-semibold">{course.title}</h1>

                <p className="text-sm text-gray-700">{course.description}</p>

                <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium text-[#a90f0f]">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" />
                    <span>{course.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookIcon className="h-5 w-5" />
                    <span>{course.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCapIcon className="h-5 w-5" />
                    <span>Dept: {course.department}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Button className="bg-[#0fff3b] cursor-pointer bg-opacity-50 text-black hover:bg-[#0fff3b] hover:bg-opacity-60 rounded-[30px] h-[44px] px-6 text-lg font-semibold">
                    Enroll now
                  </Button>

                  <div className="flex items-center gap-2 font-medium">
                    <Badge className="flex items-center gap-2 bg-transparent text-black border-none px-0">
                      <DollarSignIcon className="h-5 w-5" />
                      <span className="text-base">{course.isPaid ? "Paid" : "Free"}</span>
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 font-medium">
                    <Badge className="flex items-center gap-2 bg-transparent text-black border-none px-0">
                      <StarIcon className="h-6 w-6 text-yellow-500" />
                      <span className="text-lg">{course.rating}</span>
                    </Badge>
                  </div>
                </div>
              </CardContent>

              <div className="w-full md:w-[320px] h-[240px] md:h-auto">
                <img
                  className="w-full h-full object-cover"
                  alt={course.title}
                  src={course.thumbnail}
                />
              </div>
            </div>
          </Card>
        ))}
      {/* </div> */}
    </main>
  );
}
