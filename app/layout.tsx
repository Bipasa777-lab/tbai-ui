import type { Metadata } from "next";
import "./globals.css";





export const metadata: Metadata = {
  title: "TBAI",
  description: "Next Gen AI EDU",
};
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Toaster/>
    </html>
  );
}