// components/CourseMetadata.tsx

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CalendarIcon,
  BookOpenIcon,
  PlayCircleIcon,
  FileQuestionIcon,
  ClockIcon,
} from "lucide-react";

interface MetadataItem {
  icon: string;
  label: string;
  value: string;
}

interface CourseMetadataProps {
  metadata: MetadataItem[];
}

const iconComponents: { [key: string]: React.ReactNode } = {
  CalendarIcon: <CalendarIcon className="h-5 w-5" />,
  BookOpenIcon: <BookOpenIcon className="h-5 w-5" />,
  PlayCircleIcon: <PlayCircleIcon className="h-5 w-5" />,
  FileQuestionIcon: <FileQuestionIcon className="h-5 w-5" />,
  ClockIcon: <ClockIcon className="h-5 w-5" />,
};

const CourseMetadata: React.FC<CourseMetadataProps> = ({ metadata }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
    {metadata.map((item, index) => (
      <Card
        key={index}
        className={`rounded-3xl shadow-md ${
          index < 2 ? "bg-black/20" : "bg-gray-300/20"
        }`}
      >
        <CardContent className="flex items-center p-4">
          <div className="mr-2">{iconComponents[item.icon]}</div>
          <div className="text-center flex-1">
            <p className="font-semibold text-lg">{item.label}</p>
            {item.value && <p>{item.value}</p>}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default CourseMetadata;
