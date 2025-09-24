// src/components/Blogs.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, User } from "lucide-react";

import { getBlogs } from "../services/BlogServices";

export default function Blogs({
  title = "From Our Blog",
  subtitle = "Insights, tips, and updates from Horizon Keys’ real estate experts.",
}) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data.slice(0, 3)); // ✅ Only 3 blogs
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="relative py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {title}
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Blog cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 hover:shadow-xl transition"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image || "https://via.placeholder.com/600x400"}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition">
                  {blog.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  {blog.content?.slice(0, 120)}...
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={16} />{" "}
                    {new Date(blog.created_at).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={16} /> {blog.author}
                  </span>
                </div>
                <a
                  href={`/blogs/${blog.id}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
