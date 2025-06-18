import { motion } from "framer-motion";
import Image from "next/image";

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
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl text-pink-600 mb-6 mt-10 font-playfair text-center"
        >
          My fav photos of You
        </motion.h2>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 gap-4 place-items-center">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: i * 1.2, duration: 1.2, ease: "easeOut" }}
              className={`group w-full max-w-[160px] aspect-square border-4 border-pink-300 rounded-xl shadow-md p-2 bg-white flex items-center justify-center transition duration-500 hover:shadow-xl hover:scale-105 ${i === 4 ? "col-span-2 mx-auto" : ""
                }`}
            >
              <Image
                src={src}
                alt={`Photo ${i + 1}`}
                width={140}
                height={140}
                className="rounded-lg object-cover w-full h-full transition duration-700 group-hover:saturate-150 group-hover:contrast-125"
              />
            </motion.div>
          ))}
        </div>

        {/* Continue Button */}
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
