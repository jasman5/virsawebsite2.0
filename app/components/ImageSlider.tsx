'use client';

import React, { useState, useEffect } from 'react';
import styles from './ImageSlider.module.css';
import { useSearchParams } from 'next/navigation';

interface SliderItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const ImageSlider: React.FC = () => {
  const searchParams = useSearchParams();
  const selectedEventId = searchParams.get('event');
  
  const [items, setItems] = useState<SliderItem[]>([
    {
      id: 1,
      title: "GURPURAB",
      description: "Virsa hosts this event in the memory of Guru Nanak Dev Ji to seek his blessings and to thank the almighty and bring peace. Every year, Ragis sing divine and melodious hymns, swaying everyone inthe rhythms of spirituality. This is followed by Guru ka Langar. Virsa keeps us deeply rooted and bound to our diverse culture.",
      imageUrl: "gur3.jpeg"
    },
    
    {
      id: 3,
      title: "VIRSA MELA",
      description: "Virsa Mela, a Punjabi Culture Carnival is a lively celebration of Punjab's traditions, featuring vibrant folk dances, traditional music, and delicious regional cuisine. It offers a joyful glimpse into the colorful and welcoming spirit of Punjabi heritage through performances, art, and crafts.",
      imageUrl: "mela.jpeg"
    },
    {
      id: 2,
      title: "SHAM-E-VIRASAT",
      description: "Cultural Eve, also known as Sham-Ae-Virasat, is one of Virsa's most significant events. It features Bhangra, Sammi, plays, singing, and traditional poetry. This event is cherished by all as it celebrates the spirit of Punjabi culture.",
      imageUrl: "shaame2.jpeg"
    },
    {
      id: 4,
      title: "Chabeel",
      description: "Every summer, Virsa hosts a vibrant chabeel to honor Guru Arjan Dev Ji and celebrate the rich essence of Sikh culture. Chabeel is a traditional Punjabi summer drink, known for its cooling and refreshing qualities.",
      imageUrl: "chabeel1.jpeg"
    },
    {
      id: 5,
      title: "Virsa Talks",
      description: "A talk session where we interact with famous ppersonalities and have there lessons and learnings.",
      imageUrl: "rubaru2.jpeg"
    },
    // {
    //   id: 6,
    //   title: "The Migration",
    //   description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    //   imageUrl: "https://da.se/app/uploads/2015/09/simon-december1994.jpg"
    // }
  ]);

  // Rotate the slider to show the selected event when the component mounts
  useEffect(() => {
    if (selectedEventId) {
      const eventId = parseInt(selectedEventId);
      const eventIndex = items.findIndex(item => item.id === eventId);
      
      if (eventIndex !== -1) {
        // Rotate the array to bring the selected event to the front
        const rotatedItems = [...items];
        for (let i = 0; i < eventIndex; i++) {
          const firstItem = rotatedItems.shift();
          if (firstItem) {
            rotatedItems.push(firstItem);
          }
        }
        setItems(rotatedItems);
      }
    }
  }, [selectedEventId, items]);

  const handleNext = () => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      const firstItem = newItems.shift();
      if (firstItem) {
        newItems.push(firstItem);
      }
      return newItems;
    });
  };

  const handlePrev = () => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      const lastItem = newItems.pop();
      if (lastItem) {
        newItems.unshift(lastItem);
      }
      return newItems;
    });
  };

  return (
    <main className={styles.main}>
      <ul className={styles.slider}>
        {items.map((item) => (
          <li
            key={item.id}
            className={styles.item}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>{item.description}</p>
              {/* <button>Read More</button> */}
            </div>
          </li>
        ))}
      </ul>
      <nav className={styles.nav}>
        <button className={styles.btn} onClick={handlePrev}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
            <path fill="currentColor" d="M328 112L184 256l144 144"/>
          </svg>
        </button>
        <button className={styles.btn} onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
            <path fill="currentColor" d="M184 112l144 144-144 144"/>
          </svg>
        </button>
      </nav>
    </main>
  );
};

export default ImageSlider;