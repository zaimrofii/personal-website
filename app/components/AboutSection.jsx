import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div
      className="relative sm:h-[50vw] md:h-[50vw] xl:h-[95vh] bg-[color:var(--primary)] mt-[5vw] overflow-hidden animate-fade-in-top"
      style={{ boxShadow: "inset 0px 20px 500px rgba(0,0,0,0.9)" }}
    >
      <div className="relative h-full">
        <div className="top-0 w-full overflow-hidden absolute">
          <div className="-mt-[7vw] flex animate-marquee whitespace-nowrap">
            <h1 className="text-[14vw] w-[100vw] font-bold italic tracking-[-1.5vw] text-white/5 mr-[6vw]">
              about .about .about .
            </h1>
            <h1 className="text-[14vw] font-bold italic tracking-[-1.5vw] text-white/5">
              about .about .about .
            </h1>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[55vw]">
          <Parallax speed={-8}>
            <p className="text-xl md:text-2xl xl:text-3xl text-center tracking-[-.05vw] text-[#F8F7F3]">
              I am a self-taught Front-End Developer with a strong focus on
              building modern, responsive websites using React, Tailwind CSS,
              and Next.js...
            </p>
          </Parallax>
        </div>
        <Image
          src={`/motif-bg.jpg`}
          width={600}
          height={600}
          alt={`motif`}
          className="sm:h-[50vw] sm:w-full object-cover opacity-10 md:h-[50vw] xl:h-[95vh]"
        />
      </div>
    </div>
  );
};

export default AboutSection;
