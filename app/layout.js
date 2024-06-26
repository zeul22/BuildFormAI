import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Form Builder",
  description: "By Rahul Anand",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      
    <html lang="en" data-theme="emerald">
      <body className={inter.className}>
        <Header />  
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
