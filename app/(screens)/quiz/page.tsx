"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { PlayCircleIcon } from "lucide-react";
import { useState } from "react";

export default function QuizePage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const quizzes = [
    {
      id: 1,
      title: "The Brain Battle",
      level: "Level 1",
      image: "/books.png",
      bgColor: "bg-red-100",
      iconImage: "/image-9-2.png",
    },
    {
      id: 2,
      title: "The Know-It-All Knockout",
      level: "Level 2",
      image: "/fire.png",
      bgColor: "bg-blue-100",
      iconImage: "/image-9-2.png",
    },
    {
      id: 3,
      title: "Rapid Fire Recall",
      level: "Level 3",
      image: "/hot-air-baloon.png",
      bgColor: "bg-yellow-50",
      iconImage: "/image-9-2.png",
    },
  ];

  return (
    <main className="flex flex-col gap-8 px-4 py-6 md:px-8 lg:px-16 min-h-screen">
      {/* Header */}
        <h1 className="text-2xl md:text-3xl font-bold">Quiz Arena</h1>

      {/* Problem of the Day */}
      <section className="bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row justify-between gap-6 items-center">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-1">🧠 Problem of the Day</h2>
          <p className="text-gray-600 mb-2">
            Challenge your brain every day with a new problem.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut
            voluptate totam id quod, sequi molestias ut harum ab vel.
          </p>
          <Button className="rounded-full px-6">Play Now</Button>
        </div>
        <div className="flex-shrink-0 w-full md:w-[300px]">
          <img
            src="/quiz-img.jpg"
            alt="Problem of the day"
            className="w-full object-cover rounded-xl md:h-[170px] md:w-[250px]"
          />
        </div>
      </section>

      {/* Calendar Section */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">📅 Daily Task Calendar</h2>
        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
      </section>

      {/* Popular Quizzes */}
      <section className="w-full py-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          📚 Popular Quizzes
        </h2>

        <div className="flex flex-col w-full gap-4">
          {quizzes.map((quiz) => (
            <Card
              key={quiz.id}
              className={`${quiz.bgColor} rounded-2xl shadow-md overflow-hidden relative h-[282px]`}
            >
              <CardContent className="p-0 h-full">
                <div className="flex justify-between h-full">
                  <div className="flex flex-col justify-end p-6 relative z-10">
                    <div className="absolute top-1/3 left-6">
                      <PlayCircleIcon className="w-[50px] h-[50px] text-gray-500 hover:text-gray-700 transition" />
                    </div>
                    <div className="text-lg text-gray-700 font-medium mb-1">
                      {quiz.level}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {quiz.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-end pr-4">
                    <img
                      className="object-contain max-h-[246px]"
                      alt={`${quiz.title} illustration`}
                      src={quiz.image}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
