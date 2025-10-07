'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

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

export const CardStackCarousel = () => {
  const searchParams = useSearchParams();
  const returnFromId = searchParams.get('returnFrom');
  
  // Initialize currentIndex based on returnFrom parameter or stored position
  const getInitialIndex = () => {
    if (returnFromId) {
      const posterIndex = posters.findIndex(p => p.id === parseInt(returnFromId));
      return posterIndex !== -1 ? posterIndex : 0;
    }
    // Try to get stored position from memory
    if (typeof window !== 'undefined' && window.lastCarouselIndex !== undefined) {
      return window.lastCarouselIndex;
    }
    return 0;
  };

  const [currentIndex, setCurrentIndex] = useState(getInitialIndex);
  const [flippingPosterId, setFlippingPosterId] = useState(null);
  const intervalRef = useRef(null);
  const router = useRouter();

  const nextSlide = () => {
    if (flippingPosterId) return;
    const newIndex = (currentIndex + 1) % posters.length;
    setCurrentIndex(newIndex);
    // Store the new position
    if (typeof window !== 'undefined') {
      window.lastCarouselIndex = newIndex;
    }
  };

  const prevSlide = () => {
    if (flippingPosterId) return;
    const newIndex = (currentIndex - 1 + posters.length) % posters.length;
    setCurrentIndex(newIndex);
    // Store the new position
    if (typeof window !== 'undefined') {
      window.lastCarouselIndex = newIndex;
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 40000);
    return () => clearInterval(intervalRef.current);
  }, [flippingPosterId]);

  // Update currentIndex when returnFrom parameter changes
  useEffect(() => {
    if (returnFromId) {
      const posterIndex = posters.findIndex(p => p.id === parseInt(returnFromId));
      if (posterIndex !== -1) {
        setCurrentIndex(posterIndex);
        // Store the position
        if (typeof window !== 'undefined') {
          window.lastCarouselIndex = posterIndex;
        }
      }
      // Clean up the URL parameter after using it
      const newUrl = new URL(window.location);
      newUrl.searchParams.delete('returnFrom');
      window.history.replaceState({}, '', newUrl);
    }
  }, [returnFromId]);

  const handlePosterClick = (id) => {
    if (id !== posters[currentIndex].id || flippingPosterId) return;
    setFlippingPosterId(id);
    // Store the current position before navigating
    if (typeof window !== 'undefined') {
      window.lastCarouselIndex = currentIndex;
    }
  };

  const getTransform = (index) => {
    let diff = index - currentIndex;
    if (diff > posters.length / 2) diff -= posters.length;
    if (diff < -posters.length / 2) diff += posters.length;

    const radius = 550;
    const angleStep = 30;
    const baseAngle = -90;
    const angle = baseAngle + diff * angleStep;

    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;

    const scale = index === currentIndex ? 1.3 : 0.9;
    const filter = index === currentIndex ? 'grayscale(0%)' : 'grayscale(100%)';
    const opacity = Math.abs(diff) > 2 ? 0 : 1;

    return {
      transform: `translate(${x}px, ${y + radius - 100}px) translate(-50%, -50%) scale(${scale})`,
      filter,
      opacity,
      zIndex: 100 - Math.abs(diff),
      transition: 'all 0.8s ease',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transformOrigin: 'center',
    };
  };

  const activePosterSrc = posters[currentIndex].src;

  return (
    // <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-black">
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">

    {/* <div className="relative w-full h-[800px] flex flex-col items-center justify-center overflow-hidden bg-black rounded-lg"> */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${activePosterSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(30px)',
          transition: 'background-image 0.8s ease-in-out, filter 0.8s ease-in-out',
          transform: 'scale(1.05)',
        }}
      />
      <div className="absolute inset-0 bg-black opacity-60 z-10" />
      
      {/* Header */}
      {/* <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-30">
        <h1 className="text-5xl font-black text-white text-center tracking-widest font-mono">
          Animation Movies
        </h1>
      </div> */}
      
      <div className="relative w-[600px] h-[700px] flex items-center justify-center "> 
        {/* z-20 mt-24 */}
        {posters.map((poster, index) => (
          <div
            key={poster.id}
            onClick={() => handlePosterClick(poster.id)}
            style={{
              ...getTransform(index),
              cursor: index === currentIndex ? 'pointer' : 'default',
            }}
          >
            <motion.div
              className="w-50 h-76 relative rounded-lg overflow-hidden shadow-lg border border-white/20"
              layoutId={`shared-poster-${poster.id}`}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              animate={{
                rotateY: flippingPosterId === poster.id ? 90 : 0,
                scale: flippingPosterId === poster.id ? 1.5 : 1,
              }}
              onAnimationComplete={() => {
                if (flippingPosterId === poster.id) {
                  // Navigate immediately after animation completes
                  router.push(`/posters/${poster.id}?transition=true`);
                  setFlippingPosterId(null);
                }
              }}
            >
              <Image
                src={poster.src}
                alt={poster.alt}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-20 flex space-x-10 z-30">
        <button
          onClick={prevSlide}
          className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/30 hover:bg-white/20 transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/30 hover:bg-white/20 transition"
        >
          ›
        </button>
      </div>
    </div>
    
  );
};
