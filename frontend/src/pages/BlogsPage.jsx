// src/pages/BlogsPage.jsx
import { useEffect, useState } from "react";
import { getBlogs } from "../services/BlogServices";
import Blogs from "../components/Blogs";

export default function BlogsPage() {

  const [ blogs, setBlogs ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (err) {
        setError("There was a problem getting blogs. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  
  if(loading) return <p>Loading Blogs ...</p>

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if(!blogs || blogs.length == 0) return <p>No blogs available.</p>
  
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-600 to-emerald-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Horizon Keys Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-lg text-emerald-100"
          >
            News, insights, and property tips from real estate experts across
            Kenya.
          </motion.p>
        </div>
      </section>

      {/* Blog previews */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              From Our Blog
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Insights, tips, and updates from Horizon Keys’ real estate
              experts.
            </p>
          </motion.div>

          {/* ✅ reuse Blogs component for the grid */}
          <Blogs />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-6"
        >
          <h2 className="text-2xl font-bold text-gray-900">
            Want updates straight to your inbox?
          </h2>
          <p className="mt-2 text-gray-600">
            Subscribe to receive the latest articles and property news.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-80 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="rounded-xl bg-emerald-600 px-6 py-2.5 text-white font-semibold shadow hover:bg-emerald-700 transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
