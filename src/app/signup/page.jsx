"use client";

import React, { useState, useContext } from "react";
import { UserContext } from "@/context/user.context";
import axiosInstance from "@/lib/axios";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axiosInstance.post("/auth/signup", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      router.push("/");
    }    
    catch (err) {
      const message =
        err?.response?.data?.error ||   // our backend returns { error: "..." }
        err?.response?.data?.message || // fallback
        err?.message ||
        "Something went wrong. Please try again.";

      setError(message);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen flex items-center justify-center px-4 pb-20"
    >
      <div
        className="
          bg-[#0E0E0E]/60 backdrop-blur-xl 
          p-6 sm:p-8 rounded-2xl shadow-2xl 
          w-full max-w-md border border-[#C6A667]/40
        "
      >
        <h2
          className="
            text-2xl sm:text-3xl font-bold mb-6 text-center
            bg-linear-to-r from-[#C6A667] to-[#FFB84C]
            bg-clip-text text-transparent
          "
        >
          Create Account
        </h2>

        <form onSubmit={submitHandler} className="space-y-5">
          {/* Email */}
          <div>
            <label
              className="block text-gray-300 mb-2 text-sm font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className={`
                w-full py-3 px-4 rounded-lg bg-linear-to-r from-[#1A1A1A]/70 via-gray-800 to-[#1A1A1A]/70 border text-gray-100 
                text-sm sm:text-base
                ${error ? "border-red-500" : "border-[#C6A667]/40"}
                focus:outline-none focus:ring-2 
                ${error ? "focus:ring-red-600" : "focus:ring-[#C6A667]"}
                transition-all
              `}
            />
          </div>

          {/* Password */}
          <div>
            <label
              className="block text-gray-300 mb-2 text-sm font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              className={`
                w-full py-3 px-4 rounded-lg bg-linear-to-r from-[#1A1A1A]/70 via-gray-800 to-[#1A1A1A]/70 border text-gray-100
                text-sm sm:text-base
                ${error ? "border-red-500" : "border-[#C6A667]/40"}
                focus:outline-none focus:ring-2
                ${error ? "focus:ring-red-600" : "focus:ring-[#C6A667]"}
                transition-all
              `}
            />

            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold shadow-md transition-all text-sm sm:text-base cursor-pointer ${
              loading
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : `bg-linear-to-r from-[#C6A667] via-[#FFB84C] to-[#A68945]
                  hover:shadow-[0_0_15px_#C6A66780]
                  text-black`
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-[#C6A667]/30" />
          <span className="px-3 text-gray-400">or</span>
          <hr className="flex-1 border-[#C6A667]/30" />
        </div>

        {/* Login Link */}
        <p className="text-gray-400 mt-5 text-center text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="
              text-[#FFB84C] hover:text-[#C6A667] 
              font-medium transition-colors
            "
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}