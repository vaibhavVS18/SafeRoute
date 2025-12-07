"use client";

import First from "./First";
import Second from "./Second";

export default function Hero() {
  return (
    <section className="relative w-full  overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 lg:gap-10 px-4 sm:px-6 lg:px-20 py-6 lg:py-5">
      
      {/* Background Video */}
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/myvideo5.mp4" type="video/mp4" />
      </video> */}

       {/* Dark overlay (optional for readability) */}
     {/* <div className="absolute inset-0 bg-black/40 z-0"></div> */}

      {/* LEFT SIDE */}
      <div className="z-1 w-full lg:flex-1 flex items-center justify-center">
        <First />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:flex-1 flex items-center justify-center py-3">
        <Second />
      </div>
    </section>
  );
}
