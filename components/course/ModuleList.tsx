// components/ModuleList.tsx

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpenIcon, PlayCircleIcon, FileQuestionIcon } from "lucide-react";

interface Module {
  number: number;
  videos: number;
  quizzes: number;
}

interface ModuleListProps {
  modules: Module[];
}

const ModuleList: React.FC<ModuleListProps> = ({ modules }) => {
  return (
    <div className="space-y-4">
      {modules.map((module) => (
        <Card
          key={module.number}
          className="rounded-3xl bg-gray-300/30 shadow-md"
        >
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <BookOpenIcon className="h-6 w-6 mr-4" />
              <span className="text-xl font-semibold">Module {module.number}</span>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <PlayCircleIcon className="h-6 w-6 mr-2" />
                <span className="text-xl font-semibold">{module.videos} Videos</span>
              </div>

              <div className="flex items-center">
                <FileQuestionIcon className="h-6 w-6 mr-2" />
                <span className="text-xl font-semibold">{module.quizzes} Quizzes</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ModuleList;
