"use client";
import LoadingScreen from './LoadingScreen';

export default function ClientLoadingScreen() {
  return (
    <LoadingScreen
      duration={1000}
      fadeOutDuration={500}
      title="VIRSA"
      subtitle="Loading your cultural experience..."
    />
  );
}
