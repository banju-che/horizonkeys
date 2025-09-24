// src/components/Agents.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Star,
  MapPin,
  ShieldCheck,
  Phone,
  Mail,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

import { getAgents } from "../services/AgentsService";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
};

export default function Agents({
  title = "Top Rated Agents",
  subtitle = "Connect with trusted experts vetted by Horizon Keys.",
}) {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const data = await getAgents();
        setAgents(data.slice(0, 3)); // ✅ only first 3 agents
      } catch (err) {
        console.error("Failed to fetch agents:", err);
      }
    };
    fetchAgents();
  }, []);

  return (
    <section className="relative py-16 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(50%_40%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-100/50 to-transparent blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            {title}
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Filters + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
          <input
            type="text"
            placeholder="Search agent, area, or specialty..."
            className="w-full sm:w-96 rounded-xl border border-gray-200 bg-white px-4 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <Link
            to="/agents"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 shadow-sm hover:shadow focus:outline-none"
          >
            View all <ArrowRight size={18} />
          </Link>
        </div>

        {/* Agent cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {agents.map((a) => (
            <motion.article
              key={a.id}
              variants={item}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 transition hover:shadow-xl"
            >
              {/* Cover */}
              <div className="relative h-32 w-full overflow-hidden">
                <img
                  src={a.cover || a.img}
                  alt={`${a.name} cover`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {a.verified && (
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-600/95 px-2.5 py-1 text-xs font-medium text-white shadow">
                    <ShieldCheck size={14} /> Verified
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="px-5 pb-5 mt-8">
                <div className="flex items-end gap-4">
                  <img
                    src={a.avatar || a.img}
                    alt={a.name}
                    className="h-16 w-16 rounded-2xl border-4 border-white object-cover shadow-md"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-900">
                        {a.name}
                      </h3>
                      {a.rating && (
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star size={16} className="fill-current" />
                          <span className="text-sm font-semibold">
                            {a.rating ? (
                              <span>{Number(a.rating).toFixed(1)}</span>
                            ) : (
                              <span className="text-gray-400 text-sm">No rating</span>
                            )}
                          </span>
                          <span className="text-xs text-gray-500">
                            ({a.reviews})
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-600">
                      <MapPin size={16} /> {a.location}
                    </p>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {a.specialties?.map((s, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {a.phone && (
                    <a
                      href={`tel:${a.phone}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-50 focus:outline-none"
                    >
                      <Phone size={16} /> Call
                    </a>
                  )}
                  {a.email && (
                    <a
                      href={`mailto:${a.email}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-50 focus:outline-none"
                    >
                      <Mail size={16} /> Email
                    </a>
                  )}
                  {a.whatsapp && (
                    <a
                      href={`https://wa.me/${a.whatsapp?.replace(/[^\d]/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-100 focus:outline-none col-span-2"
                    >
                      <MessageSquare size={16} /> Chat on WhatsApp
                    </a>
                  )}
                </div>

                {/* Profile CTA */}
                <a
                  href={a.profileUrl || `/agents/${a.id}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  View full profile <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
