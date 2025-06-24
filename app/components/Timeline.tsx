'use client';

import React from 'react';
import styles from './Timeline.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TimelineItem {
  year: string;
  title: string;
  // text: string;
  imageUrl: string;
}

const Timeline: React.FC = () => {
  const items: TimelineItem[] = [
    {
      year: "2024",
      title: "Annual Cultural Fest",
      text: "A vibrant celebration of art, music, and dance showcasing our college's diverse cultural heritage.",
      imageUrl: "mela3.jpeg"
    },
    {
      year: "2023",
      title: "Tech Symposium",
      text: "A gathering of tech enthusiasts featuring workshops, competitions, and keynote speakers from the industry.",
      imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3"
    },
    {
      year: "2022",
      title: "Sports Day",
      text: "Annual sports event featuring various competitions and team sports, promoting physical fitness and team spirit.",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3"
    },
    {
      year: "2021",
      title: "Science Exhibition",
      text: "Showcasing innovative projects and research work by students across different scientific disciplines.",
      imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3"
    },
    {
      year: "2020",
      title: "Literary Fest",
      text: "A celebration of literature, poetry, and creative writing featuring competitions and guest authors.",
      imageUrl: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Journey Through Time</h1>
      <div className={styles.timeline}>
        <Swiper
          modules={[Navigation, Pagination]}
          direction="vertical"
          loop={false}
          speed={1600}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}">${items[index].year}</span>`;
            }
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            768: {
              direction: 'horizontal',
            }
          }}
          className={styles.swiperContainer}
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              className={styles.swiperSlide}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className={styles.swiperSlideContent}>
                <span className={styles.timelineYear}>{item.year}</span>
                <h4 className={styles.timelineTitle}>{item.title}</h4>
                <p className={styles.timelineText}>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Timeline; 