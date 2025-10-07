'use client';

import React, { useState, useRef, CSSProperties } from 'react';
import Image from 'next/image';

const posters = [
  { id: 1, src: '/images/poster1.jpg', alt: 'Poster 1' },
  { id: 2, src: '/images/poster2.jpg', alt: 'Poster 2' },
  { id: 3, src: '/images/poster3.jpg', alt: 'Poster 3' },
  { id: 4, src: '/images/poster4.jpg', alt: 'Poster 4' },
  { id: 5, src: '/images/poster5.jpg', alt: 'Poster 5' },
  { id: 6, src: '/images/poster6.jpg', alt: 'Poster 6' },
  { id: 7, src: '/images/poster7.jpg', alt: 'Poster 7' },
  { id: 8, src: '/images/poster8.jpg', alt: 'Poster 8' },
  { id: 9, src: '/images/poster9.jpg', alt: 'Poster 9' },
  { id: 10, src: '/images/poster10.jpg', alt: 'Poster 10' },
  { id: 11, src: '/images/poster11.jpg', alt: 'Poster 11' },
  { id: 12, src: '/images/poster12.jpg', alt: 'Poster 12' },
  { id: 13, src: '/images/poster13.jpg', alt: 'Poster 13' },
  { id: 14, src: '/images/poster14.jpg', alt: 'Poster 14' },
  { id: 15, src: '/images/poster15.jpg', alt: 'Poster 15' },
];

export const WhiteBackgroundCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const startX = useRef<number>(0);
  const isSwiping = useRef<boolean>(false);

  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % posters.length);
  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + posters.length) % posters.length);
  const goToSlide = (index: number) => setCurrentIndex(index);

  const getTransform = (index: number) => {
    let diff = index - currentIndex;
    if (diff > posters.length / 2) diff -= posters.length;
    if (diff < -posters.length / 2) diff += posters.length;

    const radius = 600;
    const spacing = 50;
    const theta = (diff * 15 * Math.PI) / 180;

    const x = Math.sin(theta) * radius + diff * spacing;
    const z = radius - Math.cos(theta) * radius;
    const rotateY = -diff * 15;
    const scale = 0.8 + 0.2 * Math.cos(theta);

    const visibilityThreshold = 3;
    const opacity = Math.abs(diff) <= visibilityThreshold ? 1 : 0;
    const zIndex = 20 - Math.abs(diff);

    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg) scale(${scale})`,
      zIndex,
      opacity,
      pointerEvents: opacity === 1 ? 'auto' : 'none',
      transition: 'transform 0.7s ease, opacity 0.7s ease',
    } as CSSProperties;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isSwiping.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping.current) return;
    const currentX = e.touches[0].clientX;
    const diff = startX.current - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
      isSwiping.current = false;
    }
  };

  const handleTouchEnd = () => {
    isSwiping.current = false;
  };

  const activePosterSrc = posters[currentIndex].src;

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {/* Dynamic blurred background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${activePosterSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(30px)',
          transition: 'background-image 0.7s ease-in-out, filter 0.7s ease-in-out',
          transform: 'scale(1.05)',
        }}
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-60 z-10" />

      <div
        className="relative w-[900px] h-[400px] flex items-center justify-center z-20"
        style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {posters.map((poster, index) => (
          <div
            key={poster.id}
            className="absolute cursor-pointer"
            style={getTransform(index)}
            onClick={() => goToSlide(index)}
          >
            <div className="w-50 h-76 relative bg-gray-900 rounded-lg overflow-hidden border border-white/20 shadow-lg">
              <Image src={poster.src} alt={poster.alt} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-16 flex justify-center space-x-20 z-30">
        <button
          onClick={prevSlide}
          className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        >
          ›
        </button>
      </div>
    </div>
  );
};
