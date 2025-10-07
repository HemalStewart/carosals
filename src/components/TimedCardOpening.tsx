// 'use client';

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const posters = [
//   { id: 1, title: "Zermatt", subtitle: "Switzerland", image: "/images/poster1.jpg" },
//   { id: 2, title: "Nagano", subtitle: "Prefecture", image: "/images/poster2.jpg" },
//   { id: 3, title: "Marrakech", subtitle: "Merzouga", image: "/images/poster3.jpg" },
//   { id: 4, title: "Yosemite", subtitle: "National Park", image: "/images/poster4.jpg" },
//   { id: 5, title: "Los Lances", subtitle: "Beach", image: "/images/poster5.jpg" },
//   { id: 6, title: "Kyoto", subtitle: "Japan", image: "/images/poster6.jpg" },
//   { id: 7, title: "Santorini", subtitle: "Greece", image: "/images/poster7.jpg" },
//   { id: 8, title: "Banff", subtitle: "National Park", image: "/images/poster8.jpg" },
//   { id: 9, title: "Ha Long Bay", subtitle: "Vietnam", image: "/images/poster9.jpg" },
//   { id: 10, title: "Patagonia", subtitle: "Argentina", image: "/images/poster10.jpg" },
//   { id: 11, title: "Machu Picchu", subtitle: "Peru", image: "/images/poster11.jpg" },
//   { id: 12, title: "Bora Bora", subtitle: "French Polynesia", image: "/images/poster12.jpg" },
//   { id: 13, title: "Great Barrier", subtitle: "Reef", image: "/images/poster13.jpg" },
//   { id: 14, title: "Salar de Uyuni", subtitle: "Bolivia", image: "/images/poster14.jpg" },
//   { id: 15, title: "Zhangjiajie", subtitle: "China", image: "/images/poster15.jpg" },
// ];

// export default function TimedCardOpening() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const handleCardClick = (index: number) => {
//     setDirection(index > activeIndex ? 1 : index < activeIndex ? -1 : 0);
//     setActiveIndex(index);
//   };

//   const paginate = (newDirection: number) => {
//     const newIndex = (activeIndex + newDirection + posters.length) % posters.length;
//     setDirection(newDirection);
//     setActiveIndex(newIndex);
//   };

//   const smallCarouselPosters = Array.from({ length: 5 }, (_, i) => {
//     const posterIndex = (activeIndex + 1 + i) % posters.length;
//     return posters[posterIndex];
//   });

//   const variants = {
//     enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
//     center: { x: 0, opacity: 1 },
//     exit: (direction: number) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
//   };

//   return (
//   <div className="relative h-screen w-full overflow-hidden bg-black text-white">
//     {/* Large Active Poster */}
//     <AnimatePresence initial={false}>
//       {posters.map((poster, i) => (
//         i === activeIndex && (
//           <motion.div
//             key={`active-poster-${poster.id}`}
//             className="absolute inset-0 z-0"
//             layoutId={`poster-${poster.id}`}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ 
//               duration: 0.8, 
//               ease: "easeInOut",
//               opacity: { duration: 0.6 },
//               scale: { duration: 0.8, delay: 0.1 }
//             }}
//           >
//             <div className="absolute inset-0 bg-cover bg-center"
//               style={{ backgroundImage: `url(${poster.image})` }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/30" />
//           </motion.div>
//         )
//       ))}
//     </AnimatePresence>

//     {/* Main Content */}
//     <div className="absolute top-1/2 left-16 z-10 -translate-y-1/2">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`content-${activeIndex}`}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -30 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <p className="text-sm uppercase tracking-widest opacity-80 mb-2">
//             Explore {posters[activeIndex].subtitle}
//           </p>
//           <h1 className="text-8xl font-bold mb-8 leading-tight">
//             {posters[activeIndex].title.split(' ').map((word, i) => (
//               <motion.span
//                 key={i}
//                 className="inline-block"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.1 * i }}
//               >
//                 {word}{i < posters[activeIndex].title.split(' ').length - 1 && <br />}
//               </motion.span>
//             ))}
//           </h1>
//           <motion.button
//             className="px-8 py-3 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Discover Location
//           </motion.button>
//         </motion.div>
//       </AnimatePresence>
//     </div>

//     {/* Small Carousel */}
//     <div className="absolute top-1/2 right-0 z-20 -translate-y-1/2 w-[60%] h-full flex items-center">
//       <div className="relative w-full h-full overflow-visible">
//         <AnimatePresence initial={false} custom={direction}>
//           <motion.div
//             key={activeIndex}
//             custom={direction}
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{ 
//               duration: 0.5, 
//               ease: "easeInOut",
//               layout: { duration: 0.8 }
//             }}
//             className="absolute top-1/2 -translate-y-1/2 left-8 flex items-center gap-6"
//             style={{ paddingLeft: '2rem' }}
//           >
//             {smallCarouselPosters.map((poster, i) => (
//   <motion.div
//     key={poster.id}
//     onClick={() => handleCardClick((activeIndex + 1 + i) % posters.length)}

//     className="cursor-pointer flex-shrink-0 transition-all duration-300 hover:opacity-100" 
//     style={{ perspective: "1000px", minWidth: "200px" }}
//     layoutId={`poster-${poster.id}`}
//     layout
//   >
//     <motion.div
//       className="w-50 h-76 rounded-lg overflow-hidden shadow-2xl transform-gpu relative z-10" 
//       whileHover={{ 
//         scale: 1.15, 
//         rotateY: 10, 
//         rotateX: 5,
//         zIndex: 50
//       }}
//       style={{ boxShadow: "0 6px 10px rgba(0, 0, 0, 0.6)" }}
//       transition={{ 
//         type: "spring", 
//         stiffness: 300, 
//         damping: 30,
//         layout: { duration: 0.8, ease: "easeInOut" }
//       }}
//     >
//       <div
//         className="w-full h-full bg-cover bg-center relative"
//         style={{ backgroundImage: `url(${poster.image})` }}
//       />
//     </motion.div>
//   </motion.div>
// ))}
//           </motion.div>
//         </AnimatePresence>

//         {/* Updated Navigation */}
//         <div className="absolute bottom-32 right-8 flex items-center space-x-6 z-30">
//           <div className="flex items-center space-x-6">
//             <button
//               onClick={() => paginate(-1)}
//               className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
//             >
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>

//             <button
//               onClick={() => paginate(1)}
//               className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
//             >
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>

//           <div className="flex space-x-3 px-4">
//             {posters.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleCardClick(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === activeIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'
//                 }`}
//               />
//             ))}
//           </div>
          
//           <div className="text-6xl font-light opacity-40 ml-auto">
//             {String(activeIndex + 1).padStart(2, '0')}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// }



'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const posters = [
  { id: 1, title: "Zermatt", subtitle: "Switzerland", image: "/images/poster1.jpg" },
  { id: 2, title: "Nagano", subtitle: "Prefecture", image: "/images/poster2.jpg" },
  { id: 3, title: "Marrakech", subtitle: "Merzouga", image: "/images/poster3.jpg" },
  { id: 4, title: "Yosemite", subtitle: "National Park", image: "/images/poster4.jpg" },
  { id: 5, title: "Los Lances", subtitle: "Beach", image: "/images/poster5.jpg" },
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
    setDirection(index > activeIndex ? 1 : index < activeIndex ? -1 : 0);
    setActiveIndex(index);
  };

  const paginate = (newDirection: number) => {
    const newIndex = (activeIndex + newDirection + posters.length) % posters.length;
    setDirection(newDirection);
    setActiveIndex(newIndex);
  };

  const smallCarouselPosters = Array.from({ length: 5 }, (_, i) => {
    const posterIndex = (activeIndex + 1 + i) % posters.length;
    return posters[posterIndex];
  });

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 250 : -250, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction > 0 ? -250 : 250, opacity: 0 }),
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Large Active Poster */}
      <AnimatePresence initial={false}>
        {posters.map((poster, i) => (
          i === activeIndex && (
            <motion.div
              key={`active-poster-${poster.id}`}
              className="absolute inset-0 z-0"
              layoutId={`poster-${poster.id}`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.25, 0.1, 0.25, 1],
                opacity: { duration: 0.4 },
                scale: { duration: 0.5 }
              }}
            >
              <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${poster.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/30" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Main Content */}
      <div className="absolute top-1/2 left-16 z-10 -translate-y-1/2">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${activeIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-sm uppercase tracking-widest opacity-80 mb-2">
              Explore {posters[activeIndex].subtitle}
            </p>
            <h1 className="text-8xl font-bold mb-8 leading-tight">
              {posters[activeIndex].title.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {word}{i < posters[activeIndex].title.split(' ').length - 1 && <br />}
                </motion.span>
              ))}
            </h1>
            <motion.button
              className="px-8 py-3 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Location
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Small Carousel */}
      <div className="absolute top-1/2 right-0 z-20 -translate-y-1/2 w-[60%] h-full flex items-center">
        <div className="relative w-full h-full overflow-visible">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ 
                duration: 0.4, 
                ease: [0.25, 0.1, 0.25, 1],
                layout: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
              }}
              className="absolute top-1/2 -translate-y-1/2 left-8 flex items-center gap-6"
              style={{ paddingLeft: '2rem' }}
            >
              {smallCarouselPosters.map((poster, i) => (
                <motion.div
                  key={poster.id}
                  onClick={() => handleCardClick((activeIndex + 1 + i) % posters.length)}
                  className="cursor-pointer flex-shrink-0 transition-all duration-300 hover:opacity-100" 
                  style={{ perspective: "1000px", minWidth: "200px" }}
                  layoutId={`poster-${poster.id}`}
                  layout
                >
                  <motion.div
                    className="w-50 h-76 rounded-lg overflow-hidden shadow-2xl transform-gpu relative z-10" 
                    whileHover={{ 
                      scale: 1.12, 
                      rotateY: 8, 
                      rotateX: 4,
                      zIndex: 50
                    }}
                    style={{ boxShadow: "0 6px 10px rgba(0, 0, 0, 0.6)" }}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${poster.image})` }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation + Progress Bar + Counter */}
<div className="absolute bottom-32 right-8 flex items-center z-50 space-x-6 w-[80%]">
  {/* Left/Right buttons */}
  <div className="flex items-center space-x-6">
    <motion.button
      onClick={() => paginate(-1)}
      className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </motion.button>

    <motion.button
      onClick={() => paginate(1)}
      className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </motion.button>
  </div>

  {/* Progress Bar */}
  <div className="relative h-2 bg-white/20 rounded-full flex-grow mx-4 overflow-hidden">
    <motion.div
      className="h-full bg-white rounded-full"
      animate={{ width: `${((activeIndex + 1) / posters.length) * 100}%` }}
      transition={{ duration: 0.5, ease: [0.42, 0, 1, 1] }}
    />
  </div>

  {/* Counter */}
  <motion.div 
    className="text-6xl font-light opacity-40"
    key={activeIndex}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 0.4, y: 0 }}
    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
  >
    {String(activeIndex + 1).padStart(2, '0')}
  </motion.div>
</div>

        </div>
      </div>
    </div>
  );
}
