import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <div className="h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/landing_page/landing_image_mobile.jpg')" }}
      />

      <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
        <div className="bg-black/50 rounded-xl p-8 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Find Your Space, Unlock Your Horizon
          </h1>
          <p className="mt-4 mb-8 text-lg md:text-xl text-gray-200">
            From homes to rentals to office spaces, Horizon Keys helps you discover
            the perfect place for living and working.
          </p>

          <Link 
            to="/listings" 
            className=" bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition">
              Explore Spaces
          </Link>

        </div> 
      </div>
    </div>

  );
}
