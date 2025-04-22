// pages/course/[slug].tsx
import CourseDescription from '@/components/course/CourseDescription';
import CourseHeader from '@/components/course/CourseHeader';
import CourseMetadata from '@/components/course/CourseMetadata';
import EnrollButton from '@/components/course/EnrollButton';
import ModuleList from '@/components/course/ModuleList';
import VideoBanner from '@/components/course/VideoBanner';
import { singlePageCourseData2 as singlePageCourseData } from '@/constants';
import React from 'react';

const SingleCoursePage: React.FC = () => {
  const { title, subtitle, instructor, progress, description, metadata, modules } = singlePageCourseData;
  
  return (
    <div className="min-h-screen bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12 ">
        <CourseHeader title={title} subtitle={subtitle} instructor={instructor} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <VideoBanner progress={progress} />
            <CourseDescription description={description} />
            <ModuleList modules={modules} />
          </div>
          <div className="space-y-6">
            <div className="sticky top-6">
              <EnrollButton />
              <CourseMetadata metadata={metadata} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoursePage;