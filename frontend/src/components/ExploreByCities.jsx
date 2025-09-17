// src/components/ExploreByCities.jsx
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const cities = [
  {
    name: "Nairobi",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80",
    properties: 120,
  },
  {
    name: "Mombasa",
    image:
      "https://images.unsplash.com/photo-1604975701400-3f33d92bfb13?auto=format&fit=crop&w=400&q=80",
    properties: 85,
  },
  {
    name: "Kisumu",
    image:
      "https://images.unsplash.com/photo-1617692853020-3d4b6cb30f3f?auto=format&fit=crop&w=400&q=80",
    properties: 60,
  },
  {
    name: "Nakuru",
    image:
      "https://images.unsplash.com/photo-1602786129976-5db5a0fdc72c?auto=format&fit=crop&w=400&q=80",
    properties: 40,
  },
  {
    name: "Eldoret",
    image:
      "https://images.unsplash.com/photo-1593095948071-bcf1a33f8e54?auto=format&fit=crop&w=400&q=80",
    properties: 35,
  },
  {
    name: "Naivasha",
    image:
      "https://images.unsplash.com/photo-1588692048851-7e8bb2d6b5e9?auto=format&fit=crop&w=400&q=80",
    properties: 28,
  },
  {
    name: "Malindi",
    image:
      "https://images.unsplash.com/photo-1602928322214-63fd71dbd3f3?auto=format&fit=crop&w=400&q=80",
    properties: 22,
  },
  {
    name: "Nanyuki",
    image:
      "https://images.unsplash.com/photo-1615474012066-f25ebae2e06d?auto=format&fit=crop&w=400&q=80",
    properties: 18,
  },
];

const CitiesCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-[75%] mx-auto py-16 relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Explore by Cities</h2>
        <Link to="/cities" className="text-blue-600 hover:underline">See all cities</Link>
      </div>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-10"
      >
        {cities.map((city, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-48 flex flex-col items-center"
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-36 h-36 rounded-full object-cover shadow-md"
            />
            <h3 className="mt-3 font-semibold">{city.name}</h3>
            <p className="text-sm text-gray-500">
              {city.properties} properties
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitiesCarousel;
