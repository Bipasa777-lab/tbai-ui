import React from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon,
  CheckIcon,
  RefreshCwIcon,
} from "lucide-react";

const quizTitle = "Quiz - The Brain Battle (1/5)";
const questionText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
const timeRemaining = "30s";
const totalQuestions = 5;

const options = [
  {
    id: "a",
    label: "A)",
    text: "Lorem Ipsum is simply dummy text of the printing",
    status: "default",
  },
  {
    id: "b",
    label: "B)",
    text: "Lorem Ipsum is simply dummy text of the printing",
    status: "default",
  },
  {
    id: "c",
    label: "C)",
    text: "Lorem Ipsum is simply dummy text of the printing",
    status: "incorrect",
  },
  {
    id: "d",
    label: "D)",
    text: "Lorem Ipsum is simply dummy text of the printing",
    status: "correct",
  },
];

export const QuizPage = () => {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-12 max-w-5xl mx-auto">
      {/* Header */}
      <header className="flex items-center gap-4 mb-8">
        <ArrowLeftIcon className="w-6 h-6 cursor-pointer" />
        <h1 className="text-2xl sm:text-3xl font-semibold text-black">
          {quizTitle}
        </h1>
      </header>

      {/* Timer */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-14 h-14 mb-2">
          <img className="w-full h-full" alt="Timer" src="/vector.svg" />
        </div>
        <span className="text-lg font-medium text-gray-800">
          {timeRemaining}
        </span>
      </div>

      {/* Question */}
      <div className="text-lg sm:text-xl text-center mb-10 text-gray-900 leading-relaxed">
        {questionText}
      </div>

      {/* Options */}
      <div className="space-y-4 mb-6">
        {options.map((option) => (
          <Card
            key={option.id}
            className={`flex items-center gap-4 px-4 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-md transition-all
              ${
                option.status === "correct"
                  ? "bg-green-200"
                  : option.status === "incorrect"
                  ? "bg-red-200"
                  : "bg-gray-100 hover:bg-gray-200"
              }`
            }
          >
            <div className="min-w-[24px]">
              {option.status === "correct" ? (
                <CheckIcon className="w-5 h-5 text-green-700" />
              ) : (
                <Checkbox id={option.id} className="w-5 h-5" />
              )}
            </div>
            <div className="text-sm sm:text-base font-medium text-gray-800 flex-1">
              <span className="mr-2 font-semibold">{option.label}</span>
              {option.text}
            </div>
          </Card>
        ))}
      </div>

      {/* Reset */}
      <div className="flex mb-12">
        <Button
          variant="ghost"
          className="flex items-center text-sm text-gray-700 hover:text-black"
        >
          <RefreshCwIcon className="w-4 h-4 mr-2" /> Reset Choice
        </Button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center gap-4 mb-10">
        <Button className="rounded-full bg-gray-200 text-black px-6 py-2 text-sm font-medium shadow-md hover:bg-gray-300">
          Prev
        </Button>
        <Button className="rounded-full bg-blue-500 text-white px-6 py-2 text-sm font-medium shadow-md hover:bg-blue-600">
          Next
        </Button>
      </div>

      {/* Question Progress Indicator */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <div
            key={index}
            className={`w-5 h-2.5 rounded-full transition-colors duration-300
              ${index === 0 ? "bg-red-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizPage;