import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../services/BlogServices";
import { motion } from "framer-motion";
import { CalendarDays, User } from "lucide-react";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getBlog(id);
        setBlog(res);
      } catch (err) {
        setError("There was a problem getting the blog. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) return <p>Loading blog...</p>;

  if (error)
    return (
      <p className="bg-red-500 text-white p-3 rounded-md shadow font-semibold">
        {error}
      </p>
    );

  if (!blog) return <p>No blog found.</p>;

  return (
    <section className="relative py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {blog.title}
          </h1>
          <div className="mt-4 flex justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <CalendarDays size={16} />{" "}
              {new Date(blog.created_at).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <User size={16} /> {blog.author}
            </span>
          </div>
        </motion.div>

        {/* Image */}
        {blog.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="overflow-hidden rounded-2xl shadow-lg mb-10"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="prose prose-lg max-w-none text-gray-700"
        >
          {blog.content.split("\n").map((para, i) => (
            <p key={i} className="mb-6 leading-relaxed">
              {para}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
