"use client";

import React from "react";
import Link from "next/link";
import { Shield, Users, AlertCircle , ArrowRightCircle, List} from "lucide-react"; // Icons from lucide-react

const First = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full px-4 sm:px-6 py-12 lg:py-20 gap-8 lg:gap-16">
      
      {/* Left Side - Text */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
        
        {/* Brand */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight flex items-center gap-2">
          <Shield className="text-emerald-600 w-6 h-6 mt-2" />
          <span>
            <span className="text-emerald-600">Safe</span>
            <span className="text-cyan-600">Route</span>
          </span>
        </h2>

        {/* Tagline */}
        <span className="inline-flex items-center gap-2 px-3 py-1 mt-1 mb-3 text-sm font-medium text-cyan-700 bg-cyan-50 rounded-full">
          <Users className="w-4 h-4" /> Safety & Trust for Women and Children
        </span>

        {/* Hero Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Let Your Loved Ones{" "}
          <span className="text-emerald-600">Reach Home</span> Safely
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md lg:max-w-lg">
          SafeRoute allows families, women, and children to share live location with trusted guardians, so they can monitor the journey until their loved ones reach home safely.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center lg:justify-start mt-4">
          <Link
            href="/signup"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl shadow-md transition-all active:scale-95 text-sm sm:text-base inline-flex items-center gap-2"
          >
            <ArrowRightCircle className="w-4 h-4" />
            Get Started
          </Link>

          <Link
            href="/features"
            className="px-6 py-3 bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 font-semibold rounded-xl shadow-md transition-all active:scale-95 text-sm sm:text-base inline-flex items-center gap-2"
          >
            <List className="w-4 h-4" />
            View Features
          </Link>
        </div>

      </div>
  
    </section>
  );
};

export default First;
