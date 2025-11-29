"use client";

import First from "./First";
import Second from "./Second";

export default function Hero() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 lg:gap-10 px-4 sm:px-6 lg:px-20 py-6 lg:py-5 min-h-screen">
      
      {/* LEFT SIDE */}
      <div className="w-full my-auto lg:flex-1 flex items-center justify-center">
        <First />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full my-auto lg:flex-1 flex items-center justify-center py-3">
        <Second />
      </div>
    </section>
  );
}
