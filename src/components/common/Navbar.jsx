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

  const scrollToFeatures = () => {
    const offset = window.innerWidth >= 768 ? 700 : 500;

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
    <header className="
      sticky top-0 inset-x-0 z-50 
      bg-linear-to-b from-[#0A0A0A] via-[#0b2244] to-[#0A0A0A] 
      border-b border-[#C6A667]/30 
      backdrop-blur-xl
      shadow-[0_4px_20px_rgba(0,0,0,0.7)]
      h-20
    ">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between h-full">

        {/* Logo */}
        <Link href="/" className="cursor-pointer flex items-center h-full">
          <div className="relative h-full w-40">
            <Image
              src="/logo4.png"
              alt="SafeRoute Logo"
              fill
              className="object-contain drop-shadow-[0_0_10px_#C6A66750]"
              priority
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10 h-full">
          <Link
            href="/"
            className={`
              font-semibold transition-all 
              bg-clip-text text-transparent 
              ${pathname === "/" 
                ? "bg-[#FFB84C]" 
                : "bg-gray-300 hover:bg-[#FFB84C]"
              }
            `}
          >
            Home
          </Link>

          <button
            onClick={scrollToFeatures}
            className={`
              font-semibold transition-all
              bg-clip-text text-transparent
              hover:bg-[#FFB84C]
              ${pathname === "/#features"
                ? "bg-[#FFB84C]"
                : "bg-gray-300"
              }
            `}
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
                className="
                  w-10 h-10 rounded-full overflow-hidden
                  border border-[#C6A667]/60
                  shadow-[0_0_10px_#C6A66740]
                  hover:shadow-[0_0_15px_#C6A66780]
                  transition-all
                "
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
                className="
                  px-4 py-2 rounded-xl 
                  bg-linear-to-r from-[#C6A667] via-[#FFB84C] to-[#A68945]
                  text-black font-semibold
                  shadow-[0_0_10px_#C6A66780]
                  hover:shadow-[0_0_15px_#FFB84C80]
                  transition-all active:scale-95
                "
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="
                px-6 py-2 rounded-xl 
                bg-[#1A1A1A]/70 border border-[#C6A667]/40
                text-[#F5DFA6] font-semibold
                shadow-md shadow-black/40
                hover:bg-[#2A2A2A] hover:border-[#FFB84C]/50
                hover:shadow-[0_0_10px_#C6A66760]
                transition-all active:scale-95
              "
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
