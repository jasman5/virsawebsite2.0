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
      <section className="w-full pb-0">
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

      {/* Registration Banner Section - Just above footer */}
      <section className="w-full py-16 px-4 bg-black">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-900 rounded-2xl p-10 md:p-14 border-2 border-amber-500/30 shadow-2xl">
              <div className="inline-block px-4 py-2 bg-amber-500 text-white text-sm font-semibold rounded-full mb-4 animate-pulse">
                NOW OPEN
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
                Registrations Open!
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join Virsa Cultural Society - Open for 1st and 2nd Year Students
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfG5k6Q21EEmabCJb9QAEn-x45sN38YZtxnXToncoDUt83Zcw/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-black ">
      <FooterSection />
      </section>
    </div>
  );
}
