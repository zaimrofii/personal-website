"use client";
import React from "react";

export default function HeroSection({ setDashboardActive }) {
  return (
    <div
      className="relative z-5 h-full w-full bg-cover bg-center rounded-2xl"
      style={{ backgroundImage: "url('/rasmussen.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-tranparent"></div>
      {/* Top - Logo */}
      <div className="absolute top-20 w-full flex justify-center">
        <img src="/Aspen.png" alt="Logo" className="h-20 w-auto" />
        {/* <h1 className="text-white">logo</h1> */}
      </div>

      {/* Bottom - Text + Button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full px-6">
        <p className="text-white text-sm uppercase mb-1 tracking-wide font-light">
          Plan your
        </p>
        <h1 className="text-white text-3xl text-4xl  mb-6">
          Luxurious Vacation
        </h1>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl w-full transition-colors duration-300"
          onClick={() => setDashboardActive(true)}
        >
          Explore
        </button>
      </div>
    </div>
  );
}
