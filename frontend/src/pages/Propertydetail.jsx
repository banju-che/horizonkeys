import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProperty } from "../services/PropertiesService";
import { MapPin, Heart, Share2, Phone, User } from "lucide-react";

export default function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookmarked, setBookmarked] = useState(false)

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await getProperty(id);
        setProperty(res);
      } catch (err) {
        console.error("Failed to load property", err);
        setError("Unable to load property. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Loading property details…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <p className="bg-red-500 text-white p-3 rounded-md shadow font-semibold">
          {error}
        </p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Property not found.</p>
      </div>
    );
  }

  const {
    title,
    description,
    property_type,
    price,
    location,
    square_feet,
    status,
    agent,
    agent_name,
    image,
  } = property;

  const formattedPrice =
    typeof price === "number"
      ? `Ksh ${price.toLocaleString()}`
      : `Ksh ${price}`;

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* HERO */}
      <section className="relative">
        <div className="w-full h-[60vh] md:h-[50vh] lg:h-[60vh] bg-gray-200">
          <img
            src={image || "/placeholder-property.jpg"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* floating meta card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 -mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                {title}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{location}</span>
                </div>
                <div className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium">
                  {property_type}
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-semibold ${status === 'available' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                  {status}
                </div>
              </div>
              <p className="mt-4 text-2xl font-bold text-green-600">{formattedPrice}</p>
            </div>

            <div className="w-full md:w-56 flex-shrink-0 flex flex-col gap-3">
              <button
                onClick={() => setBookmarked((s) => !s)}
                className="flex items-center justify-center gap-2 rounded-xl border px-4 py-2 hover:shadow transition"
              >
                <Heart className={`w-5 h-5 ${bookmarked ? "text-red-500" : "text-gray-600"}`} />
                <span className="text-sm font-medium">{bookmarked ? "Saved" : "Save"}</span>
              </button>

              <a
                href={`/agents/${agent}`}
                className="inline-flex items-center gap-3 rounded-xl border px-4 py-3 hover:shadow transition text-sm"
              >
                <User className="w-6 h-6 text-gray-700" />
                <div className="text-left">
                  <div className="text-sm font-semibold text-gray-900">{agent_name || "Agent"}</div>
                  <div className="text-xs text-gray-500">View profile</div>
                </div>
              </a>

              <a
                href={`/contact-agent/${agent}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 text-white px-4 py-3 hover:bg-emerald-700 transition text-sm"
              >
                <Phone className="w-4 h-4" />
                Contact Agent
              </a>

              <button
                onClick={() => navigator.share ? navigator.share({
                  title,
                  text: `Check out this property: ${title}`,
                  url: window.location.href
                }) : navigator.clipboard.writeText(window.location.href)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 hover:shadow transition text-sm"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* DETAILS + SIDEBAR */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <article className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl font-semibold text-gray-900"
          >
            Property description
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-4 prose prose-neutral max-w-none text-gray-700"
          >
            {/* split into paragraphs if content has newlines */}
            {description?.split("\n").map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </motion.div>

          {/* quick facts */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-sm text-gray-500">Area</div>
              <div className="mt-1 font-semibold text-gray-900">{square_feet ?? "—"} sqft</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-sm text-gray-500">Type</div>
              <div className="mt-1 font-semibold text-gray-900">{property_type}</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-sm text-gray-500">Status</div>
              <div className="mt-1 font-semibold text-gray-900">{status}</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-sm text-gray-500">Listed by</div>
              <div className="mt-1 font-semibold text-gray-900">{agent_name}</div>
            </div>
          </div>

          {/* placeholder for map or related properties */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900">Location</h3>
            <div className="mt-3 rounded-lg overflow-hidden border">
              {/* If you have map coords, replace this with an embedded map */}
              <div className="w-full h-56 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center text-sm text-gray-500">
                Map placeholder — integrate Google Maps / Leaflet here
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="bg-white rounded-2xl shadow p-6 flex flex-col gap-6">
          <div>
            <h4 className="text-sm text-gray-500">Agent</h4>
            <div className="mt-3 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                <User className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">{agent_name}</div>
                <Link to={`/agents/${agent}`} className="text-xs text-emerald-600 hover:underline">View profile</Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm text-gray-500">Quick contact</h4>
            <div className="mt-3 flex flex-col gap-3">
              <a
                href={`/contact-agent/${agent}`}
                className="inline-flex items-center gap-2 justify-center rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm hover:bg-emerald-700 transition"
              >
                <Phone className="w-4 h-4" /> Message agent
              </a>
              <button
                onClick={() => {
                  // fallback action - open inquiry modal or similar
                  alert("Open inquiry form (implement modal or route)");
                }}
                className="rounded-xl border px-4 py-2 text-sm hover:shadow transition"
              >
                Request viewing
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <div>Posted: <span className="font-medium text-gray-900">{property.listed_date || "—"}</span></div>
            <div className="mt-2">Reference ID: <span className="font-mono text-xs text-gray-600">{property.id}</span></div>
          </div>
        </aside>
      </section>
    </main>
  );
}
