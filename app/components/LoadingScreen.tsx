"use client";
import React, { useState, useEffect } from "react";
import { SparklesCore } from "@/app/components/ui/sparkles";

interface LoadingScreenProps {
  duration?: number; // How long to show the loading screen (in milliseconds)
  fadeOutDuration?: number; // How long the fade out animation takes
  title?: string; // Custom title text
  subtitle?: string; // Custom subtitle text
}

export default function LoadingScreen({ 
  duration = 1500, 
  fadeOutDuration = 1000,
  title = "VIRSA",
  subtitle = "Loading your experience..."
}: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start fade out after specified duration
    const timer = setTimeout(() => {
      setIsAnimating(true);
      
      // Complete fade out after animation duration
      setTimeout(() => {
        setIsVisible(false);
      }, fadeOutDuration);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, fadeOutDuration]);

  // Don't render anything if not visible
  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 transition-opacity ease-in-out ${
        isAnimating ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ 
        transitionDuration: `${fadeOutDuration}ms`,
        // Prevent scrolling while loading screen is active
        overflow: 'hidden'
      }}
    >
      {/* Main container */}
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
        
        {/* Sparkles background */}
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="loadingsparkles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#ee8736"
            speed={1}
          />
        </div>
        
        {/* Content overlay */}
        <div className="flex flex-col items-center justify-center gap-6 relative z-20 px-4">
          
          {/* Main title with gradient and pulse animation */}
          <h1 className="md:text-7xl text-4xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 animate-pulse">
            {title}
          </h1>
          
          {/* Animated dots */}
          <div className="flex space-x-2 mb-4">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-neutral-300 text-center text-lg font-light tracking-wide">
            {subtitle}
          </p>
          
        </div>
      </div>
    </div>
  );
}