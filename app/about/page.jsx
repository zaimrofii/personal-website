"use client";
import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import PageTransitionIn from "../components/page-transition-effect/PageTransitionIn";

const About = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // makin besar makin lambat
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // feel inertia
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <PageTransitionIn />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ParallaxProvider>
          <Navbar />
          <div className="w-[80vw] mx-auto h-auto ">
            <h1 className="text-[4vw] pr-[16vw] py-[6vw] border-b border-gray-400 animate-fade-in-top">
              Helping your vision turn into a smooth and scalable web app.
            </h1>

            <div className="mt-8 flex  gap-4">
              <div className="w-[50vw]  h-auto overflow-hidden relative">
                <Parallax speed={-30}>
                  <img src="/me.jpg" alt="Parallax" className="w-full h-auto" />
                </Parallax>
              </div>
              <div className="w-[30vw]">
                <h1 className=" px-5 text-xl border-b-1 pb-20 border-gray-400  ">
                  Hi, I am Zaim Rofii — a self-taught developer passionate about
                  building clean, responsive, and modern web experiences. I
                  specialize in front-end development using React & Tailwind,
                  and can take projects fullstack with Next.js & TypeScript.
                  Whether it’s a landing page, dashboard, or SaaS MVP — I help
                  designs come alive.
                </h1>
              </div>
            </div>
          </div>
          <Parallax speed={-10}>
            <div className="bg-gray-100 mt-10 py-5 mb-0">
              <div className="w-[80vw] mx-auto ">
                <div className="mt-35">
                  <h1 className="text-[3vw] font-light mb-10">
                    My core expertise includes _
                  </h1>
                  <div className="flex justify-between text-xl">
                    <div className="w-[16vw]">
                      <h1 className="py-5 border-b-1 border-gray-400 mb-5 text-2xl text-gray-600 ">
                        Figma - React
                      </h1>
                      <h1>
                        Converting modern Figma UI designs into responsive and
                        interactive React interfaces
                      </h1>
                    </div>
                    <div className="w-[16vw]">
                      <h1 className="py-5 border-b-1 border-gray-400 mb-5 text-2xl text-gray-600 ">
                        Fullstack
                      </h1>
                      <h1>
                        Building robust fullstack web applications and API
                        integration with Node.js/ Django
                      </h1>
                    </div>
                    <div className="w-[16vw]">
                      <h1 className="py-5 border-b-1 border-gray-400 mb-5 text-2xl text-gray-600 ">
                        Javascript - Typescript
                      </h1>
                      <h1>
                        Writing scalable, maintainable, and strongly-typed code
                        with TypeScript best practices
                      </h1>
                    </div>
                    <div className="w-[16vw]">
                      <h1 className="py-5 border-b-1 border-gray-400 mb-5 text-2xl text-gray-600 ">
                        Tailwind Css
                      </h1>
                      <h1>
                        Crafting consistent, responsive layouts rapidly using
                        utility-first Tailwind CSS
                      </h1>
                    </div>
                  </div>
                </div>

                <div className=" flex justify-between mt-30">
                  <div className="w-[30vw]">
                    <h1 className=" px-5 text-xl border-b-1 pb-20 border-gray-400  ">
                      I believe in clean communication, clarity, and consistent
                      delivery. Every project I take starts with deep
                      understanding — and ends with results that make sense both
                      visually and functionally.
                    </h1>
                  </div>

                  <div className="w-[40vw]  h-auto overflow-hidden relative">
                    <Parallax speed={-30}>
                      <img
                        src="/team.jpg"
                        alt="Happy team collaboration"
                        className="w-full h-auto"
                      />
                    </Parallax>
                  </div>
                </div>
                <div className="flex flex-col my-30 justify-center">
                  <h1 className="mt-12 text-center text-4xl font-semibold">
                    Let’s Build Something Great Together.
                  </h1>
                  <p className="mt-2 text-2xl text-center">
                    I’m open to freelance gigs, collaborations, or long-term
                    partnerships. Drop me a message and let’s bring your ideas
                    to life.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>

          <FooterSection />
        </ParallaxProvider>
      </motion.div>
    </>
  );
};

export default About;
