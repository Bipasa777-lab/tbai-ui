// app/quiz/page.tsx
"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
    ArrowLeftIcon,
    RefreshCwIcon,
} from "lucide-react";

interface Option {
    id: string;
    label: string;
    text: string;
}

interface Question {
    id: number;
    question: string;
    options: Option[];
}

const quizData: Question[] = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: [
            { id: "a", label: "A)", text: "Paris" },
            { id: "b", label: "B)", text: "Rome" },
            { id: "c", label: "C)", text: "Madrid" },
            { id: "d", label: "D)", text: "Berlin" },
        ],
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: [
            { id: "a", label: "A)", text: "Earth" },
            { id: "b", label: "B)", text: "Mars" },
            { id: "c", label: "C)", text: "Jupiter" },
            { id: "d", label: "D)", text: "Saturn" },
        ],
    },
    {
        id: 3,
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: [
            { id: "a", label: "A)", text: "William Shakespeare" },
            { id: "b", label: "B)", text: "Charles Dickens" },
            { id: "c", label: "C)", text: "Mark Twain" },
            { id: "d", label: "D)", text: "Jane Austen" },
        ],
    },
    {
        id: 4,
        question: "What is the largest ocean on Earth?",
        options: [
            { id: "a", label: "A)", text: "Atlantic Ocean" },
            { id: "b", label: "B)", text: "Indian Ocean" },
            { id: "c", label: "C)", text: "Pacific Ocean" },
            { id: "d", label: "D)", text: "Arctic Ocean" },
        ],
    },
    {
        id: 5,
        question: "What is the chemical symbol for water?",
        options: [
            { id: "a", label: "A)", text: "H2O" },
            { id: "b", label: "B)", text: "O2" },
            { id: "c", label: "C)", text: "CO2" },
            { id: "d", label: "D)", text: "NaCl" },
        ],
    },
];

const QuizPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});

    const currentQuestion = quizData[currentQuestionIndex];
    const selectedOption = answers[currentQuestion.id] || null;

    const handleSelect = (id: string) => {
        setAnswers({ ...answers, [currentQuestion.id]: id });
    };

    const handleReset = () => {
        const updatedAnswers = { ...answers };
        delete updatedAnswers[currentQuestion.id];
        setAnswers(updatedAnswers);
    };

    const handleNext = () => {
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1);
        }
    };

    const handleSubmit = () => {
        console.log("Submitted Answers:", answers);
    };
    const timeRemaining = "30s";
    return (
        <div className="px-4 py-6 sm:px-6 lg:px-10 w-full mx-auto text-sm">
            <div className="flex flex-col items-center mb-6">
                <div className="w-10 h-10 mb-1">
                    <img
                        className="w-full h-full object-contain"
                        alt="Timer"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNsb2NrLWljb24gbHVjaWRlLWNsb2NrIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwb2x5bGluZSBwb2ludHM9IjEyIDYgMTIgMTIgMTYgMTQiLz48L3N2Zz4="
                    />
                </div>
                <span className="text-base font-medium text-gray-700">
                    {timeRemaining}
                </span>
            </div>

            <header className="flex items-center gap-3 mb-6">
                <ArrowLeftIcon className="w-5 h-5 cursor-pointer" />
                <h1 className="text-xl font-semibold">Quiz - The Brain Battle</h1>
            </header>

            <div className="text-center text-base font-medium text-gray-800 mb-6">
                {currentQuestion.question}
            </div>

            <div className="space-y-3  mb-6">
                {currentQuestion.options.map((option) => (
                    <Card
                        key={option.id}
                        onClick={() => handleSelect(option.id)}
                        className={`flex flex-row gap-3 px-4 py-2 rounded-xl cursor-pointer transition-all
              ${selectedOption === option.id ? "bg-blue-100 border border-blue-400" : "bg-gray-100 hover:bg-gray-200"}`}
                    >
                        <Checkbox
                            checked={selectedOption === option.id}
                            onCheckedChange={() => handleSelect(option.id)}
                            className="w-4 h-4"
                        />
                        <span className="font-medium">
                            <span className="mr-2">{option.label}</span>
                            {option.text}
                        </span>
                    </Card>
                ))}
            </div>

            <div className="flex mb-10">
                <Button
                    variant="ghost"
                    onClick={handleReset}
                    className="flex items-center text-xs text-gray-600 hover:text-black"
                >
                    <RefreshCwIcon className="w-4 h-4 mr-2" /> Reset
                </Button>
            </div>

            <div className="flex justify-between gap-4 mb-6">
                <Button
                    disabled={currentQuestionIndex === 0}
                    onClick={handlePrevious}
                    className="rounded-full cursor-pointer bg-gray-200 text-black px-4 py-1 text-xs font-medium hover:bg-gray-300"
                >
                    Previous
                </Button>
                {currentQuestionIndex === quizData.length - 1 ? (
                    <Button
                        onClick={handleSubmit}
                        className="rounded-full cursor-pointer bg-green-500 text-white px-4 py-1 text-xs font-medium hover:bg-green-600"
                    >
                        Submit
                    </Button>
                ) : (
                    <Button
                        onClick={handleNext}
                        className="rounded-full cursor-pointer bg-blue-500 text-white px-4 py-1 text-xs font-medium hover:bg-blue-600"
                    >
                        Next
                    </Button>
                )}
            </div>

            <div className="flex justify-center gap-1">
                {quizData.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-1.5 rounded-full ${index === currentQuestionIndex ? "bg-red-500" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default QuizPage;