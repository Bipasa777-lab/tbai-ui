"use client"


import { ArrowRight, BookOpen, FileText, UserIcon, Play, ChevronRight, Clock, CheckCircle } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { contentItems, quizItems, videoItems } from "./data";



export const ModuleSectionPage = () => {
  const [activeVideo, setActiveVideo] = useState(videoItems[2]);
  const progress = 47;

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-6 md:py-10 max-w-screen-xl mx-auto bg-white">
      {/* Module Title with Badge */}
      <header className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
            <span className="text-red-500">Module 1:</span> Mastering Full-Stack Web Development
          </h1>
          <Badge className="bg-red-500/20 text-red-700 hover:bg-red-500/30 px-3 py-1 text-sm self-start">
            In Progress • 47% Complete
          </Badge>
        </div>
        <p className="text-gray-600 text-sm md:text-base">
          From Frontend Design to Backend Integration with Real-World Projects Using JavaScript, React, Node.js, and MongoDB
        </p>
      </header>

      {/* Tabs */}
      <Tabs defaultValue="videos" className="w-full">
        <TabsList className="flex flex-wrap gap-3 mb-8 bg-transparent">
          {[
            { id: "videos", icon: <Play className="w-4 h-4 mr-2" /> },
            { id: "quizzes", icon: <BookOpen className="w-4 h-4 mr-2" /> },
            { id: "content", icon: <FileText className="w-4 h-4 mr-2" /> }
          ].map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="flex items-center flex-1 cursor-pointer min-w-[120px] px-4 py-3 rounded-full text-black font-medium text-sm md:text-base data-[state=active]:bg-red-500/30 data-[state=active]:text-red-700 data-[state=inactive]:bg-gray-100 shadow-sm transition-all hover:shadow-md"
            >
              {tab.icon}
              {tab.id.charAt(0).toUpperCase() + tab.id.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* ------------------ Videos Tab ------------------ */}
        <TabsContent value="videos" className="space-y-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Video Player */}
            <div className="w-full lg:w-2/3 space-y-4">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-900 group">
                <img
                  src={activeVideo.image}
                  alt="Course video thumbnail"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-red-500/90 rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:bg-red-600 hover:scale-105 transition-all">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                
                {/* Video title overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/0 p-4 text-white">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{activeVideo.title}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{activeVideo.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <UserIcon className="w-4 h-4" />
                      <span>{activeVideo.author}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="space-y-2 px-1">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Course Progress</span>
                  <span className="font-medium">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2 bg-gray-200" indicatorClassName="bg-red-500" />
              </div>
              
              {/* Summary */}
              <section className="mt-6 p-5 bg-gray-50 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold text-black mb-3">Summary of Content</h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  This module covers the fundamentals of full-stack web development, from creating responsive UIs with React to building robust backends with Node.js and MongoDB. You'll learn how to structure projects, implement authentication, handle data flow between frontend and backend, and deploy your applications. The course includes hands-on projects to reinforce your understanding of key concepts.
                </p>
              </section>
            </div>

            {/* Video List */}
            <div className="w-full lg:w-1/3 space-y-3 max-h-[600px] overflow-y-auto pr-1 pl-1 pb-1">
              <h3 className="font-medium text-gray-700 px-1">Module Videos</h3>
              {videoItems.map((item) => (
                <Card
                  key={item.id}
                  className={cn(
                    "flex bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer",
                    item.id === activeVideo.id && "ring-2 ring-red-500 bg-red-50/50"
                  )}
                  onClick={() => setActiveVideo(item)}
                >
                  <CardContent className="flex p-0 w-full">
                    <div className="relative w-1/3">
                      <img
                        src={item.image}
                        alt="Thumbnail"
                        className="w-full h-full object-cover"
                      />
                      {item.completed && (
                        <div className="absolute top-0 right-0 m-1 bg-green-500 rounded-full p-1">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      )}
                      {item.current && (
                        <div className="absolute top-0 right-0 m-1 bg-red-500 rounded-full p-1">
                          <Play className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                        {item.duration}
                      </div>
                    </div>
                    <div className="p-3 flex flex-col justify-between flex-1">
                      <div>
                        <h4 className="font-medium text-sm mb-1 line-clamp-1">{item.title}</h4>
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 mt-2">
                        <UserIcon className="w-3 h-3 text-gray-500" />
                        <span className="text-xs text-gray-600">
                          {item.author}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* ------------------ Quizzes Tab ------------------ */}
        <TabsContent value="quizzes">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold mb-3 text-black">Quiz Instructions</h2>
              <p className="text-gray-700 mb-4">
                You'll need to complete each quiz after finishing the videos to test your understanding and unlock the next section.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-md">
                <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
                  <li>Each quiz has multiple-choice questions to test your understanding</li>
                  <li>You need 70% to pass and unlock the next section</li>
                  <li>Time limits vary by quiz complexity</li>
                  <li>You can retake quizzes to improve your score</li>
                </ul>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {quizItems.map((quiz) => (
                <div
                  key={quiz.id}
                  className={cn(
                    "flex flex-col sm:flex-row sm:items-center justify-between p-5 hover:bg-gray-50 transition-colors",
                    quiz.locked && "opacity-60"
                  )}
                >
                  <div className="flex items-start sm:items-center gap-4 mb-3 sm:mb-0">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                      quiz.completed ? "bg-green-100 text-green-600" : 
                      quiz.locked ? "bg-gray-100 text-gray-400" : "bg-blue-100 text-blue-600"
                    )}>
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black text-base">{quiz.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                          <span>{quiz.questions} questions</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{quiz.timeLimit} min</span>
                        </span>
                        {quiz.completed && (
                          <span className="text-green-600 font-medium">
                            Score: {quiz.score}%
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <a
                    href={quiz.link}
                    className={cn(
                      "flex items-center justify-center gap-1 px-4 py-2 rounded-lg text-sm font-medium",
                      quiz.completed ? "bg-green-50 text-green-600 hover:bg-green-100" : 
                      quiz.locked ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                    )}
                    onClick={(e) => quiz.locked && e.preventDefault()}
                  >
                    {quiz.completed ? "Review" : quiz.locked ? "Locked" : "Start Quiz"}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* ------------------ Content Tab ------------------ */}
        <TabsContent value="content">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold mb-3 text-black">Learning Resources</h2>
              <p className="text-gray-700">
                Download these materials to enhance your learning experience. These resources complement the video content and provide additional examples and reference information.
              </p>
            </div>
            
            <div className="divide-y divide-gray-100">
              {contentItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-5 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-3 sm:mb-0">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                      item.type === "PDF" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"
                    )}>
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black text-base">{item.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-gray-600 mt-1">
                        <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-200">{item.type}</Badge>
                        <span>{item.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 text-sm font-medium text-blue-600">
                    <span>Download</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ModuleSectionPage;