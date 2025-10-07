'use client';

import React from 'react';
import Image from 'next/image';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFlip } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';

const posters = Array.from({ length: 14 }, (_, i) => ({
  src: `/images/poster${i + 1}.jpg`,
  alt: `Poster ${i + 1}`,
}));

export const FlipCarousel = () => {
  return (
    <div className="rounded-2xl shadow-xl p-8 bg-white dark:bg-zinc-800">
      <h2 className="text-3xl font-bold text-center mb-6">Flip Effect</h2>
      <Swiper
        modules={[EffectFlip, Navigation, Pagination]}
        effect="flip"
        navigation
        pagination={{ clickable: true }}
        className="rounded-xl shadow-lg w-full h-[600px]"
      >
        {posters.map((poster, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative flex items-center justify-center">
              <Image
                src={poster.src}
                alt={poster.alt}
                width={324}
                height={405}
                className="object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};