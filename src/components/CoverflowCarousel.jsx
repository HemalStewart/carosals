'use client';

import React from 'react';
import Image from 'next/image';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const posters = Array.from({ length: 14 }, (_, i) => ({
  src: `/images/poster${i + 1}.jpg`,
  alt: `Poster ${i + 1}`,
}));

export const CoverflowCarousel = () => {
  return (
    <div className="rounded-2xl shadow-xl p-8 bg-white dark:bg-zinc-800">
      <h2 className="text-3xl font-bold text-center mb-6">Coverflow Effect</h2>
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // Set to 3 slides per view
        spaceBetween={10} // Adjusted space between slides
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        pagination={{ clickable: true }}
        className="rounded-xl shadow-lg w-full h-96"
      >
        {posters.map((poster, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative flex items-center justify-center">
              <Image
                src={poster.src}
                alt={poster.alt}
                width={432}
                height={540}
                className="object-contain p-4"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};