"use client";

import React ,{useContext}from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Users, ArrowRightCircle, List } from "lucide-react";
import {UserContext} from "@/context/user.context.jsx";

const First = () => {
  const {user} = useContext(UserContext);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToFeatures = () => {
    let offset = 600;
    if (window.innerWidth < 640) offset = 810;
    else if (window.innerWidth < 1024) offset = 550;
    else offset = 700;

    if (pathname === "/") {
      setTimeout(() => {
        window.scrollTo({ top: offset, behavior: "smooth" });
      }, 50);
      return;
    }

    router.push("/");
    setTimeout(() => {
      window.scrollTo({ top: offset, behavior: "smooth" });
    }, 200);
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full px-4 sm:px-6 lg:py-20 gap-8 lg:gap-16 text-[#F2F2F2]">

      {/* Content */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">

        {/* Brand */}
        <div className="flex items-center gap-1 w-full justify-center lg:justify-start">
          <Image
            src="/logo5.png"
            alt="SafeRoute"
            width={60}
            height={60}
            className="object-contain"
            priority
          />

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight flex items-center">
            <span className="bg-linear-to-r from-[#C6A667] via-gray-200 to-[#FFB84C] bg-clip-text text-transparent drop-shadow-sm">
              Safe
            </span>
            <span className="bg-linear-to-r from-[#C6A667] via-gray-100 to-[#FFB84C] bg-clip-text text-transparent drop-shadow-sm">
             Route
            </span>
          </h2>
        </div>

        {/* Tagline */}
        <span className="inline-flex items-center gap-2 px-3 py-1 mt-1 mb-3 text-sm font-medium
          bg-[#A68945]/15 border border-[#C6A667]/30 text-gray-200 rounded-full backdrop-blur-md">
          <Users className="w-4 h-4 text-[#C6A667]" />
          Safety & Trust for Women and Children
        </span>

        {/* Hero Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#F5DFA6]">
          Let Your Loved Ones{" "}
          <span className="bg-linear-to-r from-[#FFB84C] to-[#C6A667] bg-clip-text text-transparent">
            Reach Home
          </span>{" "}
          Safely
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md lg:max-w-lg">
          SafeRoute allows families, women, and children to share live location with trusted guardians, so they can monitor the journey until their loved ones reach home safely.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center lg:justify-start mt-4">

          {/* Dark Golden Button */}
          <Link
            href={`${user ? "/profile" : "/signup"}`}
            className="px-6 py-3 bg-linear-to-r from-[#A68945] via-gray-300 to-[#C6A667]
            text-black font-semibold rounded-xl shadow-lg shadow-black/40 
            hover:from-[#C6A667] hover:to-[#FFB84C] transition-all active:scale-95
            text-sm sm:text-base inline-flex items-center gap-2"
          >
            <ArrowRightCircle className="w-4 h-4" />
            Get Started
          </Link>

          {/* Matte Silver-Gold Button */}
          <button
            onClick={scrollToFeatures}
            className="px-6 py-3 bg-[#2A2A2A]/70 border border-[#C6A667]/40 
            text-[#F5DFA6] hover:bg-[#3A3A3A]/70 
            font-semibold rounded-xl shadow-md hover:shadow-[#C6A667]/20 
            transition-all active:scale-95 text-sm sm:text-base inline-flex items-center gap-2 cursor-pointer"
          >
            <List className="w-4 h-4 text-[#C6A667]" />
            View Features
          </button>
        </div>

      </div>
    </section>
  );
};

export default First;
