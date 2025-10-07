'use client';

import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

// Import named export from local file
import EffectSlicer from '../lib/effect-slicer.esm.js';
// Import the effect and custom CSS files
import '../lib/effect-slicer.css';
import '@/styles/slicer.css';

const SlicerCarousel = ({ slides }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        modules: [EffectSlicer],
        effect: 'slicer',
        speed: 800,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true, 
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

      return () => {
        swiper.destroy(true, true);
      };
    }
  }, []);

  return (
    <div className="swiper" ref={swiperRef}>
      <div className="swiper-wrapper">
        {slides.map((slide, index) => (
          <div key={index} className="swiper-slide">
            <div className="slicer-slide-inner">
              <img
                src={slide.image}
                alt={slide.title}
                className="swiper-slicer-image"
              />
              {/* <div className="slicer-slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default SlicerCarousel;