import Header from "./_components/Header";
import { Analytics } from "@vercel/analytics/react";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    template: "%s / Evergreen Escapes",
    default: "Welcome / Evergreen Escapes",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased min-h-screen bg-primary-950 text-primary-100 flex flex-col relative`}
      >
        <Header />
        <div className="flex justify-center flex-1 px-2 py-6 sm:py-12 sm:px-8">
          <main className="w-full mx-auto md:px-4 max-w-7xl">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
