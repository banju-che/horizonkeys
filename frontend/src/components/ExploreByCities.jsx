// src/components/ExploreByCities.jsx
import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getCities } from "../services/CitiesServices";

const CitiesCarousel = () => {
  const scrollRef = useRef(null);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const data = await getCities();
        setCities(data.slice(0, 8)); // limit to first 8 for homepage
      } catch (err) {
        setError("Failed to load cities");
      } finally {
        setLoading(false);
      }
    };
    fetchCities();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (loading) {
    return <p className="text-center py-10 text-gray-500">Loading cities...</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">{error}</p>;
  }

  return (
    <div className="w-[75%] mx-auto py-16 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Explore by Cities</h2>
        <Link to="/cities" className="text-emerald-600 hover:underline">
          See all cities
        </Link>
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
        {cities.map((city) => (
          <div
            key={city.id}
            className="flex-shrink-0 w-48 flex flex-col items-center"
          >
            <img
              src={city.img}
              alt={city.name}
              className="w-36 h-36 rounded-full object-cover shadow-md"
            />
            <h3 className="mt-3 font-semibold">{city.name}</h3>
            <p className="text-sm text-gray-500">{city.count} properties</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitiesCarousel;
