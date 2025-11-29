"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2); // duplicate array
    }
  }, []);

  return (
    <section className="bg-gray-50 py-20 px-6 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Loved by Families & Working Professionals
      </h2>

      <div className="relative overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-4 sm:gap-6"
          animate={{ x: [0, -width] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white p-4 sm:p-6 rounded-2xl shadow-lg min-w-[180px] sm:min-w-[250px] md:min-w-[350px]"
            >
              <p className="text-gray-700 italic text-sm sm:text-base leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                "{t.text}"
              </p>
              <h4 className="mt-2 sm:mt-3 font-semibold text-gray-900 text-xs sm:text-sm">
                {t.user}
              </h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
