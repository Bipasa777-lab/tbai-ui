// components/CourseDescription.tsx

import React from "react";

interface CourseDescriptionProps {
  description: string;
}

const CourseDescription: React.FC<CourseDescriptionProps> = ({ description }) => (
  <div className="mb-8 text-lg leading-relaxed">{description}</div>
);

export default CourseDescription;
