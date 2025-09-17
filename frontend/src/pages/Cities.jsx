import React from "react";
import { Link } from "react-router-dom";

const cities = [
  { name: "Nairobi", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80", properties: 120 },
  { name: "Mombasa", image: "https://images.unsplash.com/photo-1604975701400-3f33d92bfb13?auto=format&fit=crop&w=400&q=80", properties: 85 },
  { name: "Kisumu", image: "https://images.unsplash.com/photo-1617692853020-3d4b6cb30f3f?auto=format&fit=crop&w=400&q=80", properties: 60 },
  { name: "Nakuru", image: "https://images.unsplash.com/photo-1602786129976-5db5a0fdc72c?auto=format&fit=crop&w=400&q=80", properties: 40 },
  { name: "Eldoret", image: "https://images.unsplash.com/photo-1593095948071-bcf1a33f8e54?auto=format&fit=crop&w=400&q=80", properties: 35 },
  { name: "Naivasha", image: "https://images.unsplash.com/photo-1588692048851-7e8bb2d6b5e9?auto=format&fit=crop&w=400&q=80", properties: 28 },
  { name: "Malindi", image: "https://images.unsplash.com/photo-1602928322214-63fd71dbd3f3?auto=format&fit=crop&w=400&q=80", properties: 22 },
  { name: "Nanyuki", image: "https://images.unsplash.com/photo-1615474012066-f25ebae2e06d?auto=format&fit=crop&w=400&q=80", properties: 18 },
];

const Cities = () => {
  return (
    <div className="w-[75%] mx-auto py-16">
      <h2 className="text-2xl font-bold mb-8">Explore All Cities</h2>

      {/* Grid of cities */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {cities.map((city, idx) => (
          <Link
            key={idx}
            to={`/cities/${city.name.toLowerCase()}`}
            className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-200"
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-36 h-36 rounded-full object-cover shadow-md"
            />
            <h3 className="mt-3 font-semibold">{city.name}</h3>
            <p className="text-sm text-gray-500">{city.properties} properties</p>
          </Link>
        ))}
      </div>

      {/* Back button */}
      <div className="mt-10 text-center">
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Cities;
