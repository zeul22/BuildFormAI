import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Form Builder",
  description: "By Rahul Anand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="emerald">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
