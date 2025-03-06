"use client";

import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="relative flex justify-center items-center w-full h-screen px-8">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/moraine-lake.png"
          alt="Moraine Lake"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
      </div>
      <span className="relative text-6xl font-bold bg-gradient-to-r from-purple-500 to-yellow-500 bg-clip-text text-transparent text-center">
        COMING SOON
      </span>
    </div>
  );
}