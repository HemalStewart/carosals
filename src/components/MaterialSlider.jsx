'use client';

import { useEffect } from 'react';
// Import Swiper core library (since you're using plain JS init)
import Swiper from 'swiper'; 

// Import all required CSS/modules
import 'swiper/css';
import EffectMaterial from '../lib/effect-material.esm.js';
import '../lib/effect-material.css';
import '@/styles/material.css';

export default function MaterialYouDemo() {
  useEffect(() => {
    // 1. SWIPER INITIALIZATION: Set defaults here
    const swiper = new Swiper('.swiper', {
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

    // Cleanup function runs when component unmounts
    return () => swiper.destroy(true, true);
  }, []);

  // Slide data array
  const slides = Array.from({ length: 8 }, (_, i) => ({
    src: `/images/0${i + 1}.jpg`,
    label: `Slide ${i + 1}`,
  }));

  return (
    <div id="app">
      {/* Navigation controls */}
      <div className="demo-nav">
        &nbsp;
      </div>


      {/* Material You Swiper */}
      <div className="demo-slider">
        <div className="swiper">
          <div className="swiper-wrapper">
            {slides.map((slide, i) => (
              <div className="swiper-slide" key={i}>
                <div className="swiper-material-wrapper">
                  <div className="swiper-material-content">
                    <img
                      className="demo-material-image"
                      data-swiper-material-scale="1.25"
                      src={slide.src}
                      alt={slide.label}
                    />
                    <span className="demo-material-label swiper-material-animate-opacity">
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