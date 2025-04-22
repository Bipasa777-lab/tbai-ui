// components/course/VideoBanner.tsx
import React from "react";
// import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface VideoBannerProps {
  progress: number;
}

const VideoBanner: React.FC<VideoBannerProps> = ({ progress }) => (
  <div className="relative w-full rounded-xl overflow-hidden shadow-lg group">
    {/* Video Thumbnail with gradient overlay */}
    <div className="relative w-full aspect-video bg-[url(/course/image.png)] bg-cover bg-center rounded-xl transition-transform duration-300 group-hover:scale-101">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      
      {/* Play button with hover effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Button 
          size="icon" 
          className="w-16 cursor-pointer h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white/30 hover:scale-110 transition-all duration-300" 
          aria-label="Play video"
        >
          <Play className="h-8 w-8 fill-white text-white" />
        </Button>
      </div>
      
      {/* Progress bar section */}
      <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-4 sm:pb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
          <p className="text-white text-lg sm:text-xl font-medium drop-shadow-md">
            Course Progress <span className="font-bold">{progress}%</span>
          </p>
          <p className="text-white text-sm sm:text-lg font-medium drop-shadow-md">
            Preview - 2 min
          </p>
        </div>
        
        {/* Custom progress bar with animation */}
        <div className="relative h-3 sm:h-5 rounded-full bg-white/30 overflow-hidden backdrop-blur-sm">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  </div>
);

export default VideoBanner;