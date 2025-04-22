"use client";

import Image from "next/image";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface RecentPlayCardProps {
  thumbnail: string;
  title: string;
  ratings?: number;
  isPaid: boolean;
  difficulty: string;
  description: string;
}

const RecentPlayCard: React.FC<RecentPlayCardProps> = ({
  thumbnail,
  title,
  ratings = 0,
  isPaid,
  difficulty,
  description,
}) => {
  const maxStars = 5;
  const fullStars = Math.floor(ratings);
  const hasHalfStar = ratings % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <Card className="w-full max-w-md sm:max-w-full rounded-2xl shadow-md border p-4 transition-transform hover:scale-[1.01]">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Thumbnail */}
        <div className="relative w-full sm:w-40 h-40 rounded-lg overflow-hidden">
          <Image
            src={thumbnail}
            alt={`${title} Thumbnail`}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1">
          {/* Title */}
          <h2 className="text-lg sm:text-xl font-semibold mb-1">{title}</h2>

          {/* Ratings */}
          <div className="flex items-center gap-1 text-yellow-500 text-sm mb-1">
            {[...Array(fullStars)].map((_, i) => (
              <span key={`full-${i}`} aria-label="Full star">★</span>
            ))}
            {hasHalfStar && <span aria-label="Half star">☆</span>}
            {[...Array(emptyStars)].map((_, i) => (
              <span key={`empty-${i}`} aria-label="Empty star" className="opacity-30">
                ★
              </span>
            ))}
            <span className="text-gray-600 ml-1">{ratings.toFixed(1)}</span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant={isPaid ? "default" : "secondary"}>
              {isPaid ? "Paid" : "Free"}
            </Badge>
            <Badge variant="outline">{difficulty}</Badge>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
            {description}
          </p>

          {/* Progress */}
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-500">Progress</span>
            <Progress value={(ratings / 5) * 100} />
            <span className="text-xs text-right text-gray-600">
              {ratings.toFixed(1)} / 5
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RecentPlayCard;
