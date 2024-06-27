import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "../@/components/ui/sonner"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BuildFormAI",
  description: "By Rahul Anand",
  icons:{
    icon:"/logo.svg",
    apple:"/logo.svg",
  }
  
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      
    <html lang="en" data-theme="emerald">
      <body className={inter.className}>
        <Header /> 
        <Toaster /> 
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
