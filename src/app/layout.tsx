import type { Metadata } from "next";
import { DemoSessionProvider } from "@/components/DemoSessionProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudyPal — Learn better, together",
  description: "Find study groups, connect with classmates, and make your academic journey a little less solo.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}><body className="min-h-full"><DemoSessionProvider>{children}</DemoSessionProvider></body></html>;
}
