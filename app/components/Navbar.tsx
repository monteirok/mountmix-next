"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import DesktopNav from "./Navbar/DesktopNav";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Listen for scroll events to toggle the background color
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const bgColor = isScrolled || mobileOpen ? "rgba(23, 23, 23, .8)" : "rgba(0, 0, 0, 0)";
  const blurEffect = isScrolled ? "backdrop-blur-sm" : "";

  return (
    <>
      <motion.nav
        initial={false}
        animate={{ backgroundColor: bgColor }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 w-full z-50 ${blurEffect}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between py-7 px-8">
            <Link className="w-[11rem] sm:w-full" href="/">
                <Logo size={200} filter="light" />
            </Link>
            <DesktopNav />
            {/* Mobile Navigation Toggle */}
            <div className="sm:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-white focus:outline-none"
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ backgroundColor: isScrolled || mobileOpen ? "#171717" : "rgba(0, 0, 0, 0)" }}
            className="sm:hidden fixed top-0 left-0 w-full z-40"
          >
            <div className={`${blurEffect} flex flex-col h-full gap-6 justify-center items-center py-8`}>
              <Link
                href="/coming-soon"
                className="block text-xl font-medium text-white hover:text-gray-300"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link
                href="/coming-soon"
                className="block text-xl font-medium text-white hover:text-gray-300"
                onClick={() => setMobileOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/coming-soon"
                className="block text-xl font-medium text-white hover:text-gray-300"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/coming-soon"
                className="block text-xl font-medium text-white hover:text-gray-300"
                onClick={() => setMobileOpen(false)}
              >
                Menu
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
