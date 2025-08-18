export default function WhyChooseUs() {
  const points = [
    "Wide range of verified listings",
    "Simple and secure process",
    "Tailored for both living and working needs",
  ];

  return (
    <section className="py-20 bg-white text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Why Choose Horizon Keys?
      </h2>
      <ul className="mt-6 space-y-4 max-w-3xl mx-auto text-gray-600 text-lg">
        {points.map((p, i) => (
          <li key={i} className="flex items-center gap-3 justify-center">
            <span className="w-3 h-3 rounded-full bg-orange-500"></span> {p}
          </li>
        ))}
      </ul>
    </section>
  );
}
