// src/components/Explore.jsx
import React, { useEffect, useState } from "react";
import { getCategories } from "../services/CategoriesService";

const Explore = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data.slice(0, 6)); // Limit to first 6 for homepage
      } catch (err) {
        setError("Failed to load categories");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const renderCard = (cat) => (
    <div
      key={cat.id}
      className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 group"
    >
      <img
        src={cat.img}
        alt={cat.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
        <h3 className="text-lg font-semibold">{cat.title}</h3>
        <p className="text-sm">{cat.count} Properties</p>
      </div>
    </div>
  );

  if (loading) {
    return <p className="text-center py-10 text-gray-500">Loading categories...</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">{error}</p>;
  }

  return (
    <section className="w-[75%] mx-auto py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h4 className="text-2xl font-bold">Explore Property Types</h4>
          <p className="text-gray-600">Find your perfect home from our categories</p>
        </div>
        <div>
          <button className="text-emerald-600 font-semibold hover:underline">
            View All
          </button>
        </div>
      </div>

      {/* Custom Rows */}
      {categories.length >= 6 && (
        <div className="space-y-6">
          {/* Row 1 → 40% + 30% + 30% */}
          <div className="flex gap-4">
            <div className="basis-[40%]">{renderCard(categories[0])}</div>
            <div className="basis-[30%]">{renderCard(categories[1])}</div>
            <div className="basis-[30%]">{renderCard(categories[2])}</div>
          </div>

          {/* Row 2 → 30% + 30% + 40% */}
          <div className="flex gap-4">
            <div className="basis-[30%]">{renderCard(categories[3])}</div>
            <div className="basis-[30%]">{renderCard(categories[4])}</div>
            <div className="basis-[40%]">{renderCard(categories[5])}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Explore;
