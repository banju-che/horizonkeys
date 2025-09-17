// src/pages/BlogsPage.jsx
import Blogs from "../components/Blogs";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-600 to-emerald-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Horizon Keys Blog
          </h1>
          <p className="mt-4 text-lg text-emerald-100">
            News, insights, and property tips from real estate experts across
            Kenya.
          </p>
        </div>
      </section>

      {/* Blog previews */}
      <Blogs />

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Want updates straight to your inbox?
        </h2>
        <p className="mt-2 text-gray-600">
          Subscribe to receive the latest articles and property news.
        </p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center px-6">
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
      </section>
    </main>
  );
}
