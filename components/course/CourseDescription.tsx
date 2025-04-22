"use client"

// components/course/CourseDescription.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CourseDescriptionProps {
  description: string;
}

const CourseDescription: React.FC<CourseDescriptionProps> = ({ description }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Split description into paragraphs for better formatting
  const paragraphs = description.split('\n\n');
  // const shortDescription = paragraphs.slice(0, 2).join('\n\n');
  const hasMoreContent = paragraphs.length > 2;

  return (
    <Card className="rounded-2xl overflow-hidden shadow-md border-0 bg-white dark:bg-gray-800">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">About This Course</h2>
        <div className="prose dark:prose-invert max-w-none">
          {expanded ? (
            <>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </>
          ) : (
            <>
              {paragraphs.slice(0, 2).map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
              {hasMoreContent && (
                <div className="relative">
                  <div className={!expanded ? "absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-gray-800 to-transparent" : ""}></div>
                </div>
              )}
            </>
          )}
        </div>
        
        {hasMoreContent && (
          <Button
            variant="ghost"
            className="flex items-center justify-center w-full mt-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                Show Less <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseDescription;