'use client';

import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

// ✅ Import ESM effect and CSS directly
import EffectExpo from '../lib/effect-expo.esm.js';
import '../lib/effect-expo.css';
import '@/styles/expo.css';

const ExpoSliderPremium = ({ slides }) => {
  const swiperRef = useRef(null);
  const swiperInstance = useRef(null);

  useEffect(() => {
    // ✅ Destroy old instance if exists
    if (swiperInstance.current) swiperInstance.current.destroy(true, true);

    // ✅ Initialize new instance
    swiperInstance.current = new Swiper(swiperRef.current, {
      modules: [EffectExpo],
      effect: 'expo',
      direction: 'vertical',
      slidesPerView: 1.5,
      centeredSlides: true,
      grabCursor: true,
      spaceBetween: 16,
      loop: true,
      speed: 800,
      expoEffect: {
        imageScale: 1.125,
        imageOffset: 1.25,
        scale: 1.25,
        rotate: 0,
        grayscale: true,
      },
      breakpoints: {
        768: { spaceBetween: 32 },
      },
    });

    return () => swiperInstance.current?.destroy(true, true);
  }, []);

  return (
    <div id="app">
      <div className="swiper" ref={swiperRef}>
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div key={index} className="swiper-slide">
              <div className="expo-container">
                <img className="expo-image" src={slide.image} alt={slide.title} />
                <div className="expo-content">{slide.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpoSliderPremium;
