import React from "react";
import App_Navbar from "./components/navbar";
import dynamic from 'next/dynamic';

// Dynamically import heavy components to reduce initial bundle size
const VideoPlayer = dynamic(() => import('./components/VideoPlayer'), {
  loading: () => <div className="w-full h-[90vh] bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>
});

const PhotoSliderHome = dynamic(() => import('./components/PhotoSliderHome'), {
  loading: () => <div className="w-full h-60 bg-black"></div>
});

const MovieNight = dynamic(() => import('./components/EventsSlider'), {
  loading: () => <div className="py-12 px-4 bg-black flex items-center justify-center"><div className="text-white">Loading events...</div></div>
});

const Gallery4Demo = dynamic(() => import('./components/galleryslider').then(mod => ({ default: mod.Gallery4Demo })), {
  loading: () => <div className="py-12 bg-black flex items-center justify-center"><div className="text-white">Loading gallery...</div></div>
});

const GlowingEffectDemo = dynamic(() => import('./components/FactsHome').then(mod => ({ default: mod.GlowingEffectDemo })), {
  loading: () => <div className="mb-20 bg-black flex items-center justify-center"><div className="text-white">Loading facts...</div></div>
});

const FooterSection = dynamic(() => import('./components/footer-section').then(mod => ({ default: mod.FooterSection })), {
  loading: () => <div className="bg-black flex items-center justify-center"><div className="text-white">Loading footer...</div></div>
});

export default function Home() {
  return (
    <div className="bg-black">
      {/* Navbar */}
      <App_Navbar />

      {/* Featured Video Section */}
      <section className="w-full pb-40">
        <div>
          <VideoPlayer />
        </div>
      </section>

      {/* Gallery Slider Section */}
      <section className="w-full">
        <div>
          <PhotoSliderHome />
        </div>
      </section>

      {/* Gallery4Demo Section */}
      <section className="bg-black">
         <Gallery4Demo />
      </section>

      {/* Facts Section */}
      <section className="bg-black ">
        <GlowingEffectDemo />
      </section>

      {/* Footer Section */}
      <section className="bg-black ">
      <FooterSection />
      </section>
    </div>
  );
}
