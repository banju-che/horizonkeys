// src/components/Stats.jsx
import { Trophy, Smile, Home, Users } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    id: 1,
    icon: <Trophy className="w-8 h-8 text-emerald-600" />,
    value: "25+",
    label: "Award Winnings",
  },
  {
    id: 2,
    icon: <Smile className="w-8 h-8 text-emerald-600" />,
    value: "1200+",
    label: "Happy Customers",
  },
  {
    id: 3,
    icon: <Home className="w-8 h-8 text-emerald-600" />,
    value: "350+",
    label: "Properties Ready",
  },
  {
    id: 4,
    icon: <Users className="w-8 h-8 text-emerald-600" />,
    value: "150+",
    label: "Expert Agents",
  },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
            <p className="mt-1 text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
