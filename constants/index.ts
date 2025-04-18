import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
  } from "lucide-react"

// This is sample data.
export const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
  
    navMain: [
      {
        title: "Courses",
        url: "#",
        icon: GalleryVerticalEnd,
        isActive: true,
      },
      {
        title: "Masterclass",
        url: "#",
        icon: Settings2,
      },
      {
        title: "Upskill",
        url: "#",
        icon: BookOpen,
      },
      {
        title: "Enrolled Courses",
        url: "#",
        icon: Settings2,
      },
      {
        title: "Ai Assistance",
        url: "#",
        icon: Bot,
      },
    ],
  }


// app/data/courseData.ts

const courseData = [
    {
      thumbnail: "https://dummyimage.com/600x400/000/fff",
      title: "Mastering TypeScript for Web Development",
      level: "Intermediate",
      ratings: 4.6,
      isPaid: false,
      difficulty: "Medium",
      description:
        "Learn TypeScript from the ground up and apply it to real-world web projects. Perfect for developers familiar with JavaScript.",
    },
    {
      thumbnail: "https://dummyimage.com/600x400/000/fff",
      title: "React Essentials: Build Modern Interfaces",
      level: "Beginner",
      ratings: 4.8,
      isPaid: true,
      difficulty: "Easy",
      description:
        "Dive into React and build interactive UIs with hooks, components, and the virtual DOM.",
    },
    {
      thumbnail: "https://dummyimage.com/600x400/000/fff",
      title: "Full-Stack Development with Next.js",
      level: "Advanced",
      ratings: 4.5,
      isPaid: true,
      difficulty: "Hard",
      description:
        "Learn how to build scalable, full-stack web apps using Next.js, API routes, and server-side rendering.",
    },
    {
      thumbnail: "https://dummyimage.com/600x400/000/fff",
      title: "Node.js Bootcamp: Backend Fundamentals",
      level: "Intermediate",
      ratings: 4.3,
      isPaid: false,
      difficulty: "Medium",
      description:
        "Master the fundamentals of Node.js, Express, and RESTful APIs to build robust backend services.",
    },
    {
      thumbnail: "https://dummyimage.com/600x400/000/fff",
      title: "Python for Absolute Beginners",
      level: "Beginner",
      ratings: 4.7,
      isPaid: false,
      difficulty: "Easy",
      description:
        "Start coding in Python with hands-on exercises, real-world examples, and simple project ideas.",
    },
    {
      thumbnail: "https://dummyimage.com/600x400/000/fff",
      title: "Applied AI: Build ML Models with Python",
      level: "Advanced",
      ratings: 4.9,
      isPaid: true,
      difficulty: "Hard",
      description:
        "Explore real-world AI use cases and train ML models using Python, Pandas, Scikit-learn, and TensorFlow.",
    },
    {
      thumbnail: "https://dummyimage.com/600x400/000/fff",
      title: "Responsive UI Design with Tailwind CSS",
      level: "Intermediate",
      ratings: 4.4,
      isPaid: false,
      difficulty: "Medium",
      description:
        "Style your apps faster using Tailwind CSS utility-first classes. Build responsive, beautiful UIs with ease.",
    },
  ]
  
  export default courseData
  