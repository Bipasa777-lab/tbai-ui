"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  PlayCircleIcon,
  StarIcon,
  TrendingUpIcon,
  AwardIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function QuizePage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [mounted, setMounted] = useState(false);

  // Handle hydration issues with date picker
  useEffect(() => {
    setMounted(true);
  }, []);

  const quizzes = [
    {
      id: 1,
      title: "The Brain Battle",
      level: "Level 1",
      image: "/books.png",
      bgColor: "bg-gradient-to-br from-red-50 to-red-200",
      borderColor: "border-red-300",
      iconBg: "bg-red-500",
      icon: <StarIcon className="w-5 h-5 text-white" />,
      description:
        "Test your knowledge across various subjects in this exciting challenge.",
    },
    {
      id: 2,
      title: "The Know-It-All Knockout",
      level: "Level 2",
      image: "/fire.png",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-200",
      borderColor: "border-blue-300",
      iconBg: "bg-blue-500",
      icon: <TrendingUpIcon className="w-5 h-5 text-white" />,
      description:
        "Race against time with rapid-fire questions to prove your expertise.",
    },
    {
      id: 3,
      title: "Rapid Fire Recall",
      level: "Level 3",
      image: "/hot-air-baloon.png",
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-200",
      borderColor: "border-yellow-300",
      iconBg: "bg-yellow-500",
      icon: <AwardIcon className="w-5 h-5 text-white" />,
      description:
        "Challenge your memory in this fast-paced knowledge recall game.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className=" min-h-screen">
      <main className="max-w-7xl mx-auto flex flex-col gap-8 px-4 py-8 md:px-8 lg:px-16">
        {/* Problem of the Day */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100"
        >
          <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="bg-indigo-500 rounded-full p-2 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 2a8 8 0 0 0-8 8v12l8-4 8 4V10a8 8 0 0 0-8-8z"></path>
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold">
                  Problem of the Day
                </h2>
              </div>
              <p className="text-gray-700 mb-4 md:text-lg">
                Challenge your brain every day with a new problem designed to
                test your critical thinking.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Complete today&apos;s challenge to maintain your daily streak and
                climb the leaderboard!
              </p>
              <Button className="rounded-full px-8 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium flex items-center gap-2 transform transition hover:scale-105">
                <PlayCircleIcon className="w-5 h-5" />
                Play Now
              </Button>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-20"></div>
                <img
                  src="/quiz-img.jpg"
                  alt="Problem of the day"
                  className="relative w-full md:w-[320px] md:h-[200px] object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white p-6 md:p-8 rounded-3xl  border-gray-100 mt-4"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Your Quiz Stats
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
              <p className="text-purple-600 text-sm font-medium">
                Total Quizzes
              </p>
              <p className="text-3xl font-bold text-purple-800">24</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
              <p className="text-blue-600 text-sm font-medium">Average Score</p>
              <p className="text-3xl font-bold text-blue-800">78%</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
              <p className="text-green-600 text-sm font-medium">
                Current Streak
              </p>
              <p className="text-3xl font-bold text-green-800">5 days</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200">
              <p className="text-amber-600 text-sm font-medium">Ranking</p>
              <p className="text-3xl font-bold text-amber-800">#42</p>
            </div>
          </div>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6  lg:col-span-1"
            
          >
            <div className="flex items-center mb-4">
              <div className="bg-green-500 rounded-full p-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h2 className="text-xl font-bold">Daily Task Calendar</h2>
            </div>
            {mounted && (
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-xl w-max border border-gray-200 shadow-sm p-3 bg-white"
                
              />
            )}
            {/* <div className="mt-4 flex gap-2 flex-wrap">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-gray-600">Completed</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-xs text-gray-600">Pending</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <span className="text-xs text-gray-600">Upcoming</span>
              </div>
            </div> */}
          </motion.section>

          {/* Popular Quizzes - Now takes 2/3 of the grid on larger screens */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 py-4"
          >
            <div className="flex items-center mb-6">
              <div className="bg-orange-500 rounded-full p-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 20v-6M6 20V10M18 20V4"></path>
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold">Popular Quizzes</h2>
            </div>

            <div className="flex flex-col w-full gap-4">
              {quizzes.map((quiz) => (
                <motion.div
                  key={quiz.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden"
                >
                  <Card
                    className={`${quiz.bgColor} rounded-2xl shadow-md overflow-hidden border ${quiz.borderColor} h-auto `}
                  >
                    <CardContent className="p-0 h-full">
                      <div className="flex flex-col md:flex-row justify-between h-full">
                        <div className="flex flex-col justify-between p-6 relative z-10 flex-1">
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <div
                                className={`${quiz.iconBg} p-1.5 rounded-full`}
                              >
                                {quiz.icon}
                              </div>
                              <span className="text-sm font-semibold text-gray-700">
                                {quiz.level}
                              </span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                              {quiz.title}
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base mb-4 hidden md:block">
                              {quiz.description}
                            </p>
                          </div>
                          <Button className="w-fit rounded-full bg-white cursor-pointer hover:bg-gray-50 text-gray-800 border border-gray-300 flex items-center gap-2 mt-auto">
                            <PlayCircleIcon className="w-5 h-5 cursor-pointer" />
                            Start Quiz
                          </Button>
                        </div>
                        <div className="flex items-center justify-center md:justify-end p-4 md:p-6">
                          <img
                            className="object-contain h-24 md:h-32 lg:h-40"
                            alt={`${quiz.title} illustration`}
                            src={quiz.image}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
