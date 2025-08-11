"use client";
import Marquee from "react-fast-marquee";

const stackLogos = [
  "html5.svg",
  "javascript.svg",
  "typescript.svg",
  "react.svg",
  "tailwindcss.svg",
  "next_js.svg",
  "node_js.svg",
  "django.svg",
  "postgresql.svg",
  "mysql.svg",
  "html5.svg",
  "javascript.svg",
  "typescript.svg",
  "react.svg",
  "tailwindcss.svg",
  "next_js.svg",
  "node_js.svg",
  "django.svg",
  "postgresql.svg",
  "mysql.svg",
];

export default function TechStackMarquee() {
  return (
    <>
      <h1 className="text-center text-[1.2vw] text-gray-400 italic">
        Tech stack I work with :
      </h1>
      <div className="relative h-[9vw] py-8 flex items-center bg-gray-200 mb-10">
        <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-gray-100 via-transparent to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-gray-100 via-transparent to-transparent z-10 pointer-events-none" />

        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={false}
          direction="right"
          // className="-space-x-[16vw]"
        >
          {stackLogos.map((logo, index) => (
            <div key={index} className="relative">
              <img
                src={`/${logo}`}
                alt={logo.replace(".svg", "")}
                className="h-[5vw] opacity-20 w-auto mx-6 grayscale hover:grayscale-0 transition duration-300 peer"
              />
              <h1 className="absolute top-0 left-0 z-[9999] hidden peer-hover:block">
                {logo.replace(".svg", "")}
              </h1>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}
