"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GradientText from "./ui/GradientText";

export default function Hero() {

  function ComingSoon() {
    alert("Coming soon... \n\nPlease email all inquiries to reservations@mountainmixology.ca")
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 w-full">
        <Image
          src="/bar.png"
          alt="Bar"
          fill
          className="object-cover"
          priority
        />
        {/* Background Blur Effect */}
        <div className="absolute inset-0 bg-black/15 backdrop-blur-[8px]"></div>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          <GradientText size="6xl" weight="bold" text="Mountain Mixology" />
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white">
          Premium craft cocktail catering, based out of Canmore, AB.
        </p>
        <button className="mt-6 px-6 py-3 bg-sky-600 hover:bg-sky-500 transition rounded-lg text-xl text-white font-bold" onClick={ComingSoon}>
          Book Now
        </button>
      </motion.div>
    </section>
  );
}
