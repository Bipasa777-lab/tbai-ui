'use client';

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface ProfileData {
  fullName: string;
  rollNumber: string;
  email: string;
  phone: string;
  cgpa: string;
}

const defaultData: ProfileData = {
  fullName: "Asutosh Sidhya",
  rollNumber: "TIU13030822060",
  email: "sidhyaasutosh@gmail.com",
  phone: "9749571885",
  cgpa: "9.2",
};

const EditProfile = () => {
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileData>(defaultData);

  // Load data from localStorage on mount
  useEffect(() => {
    const storedProfile = localStorage.getItem("profileData");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  // Save to localStorage
  const handleSave = () => {
    localStorage.setItem("profileData", JSON.stringify(profile));
    router.push("/"); // Navigate back to profile page
  };

  return (
    <div className="container max-w-3xl mx-auto py-10 px-4">
      <Card className="rounded-3xl shadow-lg">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>

          <div className="space-y-5">
            <Input
              placeholder="Full Name"
              value={profile.fullName}
              onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
            />
            <Input
              placeholder="Roll Number"
              value={profile.rollNumber}
              onChange={(e) => setProfile({ ...profile, rollNumber: e.target.value })}
            />
            <Input
              placeholder="Email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
            <Input
              placeholder="Phone"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            />
            <Input
              placeholder="CGPA"
              value={profile.cgpa}
              onChange={(e) => setProfile({ ...profile, cgpa: e.target.value })}
            />
          </div>

          <div className="flex justify-end mt-8 gap-4">
            <Button variant="ghost" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProfile;
