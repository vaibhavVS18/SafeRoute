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
    } catch (err) {
      console.error(err?.response?.data || err.message);

      setError(
        err?.response?.data ||
          err?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
          Create Account
        </h2>

        <form onSubmit={submitHandler} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-2 text-sm font-medium">
              Email
            </label>

            <input
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              type="email"
              placeholder="Enter your email"
              required
              className={`w-full py-3 px-4 rounded-lg bg-gray-50 border text-emerald-800 text-sm
                ${error ? "border-red-600" : "border-gray-300"}
                focus:outline-none focus:ring-2
                ${error ? "focus:ring-red-600" : "focus:ring-emerald-400"}
                transition-all`}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-2 text-sm font-medium">
              Password
            </label>

            <input
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              type="password"
              placeholder="Enter your password"
              required
              className={`w-full py-3 px-4 rounded-lg bg-gray-50 border text-emerald-800 text-sm
                ${error ? "border-red-600" : "border-gray-300"}
                focus:outline-none focus:ring-2
                ${error ? "focus:ring-red-600" : "focus:ring-emerald-400"}
                transition-all`}
            />
          </div>

          {/* Error */}
          {error && <p className="text-red-600 text-xs mt-2">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold shadow-md transition-all text-sm
              ${
                loading
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-white"
              }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="px-3 text-gray-400">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Login */}
        <p className="text-gray-500 mt-5 text-center text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-emerald-600 hover:text-teal-500 font-medium transition-colors"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
