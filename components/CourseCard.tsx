"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  thumbnail: string;
  title: string;
  ratings?: number;
  isPaid: boolean;
  difficulty: string;
  description: string;
  onClick?: () => void;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  thumbnail,
  title,
  ratings = 0,
  isPaid,
  difficulty,
  description,
  onClick,
  className,
}) => {
  const maxStars = 5;
  const fullStars = Math.floor(ratings);
  const hasHalfStar = ratings % 1 >= 0.5;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Difficulty badge color mapping
  const difficultyStyles = {
    Beginner: "bg-blue-100 text-blue-600 hover:bg-blue-200",
    Intermediate: "bg-purple-100 text-purple-600 hover:bg-purple-200",
    Advanced: "bg-orange-100 text-orange-600 hover:bg-orange-200",
    Expert: "bg-red-100 text-red-600 hover:bg-red-200",
  };

  const getDifficultyStyle = () => {
    return difficultyStyles[difficulty as keyof typeof difficultyStyles] || "bg-blue-100 text-blue-600 hover:bg-blue-200";
  };

  return (
    <Card 
      className={cn(
        "group h-full overflow-hidden transition-all duration-300 hover:shadow-lg focus-within:ring-2 focus-within:ring-primary/50",
        className
      )}
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? "button" : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden">
        {!imageLoaded && !imageError && (
          <Skeleton className="absolute inset-0 w-full h-full" />
        )}
        {!imageError ? (
          <Image
            className={cn(
              "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
              !imageLoaded && "opacity-0"
            )}
            src={thumbnail}
            alt={`${title} thumbnail`}
            width={600}
            height={400}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            priority={false}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-gray-400">Image unavailable</span>
          </div>
        )}
        <Badge 
          variant="outline" 
          className={cn(
            "absolute top-3 right-3 font-medium",
            isPaid ? "bg-red-100 text-red-600 hover:bg-red-200" : "bg-green-100 text-green-600 hover:bg-green-200"
          )}
        >
          {isPaid ? "Paid" : "Free"}
        </Badge>
      </div>

      <CardHeader className="p-4 pb-2 space-y-0">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 leading-tight" title={title}>
          {title}
        </h2>
      </CardHeader>

      <CardContent className="p-4 pt-1 space-y-3">
        {/* Rating Stars */}
        <div className="flex items-center gap-1" aria-label={`Rated ${ratings.toFixed(1)} out of 5 stars`}>
          {[...Array(fullStars)].map((_, i) => (
            <Star key={i} className="fill-yellow-500 text-yellow-500 h-4 w-4" />
          ))}
          {hasHalfStar && <StarHalf className="fill-yellow-500 text-yellow-500 h-4 w-4" />}
          {[...Array(maxStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
            <Star key={i} className="text-gray-300 h-4 w-4" />
          ))}
          <span className="ml-1.5 text-gray-600 text-xs font-medium">{ratings.toFixed(1)}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3" title={description}>
          {description}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Badge variant="secondary" className={cn("font-medium", getDifficultyStyle())}>
          {difficulty}
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;