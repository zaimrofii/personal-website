// import Link from "next/link";
import TransitionLink from "./page-transition-effect/TransitionLink";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-1 border-gray-200 py-3  px-[5vw] mx-auto mt-[1vw]">
      <div className="flex items-center h-[3vw] ">
        <h1 className="text-[1.5vw] font-semibold">.Zaim</h1>
        <p className="text-[1.3vw] mt-[0.13vw] ml-[0.1vw] font-semibold">
          Rofii
        </p>
      </div>
      <ul className="flex gap-8 items-center">
        {["Home", "About", "Work", "Contact"].map((item) => (
          <li
            key={item}
            className="pl-3xl list-none lg:text-xl md:text-md font-bold"
          >
            <TransitionLink
              href={`/${
                item.toLowerCase() === "home" ? "" : item.toLowerCase()
              }`}
            >
              {" "}
              <button className="block text-black hover:text-[#720028] hover:scale-110 transition duration-200">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </TransitionLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
