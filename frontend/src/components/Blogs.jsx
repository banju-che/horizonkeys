// src/components/Blogs.jsx
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, User } from "lucide-react";

const sampleBlogs = [
  {
    id: 1,
    title: "5 Tips for Buying Your First Home in Nairobi",
    excerpt:
      "Navigating the property market can be overwhelming. Here are practical steps to help you secure your dream home...",
    author: "Jane Wambui",
    date: "Aug 20, 2025",
    image:
      "https://images.unsplash.com/photo-1560185008-b033106af4a4?q=80&w=1200&auto=format&fit=crop",
    url: "/blog/first-home-nairobi",
  },
  {
    id: 2,
    title: "Why Mombasa is Becoming a Hotspot for Real Estate Investment",
    excerpt:
      "From beachfront properties to rental apartments, Mombasa is gaining traction with investors across Kenya...",
    author: "Peter Kamau",
    date: "Sep 2, 2025",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop",
    url: "/blog/mombasa-real-estate",
  },
  {
    id: 3,
    title: "How to Stage Your Property for a Quick Sale",
    excerpt:
      "First impressions matter. Learn how to make your property stand out to buyers with these proven staging tips...",
    author: "Grace Njeri",
    date: "Sep 5, 2025",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=1200&auto=format&fit=crop",
    url: "/blog/stage-property",
  },
];

export default function Blogs({ blogs = sampleBlogs }) {
  return (
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
            Insights, tips, and updates from Horizon Keys’ real estate experts.
          </p>
        </motion.div>

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
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition">
                  {blog.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={16} /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={16} /> {blog.author}
                  </span>
                </div>
                <a
                  href={blog.url}
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
