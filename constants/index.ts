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
      course_id: "CSE",
      dept_id: ["AIML", "CSE", "ECE"],
      course_name: "Mastering TypeScript for Web Development",
      course_duration_hrs: 40,
      level: "Intermediate",
      rating: 4.6,
      isPaid: false,
      user_id: "223344",
      course_desc:
        "Learn TypeScript from the ground up and apply it to real-world web projects. Perfect for developers familiar with JavaScript.",
      course_banner: ["https://dummyimage.com/600x400/000/fff"],
      syllabus: [
        "Introduction to TypeScript",
        "TypeScript for Web Development",
        "Advanced TypeScript Features",
        "TypeScript with React",
        "TypeScript in Full-Stack Development",
      ],
      start_date: "2025-03-10T00:00:00Z",
      category_id: "5",
      enrollment_deadline: "2025-03-05T23:59:59Z",
      max_students: 100,
    },
    {
      course_id: "REACT",
      dept_id: ["AIML", "CSE", "ECE"],
      course_name: "React Essentials: Build Modern Interfaces",
      course_duration_hrs: 30,
      level: "Beginner",
      rating: 4.8,
      isPaid: true,
      user_id: "223345",
      course_desc:
        "Dive into React and build interactive UIs with hooks, components, and the virtual DOM.",
      course_banner: ["https://dummyimage.com/600x400/000/fff"],
      syllabus: [
        "Introduction to React",
        "Understanding React Components",
        "React Hooks",
        "Managing State in React",
        "Building Interactive UIs",
      ],
      start_date: "2025-04-01T00:00:00Z",
      category_id: "2",
      enrollment_deadline: "2025-03-25T23:59:59Z",
      max_students: 80,
    },
    {
      course_id: "NEXT",
      dept_id: ["AIML", "CSE", "ECE"],
      course_name: "Full-Stack Development with Next.js",
      course_duration_hrs: 50,
      level: "Advanced",
      rating: 4.5,
      isPaid: true,
      user_id: "223346",
      course_desc:
        "Learn how to build scalable, full-stack web apps using Next.js, API routes, and server-side rendering.",
      course_banner: ["https://dummyimage.com/600x400/000/fff"],
      syllabus: [
        "Introduction to Next.js",
        "Building Full-Stack Apps",
        "API Routes in Next.js",
        "Server-Side Rendering",
        "Deploying Next.js Apps",
      ],
      start_date: "2025-05-01T00:00:00Z",
      category_id: "1",
      enrollment_deadline: "2025-04-25T23:59:59Z",
      max_students: 120,
    },
    {
      course_id: "NODE",
      dept_id: ["AIML", "CSE", "ECE"],
      course_name: "Node.js Bootcamp: Backend Fundamentals",
      course_duration_hrs: 45,
      level: "Intermediate",
      rating: 4.3,
      isPaid: false,
      user_id: "223347",
      course_desc:
        "Master the fundamentals of Node.js, Express, and RESTful APIs to build robust backend services.",
      course_banner: ["https://dummyimage.com/600x400/000/fff"],
      syllabus: [
        "Introduction to Node.js",
        "Building RESTful APIs with Express",
        "Asynchronous Programming in Node.js",
        "Database Integration",
        "Deploying Node.js Applications",
      ],
      start_date: "2025-06-01T00:00:00Z",
      category_id: "3",
      enrollment_deadline: "2025-05-25T23:59:59Z",
      max_students: 150,
    },
    {
      course_id: "PYTHON",
      dept_id: ["AIML", "CSE", "ECE"],
      course_name: "Python for Absolute Beginners",
      course_duration_hrs: 35,
      level: "Beginner",
      rating: 4.7,
      isPaid: false,
      user_id: "223348",
      course_desc:
        "Start coding in Python with hands-on exercises, real-world examples, and simple project ideas.",
      course_banner: ["https://dummyimage.com/600x400/000/fff"],
      syllabus: [
        "Introduction to Python",
        "Control Flow in Python",
        "Functions and Modules",
        "Object-Oriented Programming",
        "Python Projects for Beginners",
      ],
      start_date: "2025-07-01T00:00:00Z",
      category_id: "4",
      enrollment_deadline: "2025-06-25T23:59:59Z",
      max_students: 200,
    },
    {
      course_id: "AI_PYTHON",
      dept_id: ["AIML", "CSE", "ECE"],
      course_name: "Applied AI: Build ML Models with Python",
      course_duration_hrs: 60,
      level: "Advanced",
      rating: 4.9,
      isPaid: true,
      user_id: "223349",
      course_desc:
        "Explore real-world AI use cases and train ML models using Python, Pandas, Scikit-learn, and TensorFlow.",
      course_banner: ["https://dummyimage.com/600x400/000/fff"],
      syllabus: [
        "Introduction to AI and ML",
        "Supervised and Unsupervised Learning",
        "Working with Scikit-learn",
        "Building Neural Networks with TensorFlow",
        "Deploying ML Models",
      ],
      start_date: "2025-08-01T00:00:00Z",
      category_id: "6",
      enrollment_deadline: "2025-07-25T23:59:59Z",
      max_students: 50,
    },
    {
      course_id: "TAILWIND",
      dept_id: ["AIML", "CSE", "ECE"],
      course_name: "Responsive UI Design with Tailwind CSS",
      course_duration_hrs: 25,
      level: "Intermediate",
      rating: 4.4,
      isPaid: false,
      user_id: "223350",
      course_desc:
        "Style your apps faster using Tailwind CSS utility-first classes. Build responsive, beautiful UIs with ease.",
      course_banner: ["https://dummyimage.com/600x400/000/fff"],
      syllabus: [
        "Introduction to Tailwind CSS",
        "Utility-First CSS Design",
        "Building Responsive UIs",
        "Advanced Tailwind CSS Features",
        "Optimizing for Performance",
      ],
      start_date: "2025-09-01T00:00:00Z",
      category_id: "7",
      enrollment_deadline: "2025-08-25T23:59:59Z",
      max_students: 100,
    },
  ]
  




