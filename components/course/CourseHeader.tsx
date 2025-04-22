// components/course/CourseHeader.tsx
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CourseHeaderProps {
  title: string;
  subtitle?: string;
  instructor?: {
    name: string;
    avatar?: string;
  };
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ title, subtitle, instructor }) => (
  <div className="mb-8">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Inter',system-ui] tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">
            {subtitle}
          </p>
        )}
      </div>
      <div className="flex items-center gap-2">
        {/* <Badge variant="outline" className="px-3 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800 rounded-full">
          Bestseller
        </Badge> */}
        <Badge variant="outline" className="px-3 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800 rounded-full">
          Updated 2025
        </Badge>
      </div>
    </div>
    
    {instructor && (
      <div className="flex items-center mt-4 gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={instructor.avatar || '/placeholder-avatar.png'} alt={instructor.name} />
          <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="text-sm font-medium">{instructor.name}</div>
      </div>
    )}
  </div>
);

export default CourseHeader;