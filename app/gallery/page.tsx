'use client';

import React, { useState } from 'react';
import App_Navbar from '../components/navbar';
import TimelineGallery from '../components/TimelineGallery';
import GalleryView from '../components/GalleryView';
import { FooterSection } from '../components/footer-section';

const GalleryPage = () => {
  const [selectedYear, setSelectedYear] = useState('2025');

  return (
    <>
      <App_Navbar />
      <TimelineGallery onYearChange={setSelectedYear} />
      <GalleryView selectedYear={selectedYear} />
      <FooterSection />
    </>
  );
};

export default GalleryPage;
