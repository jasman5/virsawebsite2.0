"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./EventsSlider.css";

// import required modules
import { EffectCards } from "swiper/modules";

export default function App() {
  // Event data with descriptions and images
  const events = [
    {
      title: "Gurpurab",
      description: "Celebrating the sacred birth anniversary of Guru Nanak Dev Ji with devotion and community service.",
      image: "gur.jpeg"
    },
    {
      title: "Virsa Mela",
      description: "Our annual cultural festival celebrating the vibrant colors, sounds, and flavors of Punjabi culture.",
      image: "mela.jpeg"
    },
    {
      title: "Sham-e-Virasat",
      description: "An enchanting evening showcasing the rich heritage and artistic traditions of Punjab.",
      image: "shaame.jpeg"
    },
    {
      title: "Chabeel",
      description: "A traditional sweet drink distribution event symbolizing selfless service and community bonding.",
      image: "chabeel.jpeg"
    },
    {
      title: "Rubaru",
      description: "An intimate cultural exchange program fostering dialogue through personal stories and experiences.",
      image: "rubaru.JPG"
    },
    {
      title: "Jaggo",
      description: "Traditional Punjabi wedding celebration with music, dance and festive processions.",
      image: "jaggo.jpeg"
    },
    {
      title: "Orientation",
      description: "Welcoming new members to our cultural society with an introduction to Punjabi traditions.",
      image: "ori2.jpeg"
    },
    {
      title: "Retro Night",
      description: "Celebrating classic Punjabi music, films, and fashion from decades past.",
      image: "retro2.jpeg"
    },
    {
      title: "Team Showcase",
      description: "Meet the passionate individuals who make our cultural events possible.",
      image: "team.jpeg"
    }
  ];

  return (
    <div className="py-12 px-4 bg-black">
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <h2 className="text-3xl font-bold mb-3 text-amber-500 punjabi-accent">Our Cultural Events</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Experience the rich traditions and vibrant celebrations that define our Punjabi cultural heritage through our signature events throughout the year.
        </p>
      </div>
      
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <img src={event.image} alt={event.title} />
            <div className="cultural-pattern"></div>
            <div className="slide-content">
              <h3 className="slide-title">{event.title}</h3>
              <p className="slide-description">{event.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
