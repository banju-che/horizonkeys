import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCities } from "../services/CitiesServices";

export default function CitiesPage() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await getCities();
        setCities(res);
      } catch (err) {
        setError("Failed to load cities.");
      } finally {
        setLoading(false);
      }
    };
    fetchCities();
  }, []);

  if (loading) return <p className="text-center py-10">Loading cities...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Explore Cities
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {cities.map((city) => (
          <Link
            key={city.id}
            to={`/cities/${city.id}`}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={city.img}
              alt={city.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">
                {city.name}
              </h2>
              <p className="text-gray-600">{city.count} properties available</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
