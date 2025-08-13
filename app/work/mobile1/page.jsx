"use client";
import React from "react";
import { useState } from "react";
import HeroSection from "./HeroSection";
import { ChevronLeft, Circle, Square } from "lucide-react";
import { DetailCard } from "./DetailCard";
import Dashboard from "./Dashboard";
import Link from "next/link";

export default function FigmaToReactPreview() {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [dashboardActive, setDashboardActive] = useState(false);
  return (
    <section
      className="flex flex-col items-center justify-center  py-12 bg-gray-50 min-h-screen bg-cover position-center bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/rasmussen.jpg')" }}
      id="/work/mobile1"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10"></div>

      {/* Tagline */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10 max-w-xl">
        Transforming Figma Designs into Interactive React Experiences
      </h2>

      {/* Mobile Screen Frame */}
      <div className="border-b-2 border-l-2 border-white/60 rounded-4xl">
        <div
          className="
      relative
      rounded-4xl
      shadow-soft
      w-[300px]
      aspect-[9/19]
      flex items-center justify-center
      border-8
      border-gray-800
     
    "
        >
          {/* Inner screen (placeholder area) */}
          <div
            className={`
        bg-gray-200 
        rounded-3xl 
        w-full 
        h-full 
        shadow-inner
        text-gray-400
        text-sm sm:text-base
        font-medium
        select-none
        relative 
        ${selectedOffer ? "overflow-y-hidden" : "overflow-y-auto"}
        overflow-y-hidden
         
      `}
            aria-label="Mobile UI preview placeholder"
          >
            <HeroSection
              setDashboardActive={setDashboardActive}
              className="absolute top-0 left-0 w-full h-full m-0 p-0"
            />
            <Dashboard
              setDashboardActive={setDashboardActive}
              dashboardActive={dashboardActive}
              setSelectedOffer={setSelectedOffer}
              className="absolute top-0 left-0 w-full h-full m-0 p-0"
            />
            <DetailCard
              selectedOffer={selectedOffer}
              setSelectedOffer={setSelectedOffer}
              className="absolute top-0 left-0 w-full h-full m-0 p-0"
            />{" "}
          </div>
          {/* Notch */}
          <div className="absolute -top-0.5 left-1/2 z-1000 -translate-x-1/2 w-24 h-2 bg-gray-700 rounded-full" />
          <div
            className={`${
              dashboardActive ? "block" : "hidden"
            } absolute z-30 bottom-0 w-full flex justify-around gap-6 bg-white p-4 rounded-3xl shadow-[0_-4px_12px_-1px_rgba(0,0,0,0.1)] `}
          >
            <ChevronLeft
              className="text-gray-400 cursor-pointer"
              size={20}
              onClick={() => setDashboardActive(false)}
            />
            <Circle className="text-gray-400" size={18} />
            <Square className="text-gray-400" size={18} />
          </div>
        </div>
      </div>

      {/* Call To Action Button */}
      <div className="flex gap-3">
        <a
          href="#"
          className="
          mt-10
          px-8 py-3
          bg-blue-500
          text-white
          font-semibold
          rounded-full
          shadow-md
          hover:bg-blue-600
          transition-colors duration-300
          focus:outline-none focus:ring-2 focus:ring-blue-400
          relative 
          z-10
          "
        >
          Contact me
        </a>
        <Link
          href="/work"
          className="
          mt-10
          px-8 py-3
          bg-gray-200
          text-gray-800
          font-semibold
          rounded-full
          shadow-md
          hover:bg-gray-300
          transition-colors duration-300
          focus:outline-none focus:ring-2 focus:ring-gray-400
          relative 
          z-10
          "
        >
          Back
        </Link>
      </div>
    </section>
  );
}

/* Tailwind customization note:
   To get soft shadows (soft UI), you might want to extend Tailwind's box-shadow in your tailwind.config.js:

   module.exports = {
     theme: {
       extend: {
         boxShadow: {
           'soft': '8px 8px 15px rgba(0,0,0,0.1), -8px -8px 15px rgba(255,255,255,0.7)',
         }
       }
     }
   }
*/
