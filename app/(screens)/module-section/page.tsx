import { ArrowRight, BookOpen, FileText, UserIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/tabs";

const videoItems = [
    {
        id: 1,
        image: "/course/image.png",
        description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet....",
        author: "Asutosh Sidhya",
    },
    {
        id: 2,
        image: "/course/image.png",
        description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet....",
        author: "Asutosh Sidhya",
    },
    {
        id: 3,
        image: "/course/image.png",
        description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet....",
        author: "Asutosh Sidhya",
    },
    {
        id: 4,
        image: "/course/image.png",
        description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet....",
        author: "Asutosh Sidhya",
    },
];

const quizItems = [
    {
        id: 1,
        title: "Introduction to Web Development",
        link: "#",
    },
    {
        id: 2,
        title: "Frontend Basics Quiz",
        link: "#",
    },
    {
        id: 3,
        title: "Backend Integration Assessment",
        link: "#",
    },
];

const contentItems = [
    {
        id: 1,
        title: "Full Stack Roadmap (PDF)",
        link: "#",
    },
    {
        id: 2,
        title: "Frontend Best Practices Guide",
        link: "#",
    },
    {
        id: 3,
        title: "Backend + MongoDB Integration",
        link: "#",
    },
];


export const ModuleSectionPage = () => {
    return (
        <div className="w-full px-4 md:px-8 py-10 max-w-screen-xl mx-auto">
            {/* Module Title */}
            <header className="mb-8 text-2xl md:text-3xl font-semibold text-black">
                <span className="font-bold">Module 1: </span>
                Mastering Full-Stack Web Development: From Frontend Design to Backend
                Integration with Real-World Projects Using JavaScript, React, Node.js,
                and MongoDB
            </header>

            {/* Tabs */}
            <Tabs defaultValue="videos" className="w-full ">
                <TabsList className="flex flex-wrap gap-4 mb-8 bg-transparent">
                    {["videos", "quizzes", "content"].map((tab) => (
                        <TabsTrigger
                            key={tab}
                            value={tab}
                            className="flex-1 cursor-pointer min-w-[120px] px-6 py-3 rounded-full text-black font-medium text-sm md:text-base data-[state=active]:bg-red-500/30 data-[state=inactive]:bg-gray-300/30 shadow-md"
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {/* ------------------ Videos Tab ------------------ */}
                <TabsContent value="videos" className="space-y-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Video Player */}
                        <div className="relative w-full lg:w-2/3 aspect-video rounded-xl overflow-hidden shadow-md">
                            <img
                                src="/course/image.png"
                                alt="Course video thumbnail"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                    src="/image-9-2.png"
                                    alt="Play button"
                                    className="w-16 h-16 md:w-20 md:h-20"
                                />
                            </div>
                            <div className="absolute bottom-4 left-6 text-white text-base md:text-lg font-medium">
                                Course Progress 47%
                            </div>
                        </div>

                        {/* Video List */}
                        <div className="w-full lg:w-1/3 space-y-4">
                            {videoItems.map((item) => (
                                <Card
                                    key={item.id}
                                    className="flex bg-gray-200/30 rounded-2xl overflow-hidden h-auto shadow-sm"
                                >
                                    <CardContent className="flex p-0 w-full">
                                        <img
                                            src={item.image}
                                            alt="Thumbnail"
                                            className="w-1/3 h-full object-cover"
                                        />
                                        <div className="p-3 flex flex-col justify-between flex-1">
                                            <p className="text-xs md:text-sm text-black font-medium line-clamp-3">
                                                {item.description}
                                            </p>
                                            <div className="flex items-center gap-1 mt-2">
                                                <UserIcon className="w-4 h-4" />
                                                <span className="text-xs md:text-sm text-black font-medium">
                                                    {item.author}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Summary */}
                    <section className="mt-12">
                        <h2 className="text-xl font-semibold text-black mb-4">
                            Summary of Content
                        </h2>
                        <p className="text-base text-black leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry&apos;s standard dummy
                            text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into
                            electronic typesetting.
                        </p>
                    </section>
                </TabsContent>

                {/* ------------------ Quizzes Tab ------------------ */}
                <TabsContent value="quizzes">
                    <div className=" p-6 rounded-xl shadow flex flex-col gap-4">
                        <h2 className="text-xl font-semibold mb-4 text-black">Quiz Instructions</h2>
                        <p className="text-gray-700 mb-6">
                            You’ll need to complete each quiz after finishing the videos to test your understanding.
                        </p>
                        <ul className="list-disc pl-6 text-sm text-gray-800 space-y-2">
                            <li>Each quiz has 10 questions.</li>
                            <li>You need 70% to pass.</li>
                            <li>Time limit: 15 minutes per quiz.</li>
                        </ul>

                        {quizItems.map((quiz) => (
                            <a
                                key={quiz.id}
                                href={quiz.link}
                                className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow hover:bg-red-100 transition"
                            >
                                <div className="flex items-center gap-3">
                                    <BookOpen className="w-5 h-5 text-red-500" />
                                    <span className="font-medium text-black text-sm md:text-base">{quiz.title}</span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-600" />
                            </a>
                        ))}
                    </div>
                </TabsContent>

                {/* ------------------ Content Tab ------------------ */}
                <TabsContent value="content">
                    <div className="p-6 flex gap-4 flex-col rounded-xl shadow">
                        <h2 className="text-xl font-semibold mb-4 text-black">Resources</h2>
                        {contentItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow hover:bg-blue-100 transition"
                            >
                                <div className="flex items-center gap-3">
                                    <FileText className="w-5 h-5 text-blue-600" />
                                    <span className="font-medium text-black text-sm md:text-base">{item.title}</span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-600" />
                            </a>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default ModuleSectionPage;
