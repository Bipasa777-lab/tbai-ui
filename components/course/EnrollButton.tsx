// components/course/EnrollButton.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ZapIcon,ArrowRight, ShieldCheck } from "lucide-react";

const EnrollButton: React.FC = () => (
  <Card className="rounded-2xl overflow-hidden shadow-lg border-0 bg-white dark:bg-gray-800">
    <CardContent className="p-6">
      {/* <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold line-through text-gray-400 dark:text-gray-500">₹1999</span>
          <span className="text-3xl font-bold ml-2">₹999</span>
        </div>
        <span className="bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-sm font-semibold px-3 py-1 rounded-full">
          50% OFF
        </span>
      </div> */}
      
      <Button 
        size="lg"
        className="w-full cursor-pointer py-6 text-xl font-bold rounded-xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-md hover:shadow-lg transition-all duration-300 border-0"
      >
        <ZapIcon className="mr-2 h-5 w-5" />
        ENROLL NOW
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      
      {/* <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <p className="flex items-center justify-center gap-1">
          <ShieldCheck className="h-4 w-4" />
          30-day money-back guarantee
        </p>
      </div> */}
      
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs sm:text-sm">
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span>Lifetime Access</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span>Certificate</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span>Mobile Learning</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span>Community Support</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default EnrollButton;