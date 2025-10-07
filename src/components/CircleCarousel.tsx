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

export const CircleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % posters.length);
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % posters.length);
  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + posters.length) % posters.length);
  const goToSlide = (index: number) => setCurrentIndex(index);

  const getTransform = (index: number) => {
    let diff = index - currentIndex;
    if (diff > posters.length / 2) diff -= posters.length;
    if (diff < -posters.length / 2) diff += posters.length;

    const angle = (360 / posters.length) * diff;
    const scale = index === currentIndex ? 1.7 : 0.8; // side posters slightly smaller
    const filter = index === currentIndex ? 'grayscale(0%)' : 'grayscale(100%)';
    const zIndex = index === currentIndex ? 10 : 5;

    return {
        transform: `rotateY(${angle}deg) translateZ(${diff === 0 ? 450 : 600}px) scale(${scale})`, // increased Z distance for side posters
        filter,
        zIndex
    };
    };


  return (
    <div className="relative w-full h-screen bg-black flex justify-center items-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 transition-all duration-1000 ease-out"
          style={{
            backgroundImage: `url(${posters[currentIndex].src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(5px) brightness(0.3)',
            transform: 'scale(1.1)'
          }}
        />
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

      {/* Carousel Container */}
      <div
        className="relative w-[600px] h-[400px] flex items-center justify-center"
        style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
      >
        {posters.map((poster, index) => (
          <div
            key={poster.id}
            className="absolute transition-all duration-700 ease-in-out cursor-pointer"
            style={{
              ...getTransform(index),
              ...(index === hoveredIndex && { transform: `${getTransform(index).transform} scale(1.15)` })
            }}
            onClick={() => goToSlide(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="w-48 h-60 relative bg-gray-900 rounded-lg overflow-hidden border border-white/20">
              <Image
                src={poster.src}
                alt={poster.alt}
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/300x400/${poster.color.slice(1)}/fff?text=Poster+${poster.id}`;
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-16 flex justify-center space-x-20">
        <button
          onClick={prevSlide}
          className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        >
          <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        >
          <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
