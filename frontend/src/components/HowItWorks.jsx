export default function HowItWorks() {
  const steps = [
    { step: "1", title: "Search", desc: "Browse listings for homes, rentals, and offices in your preferred location." },
    { step: "2", title: "Connect", desc: "Reach out to verified agents or owners directly through our platform." },
    { step: "3", title: "Move In", desc: "Secure your dream space with ease and confidence." },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
        How It Works
      </h2>
      <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div key={i} className="bg-white shadow-md rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-orange-500">{s.step}</div>
            <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
