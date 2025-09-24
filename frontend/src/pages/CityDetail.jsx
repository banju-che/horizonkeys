import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCity } from "../services/CitiesServices";

export default function CityDetailPage() {
  const { id } = useParams();
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const res = await getCity();
        setCity(res);
      } catch (err) {
        setError("Failed to load city details.");
      } finally {
        setLoading(false);
      }
    };
    fetchCity();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading city...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!city) return <p className="text-center">City not found.</p>;

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative h-80">
        <img
          src={city.img}
          alt={city.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {city.name}
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          About {city.name}
        </h2>
        <p className="text-gray-600 mb-6">
          This city currently has{" "}
          <span className="font-semibold text-gray-900">{city.count}</span>{" "}
          properties listed. You can explore the real estate market, find homes,
          apartments, and investment opportunities in {city.name}.
        </p>

        <Link
          to="/properties"
          className="inline-block rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow hover:bg-emerald-700 transition"
        >
          View Properties
        </Link>
      </section>
    </main>
  );
}
