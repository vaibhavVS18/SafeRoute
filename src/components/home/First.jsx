"use client";

import React from "react";
import Link from "next/link";

const First = () => {
  return (
    <section className="flex flex-col items-center lg:items-start w-full px-4 sm:px-6 py-10 lg:py-14 text-center lg:text-left">
      
      {/* Brand */}
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-1 tracking-tight">
        <span className="text-emerald-600">Safe</span>
        <span className="text-cyan-600">Route</span>
      </h2>

      {/* Tagline */}
      <span className="inline-block px-3 py-1 mt-1 mb-3 text-sm font-medium 
                       text-cyan-700 bg-emerald-100 rounded-full">
        Safety & Trust for Women and Children
      </span>

      {/* Hero Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3">
        Let Your Loved Ones{" "}
        <span className="text-emerald-600">Reach Home</span> Safely
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md lg:max-w-xl mb-6">
        SafeRoute allows women, children, and families to share their 
        live location with trusted guardians—ensuring someone is always 
        looking out for them until they reach home safely.
      </p>

      {/* ⭐ 4 Key Features */}
      <ul className="text-gray-700 text-sm sm:text-base space-y-2 mb-7 max-w-md lg:max-w-xl">
    <li>• Choose trusted guardians who can see your live location and stay connected with your journey.</li>
    <li>• Guardians can follow your route in real time, ensuring you’re safe at every step.</li>
    <li>• Send an instant SOS alert to your guardians whenever you feel unsafe or need help.</li>
    <li>• Guardians receive a notification the moment your child or loved one reaches home safely.</li>

      </ul>

      {/* CTA Buttons */}
      <div className="flex gap-3 justify-center lg:justify-start">
        <Link
          href="/signup"
          className="px-5 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500
                     hover:from-emerald-400 hover:to-cyan-400 text-white 
                     font-semibold rounded-xl shadow-md active:scale-95 
                     transition-all text-sm sm:text-base"
        >
          🚀 Get Started
        </Link>

        <Link
          href="/features"
          className="px-5 py-3 bg-white border border-gray-300 
                     text-gray-700 hover:bg-gray-50 font-semibold 
                     rounded-xl shadow-md active:scale-95 transition-all 
                     text-sm sm:text-base"
        >
          🔍 View Features
        </Link>
      </div>

    </section>
  );
};

export default First;
