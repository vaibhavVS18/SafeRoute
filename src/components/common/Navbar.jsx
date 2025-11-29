"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { UserContext } from "@/context/user.context";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/");
  };

  // Smooth scroll to features (desktop & mobile)
  const scrollToFeatures = () => {
    const desktopOffset = 700;
    const mobileOffset = 500;

    const offset = window.innerWidth >= 768 ? desktopOffset : mobileOffset;

    // Already on home → directly scroll
    if (pathname === "/") {
      setTimeout(() => {
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }, 50);
      return;
    }

    // Not on home → navigate to home then scroll
    router.push("/");
    setTimeout(() => {
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }, 200); // allow homepage to mount
  };

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 backdrop-blur-xl shadow-lg h-20">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between h-full">

        {/* Logo */}
        <Link href="/" className="cursor-pointer flex items-center h-full">
          <div className="relative h-full w-40">
            <Image
              src="/logo4.png"
              alt="SafeRoute Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10 h-full">
          <Link
            href="/"
            className={`transition-colors duration-200 font-medium ${
              pathname === "/" ? "text-emerald-400" : "text-gray-300 hover:text-emerald-400"
            }`}
          >
            Home
          </Link>

          {/*  REPLACED normal link with smooth scroll */}
          <button
            onClick={scrollToFeatures}
            className={`transition-colors duration-200 font-medium ${
              pathname === "/#features"
                ? "text-emerald-400"
                : "text-gray-300 hover:text-emerald-400"
            }`}
          >
            Features
          </button>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-3">
              <Link
                href="/profile"
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-500 hover:border-teal-400 transition-all"
              >
                <Image
                  src={user.profileImage || "/default-avatar.png"}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </Link>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-medium shadow-md transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-white font-medium shadow-md transition-all"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
