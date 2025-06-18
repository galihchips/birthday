import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const photos = [
  "/images/p1.JPG",
  "/images/p2.JPG",
  "/images/p3.JPG",
  "/images/p4.JPG",
  "/images/p5.JPG",
];

type PhotoPageProps = {
  onNext: () => void;
  onBack: () => void;
};

export default function PhotoPage({ onNext, onBack }: PhotoPageProps) {
  return (
    <div className="flex w-full h-screen bg-white">
      <div className="w-full p-6 overflow-y-auto flex flex-col items-center">
        <button
          onClick={onBack}
          className="absolute top-4 left-4 z-20 px-4 py-2 text-sm bg-white text-pink-700 rounded-full shadow hover:bg-white transition font-raleway"
        >
          ← Back
        </button>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl text-pink-600 mb-6 mt-10 font-playfair text-center"
        >
          My fav photos of You
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 place-items-center">
          {photos.map((src, i) => (
            <PhotoCard key={i} src={src} isSpecial={i === 4} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: photos.length * 1.2 + 0.5 }}
          className="text-center mt-8"
        >
          <button
            onClick={onNext}
            className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 font-raleway transition duration-300"
          >
            Wishes for You →
          </button>
        </motion.div>
      </div>
    </div>
  );
}

function PhotoCard({ src, isSpecial, index }: { src: string; isSpecial: boolean; index: number }) {
  const [loaded, setLoaded] = useState(false);
  const [delayedVisible, setDelayedVisible] = useState(false);

  // Delay the reveal for each photo (1s per index)
  useState(() => {
    const timeout = setTimeout(() => {
      setDelayedVisible(true);
    }, index * 1000);
    return () => clearTimeout(timeout);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: delayedVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`relative group w-full max-w-[160px] aspect-square border-4 border-pink-300 rounded-xl shadow-md p-2 bg-white flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:scale-105 ${isSpecial ? "col-span-2 mx-auto" : ""
        }`}
    >
      {/* Decorations */}
      {!isSpecial && (
        <div className="absolute -top-3 -left-3 text-2xl rotate-[-15deg] z-10">🎀</div>
      )}
      {isSpecial && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-3xl z-10">👑</div>
      )}

      {/* Static placeholder background to avoid flicker */}
      <div className="absolute inset-0 bg-gray-200 z-0 rounded-md" />

      {/* Image */}
      <Image
        src={src}
        alt="Photo"
        width={140}
        height={140}
        className={`object-cover w-full h-full z-10 transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"
          }`}
        onLoad={() => setLoaded(true)}
        loading="eager"
        priority
      />
    </motion.div>
  );
}

