import Image from "next/image";

const HeroSection = ({ handleMouseMove, handleMouseLeave, btnRefs }) => {
  return (
    <div className="flex justify-center gap-10 mt-[2vw] flex-wrap">
      <div className="w-[40%] flex flex-col gap-[3vw] animate-fade-in-left">
        <div className="text-[10vw] font-semibold flex flex-col -tracking-[1vw] text-[#720028] text-right mb-[2vw] ">
          <h1 className="h-[8vw]">Za&apos;im</h1>
          <h1 className="h-[8vw] mr-4">Studio</h1>
        </div>
        <p className="lg:text-xl md:text-md xl:text-2xl text-right w-[100%] relative tracking-[-0.04vw]">
          I am not just a developer — I am your strategic partner in growth. I
          help transform ideas into impactful digital solutions, solve real
          problems, and move your business forward.
        </p>
        <div className="flex justify-end">
          <a href="#kontak">
            <button
              ref={(el) => (btnRefs.current[0] = el)}
              onMouseMove={(e) => handleMouseMove(e, 0)}
              onMouseLeave={() => handleMouseLeave(0)}
              className="text-2xl text-white font-semibold px-10 py-2 rounded-lg hover:scale-110 bg-[color:var(--primary)] hover:bg-[#720028] mr-5  cursor-pointer transition-all"
            >
              Contact Us!
            </button>
          </a>
        </div>
      </div>
      <div className="image-wraper flex items-center animate-fade-in-right">
        <Image
          src="/photo-profil.jpg"
          width={400}
          height={400}
          alt="hero"
          className="w-[35vw] h-[35vw] rounded-[8%]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
