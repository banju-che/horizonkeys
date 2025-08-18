export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Horizon Keys</h2>
          <p className="mt-3 text-gray-400">
            Find homes, rentals, and office spaces with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#about" className="hover:text-orange-400">About</a></li>
            <li><a href="#howitworks" className="hover:text-orange-400">How It Works</a></li>
            <li><a href="#whychooseus" className="hover:text-orange-400">Why Choose Us</a></li>
            <li><a href="#spaces" className="hover:text-orange-400">Explore Spaces</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white">Contact</h3>
          <ul className="mt-3 space-y-2">
            <li>Email: <a href="mailto:info@horizonkeys.com" className="hover:text-orange-400">info@horizonkeys.com</a></li>
            <li>Phone: <a href="tel:+254700000000" className="hover:text-orange-400">+254 700 000 000</a></li>
            <li>Location: Nairobi, Kenya</li>
          </ul>
        </div>

      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Horizon Keys. All rights reserved.
      </div>
    </footer>
  );
}
