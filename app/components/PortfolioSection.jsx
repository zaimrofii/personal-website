import Image from "next/image";
import Marquee from "react-fast-marquee";

const PortfolioSection = ({ portofolio }) => {
  return (
    <div className="relative mt-0" id="portofolio">
      <div className="absolute top-[8vw] left-1/2 transform -translate-x-1/2 text-[17vw] font-semibold tracking-[-1.7vw] bg-gradient-to-r from-[#720028] via-[#9c0037] to-[#720028] bg-clip-text text-transparent animate-title-glow z-20">
        Portofolio&nbsp;
      </div>
      {[false, true].map((rev, i) => (
        <Marquee
          key={i}
          gradient={false}
          direction={rev ? "right" : "left"}
          speed={40}
          pauseOnHover={false}
          className="w-[90vw] mx-auto my-[5vw] -mt-[5vw]"
        >
          {portofolio.map((src, index) => (
            <div key={index} className="mx-2 mb-5">
              <Image
                src={`/${src}`}
                width={600}
                height={600}
                alt={`Portofolio ${index + 1}`}
                className="w-[20vw] h-[20vw] object-cover rounded-xl brightness-[115%] saturate-0 transition-all duration-300 hover:saturate-100 hover:shadow-xl"
              />
            </div>
          ))}
        </Marquee>
      ))}
    </div>
  );
};

export default PortfolioSection;
