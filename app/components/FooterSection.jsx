"use client";

import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

export default function FooterSection() {
  return (
    <div
      className="relative sm:h-[60vh] xl:h-[100vh] bg-[color:var(--secondary)]  overflow-hidden"
      style={{ boxShadow: "inset 0px 20px 500px rgba(0,0,0,0.9)" }}
    >
      <div>
        {/* Background Text */}
        <h1
          className="font-serif text-[16vw] tracking-[-1vw] absolute -top-[6.5vw] left-0 text-gray-100 z-10 "
          style={{
            textShadow: "-20px 35px 20px rgba(0,0,0,0.6)",
          }}
        >
          Let&apos;s Talk
        </h1>
        <Parallax speed={-16}>
          {/* Main Footer Content */}
          <div className="w-[90%] mx-auto mt-70 flex justify-between items-end">
            {/* Left Side: Profile */}
            <div>
              <Image
                src="/photo-profil.jpg"
                width={400}
                height={400}
                alt="hero"
                className="w-[15vw] h-[15vw] rounded-full  shadow-[0px_12px_22px_rgba(0,0,0,0.6)]
"
              />
              <div className="text-white mt-10">
                <h1 className="sm:text-xs">Designed and Built by Zaim Rofii</h1>
                <h1 className="sm:text-xs">
                  and Powered by React, Tailwind, Next.js
                </h1>
              </div>
            </div>

            {/* Center: Navigation */}
            <div className="h-[7vw] w-[50vw] text-white border-b-1 border-gray-600 flex justify-center gap-5 items-end sm:text-md xl:text-xl">
              <Link href="home">
                <h1 className="cursor-pointer">Home</h1>
              </Link>
              <Link href="work">
                <h1 className="cursor-pointer">Work</h1>
              </Link>
              <Link href="about">
                <h1 className="cursor-pointer">About</h1>
              </Link>
              <Link href="contact">
                <h1 className="cursor-pointer">Contact</h1>
              </Link>
            </div>

            {/* Right Side: Social Buttons */}
            <div className="w-[16vw] h-[20vw] relative sm:text-md xl:text-3xl">
              <button className=" inline px-15 py-2 bg-gray-200 absolute bottom-50 -rotate-3 transform transition duration-300 ease-in-out hover:-skew-y-2 hover:scale-95  shadow-[0px_5px_10px_rgba(0,0,0,0.8)] ">
                Instagram
              </button>
              <button className=" px-15 py-2 bg-gray-200 absolute bottom-30 -rotate-15 -left-25 transform transition duration-300 ease-in-out hover:-skew-y-2 hover:scale-95 shadow-[0px_5px_10px_rgba(0,0,0,0.8)] ">
                WhatsApp
              </button>
              <button className=" px-15 py-2 bg-gray-200 absolute bottom-15 -rotate-30 transform transition duration-300 ease-in-out hover:-skew-y-2 hover:scale-95 shadow-[0px_5px_10px_rgba(0,0,0,0.8)]">
                Facebook
              </button>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}
