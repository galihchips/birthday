import type { Metadata } from "next";
import { Birthstone, Playfair_Display, Raleway, Handlee } from "next/font/google"; 
import "./globals.css";


const birthstone = Birthstone({ 
  variable: "--font-birthstone", 
  weight: "400", 
  subsets: ["latin"] 
});
const playfair = Playfair_Display({ variable: "--font-playfair",  subsets: ["latin"], weight: "700" });
const handlee = Handlee({ variable: "--font-handlee",  subsets: ["latin"], weight: "400" });
const raleway = Raleway({ variable: "--font-raleway",  subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Happy Birthday",
  description: "A special birthday surprise!",
  openGraph: {
    title: "Happy Birthday 🎉",
    description: "A beautiful surprise awaits you! 💖",
    url: "https://birthday-six-zeta.vercel.app/", 
    type: "website",
    images: [
      {
        url: "/angel.jpg",
        width: 1200,
        height: 630,
        alt: "Happy Birthday Banner",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${birthstone.variable} ${playfair.variable} ${raleway.variable} ${handlee.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
