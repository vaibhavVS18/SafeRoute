"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    text: "SafeRoute gives me peace of mind when my daughter travels alone. I can see she reached safely.",
    user: "– Radhika, Parent",
  },
  {
    text: "During a late-night cab ride, the SOS alert helped me immediately notify my guardian. Life saver app!",
    user: "– Meera, IT Employee",
  },
  {
    text: "I travel daily for coaching. My parents feel much safer now tracking my route in real time.",
    user: "– Arjun, Student",
  },
  {
    text: "My wife works night shifts. SafeRoute lets me track her until she reaches safely.",
    user: "– Rajesh, Husband",
  },
  {
    text: "As a guardian, I love the safe-arrival alerts. Simple but extremely helpful feature.",
    user: "– Sneha, Sister",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="bg-gray-50 py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Loved by Families & Working Professionals
      </h2>

      <div className="relative max-w-4xl mx-auto overflow-hidden">
        
        {/* Slider Container */}
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="min-w-full px-4 flex justify-center"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl">
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  "{t.text}"
                </p>
                <h4 className="mt-4 font-semibold text-gray-900">
                  {t.user}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute top-1/2 -translate-y-1/2 left-2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100"
        >
          <FaArrowLeft className="text-gray-600 text-xl" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute top-1/2 -translate-y-1/2 right-2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100"
        >
          <FaArrowRight className="text-gray-600 text-xl" />
        </button>

      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-gray-800 scale-110" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
