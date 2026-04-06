
import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

// Import the client component directly, but don't render it yet
import LoadingScreen from './components/LoadingScreen';

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Virsa - Punjabi Cultural Society",
  description: "Celebrating and preserving Punjabi culture and heritage",
};

// Create a client component wrapper for the body content
function RootLayoutClient({ children }: { children: React.ReactNode }) {
  'use client';
  
  return (
    <>
      {/* Loading screen will show on every page load */}
      <LoadingScreen 
        duration={1000}        // Reduced from 1500ms
        fadeOutDuration={500}  // Reduced from 1000ms
        title="VIRSA"          
        subtitle="Loading your cultural experience..."
        />
      {children}
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${poppins.variable} antialiased`}>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
