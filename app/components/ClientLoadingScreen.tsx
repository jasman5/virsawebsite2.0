'use client';

import dynamic from 'next/dynamic';

// Dynamically import the LoadingScreen with no SSR
const LoadingScreen = dynamic(
  () => import('./LoadingScreen').then(mod => mod.LoadingScreen),
  { ssr: false }
);

interface ClientLoadingScreenProps {
  duration?: number;
  fadeOutDuration?: number;
  title?: string;
  subtitle?: string;
}

export default function ClientLoadingScreen({
  duration = 1500,
  fadeOutDuration = 1000,
  title = "VIRSA",
  subtitle = "Loading your cultural experience..."
}: ClientLoadingScreenProps) {
  return (
    <LoadingScreen
      duration={duration}
      fadeOutDuration={fadeOutDuration}
      title={title}
      subtitle={subtitle}
    />
  );
}