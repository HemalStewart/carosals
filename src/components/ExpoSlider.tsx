'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export const ExpoSlider: React.FC = () => {
  const slides: Slide[] = [
    { id: 1, title: "Zermatt", subtitle: "Switzerland", image: "/images/big-poster1.jpg" },
    { id: 2, title: "Nagano", subtitle: "Prefecture", image: "/images/big-poster2.jpg" },
    { id: 3, title: "Marrakech", subtitle: "Merzouga", image: "/images/big-poster3.jpg" },
    { id: 4, title: "Yosemite", subtitle: "National Park", image: "/images/big-poster4.jpg" },
    { id: 5, title: "Los Lances", subtitle: "Beach", image: "/images/big-poster5.jpg" },
    { id: 6, title: "Kyoto", subtitle: "Japan", image: "/images/big-poster6.jpg" },
    { id: 7, title: "Santorini", subtitle: "Greece", image: "/images/big-poster7.jpg" },
    { id: 8, title: "Banff", subtitle: "National Park", image: "/images/big-poster8.jpg" },
    { id: 9, title: "Ha Long Bay", subtitle: "Vietnam", image: "/images/big-poster9.jpg" },
    { id: 10, title: "Patagonia", subtitle: "Argentina", image: "/images/big-poster10.jpg" },
    { id: 11, title: "Machu Picchu", subtitle: "Peru", image: "/images/big-poster11.jpg" },
    { id: 12, title: "Bora Bora", subtitle: "French Polynesia", image: "/images/big-poster12.jpg" },
    { id: 13, title: "Great Barrier", subtitle: "Reef", image: "/images/big-poster13.jpg" },
    { id: 14, title: "Salar de Uyuni", subtitle: "Bolivia", image: "/images/big-poster14.jpg" },
    { id: 15, title: "Zhangjiajie", subtitle: "China", image: "/images/big-poster15.jpg" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive dimensions
  const [dimensions, setDimensions] = useState({
    slideWidth: 800,
    slideHeight: 500,
    slideMargin: 32,
  });

  const updateDimensions = () => {
    if (typeof window !== 'undefined') {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      
      setDimensions({
        slideWidth: isMobileView ? window.innerWidth * 0.85 : 800,
        slideHeight: isMobileView ? window.innerHeight * 0.6 : 500,
        slideMargin: isMobileView ? 16 : 32,
      });
    }
  };

  // Handle window resize and initial setup
  useEffect(() => {
    updateDimensions(); // Call once on mount

    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveIndex(prev => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveIndex(prev => Math.min(slides.length - 1, prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  // Touch/swipe handling for mobile
  const touchRef = useRef({ startX: 0, startY: 0 });

  const handleTouchStart = (e: React.TouchEvent) => {
    touchRef.current.startX = e.touches[0].clientX;
    touchRef.current.startY = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = touchRef.current.startX - endX;
    const diffY = Math.abs(touchRef.current.startY - endY);

    // Only swipe if horizontal movement is greater than vertical
    if (Math.abs(diffX) > 50 && diffY < 100) {
      if (diffX > 0) {
        // Swiped left - go to next slide
        setActiveIndex(prev => Math.min(slides.length - 1, prev + 1));
      } else {
        // Swiped right - go to previous slide
        setActiveIndex(prev => Math.max(0, prev - 1));
      }
    }
  };

  // Compute transforms for each slide
  const getSlideTransforms = (index: number) => {
    const diff = index - activeIndex;
    const isActive = diff === 0;
    const isNext = diff > 0;

    if (isMobile) {
      // Simplified mobile transforms
      if (isActive) {
        return {
          container: { transform: 'scale(0.9)', opacity: 1 },
          image: { transform: 'scale(0.9)', filter: 'grayscale(0)' },
          content: { transform: 'translateY(0%)', opacity: 1 },
        };
      } else {
        return {
          container: { transform: 'scale(1)', opacity: 1 },
          image: { transform: 'scale(1)', filter: 'grayscale(1)' },
          content: { transform: 'translateY(100%)', opacity: 0 },
        };
      }
    } else {
      // Desktop transforms (original logic)
      if (isActive) {
        return {
          container: { transform: 'scale(1) rotateY(0deg)', transformOrigin: 'center center' },
          image: { transform: 'translateX(0%) scale(1)', filter: 'grayscale(0)', transformOrigin: 'center center' },
          content: { transform: 'translateX(0%)', opacity: 1 },
        };
      } else if (isNext) {
        return {
          container: { transform: 'scale(1.25) rotateY(0deg)', transformOrigin: 'left center' },
          image: { transform: 'translateX(-50%) scale(1.125)', filter: 'grayscale(1)', transformOrigin: 'right center' },
          content: { transform: 'translateX(-100%)', opacity: 0 },
        };
      } else {
        return {
          container: { transform: 'scale(1.25) rotateY(0deg)', transformOrigin: 'right center' },
          image: { transform: 'translateX(50%) scale(1.125)', filter: 'grayscale(1)', transformOrigin: 'left center' },
          content: { transform: 'translateX(100%)', opacity: 0 },
        };
      }
    }
  };

  const computeTranslate = () => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const centerOffset = containerWidth / 2 - dimensions.slideWidth / 2;
    return -activeIndex * (dimensions.slideWidth + dimensions.slideMargin) + centerOffset;
  };
  
  const handleSlideClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full h-screen bg-black overflow-hidden flex items-center justify-center relative">
      {/* Navigation indicators */}
      <div className="absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      

      <div
        ref={containerRef}
        className="flex cursor-pointer select-none"
        style={{
          transform: `translate3d(${computeTranslate()}px, 0, 0)`,
          transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => {
          const transforms = getSlideTransforms(index);

          return (
            <div
              key={slide.id}
              className="flex-shrink-0"
              style={{ 
                width: `${dimensions.slideWidth}px`, 
                height: `${dimensions.slideHeight}px`, 
                marginRight: `${dimensions.slideMargin}px` 
              }}
              onClick={() => handleSlideClick(index)}
            >
              <div
                className="expo-container relative w-full h-full"
                style={{
                  ...transforms.container,
                  borderRadius: isMobile ? '1rem' : '1.5rem',
                  overflow: 'hidden',
                  transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.6s ease',
                  willChange: 'transform',
                }}
              >
                <img
                  src={slide.image}
                  alt={`${slide.title}, ${slide.subtitle}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    ...transforms.image,
                    borderRadius: isMobile ? '1rem' : '1.5rem',
                    transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.6s cubic-bezier(0.25,0.46,0.45,0.94)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div
                  className={`expo-content absolute bottom-0 left-0 right-0 text-white ${
                    isMobile ? 'p-3' : 'p-8'
                  }`}
                  style={{
                    ...transforms.content,
                    transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.6s cubic-bezier(0.25,0.46,0.45,0.94)',
                  }}
                >
                  <h3 className={`font-bold mb-1 ${isMobile ? 'text-lg' : 'text-3xl'}`}>
                    {slide.title}
                  </h3>
                  <p className={`text-white/80 ${isMobile ? 'text-sm' : 'text-xl'}`}>
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};