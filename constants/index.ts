import {
    BookOpen,
    Bot,
    Bell,
    GalleryVerticalEnd,
    Settings2,
    User,
    MoonIcon,
    Phone,
    Scale,
    EarthLockIcon,
    KeyRoundIcon,
    LogOutIcon
} from "lucide-react"

// This is sample data.
export const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile&psig=AOvVaw21pidEcaJnTPpCYzN8thxe&ust=1745302316445000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDdy_a76IwDFQAAAAAdAAAAABAE",
    },

    navMain: [
        {
            title: "Courses",
            url: "/",
            icon: GalleryVerticalEnd,
            isActive: true,
        },
        {
            title: "Masterclass",
            url: "masterclass",
            icon: Settings2,
        },
        {
            title: "Quizes",
            url: "quiz",
            icon: BookOpen,
        },
        {
            title: "Enrolled Courses",
            url: "enrolled-course",
            icon: Settings2,
        },
        {
            title: "Ai Assistance",
            url: "assistant",
            icon: Bot,
        },
    ],
}


// app/data/courseData.ts

export const courseData = [
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






export const masterclassData = [
    {
        title: "Fullstack Web Development Bootcamp",
        description: "Master fullstack web development using React, Node.js, Express, and MongoDB. Hands-on projects included.",
        date: "2025-05-01",
        year: "Year 1,2",
        department: "CSE",
        isPaid: true,
        rating: 4.8,
        thumbnail: "https://dummyimage.com/600x400/000/fff",
    },
    {
        title: "AI for Beginners",
        description: "An introductory course to Artificial Intelligence with practical use cases in NLP and computer vision.",
        date: "2025-06-15",
        year: "Year 1",
        department: "AI/ML",
        isPaid: false,
        rating: 4.7,
        thumbnail: "https://dummyimage.com/600x400/000/fff",
    },
    {
        title: "Cybersecurity Fundamentals",
        description: "Learn how to protect systems, networks, and programs from digital attacks. Ideal for aspiring cybersecurity analysts.",
        date: "2025-07-10",
        year: "Year 2,3",
        department: "IT",
        isPaid: true,
        rating: 4.6,
        thumbnail: "https://dummyimage.com/600x400/000/fff",
    },
    {
        title: "Data Science with Python",
        description: "Cover data manipulation, visualization, and basic ML using pandas, matplotlib, and scikit-learn.",
        date: "2025-04-20",
        year: "Year 2,3",
        department: "Data Science",
        isPaid: false,
        rating: 4.9,
        thumbnail: "https://dummyimage.com/600x400/000/fff",
    },
    {
        title: "Cloud Computing with AWS",
        description: "Get hands-on experience with AWS services. Learn to deploy scalable and secure applications on the cloud.",
        date: "2025-05-22",
        year: "Year 3",
        department: "Cloud Tech",
        isPaid: true,
        rating: 4.5,
        thumbnail: "https://dummyimage.com/600x400/000/fff",
    },
    {
        title: "UI/UX Design Masterclass",
        description: "Explore user-centered design principles and build interactive prototypes using Figma and Adobe XD.",
        date: "2025-06-05",
        year: "Year 1,2",
        department: "Design",
        isPaid: false,
        rating: 4.4,
        thumbnail: "https://dummyimage.com/600x400/000/fff",
    },
    {
        title: "Blockchain & Web3 Development",
        description: "Dive into the world of decentralized apps, smart contracts, and Ethereum blockchain development.",
        date: "2025-07-01",
        year: "Year 3",
        department: "Blockchain",
        isPaid: true,
        rating: 4.6,
        thumbnail: "https://dummyimage.com/600x400/000/fff",
    },
];


export const assistantsData = [
  { name: "Teacher", image: "https://dummyimage.com/600x400/000/fff" },
  { name: "Doctor", image: "https://dummyimage.com/600x400/000/fff" },
  { name: "Farmer", image: "https://dummyimage.com/600x400/000/fff" },
  { name: "Software Developer", image: "https://dummyimage.com/600x400/000/fff" },
  { name: "Manufacturing Expert", image: "https://dummyimage.com/600x400/000/fff" },
  { name: "Logistics Expert", image: "https://dummyimage.com/600x400/000/fff" },
];


export const badgeData = [
    {
      color: "rgba(43, 194, 255, 0.3)", // light blue
      img: "/image-15.png",
      title: "Fullstack",
      subtitle: "Developer",
    },
    {
      color: "rgba(43, 255, 177, 0.3)", // light green
      img: "/image-15.png",
      title: "Data",
      subtitle: "Analyst",
    },
    {
      color: "rgba(255, 237, 43, 0.3)", // yellow
      img: "/image-15.png",
      title: "AI",
      subtitle: "Specialist",
    },
    {
      color: "rgba(255, 89, 43, 0.3)", // orange
      img: "/image-15.png",
      title: "Cyber",
      subtitle: "Security",
    },
    {
      color: "rgba(173, 122, 255, 0.3)", // purple
      img: "/image-15.png",
      title: "Machine",
      subtitle: "Learning",
    },
  ];
  


  // data/courseData.ts

export const singlePageCourseData = {
    title: "Mastering Full-Stack Web Development: From Frontend Design to Backend Integration with Real-World Projects Using JavaScript, React, Node.js, and MongoDB",
    progress: 47,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    metadata: [
      { icon: "CalendarIcon", label: "Start Date", value: "2025-08-10" },
      { icon: "CalendarIcon", label: "End Date", value: "2025-08-10" },
      { icon: "BookOpenIcon", label: "5 Modules", value: "" },
      { icon: "PlayCircleIcon", label: "32 Videos", value: "" },
      { icon: "FileQuestionIcon", label: "13 Quizzes", value: "" },
      { icon: "ClockIcon", label: "60 hours", value: "" },
    ],
    modules: [
      { number: 1, videos: 5, quizzes: 2 },
      { number: 2, videos: 5, quizzes: 2 },
      { number: 3, videos: 5, quizzes: 2 },
      { number: 4, videos: 5, quizzes: 2 },
      { number: 5, videos: 5, quizzes: 2 },
    ],
  };



  export const NavActionData = [
    [
        {
            label: "Profile",
            icon: User,
            url:"profile"
        },
        {
            label: "Notification",
            icon: Bell,
            url:"notification"
        },
    ],
    [
        {
            label: "Change Theme",
            icon: MoonIcon,
        },
        {
            label: "Contact Us",
            icon: Phone,
            url:"contact-us"
        },
    ],
    [
        {
            label: "Privacy policy ",
            icon: EarthLockIcon,
            url:"privacy-policy"
        },
        {
            label: "Terms & Cond.",
            icon: Scale,
            url:"terms-and-condition"
        },
    ],
    [
        {
            label: "Change password",
            icon: KeyRoundIcon,
            url:"change-password"
        },
        {
            label: "Log out",
            icon: LogOutIcon,
        },
    ],
]