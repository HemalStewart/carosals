'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const posters = [
  { id: 1, src: '/images/poster1.jpg', alt: 'Poster 1', title: 'Epic Adventure', genre: 'Action', rating: 4.8, year: 2024, color: '#e74c3c' },
  { id: 2, src: '/images/poster2.jpg', alt: 'Poster 2', title: 'Mystic Journey', genre: 'Fantasy', rating: 4.5, year: 2023, color: '#3498db' },
  { id: 3, src: '/images/poster3.jpg', alt: 'Poster 3', title: 'Dark Future', genre: 'Sci-Fi', rating: 4.9, year: 2024, color: '#9b59b6' },
  { id: 4, src: '/images/poster4.jpg', alt: 'Poster 4', title: 'Ocean Deep', genre: 'Adventure', rating: 4.2, year: 2022, color: '#1abc9c' },
  { id: 5, src: '/images/poster5.jpg', alt: 'Poster 5', title: 'Golden Hour', genre: 'Drama', rating: 4.7, year: 2023, color: '#f39c12' },
  { id: 6, src: '/images/poster6.jpg', alt: 'Poster 6', title: 'Fire Storm', genre: 'Thriller', rating: 4.6, year: 2024, color: '#e67e22' },
  { id: 7, src: '/images/poster7.jpg', alt: 'Poster 7', title: 'Nature Call', genre: 'Documentary', rating: 4.3, year: 2021, color: '#2ecc71' },
  { id: 8, src: '/images/poster8.jpg', alt: 'Poster 8', title: 'Steel City', genre: 'Action', rating: 4.8, year: 2023, color: '#34495e' },
  { id: 9, src: '/images/poster9.jpg', alt: 'Poster 9', title: 'Sunshine', genre: 'Comedy', rating: 4.5, year: 2024, color: '#f1c40f' },
  { id: 10, src: '/images/poster10.jpg', alt: 'Poster 10', title: 'Purple Rain', genre: 'Musical', rating: 4.9, year: 2022, color: '#8e44ad' },
  { id: 11, src: '/images/poster11.jpg', alt: 'Poster 11', title: 'Emerald City', genre: 'Fantasy', rating: 4.4, year: 2023, color: '#16a085' },
  { id: 12, src: '/images/poster12.jpg', alt: 'Poster 12', title: 'Forest Moon', genre: 'Sci-Fi', rating: 4.7, year: 2024, color: '#27ae60' },
  { id: 13, src: '/images/poster13.jpg', alt: 'Poster 13', title: 'Blue Horizon', genre: 'Adventure', rating: 4.6, year: 2023, color: '#2980b9' },
  { id: 14, src: '/images/poster14.jpg', alt: 'Poster 14', title: 'Crimson Sky', genre: 'Drama', rating: 4.2, year: 2022, color: '#c0392b' }
];

export const AnimationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // helper: clear and restart autoplay
  const resetAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % posters.length);
      }, 2000);
    }
  };

  // autoplay effect
  useEffect(() => {
    resetAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    resetAutoplay();
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % posters.length);
    resetAutoplay();
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + posters.length) % posters.length);
    resetAutoplay();
  };

  const getTransform = (index: number) => {
    let diff = index - currentIndex;

    // Smooth wrap-around
    if (diff > posters.length / 2) diff -= posters.length;
    if (diff < -posters.length / 2) diff += posters.length;

    const distance = Math.abs(diff);

    if (distance === 0) {
      return {
        transform: 'translateX(0) translateY(0) scale(1.2) rotateY(0deg)',
        zIndex: 100,
        opacity: 1,
        filter: 'brightness(1.3) saturate(1.3) drop-shadow(0 25px 50px rgba(0,0,0,0.8))'
      };
    }

    const offset = diff * 420; // spacing for bigger cards
    const yOffset = distance * 20;
    const scale = Math.max(0.4, 1 - distance * 0.15);
    const rotateY = diff * -25;
    const opacity = Math.max(0.2, 1 - distance * 0.2);
    const blur = distance > 0 ? distance : 0;

    return {
      transform: `translateX(${offset}px) translateY(${yOffset}px) scale(${scale}) rotateY(${rotateY}deg)`,
      zIndex: 100 - distance,
      opacity: opacity,
      filter: `brightness(${1 - distance * 0.1}) blur(${blur}px) drop-shadow(0 ${15 - distance * 3}px ${30 - distance * 5}px rgba(0,0,0,${0.6 - distance * 0.1}))`
    };
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-between">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 transition-all duration-1000 ease-out"
          style={{
            backgroundImage: `url(${posters[currentIndex].src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(1px) brightness(0.3)',
            transform: 'scale(1.1)'
          }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `linear-gradient(135deg, ${posters[currentIndex].color}40, transparent 50%, ${posters[(currentIndex + 1) % posters.length].color}30)`
          }}
        />

        {/* Animated Shapes */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{
              background: `radial-gradient(circle, ${posters[currentIndex].color}60 0%, transparent 70%)`,
              left: '10%',
              top: '20%',
              animation: 'float 8s ease-in-out infinite'
            }}
          />
          <div
            className="absolute w-80 h-80 rounded-full blur-2xl animate-pulse"
            style={{
              background: `radial-gradient(circle, ${posters[(currentIndex + 2) % posters.length].color}40 0%, transparent 70%)`,
              right: '15%',
              bottom: '25%',
              animation: 'float 10s ease-in-out infinite reverse'
            }}
          />
        </div>
      </div>

      {/* Main Carousel */}
      <div
        className="relative z-20 flex-grow flex items-center justify-center px-16"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <div className="relative w-full max-w-6xl" style={{ perspective: '1000px' }}>
          {/* Carousel Container */}
          <div className="relative h-[500px] flex items-center justify-center">
            {posters.map((poster, index) => (
              <div
                key={poster.id}
                className="absolute cursor-pointer transition-all duration-700 ease-out group"
                style={{
                  ...getTransform(index),
                  transformStyle: 'preserve-3d'
                }}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div className="w-96 h-[32rem] relative">
                  {/* Glow for active slide */}
                  {index === currentIndex && (
                    <div
                      className="absolute -inset-3 rounded-2xl blur-xl opacity-70 animate-pulse"
                      style={{
                        background: `linear-gradient(45deg, ${poster.color}80, ${posters[(currentIndex + 1) % posters.length].color}60)`
                      }}
                    />
                  )}

                  {/* Main Card */}
                  <div className="relative w-full h-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/30 shadow-2xl">
                    {/* Image */}
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={poster.src}
                        alt={poster.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.src = `https://via.placeholder.com/320x448/${poster.color.slice(1)}/fff?text=Poster+${poster.id}`;
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group z-30"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group z-30"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="relative z-30 flex justify-center space-x-3 pb-8">
        {posters.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'scale-125 shadow-lg' 
                : 'hover:scale-110 opacity-60 hover:opacity-80'
            }`}
            style={{
              backgroundColor: index === currentIndex ? posters[currentIndex].color : '#ffffff'
            }}
          />
        ))}
      </div>
    </div>
  );
};
