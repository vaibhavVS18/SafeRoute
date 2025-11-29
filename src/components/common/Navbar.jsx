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

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

        <Link href="/" className="cursor-pointer flex items-center gap-2">
          <div className="relative w-32 h-10">
            <Image
              src="/logo.png"
              alt="SafeRoute Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          <Link
            href="/"
            className={`transition-colors duration-200 font-medium ${
              pathname === "/"
                ? "text-emerald-400"
                : "text-gray-300 hover:text-emerald-400"
            }`}
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            className={`transition-colors duration-200 font-medium ${
              pathname === "/dashboard"
                ? "text-emerald-400"
                : "text-gray-300 hover:text-emerald-400"
            }`}
          >
            Dashboard
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-3">
              <Link
                href="/dashboard"
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
