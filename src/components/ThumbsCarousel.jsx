'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const posters = Array.from({ length: 14 }, (_, i) => ({
  src: `/images/poster${i + 1}.jpg`,
  alt: `Poster ${i + 1}`,
}));

export const ThumbsCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="rounded-2xl shadow-xl p-8 bg-white dark:bg-zinc-800">
      <h2 className="text-3xl font-bold text-center mb-6">Thumbs Carousel</h2>
      
      {/* Main Swiper */}
      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2 rounded-xl shadow-lg mb-4"
      >
        {posters.map((poster, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={poster.src}
                alt={poster.alt}
                width={324}
                height={405}
                className="object-cover rounded-md shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbs Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={7}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {posters.map((poster, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center p-1">
              <Image
                src={poster.src}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={100}
                className="object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};