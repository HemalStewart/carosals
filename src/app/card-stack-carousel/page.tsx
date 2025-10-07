'use client';

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { CardStackCarousel } from "@/components/CardStackCarousel";
import ExpandingPosterCarousel  from "@/components/ExpandingPosterCarousel";
import { BlackBackgroundCarousel } from "@/components/BlackBackgroundCarousel";
import { WhiteBackgroundCarousel } from "@/components/WhiteBackgroundCarousel";
import  TimedCardOpening from "@/components/TimedCardOpening";
import NetflixCarousel from "@/components/NetflixCarousel";
import { ExpoSlider } from "@/components/ExpoSlider";

export default function CarouselPage() {
  // List of carousel sections
  const sections = [
    CardStackCarousel,
    ExpandingPosterCarousel,
    BlackBackgroundCarousel,
    WhiteBackgroundCarousel,
    TimedCardOpening,
    NetflixCarousel,
    ExpoSlider,
    
  ];

  // Create refs and animation controls dynamically
  const refs = sections.map(() => useRef(null));
  const controls = sections.map(() => useAnimation());
  const inViews = refs.map((ref) => useInView(ref, { amount: 0.3, once: false }));

  useEffect(() => {
    inViews.forEach((inView, index) => {
      if (inView) {
        controls[index].start({
          opacity: 1,
          y: 0,
          transition: { duration: 1.2, type: "spring", stiffness: 80, damping: 20 },
        });
      } else {
        controls[index].start({ opacity: 0, y: 30 });
      }
    });
  }, [inViews, controls]);

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      {sections.map((SectionComponent, i) => (
        <motion.section
          key={i}
          ref={refs[i]}
          className="h-screen snap-start"
          initial={{ opacity: 0, y: 30 }}
          animate={controls[i]}
        >
          <SectionComponent />
        </motion.section>
      ))}
    </div>
  );
}
