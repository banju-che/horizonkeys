import React from "react";
import { useParams, Link } from "react-router-dom";

// Reuse properties array (later, fetch from backend instead)
const properties = [
  {
    id: 1,
    title: "Luxury Apartment in Nairobi",
    city: "Nairobi",
    price: "$120,000",
    image: "https://images.unsplash.com/photo-1560448075-bb0e9a2adf9d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Beach House in Mombasa",
    city: "Mombasa",
    price: "$250,000",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Modern House in Kisumu",
    city: "Kisumu",
    price: "$90,000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118a?auto=format&fit=crop&w=800&q=80",
  },
];

const CityDetail = () => {
  const { cityName } = useParams();

  // Filter properties for this city
  const cityProperties = properties.filter(
    (property) => property.city.toLowerCase() === cityName.toLowerCase()
  );

  return (
    <div className="w-[75%] mx-auto py-16">
      <h2 className="text-2xl font-bold capitalize mb-6">
        Properties in {cityName}
      </h2>

      {cityProperties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cityProperties.map((property) => (
            <div
              key={property.id}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{property.title}</h3>
                <p className="text-gray-500">{property.price}</p>
                <Link
                  to={`/property/${property.id}`}
                  className="mt-3 inline-block text-blue-600 hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No properties available in {cityName} yet.</p>
      )}

      <div className="mt-10 text-center">
        <Link to="/cities" className="text-blue-600 hover:underline">
          ← Back to All Cities
        </Link>
      </div>
    </div>
  );
};

export default CityDetail;
