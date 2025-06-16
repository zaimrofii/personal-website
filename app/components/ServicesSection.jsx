"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function ServiceSection({ items }) {
  const [showElement, setShowElement] = useState(false);

  const [hovered, setHovered] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setShowElement(true);
    };

    if (hovered !== null) {
      window.addEventListener("mousemove", handleMouseMove);
      setShowElement(false);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hovered]);

  return (
    <div className="relative mt-[10vw] mb-[3vw]  h-auto z-[11] ">
      <div className="relative w-[80vw] mx-auto mb-[5vw]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex sm:h-25 lg:h-30 xl:h-35 border-t border-black/10 cursor-pointer relative z-10 hover:text-gray-500 group"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <h2 className="sm:text-xl xl:text-3xl group-hover:scale-0 italic tracking-[-.2vw] pr-[2vw] mt-[1vw] transition">
              {item.number}
            </h2>
            <h1 className="sm:text-3xl lg:text-4xl xl:text-[3rem] group-hover:-translate-x-10 italic tracking-[-.1rem] w-[35vw] leading-[4vw] mt-[1vw] transition">
              {item.title}
            </h1>
            <p className="sm:text-sm md:text-md lg:text-xl xl:text-[1.5rem] italic tracking-[-.05vw] w-[35vw] ml-auto text-right mt-[1.8vw]">
              {item.desc}
            </p>
          </div>
        ))}

        {hovered !== null && (
          <div
            ref={cardRef}
            className={` ${
              showElement ? "fixed" : "hidden"
            }  top-0 left-0 w-[28vw] h-[30vw] rounded-[5%] 
            shadow-[2vw_3vw_2vw_rgba(0,18,56,0.2)] z-[999] pointer-events-none overflow-hidden
            transition-all duration-300 ease-out scale-100 opacity-100`}
            style={{
              translate: `${mousePos.x - 120}px ${mousePos.y - 120}px`,
            }}
          >
            <Image
              src={items[hovered].image}
              alt={items[hovered].title}
              fill
              className="object-cover rounded-[5%]"
            />
          </div>
        )}
      </div>
    </div>
  );
}
