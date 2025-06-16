// "use client";

// import Image from "next/image";
// import { useState, useRef, useEffect } from "react";
// import Lenis from "@studio-freight/lenis";
// import Marquee from "react-fast-marquee";
// import SideNavbar from "./components/sidebar/SideNavbar";
// import { SideBarButton } from "./components/sidebar/SideBarButton";
// import { Parallax, ParallaxProvider } from "react-scroll-parallax";

// export default function Home() {
//   const [hovered, setHovered] = useState(null);
//   const [act, setAct] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [offset, setOffset] = useState(0);
//   const portofolio = [
//     "portofolio1.jpg",
//     "portofolio2.jpg",
//     "portofolio3.jpg",
//     "portofolio4.jpg",
//     "portofolio5.jpg",
//     "portofolio6.jpg",
//   ];

//   const items = [
//     {
//       number: "01",
//       title: "Web Development Projects",
//       desc: "Proyek pengembangan website dengan desain menarik dan fitur sesuai kebutuhan Anda.",
//       image: "/portofolio1.jpg",
//     },
//     {
//       number: "02",
//       title: "Frontend Showcase",
//       desc: "Koleksi antarmuka pengguna modern, responsif, dan mudah digunakan.",
//       image: "/portofolio2.jpg",
//     },
//     {
//       number: "03",
//       title: "Backend Integration",
//       desc: "Sistem backend yang kuat untuk mendukung fitur website Anda, termasuk server dan database.",
//       image: "/portofolio3.jpg",
//     },
//     {
//       number: "04",
//       title: "Fullstack Applications",
//       desc: "Aplikasi lengkap dengan integrasi frontend dan backend untuk solusi menyeluruh.",
//       image: "/portofolio4.jpg",
//     },
//   ];
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const cardRef = useRef(null);

//   // Track mouse position only when hovered
//   useEffect(() => {
//     console.log("hovered changed:", hovered);
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };

//     if (hovered !== null) {
//       window.addEventListener("mousemove", handleMouseMove);
//     }

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [hovered]);
//   // BUTTON BOUNCE
//   const btnRefs = useRef([]);

//   const handleMouseMove = (e, index) => {
//     const btn = btnRefs.current[index];
//     if (!btn) return;

//     const rect = btn.getBoundingClientRect();
//     const x = e.clientX - rect.left - rect.width / 2;
//     const y = e.clientY - rect.top - rect.height / 2;

//     btn.style.transform = `translate(${x * 2}px, ${y * 2}px)`;
//     btn.style.transition = "transform 0.4s ease-out";
//   };

//   const handleMouseLeave = (index) => {
//     const btn = btnRefs.current[index];
//     if (!btn) return;

//     btn.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
//     btn.style.transform = `translate(0px, 0px)`;

//     setTimeout(() => {
//       btn.style.transition = ""; // reset agar bisa di-drag ulang
//     }, 500);
//   };
//   //  SCROLL SMOOTH
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // inertia
//       smooth: true,
//     });

//     const raf = (time) => {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     };

//     requestAnimationFrame(raf);
//     //  EFFECT ACTIVE SETELAH SCROLL

//     const handleScroll = () => {
//       if (window.scrollY > 200) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // PARALLAX
//   useEffect(() => {
//     const onScroll = () => setOffset(window.scrollY);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   return (
//     <div>
//       <ParallaxProvider>
//         <div className="w-full bg-gray-100 " onClick={() => setAct(false)}>
//           {/* Navbar */}
//           <div className="flex justify-between items-center border-b-1 border-gray-200 py-3 w-[80vw] mx-auto mt-[1vw]">
//             <div className="flex items-center h-[3vw] ">
//               <h1 className="text-[1.5vw] font-bold">.ZAIM</h1>
//               <p className="text-[1.3vw] mt-[0.13vw] ml-[0.1vw]">Rofii</p>
//             </div>
//             <div>
//               <ul className="flex gap-8 items-center">
//                 {["beranda", "about", "portofolio", "kontak"].map((item) => (
//                   <li
//                     key={item}
//                     className="pl-3xl list-none lg:text-xl md:text-md  font-bold"
//                   >
//                     <a
//                       href={`#${item}`}
//                       className="block text-black hover:text-[#720028] hover:scale-110 transition duration-200"
//                     >
//                       {item.charAt(0).toUpperCase() + item.slice(1)}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           {/* Hero */}
//           <div className="flex   justify-center gap-10 mt-[2vw] flex-wrap ">
//             {/* Tagline */}

