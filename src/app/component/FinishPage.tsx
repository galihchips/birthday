import { useEffect, useRef } from "react";



type FinishPageProps = {
    onBack: () => void;
};

export default function FinishPage({ onBack }: FinishPageProps) {
    const lyricsRef = useRef<HTMLDivElement>(null);

    // Optional: Scroll to lyrics on mount
    useEffect(() => {
        lyricsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <div className="h-screen overflow-y-auto bg-pink-100 hide-scrollbar">
            <button
                onClick={onBack}
                className="absolute top-4 left-4 z-20 px-4 py-2 text-sm bg-white text-pink-700 rounded-full shadow hover:bg-white transition font-raleway"
            >
                ← Back
            </button>
            {/* Music Player */}
            <div className="w-full max-w-2xl mb-8">
                <h2 className="text-2xl text-center text-pink-600 font-playfair mt-16 mb-6">
                    This song is for you baby💖
                </h2>
               <iframe
                className="w-full aspect-video rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/HLpq2oVz-tk?autoplay=1&mute=1&playsinline=1&controls=1&list=RDHLpq2oVz-tk"
                allow="autoplay; encrypted-media"
                allowFullScreen
                ></iframe>

            </div>

            {/* Lyrics Section */}
            <div
  ref={lyricsRef}
  className="bg-white p-6 max-w-2xl w-full my-6 rounded-lg shadow-md border border-pink-200 overflow-y-auto hide-scrollbar max-h-[400px]"
>
  <h3 className="text-xl font-semibold text-pink-600 mb-4">
    Lyrics: <span className="italic">"Percayalah" - Raisa & Afgan</span>
  </h3>
  <pre className="whitespace-pre-wrap text-gray-800 text-sm leading-relaxed font-handlee">
{`Aku yang tak akan melepaskan
Kamu yang mengenggam hatiku
Kita tak kan mungkin terpisahkan
Biarlah terjadi apapun yang terjadi

Aku yang tak bisa melepaskan
Kamu yang miliki hatiku
Walau terlalu cepat
Bagi kita berdua
Untuk mengatakan

Selamanya kita akan bersama
Melewati segalanya
Yang dapat pisahkan kita berdua
Selamanya kita akan bersama
Tak kan ada keraguan
Kini dan nanti
Percayalah

Aku yang tak bisa melepaskan
Kamu yang mengenggam hatiku
Walau mungkin terlalu cepat
Bagi kita berdua
Untuk mengatakan

Selamanya kita akan bersama
Melewati segalanya
Yang dapat pisahkan kita berdua
Selamanya kita akan bersama
Tak kan ada keraguan
Kini dan nanti
Percayalah

Hanya dirimu satu-satunya
Tercipta untukku
`}
  </pre>
</div>
        </div>
    );
}
