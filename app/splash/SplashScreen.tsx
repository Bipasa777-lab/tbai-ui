'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { splashScreens } from './data';
import { Button } from '@/components/ui/button';
import ProgressBar from '../components/ProgressBar';

// Simulated auth check (replace with real auth logic)
const isLoggedIn = false; // <-- Replace this with actual session or context check

export default function SplashScreen() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < splashScreens.length - 1) return prev + 1;
        return prev;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === splashScreens.length - 1) {
      const timeout = setTimeout(() => {
        if (!isLoggedIn) {
          router.push('/login');
        }
      }, 3000); // delay for user to read the last screen
      return () => clearTimeout(timeout);
    }
  }, [index, router]);

  const handleNext = () => {
    if (index < splashScreens.length - 1) {
      setIndex(index + 1);
    } else if (!isLoggedIn) {
      router.push('/login');
    }
  };

  const { image, title, description } = splashScreens[index];

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 space-y-6">
      <img src={image} alt={title} className="w-64 h-64 object-contain" />
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      <Button onClick={handleNext}>
        {index < splashScreens.length - 1 ? 'Next' : 'Go to Login'}
      </Button>
      <ProgressBar currentStep={index} totalSteps={splashScreens.length} />
    </div>
  );
}
