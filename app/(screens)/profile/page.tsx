'use client';

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArchiveIcon,
  CalendarIcon,
  FileTextIcon,
  MailIcon,
  PhoneIcon,
  UserCircleIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import BadgeCard from "@/components/BadgeCard";
import { badgeData } from "@/constants";

export const Profile = () => {
  const hobbies = [
    "Photography",
    "Gardening",
    "Painting",
    "Hiking",
    "Playing guitar",
    "Singing",
  ];

//   const badgeColors = [
//     "bg-[#2bc2ff]",
//     "bg-[#2bffb1]",
//     "bg-[#ffed2b]",
//     "bg-[#ff592b]",
//   ];

const badgeColors = [
    "rgba(43, 194, 255, 0.3)",  // blue
    "rgba(43, 255, 177, 0.3)",  // green
    "rgba(255, 237, 43, 0.3)",  // yellow
    "rgba(255, 89, 43, 0.3)",   // orange
  ];

  return (
    <div className="container mx-auto py-8 max-w-6xl px-4">
      {/* Profile Card */}
      <Card className="mb-10 rounded-3xl shadow-md overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex gap-6">
              <img
                className="w-[215px] h-[195px] rounded-lg object-cover"
                alt="Profile"
                src="/image.png"
              />
              <div className="flex flex-col justify-center">
                <h1 className="font-semibold text-[28px] mb-2">
                  Asutosh Sidhya
                </h1>
                <div className="text-xl text-gray-600">TIU_BTECH-CSE</div>
              </div>
            </div>
            <Button variant="ghost" className="text-lg mt-4 md:mt-0">
              Edit
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-8">
            <InfoItem icon={<UserIcon />} label="TIU13030822060" />
            <InfoItem icon={<FileTextIcon />} label="13030822060" />
            <InfoItem icon={<ArchiveIcon />} label="CGPA - 9.2" />
            <InfoItem
              icon={<CalendarIcon />}
              label={
                <>
                  2023 <span className="mx-2">to</span> 2027
                </>
              }
            />
            <InfoItem icon={<UserCircleIcon />} label="MALE" />
            <InfoItem icon={<PhoneIcon />} label="9749571885" />
            <InfoItem icon={<MailIcon />} label="sidhyaasutosh@gmail.com" />
          </div>

          {/* Hobbies */}
          <div className="mt-10">
            <h2 className="font-semibold text-2xl mb-4">Hobbies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {hobbies.map((hobby, index) => (
                <span key={index} className="text-lg font-light">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Overview */}
      <SectionTitle title="Course Overview" />
      <div className="flex flex-wrap gap-6 mb-10">
        <OverviewCard
          color="rgba(8, 43, 30, 0.3)"
          img="/image-13.png"
          count={10}
          label="Courses Completed"
        />
        <OverviewCard
          color="rgba(202, 17, 140, 0.3)"
          img="/image-14.png"
          count={10}
          label="Ongoing Courses"
        />
      </div>

      {/* Your Badges ==========================================================================================*/}
      <SectionTitle title="Your Badges" />
      <div className="mb-10">
        <BadgeCard color="rgba(43, 194, 255, 0.3)" img={"/image-15.png"} title={"Pro"} subtitle={"Programmer"} /> 
      </div>

      {/* Skill Badges */}
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-semibold">Skill Badges Available</h2>
        <Badge className="ml-4 bg-red-500/40 text-black text-lg px-3 py-1 rounded-full">
          5
        </Badge>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {badgeData.map((badge, index) => (
    <BadgeCard
      key={index}
      color={badge.color}
      img={badge.img}
      title={badge.title}
      subtitle={badge.subtitle}
    />
  ))}
</div>
    </div>
  );
};

// Helper Components
const InfoItem = ({ icon, label }: { icon: React.ReactNode; label: React.ReactNode }) => (
  <div className="flex items-center text-lg text-gray-700">
    <div className="w-6 h-6 mr-3 text-gray-500">{icon}</div>
    <span>{label}</span>
  </div>
);

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-2xl font-semibold mb-4">{title}</h2>
);

const OverviewCard = ({
  color,
  img,
  count,
  label,
}: {
  color: string;
  img: string;
  count: number;
  label: string;
}) => (
  <Card className={`w-[252px] h-[283px] rounded-[30px]`} style={{ backgroundColor: color }}>
    <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
      <img className="w-[92px] h-[92px] mb-4" src={img} alt={label} />
      <span className="text-2xl font-semibold mb-2">{count}</span>
      <span className="text-xl">{label}</span>
    </CardContent>
  </Card>
);


export default Profile;