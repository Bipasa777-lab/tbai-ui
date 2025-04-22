// components/course/CourseMetadata.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, BookOpen, PlayCircle, FileQuestion, Clock, Users, Star, Award } from "lucide-react";

interface MetadataItem {
  icon: string;
  label: string;
  value: string;
}

interface CourseMetadataProps {
  metadata: MetadataItem[];
}

const iconComponents: { [key: string]: React.ReactNode } = {
  CalendarIcon: <Calendar className="h-5 w-5" />,
  BookOpenIcon: <BookOpen className="h-5 w-5" />,
  PlayCircleIcon: <PlayCircle className="h-5 w-5" />,
  FileQuestionIcon: <FileQuestion className="h-5 w-5" />,
  ClockIcon: <Clock className="h-5 w-5" />,
  UsersIcon: <Users className="h-5 w-5" />,
  StarIcon: <Star className="h-5 w-5" />,
  AwardIcon: <Award className="h-5 w-5" />,
};

const CourseMetadata: React.FC<CourseMetadataProps> = ({ metadata }) => (
  <Card className="rounded-2xl overflow-hidden shadow-md mt-4 border-0 bg-white dark:bg-gray-800">
    <CardContent className="p-4">
      <h3 className="font-semibold text-lg mb-3">Course Details</h3>
      <div className="grid grid-cols-1 gap-4">
        {metadata.map((item, index) => (
          <div 
            key={index} 
            className={`flex items-center p-3 rounded-xl ${
              index % 2 === 0 
                ? "bg-red-50 text-red-700 dark:bg-red-900/10 dark:text-red-400" 
                : "bg-blue-50 text-blue-700 dark:bg-blue-900/10 dark:text-blue-400"
            }`}
          >
            <div className="mr-3 p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 shadow-sm">
              {iconComponents[item.icon]}
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
              <p className="font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default CourseMetadata;