"use client";
import React, { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import FooterSection from "../components/FooterSection";
import { ParallaxProvider } from "react-scroll-parallax";
import PageTransitionIn from "../components/page-transition-effect/PageTransitionIn";
import Navbar from "../components/Navbar";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";

const categories = ["All", "Web UI", "Mobile UI", "Dashboard", "Landing Pages"];

const portfolioItems = [
  {
    id: 1,
    category: "Dashboard",
    title: "Social Media Dashboard UI",
    description:
      "A modern social media management dashboard with analytics, sales tracking, and order management features.",
    image: "./dashboard.jpg",
    tech: ["React", "TailwindCSS", "TypeScript", "rechart"],
    liveDemo: "/work/dashboard",
    github: "#",
    figma: "#",
    featured: false,
  },
  // {
  //   id: 2,
  //   category: "Landing Pages",
  //   title: "SaaS Landing Page",
  //   description:
  //     "A sleek landing page for a SaaS product, optimized for conversions and responsive on all devices.",
  //   image: "./portofolio2.jpg",
  //   tech: ["React", "TailwindCSS"],
  //   liveDemo: "#",
  //   github: "#",
  //   figma: "#",
  //   featured: false,
  // },
  {
    id: 3,
    category: "Mobile UI",
    title: "App Exploration App UI",
    description: "An interactive mobile App Exploration.",
    image: "./mobile1.jpg",
    tech: ["React Native", "TailwindCSS"],
    liveDemo: "/work/mobile1",
    github: "#",
    figma: "#",
    featured: false,
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredProjects = portfolioItems.filter((item) => item.featured);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems.filter((item) => !item.featured)
      : portfolioItems.filter(
          (item) => item.category === activeCategory && !item.featured
        );
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <ParallaxProvider>
        <PageTransitionIn />
        <Navbar />
        <div className="w-[90vw] xl:w-[80vw] mx-auto px-4 md:px-8 lg:px-16 py-1  mt-14  animate-fade-in-top">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 drop-shadow-sm">
              My Portfolio
            </h1>
            <h2 className="text-lg md:text-xl text-gray-500 mt-2">
              Figma Designs Transformed into Interactive React Applications
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              I specialize in converting static Figma UI designs into fully
              functional React components with clean, maintainable code.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full border text-sm md:text-base shadow-sm transition-all duration-200 
                ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Projects */}

          {/* {featuredProjects.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-14 text-center">
                Featured Projects
              </h3>
              <p className="text-center text-gray-600 mb-10">
                Highlighting my best and most impactful work.
              </p>
              <div className="flex flex-wrap gap-8">
                {featuredProjects.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full md:w-[45%] h-auto"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[50vh] object-cover"
                    />
                    <div className="p-5">
                      <h4 className="text-md xl:text-lg font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-2">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-4">
                        <a
                          href={item.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
                        >
                          <ExternalLink size={14} /> Live
                        </a>
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-gray-700 hover:underline text-sm"
                        >
                          <Github size={14} /> Code
                        </a>
                        {item.figma && (
                          <a
                            href={item.figma}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-pink-500 hover:underline text-sm"
                          >
                            🎨 Figma
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )} */}

          {/* Portfolio List */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-20 text-center">
            Portfolio
          </h3>
          <p className="text-center text-gray-600 mb-10">
            A collection of other projects showcasing my skills and experience.
          </p>
          <div className="flex flex-wrap gap-12 justify-center">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full md:w-[45%] h-auto "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[50vh] object-cover"
                />
                <div className="p-5">
                  <h4 className="text-md xl:text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Link
                      href={item.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white rounded-xl py-2 px-4 bg-blue-600 hover:underline text-sm"
                    >
                      <ExternalLink size={14} /> Live
                    </Link>
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-700 hover:underline text-sm"
                    >
                      <Github size={14} /> Code
                    </a>
                    {item.figma && (
                      <a
                        href={item.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-pink-500 hover:underline text-sm"
                      >
                        🎨 Figma
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <section className="py-30">
            <div className="max-w-3xl mx-auto text-center px-4">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                Like What You See?
              </h3>
              <p className="text-gray-600 mb-8">
                I'm always open to new projects and collaborations. Let's build
                something amazing together!
              </p>
              <a
                href="mailto:your.email@example.com"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium shadow-md hover:bg-blue-700 transition"
              >
                Contact Me
              </a>
            </div>
          </section>
        </div>
        <FooterSection />
      </ParallaxProvider>
    </section>
  );
}
