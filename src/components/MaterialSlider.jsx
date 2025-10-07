'use client';

import { useEffect } from 'react';
import Swiper from 'swiper';

// Import Swiper CSS and custom effect
import 'swiper/css';
import EffectMaterial from '../lib/effect-material.esm.js';
import '../lib/effect-material.css';
import '@/styles/material.css'; // 👈 use the new isolated CSS

export default function MaterialYouDemo() {
  useEffect(() => {
    const swiper = new Swiper('.material-swiper', {
      modules: [EffectMaterial],
      effect: 'material',
      materialEffect: { slideSplitRatio: 0.65 },
      grabCursor: true,
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 16,
      speed: 600,
      loop: true,
    });

    // Ensure layout is stable before Swiper update
    setTimeout(() => swiper.update(), 100);

    return () => swiper.destroy(true, true);
  }, []);

  const slides = Array.from({ length: 8 }, (_, i) => ({
    src: `/images/0${i + 1}.jpg`,
    label: `Slide ${i + 1}`,
  }));

  return (
    <div className="material-container">
      <div className="material-slider">
        <div className="material-swiper">
          <div className="swiper-wrapper">
            {slides.map((slide, i) => (
              <div className="swiper-slide" key={i}>
                <div className="swiper-material-wrapper">
                  <div className="swiper-material-content">
                    <img
                      className="material-image"
                      data-swiper-material-scale="1.25"
                      src={slide.src}
                      alt={slide.label}
                    />
                    <span className="material-label swiper-material-animate-opacity">
                      {slide.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
