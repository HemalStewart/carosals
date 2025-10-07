'use client';

import React, { useState, useRef, CSSProperties } from 'react';
import Image from 'next/image';

const posters = [
  { id: 1, src: '/images/poster1.jpg', alt: 'Poster 1', title: 'Epic Adventure', color: '#e74c3c' },
  { id: 2, src: '/images/poster2.jpg', alt: 'Poster 2', title: 'Mystic Journey', color: '#3498db' },
  { id: 3, src: '/images/poster3.jpg', alt: 'Poster 3', title: 'Dark Future', color: '#9b59b6' },
  { id: 4, src: '/images/poster4.jpg', alt: 'Poster 4', title: 'Ocean Deep', color: '#1abc9c' },
  { id: 5, src: '/images/poster5.jpg', alt: 'Poster 5', title: 'Golden Hour', color: '#f39c12' },
  { id: 6, src: '/images/poster6.jpg', alt: 'Poster 6', title: 'Fire Storm', color: '#e67e22' },
  { id: 7, src: '/images/poster7.jpg', alt: 'Poster 7', title: 'Nature Call', color: '#2ecc71' },
  { id: 8, src: '/images/poster8.jpg', alt: 'Poster 8', title: 'Cosmic Dust', color: '#34495e' },
  { id: 9, src: '/images/poster9.jpg', alt: 'Poster 9', title: 'Neon Night', color: '#f1c40f' },
  { id: 10, src: '/images/poster10.jpg', alt: 'Poster 10', title: 'Winter Tale', color: '#ecf0f1' },
  { id: 11, src: '/images/poster11.jpg', alt: 'Poster 11', title: 'Desert Rose', color: '#e74c3c' },
  { id: 12, src: '/images/poster12.jpg', alt: 'Poster 12', title: 'City Lights', color: '#95a5a6' },
  { id: 13, src: '/images/poster13.jpg', alt: 'Poster 13', title: 'Forest Guard', color: '#27ae60' },
  { id: 14, src: '/images/poster14.jpg', alt: 'Poster 14', title: 'Space Quest', color: '#c0392b' },
  { id: 15, src: '/images/poster15.jpg', alt: 'Poster 15', title: 'Cosmic Dust', color: '#34495e' },
];

export const BlackBackgroundCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const startX = useRef<number>(0);
  const isSwiping = useRef<boolean>(false);

  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % posters.length);
  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + posters.length) % posters.length);
  const goToSlide = (index: number) => setCurrentIndex(index);

  const visiblePostersInArc = 9;
  const halfVisible = Math.floor(visiblePostersInArc / 2);

  const getTransform = (index: number) => {
    let diff = index - currentIndex;
    if (diff > posters.length / 2) diff -= posters.length;
    if (diff < -posters.length / 2) diff += posters.length;

    const angle = (100 / (visiblePostersInArc - 1)) * diff;
    const zIndex = index === currentIndex ? 10 : 5;
    const scale = 0.6; 
    const translateZ = 600; 
    const isVisible = Math.abs(diff) <= halfVisible;

    const style: CSSProperties = {
      transform: `rotateY(${angle}deg) translateZ(${translateZ}px) scale(${scale})`,
      zIndex,
      opacity: isVisible ? 1 : 0,
      pointerEvents: isVisible ? 'auto' : 'none',
      transition: 'all 0.7s ease-in-out',
    };

    return style;
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

      {/* Carousel */}
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
            <div className="w-50 h-76 relative bg-gray-900 rounded-lg overflow-hidden border border-white/20">
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
