import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="flex gap-2 mt-4">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div
          key={i}
          className={`h-2 w-8 rounded-full transition-all ${
            i <= currentStep ? 'bg-primary' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}
