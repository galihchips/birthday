import { motion } from "framer-motion";

const wishes = [
  "From the moment you walked into my life, you've filled it with warmth, laughter, and love. You are my home, my heart, and my greatest joy. Today is all about celebrating you—the most beautiful soul I know.",
  "I hope this year brings you as much happiness as you bring to me every single day. No matter where life takes us, I’ll always be right here, loving you with everything I have.",
  "Happy Birthday, Sayang. You are everything I ever wished for and more💖"
];

type WishPageProps = {
  onFinish: () => void;
  onBack: () => void
};

export default function WishPage({ onFinish, onBack }: WishPageProps) {
  return (
    <div className="h-screen bg-pink-100 items-center justify-center overflow-y-auto hide-scrollbar">
      <button
        onClick={onBack}
        className="absolute top-4 left-4 z-20 px-4 py-2 text-sm bg-white text-pink-700 rounded-full shadow hover:bg-white transition font-raleway"
      >
        ← Back
      </button>
      <div className="flex w-full mb-6 mt-18">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full mx-4 border border-pink-200">
          <h2 className="text-2xl text-center text-pink-600 font-playfair mb-6">
            My Birthday Wishes for You 💕
          </h2>

          <div className="space-y-8">
            {wishes.map((wish, i) => {
              const words = wish.split(" ");
              return (
                <motion.p
                  key={i}
                  className="text-lg leading-relaxed text-gray-700 font-handlee py-1"
                >
                  {words.map((word, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 3 + j * 0.1 }}
                      className="inline-block mr-1"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.p>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={onFinish}
              className="mt-6 px-6 py-2 bg-pink-600 text-white font-raleway rounded-lg hover:bg-pink-700 transition duration-300"
            >
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}