//             <div className=" w-[40%] flex flex-col gap-[3vw] animate-fade-in-left ">
//               <div className="text-[10vw]  font-semibold flex flex-col  -tracking-[1vw] text-[#720028] text-right mb-[2vw] ">
//                 <h1 className="  h-[8vw] ">Za&apos;im</h1>
//                 <h1 className=" h-[8vw]   mr-4">Studio</h1>
//               </div>

//               <div className="lg:text-xl md:text-md xl:text-2xl text-right w-[100%] relative tracking-[-0.04vw]">
//                 <p>
//                   I am not just a developer — I am your strategic partner in
//                   growth. I help transform ideas into impactful digital
//                   solutions, solve real problems, and move your business
//                   forward.
//                 </p>
//               </div>

//               {/* CTA */}
//               <div className="flex justify-end ">
//                 <a href="#kontak">
//                   <button
//                     ref={(el) => (btnRefs.current[0] = el)}
//                     onMouseMove={(e) => handleMouseMove(e, 0)}
//                     onMouseLeave={() => handleMouseLeave(0)}
//                     className="  text-2xl text-white cursor-pointer  font-semibold  px-10 py-2 rounded-lg  hover:scale-110 hover:text-white bg-[color:var(--primary)]  hover:bg-[#720028]  mr-5 transition"
//                   >
//                     Contact Us!
//                   </button>
//                 </a>
//               </div>
//             </div>

//             {/* Image */}
//             <div className="image-wraper flex items-center animate-fade-in-right">
//               <Image
//                 src="/photo-profil.jpg"
//                 width={400}
//                 height={400}
//                 alt="hero"
//                 className="w-[35vw] h-[35vw] rounded-[8%]"
//               />
//             </div>
//           </div>
//           {/* about_________________________________________________ */}
//           <div className="relative sm:h-[50vw]  md:h-[50vw] xl:h-[95vh] bg-[color:var(--primary)] mt-[5vw] overflow-hidden">
//             {/* <img
//           2D3151
//             src="src/assets/motif-bg.jpg"
//             alt=""
//             className="absolute inset-0 w-full h-full object-cover opacity-20"
//           /> */}

//             <div className="relative h-full">
//               <div className="top-0 w-full overflow-hidden absolute">
//                 <div className="-mt-[7vw] flex animate-marquee whitespace-nowrap ">
//                   <h1 className="text-[14vw] w-[100vw] font-bold italic tracking-[-1.5vw] text-white/10 mr-[6vw] ">
//                     about .about .about .
//                   </h1>
//                   <h1 className="text-[14vw] font-bold italic tracking-[-1.5vw] text-white/10">
//                     about .about .about .
//                   </h1>
//                 </div>
//               </div>
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[55vw]">
//                 <Parallax speed={-8}>
//                   <p className="text-xl md:text-2xl xl:text-3xl text-center tracking-[-.05vw] text-[#F8F7F3]">
//                     I am a self-taught Front-End Developer with a strong focus
//                     on building modern, responsive websites using React,
//                     Tailwind CSS, and Next.js. With a background in
//                     self-discipline and strategic thinking, I specialize in
//                     translating design into clean, scalable code. I am currently
//                     open to freelance opportunities where I can help bring
//                     impactful digital experiences to life.
//                   </p>
//                 </Parallax>
//               </div>
//               <Image
//                 src={`/motif-bg.jpg`}
//                 width={600}
//                 height={600}
//                 alt={`motif`}
//                 className=" sm:h-[50vw] sm:w-full object-cover opacity-10  md:h-[50vw] xl:h-[95vh]"
//               />
//             </div>
//           </div>
//           <div className="relative mt-0" id="portofolio">
//             <div className="absolute  top-[10vw] left-1/2 transform -translate-x-1/2 text-[17vw] font-semibold tracking-[-1.7vw] bg-gradient-to-r from-[#720028] via-[#9c0037] to-[#720028] bg-clip-text text-transparent animate-title-glow z-20">
//               Portofolio&nbsp;
//             </div>

//             <Marquee
//               gradient={false}
//               speed={40}
//               pauseOnHover={true}
//               className="w-[90vw] mx-auto my-[5vw] -mt-[5vw]"
//             >
//               {portofolio.map((src, index) => (
//                 <div key={index} className="mx-5">
//                   <Image
//                     src={`/${src}`}
//                     width={600}
//                     height={600}
//                     alt={`Portofolio ${index + 1}`}
//                     className="bg-gray-400 w-[25vw] h-[22vw] object-cover rounded-[10%] brightness-[115%] saturate-0 transition-all duration-300 hover:saturate-100 hover:shadow-xl"
//                   />
//                 </div>
//               ))}
//             </Marquee>
//             <Marquee
//               gradient={false}
//               direction="right"
//               speed={40}
//               pauseOnHover={true}
//               className="w-[90vw] mx-auto my-[5vw]"
//             >
//               {portofolio.map((src, index) => (
//                 <div key={index} className="mx-5">
//                   <Image
//                     src={`/${src}`}
//                     width={600}
//                     height={600}
//                     alt={`Portofolio ${index + 1}`}
//                     className="bg-gray-400 w-[25vw] h-[22vw] object-cover rounded-[10%] brightness-[115%] saturate-0 transition-all duration-300 hover:saturate-100 hover:shadow-xl"
//                   />
//                 </div>
//               ))}
//             </Marquee>
//           </div>
//           <div className="relative mt-[10vw] mb-[3vw] rounded-[5vw] h-[55vw] z-[11]">
//             <div className="relative w-[80vw] mx-auto mb-[5vw]">
//               {items.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex sm:h-25 lg:h-30 xl:h-35 border-t border-black/10 cursor-pointer relative z-10 hover:text-gray-500 group"
//                   onMouseEnter={() => setHovered(index)}
//                   onMouseLeave={() => setHovered(null)}
//                 >
//                   <h2 className="sm:text-xl xl:text-3xl group-hover:scale-0 italic tracking-[-.2vw] pr-[2vw] mt-[1vw] transition">
//                     {item.number}
//                   </h2>
//                   <h1 className="sm:text-3xl lg:text-4xl xl:text-[3rem] group-hover:-translate-x-10 italic tracking-[-.1rem] w-[35vw] leading-[4vw] mt-[1vw] transition">
//                     {item.title}
//                   </h1>
//                   <p className="sm:text-sm md:text-md lg:text-xl xl:text-[1.5rem] italic tracking-[-.05vw] w-[35vw] ml-auto text-right mt-[1.8vw]">
//                     {item.desc}
//                   </p>
//                 </div>
//               ))}

//               {/* Floating Image */}
//               {hovered !== null && (
//                 <div
//                   ref={cardRef}
//                   className={`fixed top-0 left-0 w-[28vw] h-[30vw] rounded-[5%]
//               shadow-[2vw_3vw_2vw_rgba(0,18,56,0.2)] z-[999] pointer-events-none overflow-hidden
//               transition-all duration-300 ease-out
//               scale-100 opacity-100
//             `}
//                   style={{
//                     translate: `${mousePos.x - 120}px ${mousePos.y - 120}px`,
//                   }}
//                 >
//                   <Image
//                     src={items[hovered].image}
//                     alt={items[hovered].title}
//                     fill
//                     className="object-cover rounded-[5%]"
//                   />
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="relative sm:h-[60vh] xl:h-[100vh] bg-[color:var(--secondary)] shadow-[0_-40px_80px_rgba(0,0,0,0.16)] overflow-hidden">
//             <div className="">
//               <h1 className="font-serif text-[16vw] tracking-[-1vw] absolute -top-[6.5vw] left-0 text-gray-300">
//                 Let&apos;s Talk
//               </h1>
//               <div className="w-[90%]  mx-auto absolute top-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between items-end">
//                 <div>
//                   <Image
//                     src="/photo-profil.jpg"
//                     width={400}
//                     height={400}
//                     alt="hero"
//                     className="w-[15vw] h-[15vw] rounded-full"
//                   />
//                   <div className="text-white mt-10">
//                     <h1>Desined and Built by Zaim Rofii</h1>
//                     <h1>and Powered by React, Tailwind, Next.js</h1>
//                   </div>
//                 </div>
//                 <div className="h-[7vw] w-[50vw] text-white border-b-1 border-gray-600 flex justify-center gap-5 items-end">
//                   <h1 className="text-3xl cursor-pointer">Home</h1>
//                   <h1 className="text-3xl cursor-pointer">Work</h1>
//                   <h1 className="text-3xl cursor-pointer">About</h1>
//                   <h1 className="text-3xl cursor-pointer">Contact</h1>
//                 </div>
//                 <div className="w-[16vw] h-[20vw] relative ">
//                   <button className="text-3xl inline px-15 py-2 bg-gray-200 absolute bottom-50 -rotate-3">
//                     Instagram
//                   </button>
//                   <button className="text-3xl px-15 py-2 bg-gray-200  absolute bottom-30 -rotate-15 -left-25">
//                     whatsapp
//                   </button>
//                   <button className="text-3xl px-15 py-2 bg-gray-200 absolute bottom-15 -rotate-30 ">
//                     FaceBook
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <SideNavbar
//           act={act}
//           setAct={setAct}
//           handleMouseMove={handleMouseMove}
//           handleMouseLeave={handleMouseLeave}
//           btnRefs={btnRefs}
//         />
//         <SideBarButton
//           handleMouseMove={handleMouseMove}
//           handleMouseLeave={handleMouseLeave}
//           btnRefs={btnRefs}
//           isScrolled={isScrolled}
//           setAct={setAct}
//           act={act}
//         />
//       </ParallaxProvider>
//     </div>
//   );
// }
"use client";

import { useState, useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ParallaxProvider } from "react-scroll-parallax";
// import Marquee from "react-fast-marquee";
import SideNavbar from "./components/sidebar/SideNavbar";
import { SideBarButton } from "./components/sidebar/SideBarButton";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/FooterSection";
import TechStackMarquee from "./components/TechStackSection";

export default function Home() {
  const [hovered, setHovered] = useState(null);
  const [act, setAct] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [shouldBounce, setShouldBounce] = useState(true);
  const cardRef = useRef(null);
  const btnRefs = useRef([]);
  const offsetRef = useRef(0);
  const isMoving = useRef(false);

  const portofolio = [
    "portofolio1.jpg",
    "portofolio2.jpg",
    "portofolio3.jpg",
    "portofolio4.jpg",
    "portofolio5.jpg",
    "portofolio6.jpg",
  ];

  const items = [
    {
      number: "01",
      title: "Web Development Projects",
      desc: "Proyek pengembangan website dengan desain menarik dan fitur sesuai kebutuhan Anda.",
      image: "/portofolio1.jpg",
    },
    {
      number: "02",
      title: "Frontend Showcase",
      desc: "Koleksi antarmuka pengguna modern, responsif, dan mudah digunakan.",
      image: "/portofolio2.jpg",
    },
    {
      number: "03",
      title: "Backend Integration",
      desc: "Sistem backend yang kuat untuk mendukung fitur website Anda, termasuk server dan database.",
      image: "/portofolio3.jpg",
    },
    {
      number: "04",
      title: "Fullstack Applications",
      desc: "Aplikasi lengkap dengan integrasi frontend dan backend untuk solusi menyeluruh.",
      image: "/portofolio4.jpg",
    },
  ];

  // Mouse tracking hanya jika diperlukan
  useEffect(() => {
    const handleMouseMove = (e) => {
      // hanya untuk keperluan efek hover lanjutan
    };

    if (hovered !== null) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hovered]);

  // BUTTON BOUNCE EFFECT - dipercepat dan dioptimasi
  const handleMouseMove = (e, index) => {
    if (isMoving.current) return;
    isMoving.current = true;

    requestAnimationFrame(() => {
      const btn = btnRefs.current[index];
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x}px, ${y}px)`;
      btn.style.transition = "transform 0.3s ease-out";

      isMoving.current = false;
    });
  };

  const handleMouseLeave = (index) => {
    setShouldBounce(false);
    const btn = btnRefs.current[index];
    if (!btn) return;

    requestAnimationFrame(() => {
      btn.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
      btn.style.transform = `translate(0px, 0px)`;

      setTimeout(() => {
        btn.style.transition = "";
      }, 600);

      setTimeout(() => setShouldBounce(true), 800);
    });
  };

  // LENIS SMOOTH SCROLL
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax scroll offset (tanpa rerender)
  useEffect(() => {
    const onScroll = () => {
      offsetRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <ParallaxProvider>
        <div className="w-full bg-gray-100" onClick={() => setAct(false)}>
          <Navbar />
          <HeroSection
            handleMouseMove={handleMouseMove}
            handleMouseLeave={handleMouseLeave}
            btnRefs={btnRefs}
          />
          <AboutSection />
          <PortfolioSection portofolio={portofolio} />
          <ServicesSection
            items={items}
            hovered={hovered}
            setHovered={setHovered}
            // mousePos={mousePos}
            cardRef={cardRef}
          />
          <TechStackMarquee />
          <Footer />
        </div>
        <SideNavbar
          act={act}
          setAct={setAct}
          handleMouseMove={handleMouseMove}
          handleMouseLeave={handleMouseLeave}
          btnRefs={btnRefs}
        />
        <SideBarButton
          handleMouseMove={handleMouseMove}
          handleMouseLeave={handleMouseLeave}
          btnRefs={btnRefs}
          isScrolled={isScrolled}
          setAct={setAct}
          act={act}
          shouldBounce={shouldBounce}
        />
      </ParallaxProvider>
    </div>
  );
}
