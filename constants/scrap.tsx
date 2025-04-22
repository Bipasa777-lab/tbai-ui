// import Link from "next/link"
// import { useLoading } from "@/app/providers"

// export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
//   const { setLoading } = useLoading()

//   const handleClick = () => {
//     setLoading(true)
//   }

//   return (
//     <Link href={href} onClick={handleClick}>
//       {children}
//     </Link>
//   )
// }


// const { setLoading } = useLoader()

// const loadData = async () => {
//   setLoading(true)
//   await fetch("/api/my-endpoint")
//   setLoading(false)
// }



// // ContactPage.tsx
// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import {
//   Building2,
//   MailIcon,
//   Phone,
//   Send,
//   MapPin,
//   CheckCircle2,
//   Sparkles,
//   Clock,
//   Globe,
// } from "lucide-react";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";

// const formSchema = z.object({
//   name: z.string().min(2, {
//     message: "Name must be at least 2 characters.",
//   }),
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   phone: z.string().min(10, {
//     message: "Please enter a valid phone number.",
//   }),
//   subject: z.string().min(1, {
//     message: "Please select a subject.",
//   }),
//   message: z.string().min(10, {
//     message: "Message must be at least 10 characters.",
//   }),
// });

// export default function ContactPage() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//       subject: "",
//       message: "",
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     setIsSubmitting(true);

//     // Simulate API call
//     setTimeout(() => {
//       console.log(values);
//       setIsSubmitting(false);
//       setIsSubmitted(true);
//       toast("We've received your message and will get back to you soon.");
//     }, 1500);
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
//       <div className="container mx-auto px-4 py-16 md:py-24">
//         {/* Hero Section with animated background */}
//         <div className="relative overflow-hidden rounded-2xl mb-16 bg-blue-600 dark:bg-blue-800 p-8 md:p-12">
//           <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 opacity-90"></div>
          
//           <div className="relative z-10 text-center flex flex-col gap-6 max-w-3xl mx-auto">
//             <div className="inline-block mx-auto bg-white/10 backdrop-blur-sm rounded-full p-2 mb-2">
//               <Sparkles className="h-6 w-6 text-blue-100" />
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold text-white">
//               Let's Connect
//             </h1>
//             <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
//               Have questions about our AI solutions? Our team is here to help you
//               transform your business with cutting-edge technology.
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center mt-2">
//               <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
//                 <Clock className="h-4 w-4 text-blue-200 mr-2" />
//                 <span className="text-blue-100 text-sm">24/7 Support</span>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
//                 <Globe className="h-4 w-4 text-blue-200 mr-2" />
//                 <span className="text-blue-100 text-sm">Global Presence</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {/* Contact Information */}
//           <div className="lg:col-span-1">
//             <Card className="h-full overflow-hidden border-0 shadow-xl">
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 opacity-10 rounded-xl"></div>
              
//               <CardHeader className="relative space-y-1">
//                 <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-blue-300 to-indigo-400 dark:from-blue-600 dark:to-indigo-700 rounded-bl-[4rem] -mr-5 -mt-5 opacity-20"></div>
//                 <CardTitle className="text-2xl font-bold text-blue-700 dark:text-blue-400">
//                   Contact Information
//                 </CardTitle>
//                 <CardDescription className="text-blue-600/70 dark:text-blue-300/70">
//                   Reach out to us through any of these channels
//                 </CardDescription>
//               </CardHeader>
              
//               <CardContent className="relative space-y-8 z-10">
//                 <div className="flex items-start group">
//                   <div className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 p-3 rounded-xl mr-4 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
//                     <MailIcon className="h-5 w-5 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800 dark:text-gray-200">
//                       Email Us
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//                       contact@technobillion.ai
//                     </p>
//                     <p className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//                       support@technobillion.ai
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start group">
//                   <div className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 p-3 rounded-xl mr-4 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
//                     <Phone className="h-5 w-5 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800 dark:text-gray-200">
//                       Call Us
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-400">
//                       +91 98765 43210
//                     </p>
//                     <p className="text-gray-600 dark:text-gray-400">
//                       +1 (555) 123-4567
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start group">
//                   <div className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 p-3 rounded-xl mr-4 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
//                     <Building2 className="h-5 w-5 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800 dark:text-gray-200">
//                       Headquarters
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-400">
//                       Techno Billion Tower, Tech Park
//                       <br />
//                       Bengaluru, Karnataka 560103
//                       <br />
//                       India
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start group">
//                   <div className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 p-3 rounded-xl mr-4 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
//                     <MapPin className="h-5 w-5 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800 dark:text-gray-200">
//                       US Office
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-400">
//                       1250 Innovation Drive
//                       <br />
//                       San Francisco, CA 94107
//                       <br />
//                       United States
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
              
//               <CardFooter className="relative z-10">
//                 <div className="flex space-x-3">
//                   <a
//                     href="https://twitter.com/technobillionai"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 p-2 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
//                   >
//                     <svg
//                       className="h-5 w-5 text-white"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                     </svg>
//                   </a>
//                   <a
//                     href="https://linkedin.com/company/technobillionai"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 p-2 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
//                   >
//                     <svg
//                       className="h-5 w-5 text-white"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                     </svg>
//                   </a>
//                   <a
//                     href="https://github.com/technobillionai"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 p-2 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
//                   >
//                     <svg
//                       className="h-5 w-5 text-white"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
//                     </svg>
//                   </a>
//                 </div>
//               </CardFooter>
//             </Card>
//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-2">
//             <Card className="h-full overflow-hidden border-0 shadow-xl">
//               <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 opacity-80 rounded-xl"></div>
              
//               {isSubmitted ? (
//                 <div className="relative z-10 flex flex-col items-center justify-center h-full py-16 px-4">
//                   <div className="p-4 rounded-full mb-6 bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
//                     <CheckCircle2 className="h-12 w-12 text-white" />
//                   </div>
//                   <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
//                     Message Sent!
//                   </h2>
//                   <p className="text-gray-600 dark:text-gray-300 text-center max-w-md mb-8">
//                     Thank you for reaching out. Our team will get back to you as
//                     soon as possible.
//                   </p>
//                   <Button
//                     onClick={() => setIsSubmitted(false)}
//                     className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-md hover:shadow-lg transition-all duration-300"
//                   >
//                     Send Another Message
//                   </Button>
//                 </div>
//               ) : (
//                 <>
//                   <CardHeader className="relative z-10 space-y-1">
//                     <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-blue-300 to-indigo-400 dark:from-blue-600 dark:to-indigo-700 rounded-bl-[4rem] -mr-6 -mt-6 opacity-20"></div>
//                     <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-500 dark:to-indigo-600 bg-clip-text text-transparent">
//                       Send Us a Message
//                     </CardTitle>
//                     <CardDescription className="text-gray-600 dark:text-gray-300">
//                       Fill out the form below and we'll respond within 24 hours
//                     </CardDescription>
//                   </CardHeader>
                  
//                   <CardContent className="relative z-10">
//                     <Form {...form}>
//                       <form
//                         onSubmit={form.handleSubmit(onSubmit)}
//                         className="space-y-6"
//                       >
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                           <FormField
//                             control={form.control}
//                             name="name"
//                             render={({ field }) => (
//                               <FormItem>
//                                 <FormLabel className="text-gray-700 dark:text-gray-200">Full Name</FormLabel>
//                                 <FormControl>
//                                   <Input 
//                                     placeholder="John Doe" 
//                                     {...field} 
//                                     className="border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 shadow-sm transition-all duration-300" 
//                                   />
//                                 </FormControl>
//                                 <FormMessage />
//                               </FormItem>
//                             )}
//                           />

//                           <FormField
//                             control={form.control}
//                             name="email"
//                             render={({ field }) => (
//                               <FormItem>
//                                 <FormLabel className="text-gray-700 dark:text-gray-200">Email</FormLabel>
//                                 <FormControl>
//                                   <Input
//                                     placeholder="john@example.com"
//                                     {...field}
//                                     className="border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 shadow-sm transition-all duration-300"
//                                   />
//                                 </FormControl>
//                                 <FormMessage />
//                               </FormItem>
//                             )}
//                           />
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                           <FormField
//                             control={form.control}
//                             name="phone"
//                             render={({ field }) => (
//                               <FormItem>
//                                 <FormLabel className="text-gray-700 dark:text-gray-200">Phone Number</FormLabel>
//                                 <FormControl>
//                                   <Input
//                                     placeholder="+91 98765 43210"
//                                     {...field}
//                                     className="border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 shadow-sm transition-all duration-300"
//                                   />
//                                 </FormControl>
//                                 <FormMessage />
//                               </FormItem>
//                             )}
//                           />

//                           <FormField
//                             control={form.control}
//                             name="subject"
//                             render={({ field }) => (
//                               <FormItem>
//                                 <FormLabel className="text-gray-700 dark:text-gray-200">Subject</FormLabel>
//                                 <Select
//                                   onValueChange={field.onChange}
//                                   defaultValue={field.value}
//                                 >
//                                   <FormControl>
//                                     <SelectTrigger className="border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 shadow-sm transition-all duration-300">
//                                       <SelectValue placeholder="Select a subject" />
//                                     </SelectTrigger>
//                                   </FormControl>
//                                   <SelectContent>
//                                     <SelectItem value="general">
//                                       General Inquiry
//                                     </SelectItem>
//                                     <SelectItem value="sales">
//                                       Sales & Pricing
//                                     </SelectItem>
//                                     <SelectItem value="support">
//                                       Technical Support
//                                     </SelectItem>
//                                     <SelectItem value="partnership">
//                                       Partnership Opportunities
//                                     </SelectItem>
//                                     <SelectItem value="careers">
//                                       Careers
//                                     </SelectItem>
//                                   </SelectContent>
//                                 </Select>
//                                 <FormMessage />
//                               </FormItem>
//                             )}
//                           />
//                         </div>

//                         <FormField
//                           control={form.control}
//                           name="message"
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel className="text-gray-700 dark:text-gray-200">Message</FormLabel>
//                               <FormControl>
//                                 <Textarea
//                                   placeholder="Let us know how we can help you..."
//                                   className="min-h-[150px] border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 shadow-sm transition-all duration-300"
//                                   {...field}
//                                 />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />

//                         <Button
//                           type="submit"
//                           className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-md hover:shadow-lg transition-all duration-300"
//                           disabled={isSubmitting}
//                         >
//                           {isSubmitting ? (
//                             <>
//                               <svg
//                                 className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <circle
//                                   className="opacity-25"
//                                   cx="12"
//                                   cy="12"
//                                   r="10"
//                                   stroke="currentColor"
//                                   strokeWidth="4"
//                                 ></circle>
//                                 <path
//                                   className="opacity-75"
//                                   fill="currentColor"
//                                   d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                                 ></path>
//                               </svg>
//                               Sending...
//                             </>
//                           ) : (
//                             <>
//                               <Send className="mr-2 h-4 w-4" />
//                               Send Message
//                             </>
//                           )}
//                         </Button>
//                       </form>
//                     </Form>
//                   </CardContent>
//                 </>
//               )}
//             </Card>
//           </div>
//         </div>
        
//         {/* Map Section */}
//         <div className="mt-16 max-w-6xl mx-auto">
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl overflow-hidden">
//             <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-500 dark:to-indigo-600 bg-clip-text text-transparent">
//               Our Global Presence
//             </h2>
//             <div className="aspect-video w-full rounded-xl overflow-hidden">
//               {/* Replace with actual Map component or iframe */}
//               <div className="w-full h-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center">
//                 <p className="text-lg text-gray-500 dark:text-gray-400">
//                   Interactive map would be displayed here
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* FAQ Section */}
//         <div className="mt-16 max-w-3xl mx-auto text-center">
//           <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-500 dark:to-indigo-600 bg-clip-text text-transparent">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 mb-8">
//             Can't find what you're looking for? Contact our support team.
//           </p>
          
//           {/* Add accordion or FAQ components here */}
//         </div>
//       </div>
//     </div>
//   );
// }















// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import { PlayCircleIcon, StarIcon, TrendingUpIcon, AwardIcon } from "lucide-react";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export default function QuizePage() {
//   const [date, setDate] = useState<Date | undefined>(new Date());
//   const [mounted, setMounted] = useState(false);

//   // Handle hydration issues with date picker
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const quizzes = [
//     {
//       id: 1,
//       title: "The Brain Battle",
//       level: "Level 1",
//       image: "/books.png",
//       bgColor: "bg-gradient-to-br from-red-50 to-red-200",
//       borderColor: "border-red-300",
//       iconBg: "bg-red-500",
//       icon: <StarIcon className="w-5 h-5 text-white" />,
//       description: "Test your knowledge across various subjects in this exciting challenge.",
//     },
//     {
//       id: 2,
//       title: "The Know-It-All Knockout",
//       level: "Level 2",
//       image: "/fire.png",
//       bgColor: "bg-gradient-to-br from-blue-50 to-blue-200",
//       borderColor: "border-blue-300",
//       iconBg: "bg-blue-500",
//       icon: <TrendingUpIcon className="w-5 h-5 text-white" />,
//       description: "Race against time with rapid-fire questions to prove your expertise.",
//     },
//     {
//       id: 3,
//       title: "Rapid Fire Recall",
//       level: "Level 3",
//       image: "/hot-air-baloon.png",
//       bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-200",
//       borderColor: "border-yellow-300", 
//       iconBg: "bg-yellow-500",
//       icon: <AwardIcon className="w-5 h-5 text-white" />,
//       description: "Challenge your memory in this fast-paced knowledge recall game.",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5
//       }
//     }
//   };

//   return (
//     <div className=" min-h-screen">
//       <main className="max-w-7xl mx-auto flex flex-col gap-8 px-4 py-8 md:px-8 lg:px-16">
      

//         {/* Problem of the Day */}
//         <motion.section 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100"
//         >
//           <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
//             <div className="flex-1">
//               <div className="flex items-center mb-3">
//                 <div className="bg-indigo-500 rounded-full p-2 mr-3">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
//                     <path d="M12 2a8 8 0 0 0-8 8v12l8-4 8 4V10a8 8 0 0 0-8-8z"></path>
//                   </svg>
//                 </div>
//                 <h2 className="text-xl md:text-2xl font-bold">Problem of the Day</h2>
//               </div>
//               <p className="text-gray-700 mb-4 md:text-lg">
//                 Challenge your brain every day with a new problem designed to test your critical thinking.
//               </p>
//               <p className="text-sm text-gray-500 mb-6">
//                 Complete today's challenge to maintain your daily streak and climb the leaderboard!
//               </p>
//               <Button className="rounded-full px-8 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium flex items-center gap-2 transform transition hover:scale-105">
//                 <PlayCircleIcon className="w-5 h-5" />
//                 Play Now
//               </Button>
//             </div>
//             <div className="flex-shrink-0 w-full md:w-auto">
//               <div className="relative">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-20"></div>
//                 <img
//                   src="/quiz-img.jpg"
//                   alt="Problem of the day"
//                   className="relative w-full md:w-[320px] md:h-[200px] object-cover rounded-2xl shadow-md"
//                 />
//               </div>
//             </div>
//           </div>
//         </motion.section>


//                 {/* Stats Section */}
//                 <motion.section 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100 mt-4"
//         >
//           <h2 className="text-xl md:text-2xl font-bold mb-6">Your Quiz Stats</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
//               <p className="text-purple-600 text-sm font-medium">Total Quizzes</p>
//               <p className="text-3xl font-bold text-purple-800">24</p>
//             </div>
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
//               <p className="text-blue-600 text-sm font-medium">Average Score</p>
//               <p className="text-3xl font-bold text-blue-800">78%</p>
//             </div>
//             <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
//               <p className="text-green-600 text-sm font-medium">Current Streak</p>
//               <p className="text-3xl font-bold text-green-800">5 days</p>
//             </div>
//             <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200">
//               <p className="text-amber-600 text-sm font-medium">Ranking</p>
//               <p className="text-3xl font-bold text-amber-800">#42</p>
//             </div>
//           </div>
//         </motion.section>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Calendar Section */}
//           <motion.section 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 lg:col-span-1"
//           >
//             <div className="flex items-center mb-4">
//               <div className="bg-green-500 rounded-full p-2 mr-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
//                   <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
//                   <line x1="16" y1="2" x2="16" y2="6"></line>
//                   <line x1="8" y1="2" x2="8" y2="6"></line>
//                   <line x1="3" y1="10" x2="21" y2="10"></line>
//                 </svg>
//               </div>
//               <h2 className="text-xl font-bold">Daily Task Calendar</h2>
//             </div>
//             {mounted && (
//               <Calendar 
//                 mode="single" 
//                 selected={date} 
//                 onSelect={setDate} 
//                 className="rounded-xl border border-gray-200 shadow-sm p-3 bg-white" 
//               />
//             )}
//             <div className="mt-4 flex gap-2 flex-wrap">
//               <div className="flex items-center gap-1">
//                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                 <span className="text-xs text-gray-600">Completed</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                 <span className="text-xs text-gray-600">Pending</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//                 <span className="text-xs text-gray-600">Upcoming</span>
//               </div>
//             </div>
//           </motion.section>

//           {/* Popular Quizzes - Now takes 2/3 of the grid on larger screens */}
//           <motion.section 
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="lg:col-span-2 py-4"
//           >
//             <div className="flex items-center mb-6">
//               <div className="bg-orange-500 rounded-full p-2 mr-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
//                   <path d="M12 20v-6M6 20V10M18 20V4"></path>
//                 </svg>
//               </div>
//               <h2 className="text-xl md:text-2xl font-bold">Popular Quizzes</h2>
//             </div>

//             <div className="flex flex-col w-full gap-4">
//               {quizzes.map((quiz) => (
//                 <motion.div
//                   key={quiz.id}
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.02 }}
//                   className="overflow-hidden"
//                 >
//                   <Card
//                     className={`${quiz.bgColor} rounded-2xl shadow-md overflow-hidden border ${quiz.borderColor} h-auto md:h-[200px]`}
//                   >
//                     <CardContent className="p-0 h-full">
//                       <div className="flex flex-col md:flex-row justify-between h-full">
//                         <div className="flex flex-col justify-between p-6 relative z-10 flex-1">
//                           <div>
//                             <div className="flex items-center gap-2 mb-3">
//                               <div className={`${quiz.iconBg} p-1.5 rounded-full`}>
//                                 {quiz.icon}
//                               </div>
//                               <span className="text-sm font-semibold text-gray-700">
//                                 {quiz.level}
//                               </span>
//                             </div>
//                             <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
//                               {quiz.title}
//                             </h3>
//                             <p className="text-gray-600 text-sm md:text-base mb-4 hidden md:block">
//                               {quiz.description}
//                             </p>
//                           </div>
//                           <Button className="w-fit rounded-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 flex items-center gap-2 mt-auto">
//                             <PlayCircleIcon className="w-5 h-5" />
//                             Start Quiz
//                           </Button>
//                         </div>
//                         <div className="flex items-center justify-center md:justify-end p-4 md:p-6">
//                           <img
//                             className="object-contain h-24 md:h-32 lg:h-40"
//                             alt={`${quiz.title} illustration`}
//                             src={quiz.image}
//                           />
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>
//         </div>
        

