import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import TransitionLink from "../page-transition-effect/TransitionLink";

const SideNavbar = ({
  act,
  setAct,
  handleMouseMove,
  handleMouseLeave,
  btnRefs,
}) => {
  return (
    <motion.div
      initial={{ x: 700 }} // ⬅️ posisi awal saat pertama render (di luar layar)
      animate={{ x: act ? 150 : 700 }} // ⬅️ x=0 saat tampil, x=500 saat sembunyi
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="h-full w-[70vw] md:w-[50vw] xl:w-[40vw] bg-[color:var(--secondary)] fixed z-999 right-0 top-0 shadow-2xl flex items-center"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="py-20 pl-15 flex flex-col gap-5 ">
        <ChevronRight
          className="text-white w-12 h-12 cursor-pointer "
          onClick={() => setAct(!act)}
        />
        <div className="  w-200 h-[60vh] border-y-1 border-[color:var(--primary)] flex flex-col gap-5 justify-center items-start  text-white text-4xl xl:text-5xl ">
          <TransitionLink href="/">
            <button
              className={`transform transition duration-1000 opacity-0 ${
                act ? "translate-x-0 opacity-100" : "translate-x-50"
              } cursor-pointer`}
              ref={(el) => (btnRefs.current[101] = el)}
              onMouseMove={(e) => handleMouseMove(e, 101)}
              onMouseLeave={() => handleMouseLeave(101)}
            >
              Home
            </button>
          </TransitionLink>

          <TransitionLink href="work">
            <button
              className={`transform transition duration-1200 opacity-0 ${
                act ? "translate-x-0 opacity-100" : "translate-x-50"
              } cursor-pointer`}
              ref={(el) => (btnRefs.current[102] = el)}
              onMouseMove={(e) => handleMouseMove(e, 102)}
              onMouseLeave={() => handleMouseLeave(102)}
            >
              Work
            </button>
          </TransitionLink>

          <TransitionLink href="about">
            <button
              className={`transform transition duration-1400 opacity-0 ${
                act ? "translate-x-0 opacity-100" : "translate-x-50"
              } cursor-pointer`}
              ref={(el) => (btnRefs.current[103] = el)}
              onMouseMove={(e) => handleMouseMove(e, 103)}
              onMouseLeave={() => handleMouseLeave(103)}
            >
              About
            </button>
          </TransitionLink>

          <TransitionLink href="service#pricing-cards">
            <button
              className={`transform transition duration-1600 opacity-0 ${
                act ? "translate-x-0 opacity-100" : "translate-x-50"
              } cursor-pointer`}
              ref={(el) => (btnRefs.current[104] = el)}
              onMouseMove={(e) => handleMouseMove(e, 104)}
              onMouseLeave={() => handleMouseLeave(104)}
            >
              Service
            </button>
          </TransitionLink>

          <TransitionLink href="contact">
            <button
              className={`transform transition duration-1800 opacity-0 ${
                act ? "translate-x-0 opacity-100" : "translate-x-50"
              } cursor-pointer`}
              ref={(el) => (btnRefs.current[105] = el)}
              onMouseMove={(e) => handleMouseMove(e, 105)}
              onMouseLeave={() => handleMouseLeave(105)}
            >
              Contact
            </button>
          </TransitionLink>
        </div>
        <h1 className="text-gray-400">NAVIGATION</h1>
      </div>
    </motion.div>
  );
};

export default SideNavbar;
