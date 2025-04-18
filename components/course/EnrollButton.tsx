// components/EnrollButton.tsx

import React from "react";
import { Button } from "@/components/ui/button";

const EnrollButton: React.FC = () => (
  <Button className="w-full py-6 mb-8 text-2xl font-semibold rounded-3xl bg-red-400/20 text-black hover:bg-red-400/30 shadow-md">
    ENROLL NOW
  </Button>
);

export default EnrollButton;
