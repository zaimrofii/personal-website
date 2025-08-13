"use client";
import React from "react";
import {
  Star,
  Wifi,
  Coffee,
  Bath,
  Droplet,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";

export function DetailCard({
  selectedOffer,
  setSelectedOffer,
  onShowMaps,
  onBookNow,
}) {
  if (!selectedOffer) return null; // langsung return null jika tidak ada data

  const { image, name, rating, detailText, price } = selectedOffer;

  return (
    <div className="absolute top-0  z-50 w-full h-full">
      <div className="absolute top-0 p-2 z-50 w-full h-full bg-white rounded-xl shadow-md overflow-hidden relative">
        <button
          onClick={() => setSelectedOffer(null)}
          className="absolute h-8 w-8 top-4 bg-gray-200 flex justify-center items-center rounded-md left-4 text-gray-400 cursor-pointer hover:text-gray-900 font-bold text-xl"
          aria-label="Close detail"
        >
          <ChevronLeft width={18} />
        </button>
        <img
          src={image}
          alt={name}
          className="w-full h-70 object-cover rounded-2xl"
        />
        <div className="p-2 mt-2">
          {/* Nama, rating, dan tombol Show Maps */}
          <div className="flex items-start justify-between mb-3">
            <div className="">
              <h2 className="text-lg font-semibold  text-gray-900">{name}</h2>
              <div className="flex items-center text-xs text-yellow-400 ">
                <Star size={10} className="mr-1" />
                <span>{rating}</span>
              </div>
            </div>
            <button
              onClick={onShowMaps}
              className="py-2 text-xs cursor-pointer font-semibold text-blue-700  "
            >
              Show Maps
            </button>
          </div>

          {/* Detail teks */}
          <p className="text-gray-600 mb-4 text-sm">
            {detailText || "No detailed description provided."}
          </p>

          {/* Fasilitas */}
          <h1 className="text-gray-800 mb-2 font-semibold">facilities</h1>
          <div className="flex justify-between space-x-3 mb-6">
            {[
              { icon: Wifi, label: "WiFi" },
              { icon: Coffee, label: "Food" },
              { icon: Bath, label: "Tub" },
              { icon: Droplet, label: "Pool" },
            ].map(({ icon: IconComp, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-blue-50 text-gray-400"
                title={label}
              >
                <IconComp size={20} />
                <p className="text-[8px]">{label}</p>
              </div>
            ))}
          </div>

          {/* Harga dan Book Now */}
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-green-500">
              <p className="text-xs text-gray-800">Price</p>
              <p>${price || "N/A"}</p>
            </div>
            <button
              onClick={onBookNow}
              className="inline-flex items-center gap-2 bg-blue-600 text-white text-xs px-6 py-3 rounded-2xl shadow-xl font-semibold hover:bg-blue-700 transition"
            >
              Book Now <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
