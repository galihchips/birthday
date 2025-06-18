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
        <div className="h-screen bg-pink-100 items-center justify-center overflow-y-auto">
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
                    src="https://www.youtube.com/embed/KmnhGc9LqEE?autoplay=1&playsinline=1&controls=1"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>

            </div>

            {/* Lyrics Section */}
            <div
                ref={lyricsRef}
                className="bg-white p-6 max-w-2xl w-full my-6 rounded-lg shadow-md border border-pink-200 overflow-y-auto max-h-[400px]"
            >
                <h3 className="text-xl font-semibold text-pink-600 mb-4">Lyrics: <span className="italic">"Woman" - JoRaffi</span></h3>
                <pre className="whitespace-pre-wrap text-gray-800 text-sm leading-relaxed font-handlee">
                    {`Are you that happy?
I’ve waited for that smile for so long
Do you really love me?
'Cause I don’t think I'm where I belong
All the time we spent alone is part of my dreams
I can't believe I pulled you
You’re out of my league

A whole day with you is enough
Oh, but now we have forever
Please don’t change
As we growin’ up I hope you won’t change
Please don’t forget what we put in our plans
In this world just you and me till' the end

'Cause I won’t change
As my hair turns white I will stay the same
Whenever you need me
Oh, I will be there
'Cause now or forever I swear I won’t change

Where have you been?
I’ve struggled with heartbreaks for years and got nothin’
But I know this time you're the one
Oh, I know you won’t let me go

All the night we spent alone is part of my dreams
I can't believe I got you
You’re out of my league

A whole day with you is never enough
But we have forever
Please don’t change
As we growin’ up I hope you won’t change
Please don’t forget what we put in our plans
In this world just you and me till’ the end

'Cause I won’t change
As my hair turns white I will stay the same
Whenever you need me
Oh, I will be there
'Cause now or forever I swear I won’t change

Please don’t change
As we growin’ up I hope you won’t change
Please don’t forget what we put in our plans
In this world just you and me till’ the end

'Cause I won’t change
As my hair turns white I will stay the same
When we turned 80 we’d still holdin’ hands
You’re my whole world
Oh, I swear it won’t change
Change`}
                </pre>
            </div>
        </div>
    );
}
