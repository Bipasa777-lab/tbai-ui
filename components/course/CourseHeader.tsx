// components/CourseHeader.tsx

import React from "react";

interface CourseHeaderProps {
  title: string;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ title }) => (
  <h1 className="text-3xl font-semibold mb-8 font-['Inter',Helvetica]">
    {title}
  </h1>
);

export default CourseHeader;
