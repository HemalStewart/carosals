"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Parallax, Controller } from "swiper/modules";
import "swiper/css";
import "../styles/triple-slider.css";
import "../styles/main.css";

export default function TripleSlider() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const swiperEl = el.querySelector(".swiper");

    // ---- Create duplicate sliders ----
    const swiperPrevEl = swiperEl.cloneNode(true);
    swiperPrevEl.classList.add("triple-slider-prev");
    el.insertBefore(swiperPrevEl, swiperEl);

    const swiperNextEl = swiperEl.cloneNode(true);
    swiperNextEl.classList.add("triple-slider-next");
    el.appendChild(swiperNextEl);

    // Move one slide for each duplicate to simulate offset
    const prevSlides = swiperPrevEl.querySelectorAll(".swiper-slide");
    const prevLast = prevSlides[prevSlides.length - 1];
    swiperPrevEl
      .querySelector(".swiper-wrapper")
      .insertBefore(prevLast, prevSlides[0]);

    const nextSlides = swiperNextEl.querySelectorAll(".swiper-slide");
    const nextFirst = nextSlides[0];
    swiperNextEl.querySelector(".swiper-wrapper").appendChild(nextFirst);

    swiperEl.classList.add("triple-slider-main");

    // ---- Initialize Swipers ----
    const common = {
      loop: true,
      parallax: true,
      speed: 600,
      modules: [Parallax, Controller],
    };

    let mainSwiper;
    const prevSwiper = new Swiper(swiperPrevEl, {
      ...common,
      allowTouchMove: false,
      on: { click: () => mainSwiper.slidePrev() },
    });

    const nextSwiper = new Swiper(swiperNextEl, {
      ...common,
      allowTouchMove: false,
      on: { click: () => mainSwiper.slideNext() },
    });

    mainSwiper = new Swiper(swiperEl, {
      ...common,
      grabCursor: true,
      controller: { control: [prevSwiper, nextSwiper] },
      on: {
        destroy() {
          prevSwiper.destroy();
          nextSwiper.destroy();
        },
      },
    });

    return () => {
      mainSwiper.destroy(true, false);
    };
  }, []);

  const slides = [
    {
      bg: "/images/guardians-of-the-galaxy.jpg",
      logo: "/images/guardians-of-the-galaxy-logo.png",
      logoClass: "logo-image-1",
    },
    {
      bg: "/images/justice-league.jpg",
      logo: "/images/justice-league-logo.png",
      logoClass: "logo-image-2",
    },
    {
      bg: "/images/spider-man.jpg",
      logo: "/images/spider-man-logo.png",
      logoClass: "logo-image-3",
    },
    {
      bg: "/images/suicide-squad.jpg",
      logo: "/images/suicide-squad-logo.png",
      logoClass: "logo-image-4",
    },
    {
      bg: "/images/thor-ragnarok.jpg",
      logo: "/images/thor-ragnarok-logo.png",
      logoClass: "logo-image-5",
    },
  ];

  return (
    <div ref={containerRef} className="triple-slider">
      <div className="swiper">
        <div className="swiper-wrapper">
          {slides.map((s, i) => (
            <div className="swiper-slide" key={i}>
              <img className="bg-image" src={s.bg} alt="" />
              <img
                className={`logo-image ${s.logoClass}`}
                data-swiper-parallax-x="50%"
                src={s.logo}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
