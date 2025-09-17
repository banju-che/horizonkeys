import React from "react";
import { Key, Handshake, Zap, BarChart3, ArrowRight } from "lucide-react";

const SellingOptions = () => {
  const options = [
    {
      id: 1,
      icon: <Key className="w-6 h-6 text-green-600" />,
      title: "List Your Property",
      desc: "Showcase your home to thousands of buyers in minutes.",
    },
    {
      id: 2,
      icon: <Handshake className="w-6 h-6 text-green-600" />,
      title: "Work with a Realtor",
      desc: "Connect with trusted agents to simplify your selling journey.",
    },
    {
      id: 3,
      icon: <Zap className="w-6 h-6 text-green-600" />,
      title: "Quick Cash Offer",
      desc: "Sell your property fast with competitive instant offers.",
    },
    {
      id: 4,
      icon: <BarChart3 className="w-6 h-6 text-green-600" />,
      title: "Market Insights",
      desc: "Understand your neighborhood trends before listing.",
    },
  ];

  return (
    <div className="w-[75%] mb-3 mx-auto py-16 px-4 bg-[#ffe5ec] rounded-xl">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Find the Right Selling Option for You
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Whether you’re selling your first home or managing multiple properties,
          we have solutions tailored to your needs.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Options */}
        <div className="space-y-4">
          {options.map((opt) => (
            <div
              key={opt.id}
              className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition"
            >
              <div className="bg-green-100 p-3 rounded-lg">{opt.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {opt.title}
                </h3>
                <p className="text-gray-600 text-sm">{opt.desc}</p>
              </div>
            </div>
          ))}

          {/* CTA Button */}
          <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
            Learn More <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right: Image */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
            alt="Selling Options"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SellingOptions;
