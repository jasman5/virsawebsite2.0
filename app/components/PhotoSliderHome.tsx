"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Define an array of image URLs for the slideshow with better quality images
const images: string[] = [
  "/team.jpeg",
  "/team3.jpeg",
  "/team4.jpeg",
  "/team5.PNG",
  "/jaggo.jpeg",
  "/mela23.jpeg",
  "/gur6.jpeg",
];

const PhotoSliderHome: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Only run animations after component is mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative h-60 -mt-52 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent pointer-events-none z-10"></div>
      {mounted && (
        <div 
          ref={containerRef}
          className="flex space-x-10 slideshow-container whitespace-nowrap px-6"
          style={{ 
            animation: 'slideLoop 30s linear infinite',
            width: `${images.length * 2 * 288}px` // Double the width to accommodate duplicated images
          }}
        >
          {/* First set of images */}
          {images.map((image, index) => (
            <div 
              key={`original-${index}`} 
              className="w-72 h-48 rounded-lg overflow-hidden shadow-2xl flex-shrink-0 transform transition-transform hover:scale-105 hover:-translate-y-1 duration-300"
              style={{
                boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div className="w-full h-full relative">
                <Image 
                  src={image} 
                  alt={`Slide ${index + 1}`} 
                  fill
                  sizes="(max-width: 768px) 100vw, 288px"
                  className="object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                </div>
              </div>
            </div>
          ))}
          
          {/* Duplicated set of images for seamless loop */}
          {images.map((image, index) => (
            <div 
              key={`duplicate-${index}`} 
              className="w-72 h-48 rounded-lg overflow-hidden shadow-2xl flex-shrink-0 transform transition-transform hover:scale-105 hover:-translate-y-1 duration-300"
              style={{
                boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div className="w-full h-full relative">
                <Image 
                  src={image} 
                  alt={`Slide ${index + 1}`} 
                  fill
                  sizes="(max-width: 768px) 100vw, 288px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoSliderHome;