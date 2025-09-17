import { useEffect, useState } from "react";
import { properties } from "../services/PropertyListings";
import { Search } from "lucide-react";

function Listings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const getListings = async () => {
      try {
        const data = await properties();
        setListings(data);
      } catch (error) {
        console.error("Error fetching properties from backend", error);
      } finally {
        setLoading(false);
      }
    };

    getListings();
  }, []);

  const filteredListings = listings.filter((property) => {
    // text search filter
    const matchesSearch = [property.title, property.description, property.location, property.property_type]
      .some((field) =>
        field?.toLowerCase().includes(query.toLowerCase())
      );

    // category filter
    const matchesCategory =
      category === "all" || property.property_type.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // search is live, so no need to do anything else here
  };

  if (loading) {
    return <p className="text-center mt-4">Loading listings .....</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-green-600 mb-6">
        📋 Available Properties
      </h1>

      {/* 🔎 Search Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-full shadow-md w-full max-w-lg mx-auto overflow-hidden mb-6"
      >
        <input
          type="text"
          placeholder="Search by city, neighborhood, or property..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-5 py-2 rounded-r-full hover:bg-green-700 transition"
        >
          <Search className="w-5 h-5" />
        </button>
      </form>

      {/* 📂 Category Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {["all", "rental", "sale", "commercial", "land"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium shadow 
              ${category === cat 
                ? "bg-green-600 text-white" 
                : "bg-white text-gray-700 border"}`
            }
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* 🏡 Listings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {filteredListings.length > 0 ? (
          filteredListings.map((property) => (
            <div
              key={property.id}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition bg-white"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h2 className="text-xl font-semibold">{property.title}</h2>
              <p className="text-gray-600">{property.description}</p>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-gray-600">{property.property_type}</p>
              <p className="text-gray-600">{property.status}</p>
              <p className="text-gray-600">{property.listed_date}</p>
              <p className="text-green-600 font-bold mt-2">
                Ksh {property.price}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {property.bedrooms} Bed • {property.bathrooms} Bath •{" "}
                {property.square_feet} sqft
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No properties match your search or filter.
          </p>
        )}
      </div>
    </div>
  );
}

export default Listings;
