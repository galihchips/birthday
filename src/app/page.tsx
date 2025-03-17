"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Image from "next/image";
import "@/app/globals.css";

export default function BirthdayPage() {
  const girlfriendName = "Angel";
  const birthDate = new Date("June 19, 2025 00:00:00");


  const [showWishCard, setShowWishCard] = useState(false);

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      function handleResize() {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-center p-4 relative overflow-hidden">
      <Confetti width={windowSize.width} height={windowSize.height} />

      {/* Floating Balloons */}


      {/* Main Birthday Card */}
      <motion.div
        initial={{ y: 0 }}
        animate={showWishCard ? { y: -5 } : { y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-white p-8 rounded-3xl shadow-xl max-w-md border-4 border-pink-400 relative text-center"
      >
        <h1 className="text-6xl font-birthday text-pink-600 drop-shadow-lg">
          Happy Birthday, {girlfriendName}!
        </h1>

        <div className="mt-6 flex justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
            <Image
              src="/angel.jpg"
              alt="Birthday Girl"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <button
          onClick={() => setShowWishCard(true)}
          className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-pink-600 transition"
        >
          Reveal My Wish 💖
        </button>
      </motion.div>

      {/* Birthday Wish Card */}
      {showWishCard && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white p-6 rounded-3xl shadow-xl max-w-lg border-4 border-pink-400 mt-10 text-center"
        >
          <h2 className="text-3xl font-birthday text-pink-500">My Love Letter to You 💖</h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            From the moment you walked into my life, you've filled it with warmth, laughter, and love.
            You are my home, my heart, and my greatest joy. Today is all about celebrating you—the most beautiful soul I know.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            I hope this year brings you as much happiness as you bring to me every single day. No matter where life takes us,
            I’ll always be right here, loving you with everything I have.
          </p>
          <p className="text-pink-600 mt-6 font-semibold text-lg">Happy Birthday, my forever love. 🎈💫</p>
        </motion.div>
      )}
      <motion.div className="absolute top-10 left-10 text-4xl animate-bounce">🎈</motion.div>
      <motion.div className="absolute top-20 right-10 text-4xl animate-bounce">🎈</motion.div>
      <motion.div className="absolute bottom-10 left-1/4 text-4xl animate-bounce">🎈</motion.div>
    </div>
  );
}