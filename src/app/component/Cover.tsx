import { motion } from "framer-motion";
import Image from "next/image";

type CoverProps = {
  onNext: () => void;
};

const floatTransition = {
  y: [0, -15, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const slowFloatTransition = {
  y: [0, -10, 0],
  transition: {
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function Cover({ onNext }: CoverProps) {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-100 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 text-pink-300 text-4xl opacity-30"
          animate={floatTransition}
        >
          💗
        </motion.div>
        <motion.div
          className="absolute top-1/4 right-16 text-pink-300 text-5xl opacity-20"
          animate={slowFloatTransition}
        >
          💕
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-1/3 text-pink-200 text-3xl opacity-40"
          animate={floatTransition}
        >
          💖
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 text-pink-200 text-4xl opacity-30"
          animate={slowFloatTransition}
        >
          💞
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center space-y-6 px-4 z-10"
      >
        <div className="flex justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
            <Image
              src="/images/angel.jpg"
              alt="Birthday Girl"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <h1 className="text-3xl font-playfair text-pink-700 drop-shadow-xl">
          Happy Birthday, Angel!{" "}
        </h1>
        <button
          className="mt-4 px-6 py-2 bg-pink-600 font-raleway text-white rounded-full shadow-md hover:bg-pink-700 transition"
          onClick={onNext}
        >
          Continue
        </button>
      </motion.div>
    </div>
  );
}