//       </main>
      
//       {/* <footer className="mt-12  text-gray-300 py-8">
//         <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-black font-bold text-lg mb-4">Quiz Arena</h3>
//               <p className="text-sm text-gray-400">Challenge your mind with our daily quizzes and improve your knowledge in various categories.</p>
//             </div>
//             <div>
//               <h3 className="text-black font-bold text-lg mb-4">Categories</h3>
//               <ul className="space-y-2 text-sm">
//                 <li>General Knowledge</li>
//                 <li>Science & Technology</li>
//                 <li>History & Culture</li>
//                 <li>Sports & Entertainment</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-black font-bold text-lg mb-4">Quick Links</h3>
//               <ul className="space-y-2 text-sm">
//                 <li>My Profile</li>
//                 <li>Leaderboard</li>
//                 <li>Challenges</li>
//                 <li>Help & Support</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-black font-bold text-lg mb-4">Connect</h3>
//               <div className="flex space-x-4 mb-4">
//                 <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
//                     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
//                   </svg>
//                 </div>
//                 <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
//                     <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
//                   </svg>
//                 </div>
//                 <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
//                     <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
//                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//                     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
//                   </svg>
//                 </div>
//               </div>
//               <p className="text-xs text-gray-400">© 2025 Quiz Arena. All rights reserved.</p>
//             </div>
//           </div>
//         </div>
//       </footer> */}
//     </div>
//   );
// }


