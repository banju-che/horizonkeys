import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Mwangi",
    role: "Home Buyer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Horizon Keys made finding my dream home effortless. The search filters were spot on, and I closed the deal faster than I imagined.",
  },
  {
    name: "Sarah Wanjiru",
    role: "Property Investor",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "I discovered great investment properties with Horizon Keys. The interface is sleek and the experience is seamless.",
  },
  {
    name: "David Kamau",
    role: "Landlord",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    quote:
      "Listing my rental was quick and easy. I found reliable tenants within days thanks to Horizon Keys.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear from property buyers, investors, and landlords who trust Horizon
          Keys for their real estate needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
