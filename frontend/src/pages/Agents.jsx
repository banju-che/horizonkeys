import React from "react";
import { Link } from "react-router-dom";

const agents = [
  {
    id: 1,
    name: "John Mwangi",
    image: "https://images.unsplash.com/photo-1603415526960-f8f0a3d3d1b9?auto=format&fit=crop&w=400&q=80",
    listings: 25,
  },
  {
    id: 2,
    name: "Grace Wanjiku",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    listings: 18,
  },
  {
    id: 3,
    name: "Peter Otieno",
    image: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6?auto=format&fit=crop&w=400&q=80",
    listings: 32,
  },
  {
    id: 4,
    name: "Alice Njeri",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",
    listings: 15,
  },
];

const Agents = () => {
  return (
    <div className="w-[75%] mx-auto py-16">
      <h2 className="text-2xl font-bold mb-8">Meet Our Agents</h2>

      {/* Grid of agents */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-200"
          >
            <img
              src={agent.image}
              alt={agent.name}
              className="w-32 h-32 rounded-full object-cover shadow-md"
            />
            <h3 className="mt-3 font-semibold">{agent.name}</h3>
            <p className="text-sm text-gray-500">{agent.listings} listings</p>
          </div>
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

export default Agents;
