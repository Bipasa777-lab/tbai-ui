import { Badge, BookIcon, CalendarIcon, DollarSignIcon, GraduationCapIcon, StarIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function MasterClassCard() {
    return <div className="flex justify-center">
    <Card className="w-full max-w-7xl overflow-hidden border-none shadow-md">
        <div className="flex flex-col md:flex-row">
            {/* Text Content */}
            <CardContent className="flex-1 p-6 sm:p-8 space-y-6">
                <h1 className="text-3xl sm:text-4xl font-semibold leading-snug text-gray-900">
                    Neque porro quisquam est qui
                </h1>

                <p className="text-gray-700 text-base leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged.
                </p>

                {/* Course Details */}
                <div className="flex flex-wrap gap-4 sm:gap-6 pt-2 text-sm font-medium text-[#a90f0f]">
                    <div className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5" />
                        <span>20/09/2017</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <BookIcon className="h-5 w-5" />
                        <span>Year 1, 2, 3</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <GraduationCapIcon className="h-5 w-5" />
                        <span>Dept: CSE</span>
                    </div>
                </div>

                {/* CTA & Badges */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
                    <Button className="bg-[#0fff3b] bg-opacity-60 hover:bg-opacity-70 text-black rounded-full h-[46px] px-6 text-lg font-semibold shadow-sm transition-all">
                        Enroll now
                    </Button>

                    <div className="flex items-center gap-2">
                        <Badge className="bg-transparent text-black border-none px-0 flex items-center gap-1">
                            <DollarSignIcon className="h-5 w-5" />
                            <span className="text-base font-medium">Paid</span>
                        </Badge>
                    </div>

                    <div className="flex items-center gap-2">
                        <Badge className="bg-transparent text-black border-none px-0 flex items-center gap-1">
                            <StarIcon className="h-5 w-5 text-yellow-500" />
                            <span className="text-base font-semibold">4.9</span>
                        </Badge>
                    </div>
                </div>
            </CardContent>

            {/* Image */}
            <div className="w-full md:w-[480px] h-[300px] md:h-auto">
                <img
                    className="w-full h-full object-cover"
                    alt="Course image"
                    src="https://dummyimage.com/800x600/000/fff"
                />
            </div>
        </div>
    </Card>
</div>

}