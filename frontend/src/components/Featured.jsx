import React from "react";
import { Link } from 'react-router-dom'

function Featured() {
  const properties = [
    {
      id: 1,
      title: "Modern house in Hollywood",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      price: "1,200,000",
      desc: "Spacious living area.",
      bedrooms: 3,
      bathrooms: 2,
      squarefeet: 1800,
    },
    {
      id: 2,
      title: "Cozy apartment in Nairobi",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      price: "950,000",
      desc: "Close to amenities.",
      bedrooms: 2,
      bathrooms: 1,
      squarefeet: 1200,
    },
    {
      id: 3,
      title: "Luxury villa with pool",
      image:
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
      price: "2,500,000",
      desc: "Garden and swimming pool.",
      bedrooms: 4,
      bathrooms: 3,
      squarefeet: 2500,
    },
  ];

  return (
    <div className="bg-[#f8f9fa] py-10">
      <div className="w-[75%] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Discover Our Featured Listings</h1>
            <p className="text-gray-600">Handpicked properties just for you</p>
          </div>
          <div>
            <Link to='/listings' className="text-blue-600 hover:underline">See all Properties</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {properties.map((property) => (
            <div key={property.id} className="rounded-lg overflow-hidden shadow-md bg-white">
              <img className="w-full h-48 object-cover" src={property.image} alt={property.title} />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{property.title}</h4>
                <p className="text-gray-700 mb-2">{property.desc}</p>
                <p className="font-bold text-blue-600 mb-2">Ksh {property.price}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{property.bedrooms} bd</span>
                  <span>{property.bathrooms} bt</span>
                  <span>{property.squarefeet} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
