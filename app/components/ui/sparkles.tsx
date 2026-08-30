"use client";
import React from "react";
import { cn } from "@/app/lib/utils";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const { className } = props;

  return (
    <div className={cn("w-full h-full", className)}>
      {/* Simple CSS-based sparkles effect */}
      <div className="w-full h-full bg-gradient-to-br from-transparent to-white/10 rounded-full blur-xl"></div>
    </div>
  );
};
