// pages/course/[slug].tsx

import CourseDescription from '@/components/course/CourseDescription';
import CourseHeader from '@/components/course/CourseHeader';
import CourseMetadata from '@/components/course/CourseMetadata';
import EnrollButton from '@/components/course/EnrollButton';
import ModuleList from '@/components/course/ModuleList';
import VideoBanner from '@/components/course/VideoBanner';
import { singlePageCourseData } from '@/constants';
import React from 'react';


const SingleCoursePage: React.FC = () => {
  const { title, progress, description, metadata, modules } = singlePageCourseData;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <CourseHeader title={title} />
      <VideoBanner progress={progress} />
      <EnrollButton />
      <CourseMetadata metadata={metadata} />
      <CourseDescription description={description} />
      <ModuleList modules={modules} />
    </div>
  );
};

export default SingleCoursePage;
