// components/Carousel.js
import React, { useState } from "react";

const Carousel = ({ posters, scrollProgress }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => setHoveredCard(index);
  const handleCardLeave = () => setHoveredCard(null);

  // Transition for the carousel container
  const carouselT = Math.max(0, scrollProgress * 4 - 3); // Starts at 0 when t=3
  const carouselOpacity = carouselT;
  const carouselTransform = `translateX(${100 * (1 - carouselT)}px)`; // Slides from the right

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pt-32 pb-32"
      style={{
        opacity: carouselOpacity,
        transform: carouselTransform,
        transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
      }}
    >
      <div className="w-full max-w-6xl overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-8" style={{ width: `${posters.length * 220}px` }}>
          {posters.map((poster, index) => (
            <div
              key={poster.id}
              className={`flex-shrink-0 w-[200px] h-[304px] rounded-lg shadow-xl cursor-pointer overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300`}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
            >
              <img
                src={poster.src}
                alt={poster.alt}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;