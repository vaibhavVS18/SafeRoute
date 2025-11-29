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
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:px-8 md:py-6">
      
      <div className="flex justify-center">
        <div className="w-full h-50 relative overflow-hidden mb-1">
          <Image
            src="/SafeRoute2.png"
            alt="SafeRouter"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Profile Info Card */}
      <div className="flex flex-col max-w-md items-center text-center bg-white rounded-xl shadow-lg p-6 mx-auto">

        {/* Profile Image */}
        <div className="w-32 h-32 relative rounded-full overflow-hidden mb-4 border-4 border-emerald-400 shadow">
          <Image
            src={user?.profileImage || "/default-profile.png"}
            alt={user?.username || "User Profile"}
            fill
            className="object-cover"
          />
        </div>

        {/* Email */}
        <p className="text-gray-600 mb-3">{user?.email}</p>

        {/* Explore Features Button */}
        <button
          onClick={scrollToFeatures}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition"
        >
          Explore Features
        </button>
      </div>
    </div>
  );
}
