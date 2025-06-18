
import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

// Import the client component directly, but don't render it yet
import LoadingScreen from './components/LoadingScrean';

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
// function RootLayoutClient({ children }: { children: React.ReactNode }) {
//   'use client';
  
//   return (
//     <>
//       {/* Loading screen will show on every page load */}
//       <ClientLoadingScreen 
//         duration={1500}        // Show for 1.5 seconds
//         fadeOutDuration={1000} // Fade out over 1 second
//         title="VIRSA"          // Your site name
//         subtitle="Loading your cultural experience..."
//         />
//       {children}
//     </>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${poppins.variable} antialiased`}>
        <LoadingScreen 
        duration={1500}        // Show for 1.5 seconds
        fadeOutDuration={1000} // Fade out over 1 second
        title="VIRSA"          // Your site name
        subtitle="Loading your cultural experience..."
        />
        {children}
      </body>
    </html>
  );
}
