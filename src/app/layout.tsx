import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "YOUR BRAND | Premium Beauty Studio Los Angeles",
  description:
    "Premium beauty studio in Los Angeles offering custom facials, lash extensions, brow design, and transformative skincare treatments.",
  keywords: [
    "beauty studio",
    "facials",
    "lash extensions",
    "brow design",
    "skincare",
    "Los Angeles",
    "esthetician",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-studio-bg text-studio-text antialiased">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
