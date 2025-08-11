"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { CheckCircle, Code, Workflow, Clock, BadgeCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import PageTransitionIn from "../components/page-transition-effect/PageTransitionIn";
import Link from "next/link";

const iconMap = { Code, Workflow, Clock, BadgeCheck };

const services = [
  {
    title: "Figma to React/Next.js Conversion",
    points: [
      "100% Responsive & Pixel Perfect",
      "Built with Tailwind CSS & TypeScript",
      "Bonus: Framer Motion Animations & Developer Documentation",
      "Free Hosting on Vercel or Netlify",
    ],
    icon: "Code",
  },
  {
    title: "Professional Workflow",
    points: [
      "Discussion & Figma File Submission",
      "Reusable Component Breakdown",
      "Implementation with React + Tailwind + TS",
      "Revisions, Optimization & Deployment",
    ],
    icon: "Workflow",
  },
  {
    title: "Packages & Time Estimates",
    points: [
      "Basic (1 Page): 2 Days – $30",
      "Standard (3 Pages): 4–6 Days – $90",
      "Premium (5–6 Pages + API & Animation): 7–10 Days – $180",
    ],
    icon: "Clock",
  },
  {
    title: "Why Choose Me?",
    points: [
      "Modular & SEO-Friendly Codebase",
      "Lighthouse Score > 90+",
      "Free 30-Minute Consultation",
      "Developer Docs for Easy Backend Integration",
    ],
    icon: "BadgeCheck",
  },
];

const PricingCard = ({
  title,
  price,
  description,
  note,
  features,
  popular,
}) => (
  <div
    className={`h-[90vh] rounded-2xl p-6 shadow-lg flex flex-col justify-between hover:scale-101 hover:shadow-xl transition-all ${
      popular
        ? "border-2 border-green-500 bg-white relative"
        : "border border-gray-300"
    }`}
  >
    {popular && (
      <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-xl rounded-tr-xl">
        Most Popular
      </div>
    )}
    <div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <p className="text-md 3xl:text-lg text-gray-500 mb-4 h-[14%] lg:h-[10%]">
        {description}
      </p>
      <div className="text-5xl font-bold text-gray-900 flex items-end space-x-2">
        <span className="text-base font-medium text-gray-600">US$</span>
        <span>{price}</span>
        <span className="text-lg text-gray-500">/project</span>
      </div>
      {note && (
        <p className="text-lg mt-1 font-medium text-green-600">{note}</p>
      )}
      <ul className="mt-6 space-y-2 text-md 3xl:text-lg text-gray-700">
        {features.map((f, i) => (
          <li key={i}>✅ {f}</li>
        ))}
      </ul>
    </div>
    <div className="mt-6">
      <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-xl transition">
        Choose Plan
      </button>
    </div>
  </div>
);

export default function ServiceSection() {
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
    <ParallaxProvider>
      <PageTransitionIn />
      <Navbar />
      <section className="bg-[#FAFBFD] w-screen py-12 px-4 sm:px-6 lg:px-8 mx-auto animate-fade-in-top">
        <section className="py-16 max-w-7xl mx-auto mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                🚀 Figma to React/Next.js Conversion
              </h2>
              <p className="text-2xl text-gray-600 mb-6">
                Turn your beautiful Figma designs into blazing-fast, scalable,
                and maintainable code — ready for production.
              </p>
              <ul className="space-y-4 text-base sm:text-xl text-gray-800">
                {services[0].points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="/service-img.jpg"
                alt="Figma to React Conversion"
                className="w-full max-w-lg"
              />
            </div>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto" id="pricing-cards">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">💼 My Pricing Plans</h2>
            <p className="text-lg text-gray-600">
              Transparent pricing tailored to your project scale. Get powerful
              deliverables with zero hidden fees.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <PricingCard
              title="Basic"
              price="30"
              description="Start simple with 1 page implementation."
              note="Perfect for static or marketing pages"
              features={[
                "1 responsive page",
                "Tailwind CSS + optional TS",
                "Deployed on Vercel/Netlify",
                "Pixel-perfect layout",
                "Free minor revision (2x)",
                "Clean Code Guarantee",
                "Delivered in 2–3 days",
                "Production-ready deploy",
              ]}
            />

            <PricingCard
              title="Standard"
              price="90"
              description="Perfect for personal sites, portfolios, and teams who want solid structure with motion."
              note="Includes animation + docs"
              features={[
                "Up to 3 pages",
                "Framer Motion animation",
                "Developer documentation",
                "Free minor revision (5x)",
                "SEO-friendly structure",
                "Component-based structure",
                "GitHub repo + README",
                "Exportable assets if needed",
                "Structured components for future scaling",
              ]}
              popular
            />

            <PricingCard
              title="Premium"
              price="180"
              description="Great for startups & SaaS teams. Get scalable code, API-ready layout, and dev support."
              note="Includes API + Full support"
              features={[
                "5–6 pages",
                "API integration ready",
                "Advanced animations",
                "Domain + deployment help",
                "1-week support post-delivery (unlimited revisions)",
                "Reusable component library",
                "Integration-ready structure",
                "Optional 1:1 dev handoff call",
                "Best for MVPs, SaaS dashboards, and modern app UI",
              ]}
            />
          </div>
        </section>
        <section className="h-auto xl:h-screen w-full">
          <h1 className="w-[50%] mx-auto text-lg lg:text-xl mt-10  text-gray-800 text-center mb-10">
            Turn your Figma designs into fast, responsive, production-ready
            React apps — with animations, docs, and free deployment included.
          </h1>
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 my-14 ">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={idx}
                  className="bg-gray-100 border border-gray-200 rounded-2xl shadow-md p-5 sm:p-6 space-y-4 transition hover:shadow-xl"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    {Icon && (
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 shrink-0" />
                    )}
                    <h3 className="text-md sm:text-2xl font-semibold">
                      {service.title}
                    </h3>
                  </div>
                  <ul className="list-none space-y-2 text-base sm:text-md text-gray-800">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 w-5 h-5 mt-1 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="text-center my-12">
            <Link href="/contact">
              <button className="w-full sm:w-auto text-base sm:text-lg px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl shadow-md transition duration-200">
                📩 Contact Me Now
              </button>
            </Link>
            <p className="text-sm sm:text-base text-gray-400 mt-4 break-words">
              Email: zaim@example.com | GitHub: github.com/zaimkanova
            </p>
          </div>
        </section>
      </section>
      <FooterSection />
    </ParallaxProvider>
  );
}
