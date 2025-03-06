'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Mail, Instagram } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
];

const menuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const FloatingNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.nav 
            className="fixed top-4 left-0 w-full px-4 md:px-8 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <motion.div
                animate={isScrolled ? "scrolled" : "top"}
                variants={{
                    scrolled: { scale: 0.95, borderRadius: 12 },
                    top: { scale: 1, borderRadius: 20 }
                }}
                className={`relative py-3 flex items-center justify-between backdrop-blur-md transition-all bg-white/90 dark:bg-slate-800/90 text-black dark:text-white ${isOpen ? 'rounded-t-2xl' : 'rounded-2xl shadow-lg'}`}
            >
                {/* Logo with 3D rotation effect */}
                <motion.div
                    whileHover={{ 
                        scale: 1.05,
                        rotateZ: [-1, 1.5, -1.5, 0],
                        transition: { duration: 0.8, type: "spring" }
                    }}
                    className="text-xl font-bold text-blue-600 dark:text-blue-400 ml-4 cursor-pointer"
                >
                    Logo
                </motion.div>

                {/* Desktop Navigation with staggered entrance */}
                <motion.div 
                    className="hidden md:flex items-center space-x-6 mr-4"
                    initial="closed"
                    animate="open"
                    variants={menuVariants}
                >
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.1,
                                textShadow: "0px 2px 8px rgba(0,0,0,0.2)",
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-2 py-2 hover:text-blue-400 dark:hover:text-blue-300 transition origin-center"
                        >
                            {item.label}
                        </motion.a>
                    ))}
                    <motion.div 
                        className="flex items-center space-x-4 ml-4"
                        variants={itemVariants}
                    >
                        <motion.a 
                            href="https://instagram.com/mountain.mixology" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            whileHover={{ 
                                scale: 1.2,
                                rotate: [0, -10, 12, -10, 0],
                                transition: { duration: 0.6 }
                            }}
                            className="hover:text-blue-400 dark:hover:text-blue-300 transition"
                            aria-label="Instagram"
                        >
                            <Instagram size={24} />
                        </motion.a>
                        <motion.button 
                            whileHover={{ 
                                scale: 1.2,
                                rotate: [0, 0, 10, -10, 0],
                                transition: { duration: 0.6 }
                            }}
                            className="hover:text-blue-400 dark:hover:text-blue-300 transition"
                            aria-label="Contact"
                            onClick={() => window.location.href = 'mailto:info@example.com'}
                        >
                            <Mail size={24} />
                        </motion.button>
                        <motion.button 
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
                        >
                            BOOK NOW
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Animated Mobile Menu Button */}
                <motion.button
                    className="ml-auto p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition md:hidden mr-4"
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.1 }}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    animate={isOpen ? "open" : "closed"}
                >
                    <motion.div
                        variants={{
                            open: { rotate: 180 },
                            closed: { rotate: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.div>
                </motion.button>

                {/* Physics-based Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ 
                                opacity: 1, 
                                y: 0,
                                transition: { type: "spring", stiffness: 200, damping: 25 }
                            }}
                            exit={{ 
                                opacity: 0, 
                                y: -20,
                                transition: { duration: 0.3 }
                            }}
                            className="absolute top-full left-0 w-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-lg rounded-b-2xl overflow-hidden md:hidden"
                        >
                            <motion.div 
                                className="flex flex-col items-center py-4 space-y-4"
                                variants={menuVariants}
                                initial="closed"
                                animate="open"
                            >
                                {navItems.map((item) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        variants={itemVariants}
                                        whileHover={{ 
                                            x: 10,
                                            transition: { type: "spring", stiffness: 500 }
                                        }}
                                        className="w-full py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                                <motion.div 
                                    className="flex space-x-6 pt-4"
                                    variants={itemVariants}
                                >
                                    <motion.a 
                                        href="https://instagram.com/mountain.mixology" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        whileHover={{ 
                                            scale: 1.2,
                                            rotate: [0, -10, 12, -10, 0],
                                            transition: { duration: 0.6 }
                                        }}
                                        className="hover:text-blue-400 dark:hover:text-blue-300 transition"
                                    >
                                        <Instagram size={24} />
                                    </motion.a>
                                    <motion.button 
                                        whileHover={{ 
                                            scale: 1.2,
                                            rotate: [0, 0, 10, -10, 0],
                                            transition: { duration: 0.6 }
                                        }}
                                        className="hover:text-blue-400 dark:hover:text-blue-300 transition"
                                        onClick={() => {
                                            window.location.href = 'mailto:info@example.com';
                                            setIsOpen(false);
                                        }}
                                    >
                                        <Mail size={24} />
                                    </motion.button>
                                </motion.div>
                                <motion.button 
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                                        transition: { type: "spring", stiffness: 300 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition mt-4"
                                    variants={itemVariants}
                                >
                                    BOOK NOW
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.nav>
    );
};

export default FloatingNavbar;