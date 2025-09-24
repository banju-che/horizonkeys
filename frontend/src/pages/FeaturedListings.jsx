import { useEffect, useState } from "react";
import { getProperties } from "../services/PropertiesService";
import { getCategories } from "../services/CategoriesService";
import { Search } from "lucide-react";

function Listings() {
  const [properties, setProperties] = useState([]);
  const [categories, setCategories] = useState([]);
  const [count, setCount] = useState(0);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const [searchInput, setSearchInput] = useState("");

  const [location, setLocation] = useState("");
  const [ordering, setOrdering] = useState("");
  const [category, setCategory] = useState("all");

  // 🔹 Fetch properties + categories
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      
        const [propsData, catsData] = await Promise.all([
          getProperties({
            page: currentPage,
            search:searchInput,
            location,
            ordering,
            category: category === "all" ? "" : category, // backend param
          }),
          getCategories(),
        ]);

        setProperties(propsData.results);
        setCategories(catsData);
        setCount(propsData.count);
        setNext(propsData.next);
        setPrevious(propsData.previous);
      
    } catch (error) {
      console.error("Failed to load data", error);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, [currentPage, searchInput, location, ordering, category]);


  if (loading) {
    return <p className="text-center py-10 text-gray-600">Loading listings…</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-12">
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-8">
        🏡 Available Properties
      </h1>

      {/* 🔎 Search Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setSearchInput(searchInput); 
          setCurrentPage(1);  
        }}
        className="flex items-center bg-white rounded-full shadow-md w-full max-w-xl mx-auto overflow-hidden mb-6"
      >
        <input
          type="text"
          placeholder="Search by city, neighborhood, or property..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-5 py-2 rounded-r-full hover:bg-green-700 transition"
        >
          <Search className="w-5 h-5" />
        </button>
      </form>

      {/* 📂 Dynamic Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setCategory("all")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition 
            ${category === "all"
              ? "bg-green-600 text-white shadow"
              : "bg-white text-gray-700 border hover:bg-gray-100"
            }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.title)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition 
              ${category === cat.title
                ? "bg-green-600 text-white shadow"
                : "bg-white text-gray-700 border hover:bg-gray-100"
              }`}
          >
            {cat.title} ({cat.count})
          </button>
        ))}
      </div>

      {/* 🏘️ Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {properties.length > 0 ? (
          properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {property.title}
                </h2>
                <p className="text-sm text-gray-600 flex-grow line-clamp-2">
                  {property.description}
                </p>

                <div className="mt-4 text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-medium">📍 Location:</span>{" "}
                    {property.location}
                  </p>
                  <p>
                    <span className="font-medium">🏷️ Category:</span>{" "}
                    {property.category}
                  </p>
                  <p>
                    <span className="font-medium">📅 Listed:</span>{" "}
                    {property.listed_date}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-green-600 font-bold text-lg">
                    Ksh {Number(property.price).toLocaleString()}
                  </p>
                  <span className="text-sm text-gray-500">
                    {property.bedrooms} bd • {property.bathrooms} ba •{" "}
                    {property.square_feet} sqft
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No properties match your search or filter.
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          disabled={!previous}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {Math.ceil(count / 15)}
        </span>

        <button
          disabled={!next}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Listings;
