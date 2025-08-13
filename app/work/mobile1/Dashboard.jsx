"use client";
import React, { useState, useRef, useEffect } from "react";
import { MapPin, Star } from "lucide-react";
import { DetailCard } from "./DetailCard"; // pastikan path benar

const categories = [
  "All",
  "Outdoor",
  "Food",
  "Culture",
  "Events",
  "Nightlife",
  "Relaxation",
];

const popularOffers = [
  {
    id: 1,
    name: "Italy Beach",
    rating: 4.3,
    image: "/mousinho.jpg",
    detailText:
      "Beautiful sunny beach with clear waters, perfect for swimming and relaxing.",
    price: 180,
  },
  {
    id: 2,
    name: "Mangione Sunset",
    rating: 4.7,
    image: "/mangione.jpg",
    detailText:
      "Enjoy breathtaking sunsets with serene surroundings and great dining options.",
    price: 220,
  },
  {
    id: 3,
    name: "Egypt Village",
    rating: 4.5,
    image: "/daoui.jpg",
    detailText:
      "Experience ancient culture and amazing architecture in a vibrant village.",
    price: 150,
  },
  {
    id: 4,
    name: "Sea Mountain",
    rating: 4.6,
    image: "/travelinghawks.jpg",
    detailText:
      "Explore the perfect combination of mountain air and sea breeze in this unique spot.",
    price: 200,
  },
];

// Hook untuk drag scroll horizontal / vertikal
function useDragScroll(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let startX, startY, scrollLeft, scrollTop;

    function onMouseDown(e) {
      isDown = true;
      el.classList.add("cursor-grabbing");
      startX = e.pageX - el.offsetLeft;
      startY = e.pageY - el.offsetTop;
      scrollLeft = el.scrollLeft;
      scrollTop = el.scrollTop;
    }

    function onMouseLeave() {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    }

    function onMouseUp() {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    }

    function onMouseMove(e) {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const y = e.pageY - el.offsetTop;
      const walkX = x - startX; // distance moved on x
      const walkY = y - startY; // distance moved on y
      el.scrollLeft = scrollLeft - walkX;
      el.scrollTop = scrollTop - walkY;
    }

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, [ref]);
}

export default function Dashboard({
  setSelectedOffer,
  selectedOffer,
  dashboardActive,
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Ref untuk container scrollable horizontal kategori
  const categoryRef = useRef(null);
  useDragScroll(categoryRef);

  // Ref untuk popular offers horizontal scroll container
  const popularRef = useRef(null);
  useDragScroll(popularRef);

  // Ref untuk recommended offers horizontal scroll container
  const recommendedRef = useRef(null);
  useDragScroll(recommendedRef);

  // Filter popular offers by search or category (simple example)
  const filteredPopular = popularOffers.filter((offer) => {
    const matchesCategory =
      activeCategory === "All" || offer.category === activeCategory;
    const matchesSearch = offer.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // For simplicity, recommended is the same as popular in this example
  const filteredRecommended = filteredPopular;

  // Handler klik kartu, set detail yang muncul
  const handleCardClick = (offer) => {
    setSelectedOffer(offer);
  };

  // Handler tutup detail card
  const handleCloseDetail = () => {
    setSelectedOffer(null);
  };

  return (
    <div
      className={`${
        dashboardActive ? "block" : "hidden"
      } absolute top-0 z-10 py-8 w-full h-full bg-gradient-to-b from-white to-blue-50 select-none`}
    >
      <div className="flex items-start px-4 justify-between mb-4 gap-4 relative z-20">
        <h1 className="text-xs text-gray-900">
          <p>Explore</p>
          <p className="text-xl">Aspen</p>
        </h1>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={20} />
          <span className="font-medium text-xs">Aspen, USA</span>
        </div>
      </div>

      {/* Search Input */}
      <div className="mb-4 px-4">
        <div className="relative text-gray-400 focus-within:text-gray-600">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 3 10.5a7.5 7.5 0 0 0 13.65 6.15z"
              />
            </svg>
          </span>
          <input
            id="search"
            type="search"
            placeholder="Find This to do"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-4 py-2 placeholder:text-xs rounded-full bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4">
        <div
          ref={categoryRef}
          className="flex space-x-1 overflow-x-auto rounded-full py-2 cursor-grab"
        >
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-1 rounded-full text-xs font-medium transition
                  ${
                    isActive
                      ? "bg-gray-200 text-blue-500 font-semibold"
                      : "text-gray-400"
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
      <div className="h-100 w-full overflow-y-auto">
        {/* Popular Section */}
        <section className="my-4 px-2">
          <h2 className="text-md font-semibold mb-2 text-gray-900 ml-2">
            Popular
          </h2>
          <div
            ref={popularRef}
            className="flex space-x-4 overflow-x-auto no-scrollbar cursor-grab"
          >
            {popularOffers.map(({ id, name, rating, image }) => (
              <div
                key={id}
                onClick={() =>
                  handleCardClick(popularOffers.find((p) => p.id === id))
                }
                className="relative flex-shrink-0 w-35 h-40 rounded-xl overflow-hidden shadow-lg cursor-pointer bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute bottom-3 left-3 rounded-full bg-gray-600 bg-opacity-80 px-3 py-1 flex items-center text-white text-[10px] font-semibold shadow-md">
                  <Star size={10} className="mr-1 text-yellow-400" />
                  {rating}
                </div>
                <div className="absolute bottom-10 left-3 text-white text-[10px] bg-gray-600 rounded-full p-0.5 px-2 mb-0.5 drop-shadow-md">
                  {name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Section */}
        <section className="px-2">
          <h2 className="text-md font-semibold mb-2 text-gray-900 ml-2">
            Recommended
          </h2>
          <div
            ref={recommendedRef}
            className="flex space-x-4 overflow-x-auto no-scrollbar cursor-grab pb-10"
          >
            {popularOffers.map(({ id, name, rating, image }) => (
              <div
                key={id}
                onClick={() =>
                  handleCardClick(popularOffers.find((p) => p.id === id))
                }
                className="flex-shrink-0 w-32 h-35 rounded-xl shadow-md bg-white cursor-pointer overflow-hidden"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-22 object-cover object-center rounded-t-xl"
                />
                <div className="p-2">
                  <h3 className="text-xs font-semibold text-gray-900">
                    {name}
                  </h3>
                  <div className="inline-flex items-center space-x-1 text-yellow-400 text-xs">
                    <Star size={10} />
                    <span>{rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* DetailCard muncul jika ada yang dipilih */}
    </div>
  );
}
