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
                    src="https://www.youtube.com/embed/5g12MLvunm0?autoplay=1&mute=1&playsinline=1&controls=1&list=RD5g12MLvunm0"
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
                    Lyrics: <span className="italic">"Cintanya Aku" - Tiara Andini & Arsy Widianto</span>
                </h3>
<pre className="whitespace-pre-wrap text-gray-800 text-sm leading-relaxed font-handlee">
{`Tergetar aku tepat di hadapanmu
Debar jantungku berdetak saat kugenggam tanganmu
Beruntung aku kini dapatkan cintamu
Yang tercantik di hatiku sejak awal ku bertemu

Janji padaku jangan kau lukai
Hati seperti kisah yang lalu

Kau bukan cinta pertamaku
Namun aku berharap
Mulai hari ini saat ini
Engkau cintanya aku

Yang kurasakan denganmu semua berbeda
Kekasih yang baik hati kini ada di sampingku

Janji padaku jangan ada lagi
Hati yang lain selain aku (oh)

Kau bukan cinta pertamaku
Namun aku berharap
Mulai hari ini saat ini
Engkau cintanya aku

Jangan pernah ragukan kesetiaan hatiku (oh)
Ku tak inginkan bila ini terbagi cinta wo

Engkau cintanya aku
Kau bukan cinta pertamaku (oh)
Namun aku berharap
Mulai hari ini saat ini
Engkau cintanya aku

Kau bukan cinta pertamaku
Namun aku berharap
Mulai hari ini saat ini
Engkau cintanya aku

Mulai hari ini saat ini
Engkau cintanya aku

Hm
Satu untuk selamanya
Ho ho ho`}
</pre>

            </div>
        </div>
    );
}
