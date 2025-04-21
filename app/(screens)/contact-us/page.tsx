// ContactPage.tsx
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Building2,
  MailIcon,
  Phone,
  Send,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  subject: z.string().min(1, {
    message: "Please select a subject.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast("We've received your message and will get back to you soon.");
    }, 1500);
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col gap-5">
      <div className="text-center flex flex-col gap-5">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have questions about our AI solutions? Our team is here to help you
          transform your business with cutting-edge technology.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <Card className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                Contact Information
              </CardTitle>
              <CardDescription>
                Reach out to us through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <MailIcon className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">
                    Email Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    contact@technobillion.ai
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    support@technobillion.ai
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">
                    Call Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    +91 98765 43210
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <Building2 className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">
                    Headquarters
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Techno Billion Tower, Tech Park
                    <br />
                    Bengaluru, Karnataka 560103
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">
                    US Office
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    1250 Innovation Drive
                    <br />
                    San Francisco, CA 94107
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/technobillionai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  <svg
                    className="h-5 w-5 text-blue-700 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/technobillionai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  <svg
                    className="h-5 w-5 text-blue-700 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/technobillionai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  <svg
                    className="h-5 w-5 text-blue-700 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="h-full shadow-md">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mb-6">
                  <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-center mb-4">
                  Message Sent!
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-6">
                  Thank you for reaching out. Our team will get back to you as
                  soon as possible.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="john@example.com"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="+91 98765 43210"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a subject" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="general">
                                    General Inquiry
                                  </SelectItem>
                                  <SelectItem value="sales">
                                    Sales & Pricing
                                  </SelectItem>
                                  <SelectItem value="support">
                                    Technical Support
                                  </SelectItem>
                                  <SelectItem value="partnership">
                                    Partnership Opportunities
                                  </SelectItem>
                                  <SelectItem value="careers">
                                    Careers
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Let us know how we can help you..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </>
            )}
          </Card>
        </div>
      </div>


    </div>
  );
}
