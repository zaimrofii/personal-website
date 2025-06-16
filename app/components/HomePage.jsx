import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import PortfolioSection from "./PortfolioSection";
import FloatingShowcase from "./FloatingShowcase";
import SideNavbar from "./SideNavbar";
import SideBarButton from "./SideBarButton";
import SideBarParent from "./sidebar/SideBarParent";

const HomePage = ({
  portofolio,
  handleMouseMove,
  handleMouseLeave,
  btnRefs,
  items,
  hovered,
  setHovered,
  mousePos,
  cardRef,
  isScrolled,
}) => {
  return (
    <ParallaxProvider>
      <div className="w-full bg-gray-100">
        <Navbar />
        <HeroSection
          handleMouseMove={handleMouseMove}
          handleMouseLeave={handleMouseLeave}
          btnRefs={btnRefs}
        />
        <AboutSection />
        <PortfolioSection portofolio={portofolio} />
        <FloatingShowcase
          items={items}
          hovered={hovered}
          setHovered={setHovered}
          mousePos={mousePos}
          cardRef={cardRef}
        />
      </div>
      <SideBarParent />
      <SideNavbar
        handleMouseMove={handleMouseMove}
        handleMouseLeave={handleMouseLeave}
        btnRefs={btnRefs}
      />
      <SideBarButton
        handleMouseMove={handleMouseMove}
        handleMouseLeave={handleMouseLeave}
        btnRefs={btnRefs}
        isScrolled={isScrolled}
      />
    </ParallaxProvider>
  );
};

export default HomePage;
