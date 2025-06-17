"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageTransitionIn from "../components/PageTransitionIn";

const Contact = () => {
  return (
    <>
      {/* Navbar */}
      <div className="flex justify-end px-[10vw] bg-[color:var(--secondary)] h-[5vw] text-white border-b-1 border-gray-800">
        <ul className="flex gap-8 items-center ">
          {["Home", "About", "Work", "Contact"].map((item) => (
            <li key={item} className="pl-3xl list-none lg:text-xl md:text-md">
              <Link
                href={`${
                  item.toLowerCase() === "home" ? "/" : item.toLowerCase()
                }`}
                className="block   hover:scale-110 transition duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-0 bg-[color:var(--secondary)] text-white ">
        <div className="w-[80vw] mx-auto  pb-20  animate-fade-in-top">
          <div className="flex pt-[5vw] justify-between ">
            <div className="  w-[65%] ">
              <h1 className="text-[4vw]  py-[6vw] border-b border-gray-400">
                Ready to bring your idea to life? Let’s build it together{" "}
              </h1>
              <div className="grid sm:text-md lg:text-xl xl:text-2xl">
                <div className="border-b-1 border-gray-600 h-[10vw] flex gap-10  items-center">
                  <h1 className="text-4xl -mt-[2vw]">&bull;</h1>
                  <div className=" w-full flex flex-col gap-3">
                    <h1>What's Your Name?</h1>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className=" w-3/4 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="border-b-1 border-gray-600 h-[10vw] flex gap-10  items-center">
                  <h1 className="text-4xl -mt-[2vw]">&bull;</h1>
                  <div className=" w-full flex flex-col gap-3">
                    <h1>What's your email?</h1>
                    <input
                      type="text"
                      placeholder="johndoe@gmail.com"
                      className=" w-3/4 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="border-b-1 border-gray-600 h-[10vw] flex gap-10  items-center">
                  <h1 className="text-4xl -mt-[2vw]">&bull;</h1>{" "}
                  <div className=" w-full flex flex-col gap-3">
                    <h1>What's the name of your organization?</h1>
                    <input
                      type="text"
                      placeholder="johndoe corp"
                      className=" w-3/4 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="border-b-1 border-gray-600 h-[10vw] flex gap-10  items-center">
                  <h1 className="text-4xl -mt-[2vw]">&bull;</h1>
                  <div className=" w-full flex flex-col gap-3">
                    <h1>What services are you looking for?</h1>
                    <input
                      type="text"
                      placeholder="Convert figma-react, Fullstack..."
                      className=" w-3/4 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="border-b-1 border-gray-600 h-[10vw] flex gap-10  items-center ">
                  <h1 className="text-4xl -mt-[2vw]">&bull;</h1>
                  <div className=" w-full flex flex-col gap-3">
                    <h1>Your message</h1>
                    <textarea
                      name="message"
                      id=""
                      placeholder="Hello Zaim, Can you Help me..."
                      className=" w-3/4 focus:outline-none"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="border border-gray-400 px-10 py-3 rounded-lg my-20 text-2xl cursor-pointer hover:bg-gray-200 hover:text-[color:var(--secondary)] transition">
                  Send it!
                </button>
              </div>
            </div>
            <div className=" pt-[6.2vw] w-[30%]">
              <Image
                src="/photo-profil.jpg"
                alt="photo profil"
                width={500}
                height={500}
                className="rounded-full w-[12vw] mb-10"
              />
              <div className="text-xl flex flex-col gap-2">
                <h1 className="text-gray-400 mb-2 pb-3  ">Contact Detail</h1>
                <p>zaimrofii20@gmail.com</p>
                <p>08979811467</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageTransitionIn />
    </>
  );
};

export default Contact;
