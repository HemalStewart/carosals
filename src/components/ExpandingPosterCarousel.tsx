'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const posters = [
  { id: 1, title: "Zermatt", subtitle: "Switzerland", image: "/images/poster1.jpg" },
  { id: 2, title: "Nagano", subtitle: "Prefecture", image: "/images/poster2.jpg" },
  { id: 3, title: "Marrakech", subtitle: "Merzouga", image: "/images/poster3.jpg" },
  { id: 4, title: "Yosemite", subtitle: "National Park", image: "/images/poster4.jpg" },
  { id: 5, title: "Los Lances", "subtitle": "Beach", image: "/images/poster5.jpg" },
  { id: 6, title: "Kyoto", subtitle: "Japan", image: "/images/poster6.jpg" },
  { id: 7, title: "Santorini", subtitle: "Greece", image: "/images/poster7.jpg" },
  { id: 8, title: "Banff", subtitle: "National Park", image: "/images/poster8.jpg" },
  { id: 9, title: "Ha Long Bay", subtitle: "Vietnam", image: "/images/poster9.jpg" },
  { id: 10, title: "Patagonia", subtitle: "Argentina", image: "/images/poster10.jpg" },
  { id: 11, title: "Machu Picchu", subtitle: "Peru", image: "/images/poster11.jpg" },
  { id: 12, title: "Bora Bora", subtitle: "French Polynesia", image: "/images/poster12.jpg" },
  { id: 13, title: "Great Barrier", subtitle: "Reef", image: "/images/poster13.jpg" },
  { id: 14, title: "Salar de Uyuni", subtitle: "Bolivia", image: "/images/poster14.jpg" },
  { id: 15, title: "Zhangjiajie", subtitle: "China", image: "/images/poster15.jpg" },
];

export default function TimedCardOpening() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleCardClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const paginate = (newDirection: number) => {
    const newIndex = (activeIndex + newDirection + posters.length) % posters.length;
    setDirection(newDirection);
    setActiveIndex(newIndex);
  };

  const smallCarouselPosters = Array.from({ length: 9 }, (_, i) => {
    const posterIndex = (activeIndex + i) % posters.length;
    return posters[posterIndex];
  });

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Container for both title and carousel */}
      <div className="relative h-full w-full">
        {/* Main Content (Titles and Button) */}
        <div className="absolute top-1/2 left-16 z-[20] -translate-y-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeIndex}`}
              initial={{ opacity: 0, y: -50, scale: 1.1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 1.1 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <motion.p 
                className="text-sm uppercase tracking-widest opacity-80 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Explore {posters[activeIndex].subtitle}
              </motion.p>
              <h1 className="text-8xl font-bold mb-8 leading-tight">
                {posters[activeIndex].title.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                  >
                    {word}{i < posters[activeIndex].title.split(' ').length - 1 && <br />}
                  </motion.span>
                ))}
              </h1>
              <motion.button
                className="px-8 py-3 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-gray-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover Location
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* <div className="absolute top-1/2 right-0 z-10 -translate-y-1/2 w-[60%] h-full flex items-center"> */}
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-[50%] h-full flex items-center">

          <div className="relative w-full h-full overflow-visible">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center gap-6"
              >
                {smallCarouselPosters.map((poster, i) => {
                  const posterIndex = (activeIndex + i) % posters.length;
                  const isActive = posterIndex === activeIndex;

                  return (
                    <motion.div
                      key={poster.id}
                      onClick={() => handleCardClick(posterIndex)}
                      className="cursor-pointer flex-shrink-0"
                      animate={{
                        scale: isActive ? 2 : 1, 
                        // zIndex: isActive ? 50 : 1,
                        y: 0, 
                        rotateY: 0,
                        opacity: 1,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      style={{ perspective: 1200 }}
                    >
                      <div className="w-60 h-96 rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transform transition-transform duration-500">
                        <div
                          className="w-full h-full bg-cover bg-center relative"
                          style={{ backgroundImage: `url(${poster.image})` }}
                        >
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-bold text-lg leading-tight">{poster.title}</h3>
                            <p className="text-white/80 text-sm uppercase tracking-wide">{poster.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            
          </div>
        </div>

        {/* Navigation and Counter (New Location) */}
        <div className="absolute bottom-8 right-8 z-40 flex items-end flex-col">
          {/* Counter */}
          <div className="text-6xl font-light opacity-30">
            {String(activeIndex + 1).padStart(2, '0')}
          </div>
          
          {/* Navigation */}
          <div className="flex items-center space-x-6 mt-6">
            <button
              onClick={() => paginate(-1)}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2">
              {posters.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

