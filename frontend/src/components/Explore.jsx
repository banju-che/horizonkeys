import React from "react";
import { House } from "lucide-react";

const Explore = () => {
  const categories = [
    {
      id: 1,
      title: "Houses",
      count: "7 Properties",
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Apartments",
      count: "12 Properties",
      img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Offices",
      count: "3 Properties",
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Villas",
      count: "5 Properties",
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      title: "Studios",
      count: "8 Properties",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      title: "Castles",
      count: "9 Properties",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const renderCard = (cat) => (
    <div
      key={cat.id}
      className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 group"
    >
      <img
        src={cat.img}
        alt={cat.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
        <h3 className="text-lg font-semibold">{cat.title}</h3>
        <p className="text-sm">{cat.count}</p>
      </div>
    </div>
  );

  return (
    <div>
        <div className="w-[75%] mx-auto py-10 ">
        {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                <h4 className="text-2xl font-bold">Explore Apartment Types</h4>
                <p className="text-gray-600">Find your perfect home from our categories</p>
                </div>
                <div>
                    <button className="text-blue-600 hover:underlines">visit all Types</button>
                </div>
            </div>

            {/* Custom Rows */}
            <div className="space-y-6">
                {/* Row 1 → 40% + 30% + 30% */}
                <div className="flex gap-4">
                <div className="basis-[40%]">{renderCard(categories[0])}</div>
                <div className="basis-[30%]">{renderCard(categories[1])}</div>
                <div className="basis-[30%]">{renderCard(categories[2])}</div>
                </div>

                {/* Row 2 → 30% + 30% + 40% */}
                <div className="flex gap-4">
                <div className="basis-[30%]">{renderCard(categories[3])}</div>
                <div className="basis-[30%]">{renderCard(categories[4])}</div>
                <div className="basis-[40%]">{renderCard(categories[5])}</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Explore;
