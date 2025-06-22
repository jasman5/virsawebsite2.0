'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gallery4 } from './gallery4';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function Gallery4Demo() {
  // Enhanced demo data with more descriptive content and consistent image paths
  const demoData = [
    {
      id: "gurpurab",
      title: "Gurpurab",
      description: "Celebrating the sacred birth anniversary of Guru Nanak Dev Ji with devotion and community service.",
      href: "/events/gurpurab",
      image: "Gurupurab25.jpg"
    },
    {
      id: "sham-e-virasat",
      title: "Sham-e-Virasat",
      description: "An enchanting evening showcasing the rich heritage and artistic traditions of Punjab through music, dance, and poetry.",
      href: "/events/sham-e-virasat",
      image: "shaame.jpeg"
    },
    {
      id: "virsa-mela",
      title: "Virsa Mela",
      description: "Our annual cultural festival celebrating the vibrant colors, sounds, and flavors of Punjabi culture with performances and exhibitions.",
      href: "/events/virsa-mela",
      image: "mela.jpeg"
    },
    {
      id: "chabeel",
      title: "Chabeel",
      description: "A traditional sweet drink distribution event symbolizing selfless service and community bonding during summer months.",
      href: "/events/chabeel",
      image: "chabeel.jpeg"
    },
    {
      id: "rubaru",
      title: "Rubaru",
      description: "An intimate cultural exchange program fostering dialogue and understanding through personal stories and shared experiences.",
      href: "/events/rubaru",
      image: "rubaru.jpeg"
    }
  ];

  return (
    <section className='rounded-full' >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange-100/20 rounded-full blur-3xl"></div>
      
      {/* Section Header
      <div className="container mx-auto px-4 mb-12 md:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-amber-600 font-medium uppercase tracking-wider text-sm accent-text">Experience Our Culture</span>
          <h2 className="hero-title mt-2 mb-4 punjabi-accent">Signature Events</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in the vibrant traditions and celebrations that define our Punjabi cultural society.
          </p>
        </motion.div>
      </div> */}
      
      {/* Gallery Component */}
      <div className="container mx-auto px-5">
        <Gallery4 items={demoData} />
      </div>
    </section>
  );
}

export { Gallery4Demo };
