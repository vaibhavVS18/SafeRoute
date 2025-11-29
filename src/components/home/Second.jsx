"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    img: "/safe1.png",
    title: "Trusted Guardians",
    desc1: "Choose trusted guardians who can see your live location",
    desc2: "and stay connected through your entire journey.",
  },
  {
    img: "/safe2.png",
    title: "Live Route Tracking",
    desc1: "Guardians can follow your route in real time",
    desc2: "so they always know you're safe at every step.",
  },
  {
    img: "/safe3.png",
    title: "Instant SOS Alert",
    desc1: "Send an immediate SOS notification to your guardians",
    desc2: "whenever you feel unsafe or need quick help.",
  },
  {
    img: "/safe4.png",
    title: "Safe-Arrival Notification",
    desc1: "Guardians receive alerts the moment your child or loved one",
    desc2: "reaches home safely.",
  },
];

const Second = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide change
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative flex-1 max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[520px] xl:max-w-[600px] aspect-square mx-auto lg:mx-0 lg:ml-auto overflow-hidden rounded-3xl shadow-2xl border border-gray-700/40 transition-all duration-500">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            className="object-contain"
            priority={index === current}
          />

          <div className="absolute bottom-10 text-center px-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
              {slide.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-200 mt-1">
              {slide.desc1}
            </p>
            <p className="text-sm sm:text-base text-gray-200">
              {slide.desc2}
            </p>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white text-xl transition-all duration-300"
      >
        <FaArrowLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white text-xl transition-all duration-300"
      >
        <FaArrowRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white scale-110 shadow-md"
                : "bg-gray-500 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Second;
