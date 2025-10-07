'use client';

import React from 'react';
import Image from 'next/image';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const posters = Array.from({ length: 14 }, (_, i) => ({
  src: `/images/poster${i + 1}.jpg`,
  alt: `Poster ${i + 1}`,
}));

export const SimpleCarousel = () => {
  return (
    <div className="rounded-2xl shadow-xl p-8 bg-white dark:bg-zinc-800">
      <h2 className="text-3xl font-bold text-center mb-6">Simple Slider</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={1}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className="rounded-xl shadow-lg"
      >
        {posters.map((poster, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center p-4">
              <Image
                src={poster.src}
                alt={poster.alt}
                width={432}
                height={540}
                className="object-cover rounded-md shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};