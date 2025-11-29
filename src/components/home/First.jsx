"use client";

import React from "react";
import Link from "next/link";

const First = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full px-4 sm:px-6 py-16 lg:py-24 gap-8 lg:gap-16">
      
      {/* Left Side - Text */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
        {/* Brand */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          <span className="text-emerald-600">Safe</span>
          <span className="text-cyan-600">Route</span>
        </h2>

        {/* Tagline */}
        <span className="inline-block px-3 py-1 mt-1 mb-3 text-sm font-medium text-cyan-700 bg-emerald-100 rounded-full">
          Safety & Trust for Women and Children
        </span>

        {/* Hero Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Let Your Loved Ones{" "}
          <span className="text-emerald-600">Reach Home</span> Safely
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md lg:max-w-lg">
          SafeRoute helps families, women, and children share live location with trusted guardians, ensuring peace of mind until they reach home safely.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center lg:justify-start mt-4">
          <Link
            href="/signup"
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500
                       hover:from-emerald-400 hover:to-cyan-400 text-white 
                       font-semibold rounded-xl shadow-md active:scale-95 
                       transition-all text-sm sm:text-base"
          >
            🚀 Get Started
          </Link>

          <Link
            href="/features"
            className="px-6 py-3 bg-white border border-gray-300 
                       text-gray-700 hover:bg-gray-50 font-semibold 
                       rounded-xl shadow-md active:scale-95 transition-all 
                       text-sm sm:text-base"
          >
            🔍 View Features
          </Link>
        </div>
      </div>
  
    </section>
  );
};

export default First;