// |-- app/
// |   |-- (auth)/
// |   |   |-- login/
// |   |   |   |-- page.tsx
// |   |   |-- register/
// |   |       |-- page.tsx
// |   |-- (screens)/
// |   |   |-- assistant/
// |   |   |-- change-password/
// |   |   |-- contact-us/
// |   |   |-- enrolled-course/
// |   |   |-- masterclass/
// |   |   |-- module-section/
// |   |   |-- notification/
// |   |   |-- privacy-policy/
// |   |   |-- quiz/
// |   |   |-- profile/
// |   |   |-- single-course/
// |   |   |-- terms-and-condition/
// |   |   |-- single-quiz/
// |   |-- splash/
// |   |   |-- SplashScreen.tsx
// |   |   |-- data.ts
// |   |   |-- page.tsx
// |   |-- components/
// |   |   |-- ProgressBar.tsx
// |   |-- layout.tsx
// |   |-- page.tsx
// |   |-- globals.css
// |
// |-- components/
// |   |-- layout/
// |   |   |-- LayoutWrapper.tsx
// |   |   |-- app-sidebar.tsx
// |   |-- navigation/
// |   |   |-- nav-main.tsx
// |   |   |-- nav-user.tsx
// |   |   |-- nav-actions.tsx
// |   |-- cards/
// |   |   |-- BadgeCard.tsx
// |   |   |-- CourseCard.tsx
// |   |   |-- MasterClassCard.tsx
// |   |   |-- RecentPlayCard.tsx
// |   |-- course/
// |   |   |-- CourseHeader.tsx
// |   |   |-- CourseDescription.tsx
// |   |   |-- CourseMetadata.tsx
// |   |   |-- EnrollButton.tsx
// |   |   |-- ModuleList.tsx
// |   |   |-- VideoBanner.tsx
// |   |-- feedback/
// |   |   |-- PageLoader.tsx
// |   |-- ui/                   # From shadcn/ui
// |   |   |-- [shadcn UI components...]
// |
// |-- constants/
// |   |-- index.ts
// |   |-- scrap.tsx
// |
// |-- context/
// |   |-- AuthContext.tsx      # (optional) for global auth
// |   |-- LoaderContext.tsx
// |
// |-- hooks/
// |   |-- use-mobile.ts
// |   |-- useRouteLoader.ts
// |   |-- useAuth.ts            # (optional) hook for auth
// |
// |-- lib/
// |   |-- utils.ts
// |   |-- api.ts                # central axios/fetch instance
// |   |-- auth.ts               # helper methods for auth
// |
// |-- public/
// |   |-- images/
// |   |   |-- splash/
// |   |   |   |-- splash1.png
// |   |   |   |-- splash2.png
// |   |   |   |-- splash3.png
// |   |   |-- course/
// |   |   |-- ...
// |
// |-- test/
// |   |-- test-api-call-loader/
// |   |-- test-routing-loader/
// |
// |-- types/
// |   |-- index.d.ts
// |   |-- splash.ts
// |   |-- user.ts
// |
// |-- .gitignore
// |-- README.md
// |-- components.json
// |-- eslint.config.mjs
// |-- next-env.d.ts
// |-- next.config.ts
// |-- package.json
// |-- package-lock.json
// |-- postcss.config.mjs
// |-- tailwind.config.ts
// |-- tsconfig.json
