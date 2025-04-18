// components/VideoBanner.tsx

import React from "react";
import { Progress } from "@/components/ui/progress";

interface VideoBannerProps {
  progress: number;
}

const VideoBanner: React.FC<VideoBannerProps> = ({ progress }) => (
  <div className="relative w-full rounded-lg overflow-hidden mb-8">
    <div className="relative w-full aspect-video bg-[url(/course/image.png)] bg-cover bg-center rounded-lg">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          className="w-[78px] h-[78px] object-cover"
          alt="Play button"
          src="/course/image-21.png"
        />
      </div>

      <div className="absolute bottom-10 left-0 right-0 px-6">
        <div className="flex justify-between items-center mb-2">
          <p className="text-white text-2xl font-medium">
            Course Progress {progress}%
          </p>
          <p className="text-white text-2xl font-medium text-right">
            Preview - 2 min
          </p>
        </div>

        <div className="relative h-6 rounded-full bg-white/30">
          <Progress
            value={progress}
            className="h-6 rounded-full bg-red-600/70"
          />
        </div>
      </div>
    </div>
  </div>
);

export default VideoBanner;
