"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation';

// Deterministic pseudo-random function
function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Round numbers for hydration safety
function format(num) {
  return Number(num.toFixed(2));
}

const CardStackCollection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isExpanding, setIsExpanding] = useState(false);
  const scrollContainerRef = useRef(null);
  const router = useRouter();

  const collections = [
    { id: '1', title: "Poster 1", src: "/images/poster1.jpg", alt: "Poster 1", description: "Beautiful vintage poster with classic design elements." },
    { id: '2', title: "Poster 2", src: "/images/poster2.jpg", alt: "Poster 2", description: "Modern abstract artwork with vibrant colors." },
    { id: '3', title: "Poster 3", src: "/images/poster3.jpg", alt: "Poster 3", description: "Minimalist design with typography focus." },
    { id: '4', title: "Poster 4", src: "/images/poster4.jpg", alt: "Poster 4", description: "Nature-inspired poster with organic shapes." },
    { id: '5', title: "Poster 5", src: "/images/poster5.jpg", alt: "Poster 5", description: "Bold geometric patterns in monochrome." },
    { id: '6', title: "Poster 6", src: "/images/poster6.jpg", alt: "Poster 6", description: "Artistic photography with dramatic lighting." },
  ];

  // Generate deterministic messy offsets
  const cardOffsets = collections.map((c, index) => {
    const seed = Number(c.id) * 100 + index;
    return {
      offsetX: format((seededRandom(seed) - 0.5) * 20),
      offsetY: format((seededRandom(seed + 1) - 0.5) * 10),
      rotation: format((seededRandom(seed + 2) - 0.5) * 15),
    };
  });

  // Track scroll progress (now with 4 sections)
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const { scrollTop, clientHeight, scrollHeight } = scrollContainerRef.current;
      const progress = scrollTop / (scrollHeight - clientHeight);
      setScrollProgress(progress);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Card style based on scroll (now 4 sections)
  const getCardStyle = (index, total) => {
    const baseZIndex = total - index;
    const t = scrollProgress * 4; // 4 stages now
    const spreadDistance = 200;
    const initialCardWidth = 200; // Original width of the card
    const finalCarouselPosition = index * (initialCardWidth + 24) - ((total - 1) * (initialCardWidth + 24)) / 2;
    let transformValue = "";
    let opacity = 1;
    let zIndex = baseZIndex;

    // Logic for when a card is selected and we are in Section 4
    if (t >= 3 && selectedCard && selectedCard.id === collections[index].id) {
      // Calculate position for the left side of the detail view
      const targetScale = 2; // Desired scale for the detail view image
      transformValue = `translateX(-${window.innerWidth * 0.25}px) translateY(0px) rotate(0deg) scale(${targetScale})`;
      opacity = 1;
      zIndex = baseZIndex + 2000;
    } else if (t >= 3 && selectedCard && selectedCard.id !== collections[index].id) {
        // Hide other cards when one is selected in Section 4
        transformValue = `translateX(${finalCarouselPosition}px) translateY(0px) rotate(0deg) scale(0.8)`;
        opacity = 0;
        zIndex = baseZIndex;
    } else if (t < 1) {
      // Section 1: messy stack to spread
      const { offsetX, offsetY, rotation } = cardOffsets[index];
      const currentOffsetX = format(offsetX * (1 - t) + (index - (total - 1) / 2) * spreadDistance * t);
      const currentOffsetY = format(offsetY * (1 - t));
      const currentRotation = format(rotation * (1 - t) + (index - (total - 1) / 2) * 3 * t);
      transformValue = `translateX(${currentOffsetX}px) translateY(${currentOffsetY}px) rotate(${currentRotation}deg)`;
      zIndex = hoveredCard === index ? baseZIndex + 1000 : baseZIndex;
    } else if (t < 2) {
      // Section 2: spread with slight rotation
      const spreadT = t - 1;
      const angle = (index - (total - 1) / 2) * 3 * (1 - spreadT);
      transformValue = `translateX(${(index - (total - 1) / 2) * spreadDistance}px) translateY(0px) rotate(${angle}deg)`;
      zIndex = hoveredCard === index ? baseZIndex + 1000 : baseZIndex + 500;
    } else { // t >= 2 && t < 3
      // Section 3: transition to carousel
      const carouselT = t - 2;
      const spreadX = (index - (total - 1) / 2) * spreadDistance;
      const carouselX = finalCarouselPosition;
      const currentX = format(spreadX * (1 - carouselT) + carouselX * carouselT);
      transformValue = `translateX(${currentX}px) translateY(0px) rotate(0deg)`;
      zIndex = baseZIndex + 1000;
    }

    return {
      transform: transformValue,
      zIndex: zIndex,
      opacity: opacity,
      transition: "transform 0.5s ease-out, z-index 0.3s, opacity 0.5s",
    };
  };

  const handleCardClick = (collection) => {
    const t = scrollProgress * 4;
    if (t > 2) { // Can click in section 3 or 4
      if (t > 3 && selectedCard?.id === collection.id) {
        // If already in section 4 and clicking the same card, navigate to detail page
        router.push(`/posters/${collection.id}?src=${collection.src}&title=${collection.title}`);
      } else {
        // Select the card and scroll to section 4
        setSelectedCard(collection);
        setIsExpanding(true);
        scrollToSection4();

        // Reset expanding animation after a delay
        setTimeout(() => setIsExpanding(false), 800);
      }
    }
  };

  const handleCardHover = (index) => setHoveredCard(index);
  const handleCardLeave = () => setHoveredCard(null);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToSection2 = () => {
    if (scrollContainerRef.current) {
      const section2Top = window.innerHeight;
      scrollContainerRef.current.scrollTo({ top: section2Top, behavior: "smooth" });
    }
  };

  const scrollToSection3 = () => {
    if (scrollContainerRef.current) {
      const section3Top = window.innerHeight * 2;
      scrollContainerRef.current.scrollTo({ top: section3Top, behavior: "smooth" });
    }
  };

  const scrollToSection4 = () => {
    if (scrollContainerRef.current) {
      const section4Top = window.innerHeight * 3;
      scrollContainerRef.current.scrollTo({ top: section4Top, behavior: "smooth" });
    }
  };

  const resetSelection = () => {
    setSelectedCard(null);
    setIsExpanding(false);
    scrollToSection3();
  };

  return (
    <div className="relative h-screen">
      {/* Scrollable sections */}
      <div
        ref={scrollContainerRef}
        className={`h-full w-full overflow-y-scroll snap-y snap-mandatory`}
      >
        {/* Section 1 */}
        <section className="h-screen w-full bg-white snap-start flex items-center justify-center"></section>

        {/* Section 2 */}
        <section className="h-screen w-full snap-start relative bg-white">
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center z-10 pointer-events-none">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">The Ultimate</h1>
            <h2 className="text-5xl font-black text-gray-900 mb-6">COLLECTIONS</h2>
            <div className="flex justify-center gap-4 mb-6">
              <span className="px-3 py-1.5 bg-cyan-400 text-white rounded-full text-xs font-medium">for everyone</span>
              <span className="px-3 py-1.5 bg-orange-400 text-white rounded-full text-xs font-medium">new styles</span>
            </div>
          </div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-10 pointer-events-none">
            <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
              We Go First Choice Our Collections 12 Sessions We Create New Models
              Every Week. And We In A Few Items.
            </p>
            <button
              onClick={scrollToSection3}
              className="px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl pointer-events-auto"
            >
              Go to Carousel
            </button>
          </div>
        </section>

        {/* Section 3 */}
        <section className="h-screen w-full snap-start bg-white relative">
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center z-10 pointer-events-none">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Best Selling Product Of The</h1>
            <h2 className="text-5xl font-black text-gray-900 mb-6">COLLECTIONS</h2>
            <div className="flex justify-center gap-4 mb-6">
              <span className="px-3 py-1.5 bg-cyan-400 text-white rounded-full text-xs font-medium">for everyone</span>
              <span className="px-3 py-1.5 bg-orange-400 text-white rounded-full text-xs font-medium">new styles</span>
            </div>
          </div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-10 pointer-events-none">
            <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
              Click on any poster to see details. We Go First Choice Our Collections 12 Sessions We Create New Models
              Every Week. And We In A Few Items.
            </p>
            <button
              onClick={scrollToTop}
              className="px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl pointer-events-auto"
            >
              Back to Top
            </button>
          </div>
        </section>

        {/* Section 4 - Selected Item Detail */}
        <section className="h-screen w-full snap-start bg-white from-gray-50 to-gray-100 relative">
          <div className={`absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-500 ${selectedCard ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {selectedCard && (
              <div className="max-w-4xl w-full grid grid-cols-[1.5fr_1fr] gap-12 items-center">
                {/* The actual selected card from the fixed layer will animate into this space */}
                <div className="flex justify-center relative">
                  <div className="w-[300px] h-[456px] rounded-lg"></div>
                </div>

                {/* Content Column */}
                <div className="space-y-8">
                  <div>
                    <h1 className="text-5xl font-black text-gray-900 mb-4">{selectedCard.title}</h1>
                    <p className="text-xl text-gray-600 mb-6">{selectedCard.description}</p>
                    <div className="flex gap-4 mb-8">
                      <span className="px-4 py-2 bg-cyan-400 text-white rounded-full text-sm font-medium">Premium Quality</span>
                      <span className="px-4 py-2 bg-orange-400 text-white rounded-full text-sm font-medium">Limited Edition</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <button
                      onClick={() => handleCardClick(selectedCard)}
                      className="w-full px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                      View Full Details
                    </button>
                    <button
                      onClick={resetSelection}
                      className="w-full px-8 py-4 bg-white text-gray-800 border-2 border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors duration-300"
                    >
                      Back to Collection
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Fixed Card Stack & Carousel */}
      <div className="fixed inset-0 flex flex-col items-center justify-center pointer-events-none z-[999]">
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative transition-all duration-1000 w-full">
            <div className="relative h-80 flex items-center justify-center">
              {collections.map((collection, index) => (
                <div
                  key={collection.id}
                  className={`absolute w-[200px] h-[304px] rounded-lg shadow-xl cursor-pointer overflow-hidden pointer-events-auto ${
                    hoveredCard === index ? "scale-105 shadow-2xl" : ""
                  }`}
                  style={getCardStyle(index, collections.length)}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                  onClick={() => handleCardClick(collection)}
                >
                  <img
                    src={collection.src}
                    alt={collection.alt}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStackCollection;