"use client";
import { PanelRight } from "lucide-react";

export const SideBarButton = ({
  handleMouseMove,
  handleMouseLeave,
  btnRefs,
  isScrolled,
  setAct,
  act,
  shouldBounce,
}) => {
  return (
    <div
      className={`${
        isScrolled ? "scale-100" : "scale-0"
      } fixed top-10 right-20 h-[7vw] w-[7vw] rounded-full bg-[color:var(--red)] flex items-center justify-center z-99 cursor-pointer transition ${
        shouldBounce ? "animate-bounce" : ""
      } hover:animate-none`}
      ref={(el) => (btnRefs.current[100] = el)}
      onMouseMove={(e) => handleMouseMove(e, 100)}
      onMouseLeave={() => handleMouseLeave(100)}
      onClick={() => setAct(!act)}
    >
      <PanelRight className="text-white" />
    </div>
  );
};
