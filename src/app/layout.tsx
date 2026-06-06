import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Lumiere Wellness Center — Your skin at its best",
  description:
    "Personalized facial treatments with cutting-edge techniques and premium products. Book your session today.",
  keywords: [
    "Lumiere Wellness Center",
    "facial aesthetics",
    "facial treatments",
    "deep cleansing",
    "radiofrequency",
    "Buenos Aires",
    "skincare",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