//   interface Masterclass {
//     user_id: string;
//     title: string;
//     masterclass_id: string;
//     description: string;
//     location: string;
//     datetime: string;
//     year: number[];
//     department: string[];
//     onlineLink: string;
//     banner: string[];
//   }
  
  export const masterclassData = [
    {
      user_id: "TBAI-ADMIN-3030OQC",
      title: "Introduction to Web Development",
      masterclass_id: "ML103",
      description: "A beginner-friendly masterclass covering the fundamentals of Web Development, including good UI & UX.",
      location: "Room 101, Computer Science Department",
      datetime: "2025-04-10T14:00:00Z",
      year: [1, 2, 3],
      department: ["CSE"],
      onlineLink: "https://example.com/ml-masterclass",
      banner: [
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif",
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif"
      ]
    },
    {
      user_id: "TBAI-ADMIN-3030OQC",
      title: "Advanced Data Structures and Algorithms",
      masterclass_id: "ML104",
      description: "An in-depth masterclass focusing on advanced data structures and algorithms for efficient problem-solving.",
      location: "Room 202, Computer Science Department",
      datetime: "2025-04-12T10:00:00Z",
      year: [2, 3],
      department: ["CSE"],
      onlineLink: "https://example.com/ml-masterclass",
      banner: [
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif",
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif"
      ]
    },
    {
      user_id: "TBAI-ADMIN-3030OQC",
      title: "Machine Learning for Beginners",
      masterclass_id: "ML105",
      description: "Learn the basics of Machine Learning, from algorithms to practical applications and real-world projects.",
      location: "Room 303, Computer Science Department",
      datetime: "2025-04-15T16:00:00Z",
      year: [1, 2],
      department: ["CSE", "AIML"],
      onlineLink: "https://example.com/ml-masterclass",
      banner: [
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif",
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif"
      ]
    },
    {
      user_id: "TBAI-ADMIN-3030OQC",
      title: "Introduction to Cybersecurity",
      masterclass_id: "ML106",
      description: "Gain foundational knowledge of cybersecurity, including the basics of encryption, threat analysis, and mitigation strategies.",
      location: "Room 404, Computer Science Department",
      datetime: "2025-04-20T14:00:00Z",
      year: [2, 3],
      department: ["CSE", "IT"],
      onlineLink: "https://example.com/ml-masterclass",
      banner: [
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif",
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif"
      ]
    },
    {
      user_id: "TBAI-ADMIN-3030OQC",
      title: "Blockchain and Cryptocurrencies",
      masterclass_id: "ML107",
      description: "An introduction to blockchain technology and cryptocurrencies, exploring how they work and their impact on the future of finance.",
      location: "Room 505, Computer Science Department",
      datetime: "2025-04-25T09:00:00Z",
      year: [3],
      department: ["CSE", "IT"],
      onlineLink: "https://example.com/ml-masterclass",
      banner: [
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif",
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif"
      ]
    },
    {
      user_id: "TBAI-ADMIN-3030OQC",
      title: "Cloud Computing Essentials",
      masterclass_id: "ML108",
      description: "Explore the fundamentals of cloud computing, including services like AWS, Google Cloud, and Azure, and their applications in industry.",
      location: "Room 606, Computer Science Department",
      datetime: "2025-05-01T13:00:00Z",
      year: [2, 3],
      department: ["CSE", "IT"],
      onlineLink: "https://example.com/ml-masterclass",
      banner: [
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif",
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif"
      ]
    },
    {
      user_id: "TBAI-ADMIN-3030OQC",
      title: "Deep Learning and Neural Networks",
      masterclass_id: "ML109",
      description: "A deep dive into deep learning concepts, neural networks, and their applications in AI and machine learning.",
      location: "Room 707, Computer Science Department",
      datetime: "2025-05-05T15:00:00Z",
      year: [2, 3],
      department: ["CSE", "AIML"],
      onlineLink: "https://example.com/ml-masterclass",
      banner: [
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif",
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif"
      ]
    },
    {
      user_id: "TBAI-ADMIN-3030OQC",
      title: "Big Data and Data Engineering",
      masterclass_id: "ML110",
      description: "Understand the principles of Big Data processing, storage, and engineering tools such as Hadoop and Spark.",
      location: "Room 808, Computer Science Department",
      datetime: "2025-05-10T11:00:00Z",
      year: [2, 3],
      department: ["CSE", "IT"],
      onlineLink: "https://example.com/ml-masterclass",
      banner: [
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif",
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif"
      ]
    },
    {
      user_id: "TBAI-ADMIN-3030OQC",
      title: "Artificial Intelligence and Ethics",
      masterclass_id: "ML111",
      description: "Explore the ethical challenges and considerations of AI systems, including fairness, bias, and societal impacts.",
      location: "Room 909, Computer Science Department",
      datetime: "2025-05-15T14:00:00Z",
      year: [2, 3],
      department: ["CSE", "AIML"],
      onlineLink: "https://example.com/ml-masterclass",
      banner: [
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif",
        "https://i.postimg.cc/59q7KmM0/temp-Imageo-FEt-Mt.avif"
      ]
    }
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