"use client"

// components/course/ModuleList.tsx
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, FileQuestion, CheckCircle, Lock, Clock } from "lucide-react";

interface ModuleContent {
  title: string;
  type: "video" | "quiz";
  duration?: string;
  isCompleted?: boolean;
  isLocked?: boolean;
}

interface Module {
  number: number;
  title?: string;
  videos: number;
  quizzes: number;
  isCompleted?: boolean;
  contents?: ModuleContent[];
}

interface ModuleListProps {
  modules: Module[];
}

const ModuleList: React.FC<ModuleListProps> = ({ modules }) => {
  const [expandedModule, setExpandedModule] = useState<string | null>("module-0");
  
  // Sample module contents (normally this would come from your data)
  const sampleContents = (module: Module): ModuleContent[] => [
    {
      title: `Introduction to Module ${module.number}`,
      type: "video",
      duration: "12:34",
      isCompleted: module.number === 1,
      isLocked: module.number > 2
    },
    {
      title: `Lesson 1: Core Concepts`,
      type: "video",
      duration: "18:22",
      isCompleted: module.number === 1,
      isLocked: module.number > 2
    },
    {
      title: `Lesson 2: Practical Examples`,
      type: "video",
      duration: "22:15",
      isCompleted: module.number === 1 && Math.random() > 0.5,
      isLocked: module.number > 2
    },
    {
      title: `Module ${module.number} Quiz`,
      type: "quiz",
      duration: "15 mins",
      isCompleted: false,
      isLocked: module.number > 2
    }
  ];

  return (
    <Card className="rounded-2xl overflow-hidden shadow-md border-0 bg-white dark:bg-gray-800">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Course Content</h2>
        <div className="text-sm mb-4 flex flex-wrap items-center gap-2">
          <span>{modules.length} modules</span>
          <span>•</span>
          <span>{modules.reduce((acc, m) => acc + m.videos, 0)} videos</span>
          <span>•</span>
          <span>{modules.reduce((acc, m) => acc + m.quizzes, 0)} quizzes</span>
          <span>•</span>
          <span>Approx. 8 hours</span>
        </div>
        
        <Accordion
          type="single"
          collapsible
          value={expandedModule || undefined}
          onValueChange={(value) => setExpandedModule(value)}
          className="space-y-4 cursor-pointer"
        >
          {modules.map((module, idx) => {
            const contents = module.contents || sampleContents(module);
            const moduleId = `module-${idx}`;
            const isActive = moduleId === expandedModule;
            
            return (
              <AccordionItem 
                key={moduleId} 
                value={moduleId} 
                className={`rounded-xl border shadow-sm  ${
                  module.isCompleted 
                    ? "bg-green-50 border-green-100 dark:bg-green-900/10 dark:border-green-900/20" 
                    : isActive 
                      ? "bg-blue-50 border-blue-100 dark:bg-blue-900/10 dark:border-blue-900/20" 
                      : "bg-gray-50 border-gray-100 dark:bg-gray-800 dark:border-gray-700"
                }`}
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline cursor-pointer">
                  <div className="flex items-center w-full">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        module.isCompleted 
                          ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                          : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                      }`}>
                        {module.isCompleted ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <span className="text-sm font-semibold">{module.number}</span>
                        )}
                      </div>
                      <div className="text-left">
                        <span className="font-semibold text-base sm:text-lg">
                          {module.title || `Module ${module.number}`}
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:flex ml-auto mr-4 items-center space-x-4">
                      <div className="flex items-center">
                        <PlayCircle className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{module.videos} videos</span>
                      </div>
                      <div className="flex items-center">
                        <FileQuestion className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{module.quizzes} quizzes</span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-2 mt-2 ml-11">
                    {contents.map((content, contentIdx) => (
                      <div 
                        key={contentIdx}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          content.isCompleted 
                            ? "bg-green-100/50 dark:bg-green-900/10" 
                            : content.isLocked 
                              ? "bg-gray-100 dark:bg-gray-700/50" 
                              : "bg-white dark:bg-gray-800/70"
                        }`}
                      >
                        <div className="flex items-center">
                          {content.type === "video" ? (
                            <PlayCircle className={`h-5 w-5 mr-3 ${
                              content.isLocked 
                                ? "text-gray-400 dark:text-gray-500" 
                                : "text-blue-500 dark:text-blue-400"
                            }`} />
                          ) : (
                            <FileQuestion className={`h-5 w-5 mr-3 ${
                              content.isLocked 
                                ? "text-gray-400 dark:text-gray-500" 
                                : "text-purple-500 dark:text-purple-400"
                            }`} />
                          )}
                          <span className={`text-sm ${
                            content.isLocked 
                              ? "text-gray-400 dark:text-gray-500" 
                              : ""
                          }`}>
                            {content.title}
                          </span>
                          {content.isCompleted && (
                            <Badge variant="outline" className="ml-2 bg-green-100 text-green-600 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                              Completed
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center">
                          {content.duration && (
                            <div className="flex items-center mr-2 text-gray-500 dark:text-gray-400 text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              {content.duration}
                            </div>
                          )}
                          
                          {content.isLocked ? (
                            <Lock className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                          ) : content.isCompleted ? (
                            <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ModuleList;