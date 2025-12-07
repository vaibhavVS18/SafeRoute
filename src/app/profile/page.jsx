"use client";

import { useContext } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { UserContext } from "@/context/user.context";
import Loader from "@/components/common/Loader";

export default function ProfilePage() {
  const { user, loading } = useContext(UserContext);
  const router = useRouter();
  const pathname = usePathname();

  if (loading) return <Loader />;

  //  Same smooth scroll logic
  const scrollToFeatures = () => {
    let offset = 600;

    if (window.innerWidth < 640) {
      offset = 810; // mobile
    } else if (window.innerWidth < 1024) {
      offset = 550; // tablet
    } else {
      offset = 700; // desktop
    }

    if (pathname === "/") {
      setTimeout(() => {
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }, 50);
      return;
    }

    router.push("/");
    setTimeout(() => {
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }, 200);
  };

  return (
    <div className="min-h-screen px-4 py-6 md:px-8 md:py-4">
      
      <div className="flex flex-col justify-center items-center mb-6 xl:mb-3">
        <div className="w-full h-30 2xl:h-23 relative overflow-hidden">
          <Image
            src="/logo5.png"
            alt="SafeRouter"
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight flex items-center">
          <span className="bg-linear-to-r from-[#C6A667] via-gray-200 to-[#FFB84C] bg-clip-text text-transparent drop-shadow-sm">
            Safe
          </span>
          <span className="bg-linear-to-r from-[#C6A667] via-gray-100 to-[#FFB84C] bg-clip-text text-transparent drop-shadow-sm">
            Route
          </span>
        </h2>
      </div>

      {/* Profile Info Card */}
      <div className="flex flex-col max-w-md xl:max-w-lg items-center text-center bg-[#0E0E0E]/40 backdrop-blur-xl rounded-xl shadow-2xl p-6 mx-auto border border-[#C6A667]/40">

        {/* Profile Image */}
        <div className="w-28 h-28 relative rounded-full overflow-hidden mb-4 border-4 border-[#C6A667] shadow-lg shadow-[#C6A667]/30">
          <Image
            src={user?.profileImage || "/default-profile.png"}
            alt={user?.username || "User Profile"}
            fill
            className="object-cover"
          />
        </div>

        {/* Email */}
        <p className="text-gray-300 mb-3 text-lg">{user?.email}</p>

        {/* Explore Features Button */}
        <button
          onClick={scrollToFeatures}
          className="bg-linear-to-r from-[#A68945] via-gray-300 to-[#C6A667] hover:shadow-[0_0_15px_#C6A66780] text-black font-semibold py-3 px-8 rounded-xl shadow-md transition-all cursor-pointer"
        >
          Explore Features
        </button>

        {/* Divider */}
        <div className="w-full my-6">
          <hr className="border-[#C6A667]/30" />
        </div>

        {/* Safety Message */}
        <div className="space-y-2 xl:space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#C6A667] to-[#FFB84C] bg-clip-text text-transparent">
            Your Safety, Our Priority
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm xl:max-w-lg">
            SafeRoute allows guardians to track their loved ones or children's routes in real-time for their safe journey,
            and If you are relative or children then you can allow or disallow location tracking by your parents at any time from settings.
          </p>
          <div className="flex items-center justify-center gap-2 text-[#FFB84C] text-sm pt-1">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="font-medium">Protected & Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
}