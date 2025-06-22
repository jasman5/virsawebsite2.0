'use client';

import React, { useEffect, useState } from 'react';
import styles from './GalleryView.module.css';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface GalleryImage {
  id: number;
  width: number;
  height: number;
  url?: string;
  caption?: string;
}

interface GalleryViewProps {
  selectedYear?: string;
}

const GalleryView: React.FC<GalleryViewProps> = ({ selectedYear = '2025' }) => {
  // console.log('Selected year:', selectedYear);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  // Generate different image sets based on the year
  useEffect(() => {
    // Define custom images for each year
    const yearToImages: Record<string, Array<{url: string, caption: string}>> = {
      
      '2022': [
        { url: 'https://i.imgur.com/Fovvwzu.jpg', caption: 'Cultural Showcase 2022' },
        { url: 'https://imageshack.com/i/poHDAWmIj', caption: 'Dance Competition 2022' },
        { url: 'chabeel2.jpeg', caption: 'Chabeel 2022' },
        { url: 'https://imageshack.com/i/pnrUdczjj', caption: 'Gurupurab 2022' },
        { url: 'https://imagizer.imageshack.com/img923/6546/BDR0TD.jpg', caption: 'Society fair 2022' },
        { url: 'https://imagizer.imageshack.com/img922/597/uM6hUG.jpg', caption: 'Turban tying 2022' },
      ],
      '2023': [
        { url: 'mela9.jpeg', caption: 'Cultural Showcase 2023' },
        { url: 'shaame.jpeg', caption: 'shaame e virasat 2023' },
        { url: 'chabeel2.jpeg', caption: 'Chabeel 2023' },
        { url: 'gur3.jpeg', caption: 'Gurupurab 2023' },
        { url: 'mela23.jpeg', caption: 'team 2023' },
        { url: 'team.jpeg', caption: 'Closing Ceremony 2023' },
      ],
      '2024': [
        { url: 'mela8.jpg', caption: 'Cultural Showcase 2024' },
        { url: 'mela6.jpg', caption: 'Mela 2024' },
        { url: 'chabeel.jpeg', caption: 'Chabeel 2024' },
        { url: 'gur4.jpeg', caption: 'Gurupurab 2024' },
        { url: 'rubaru2.jpeg', caption: 'Virsa talks 2024' },
        { url: 'ori2.jpeg', caption: 'Closing Ceremony 2024' },
      ],
      '2025': [
        { url: 'mela24.jpg', caption: 'Cultural Showcase 2025' },
        { url: 'mela5.jpeg', caption: 'Mela  2025' },
        { url: 'chabeel3.jpg', caption: 'Chabeel 2025' },
        { url: 'gur10.jpeg', caption: 'Gurupurab 2025' },
        { url: 'retro3.jpeg', caption: 'Retro Games 2025' },
        { url: 'mela3.jpeg', caption: 'Virsa walk 2025' },
      ],
    };

    // Get images for the selected year or use default
    
    const yearImages = yearToImages[selectedYear] || yearToImages['2025'];
    
    // Generate gallery images with dimensions
    const newGalleryImages = yearImages.map((img, index) => {
      // Create different proportions for each image
      const heightMultiplier = (index % 4) + 5; // 5-8
      const widthMultiplier = (index + 2) + 5; // 5-8
      
      return {
        id: index,
        height: 200 * heightMultiplier,
        width: 200 * widthMultiplier,
        url: img.url,
        caption: img.caption
      };
    });
    
    setGalleryImages(newGalleryImages);
    
    // Re-initialize Fancybox when images change
    Fancybox.bind("[data-fancybox]", {
      // Options here
    });
    
    return () => {
      Fancybox.destroy();
    };
  }, [selectedYear ]);

  useEffect(() => {
    // Check if it's a touch device
    const isTouchCapable = 'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      (navigator as any).msMaxTouchPoints > 0;
    
    setIsTouchDevice(isTouchCapable);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.yearTitle}>Gallery from {selectedYear}</h2>
      <article className={styles.gallery}>
        {galleryImages.map((image) => (
          <a 
            key={`${selectedYear}-${image.id}`}
            className={styles.galleryLink}
            href={image.url}
            data-fancybox="gallery"
          >
            <figure className={`${styles.galleryImage} ${isTouchDevice ? styles.touch : ''}`}>
              <img 
                src={image.url}
                width={image.width}
                height={image.height}
                alt={image.caption}
              />
              <figcaption>{image.caption}</figcaption>
            </figure>
          </a>
        ))}
      </article>
    </div>
  );
};

export default GalleryView;