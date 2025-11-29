"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-16 text-center md:text-left">

        <div>
          <h2 className="text-2xl font-extrabold text-white tracking-wide">
            SafeRoute
          </h2>
          <p className="mt-3 text-sm text-gray-400 max-w-sm mx-auto md:mx-0 leading-relaxed">
            Empowering creators and innovators — explore, connect, and grow with
            SafeRoute’s intelligent platform.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-emerald-400 transition-colors">
                Dashboard
              </Link>
            </li>
            <li>
              <button
                onClick={() => router.push("/login")}
                className="hover:text-emerald-400 transition-colors"
              >
                Login
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <Link href="#" className="hover:text-emerald-400 transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5 text-center text-xs sm:text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-emerald-400 font-semibold">SafeRoute</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
