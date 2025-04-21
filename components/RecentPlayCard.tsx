import Image from "next/image";
import React from "react";
import { Progress } from "@/components/ui/progress";

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

  return (
    <div className="w-full cursor-pointer flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300">

      <div className="w-full md:w-1/3 h-80 md:h-[320px] relative">
        <Image
          src={thumbnail}
          alt="thumbnail"
          fill
          className="object-cover rounded-l-xl"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2">
          {title}
        </h2>

        {/* Rating Stars */}
        <div className="flex items-center mt-2 gap-1">
          {[...Array(fullStars)].map((_, i) => (
            <span key={i} className="text-yellow-500 text-sm">
              ★
            </span>
          ))}
          {hasHalfStar && <span className="text-yellow-500 text-sm">☆</span>}
          {[...Array(maxStars - fullStars - (hasHalfStar ? 1 : 0))].map(
            (_, i) => (
              <span key={i} className="text-gray-300 text-sm">
                ★
              </span>
            )
          )}
          <span className="ml-2 text-gray-600 text-sm">
            {ratings.toFixed(1)}
          </span>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-2 text-xs font-medium">
          <span
            className={`px-2 py-0.5 rounded-full ${
              isPaid ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
            }`}
          >
            {isPaid ? "Paid" : "Free"}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-600">
            {difficulty}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mt-3 line-clamp-3 flex-grow">
          {description}
        </p>

        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-medium text-gray-700">
              {ratings.toFixed(1)} / 5
            </span>
          </div>
          <Progress value={(ratings / 5) * 100} className="h-3" />
        </div>
      </div>
    </div>
  );
};

export default RecentPlayCard;
