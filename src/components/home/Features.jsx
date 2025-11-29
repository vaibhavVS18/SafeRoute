"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    img: "/safety1.png",
    title: "Trusted Guardians",
    desc1: "Choose trusted guardians who can see your live location",
    desc2: "and stay connected through your entire journey.",
  },
  {
    img: "/safety2.png",
    title: "Live Route Tracking",
    desc1: "Guardians can follow your route in real time",
    desc2: "so they always know you're safe at every step.",
  },
  {
    img: "/safety3.png",
    title: "Instant SOS Alerts",
    desc1: "Send an immediate SOS notification to your guardians",
    desc2: "whenever you feel unsafe or need quick help.",
  },
  {
    img: "/safety4.png",
    title: "Safe-Arrival Notification",
    desc1: "Guardians receive notification when their child",
    desc2: " or loved one reaches home safely.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-20 mx-auto min-h-screen flex flex-col justify-center bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Features Designed to Keep You Safe
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="relative rounded-3xl h-88 max-w-80 overflow-hidden shadow-lg cursor-pointer hover:scale-102 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {/* Feature Image */}
            <div className="relative h-full w-full">
              <Image
                src={feature.img}
                alt={feature.title}
                fill
                className="object-contain"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 from-black/60 to-transparent"></div>
            </div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-black/40 text-white text-center p-2">
              <h3 className="text-lg font-bold mb-1 drop-shadow-lg">{feature.title}</h3>
              <p className="text-xs drop-shadow-md">{feature.desc1}</p>
              <p className="text-sm drop-shadow-md">{feature.desc2}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
