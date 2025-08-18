export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-transparent">
      <h1 className="text-xl font-bold">🏠 HorizonKeys</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <a href="/listings" className="hover:text-blue-600">Listings</a>
        <a href="/about" className="hover:text-blue-600">About</a>
        <a href="/contact" className="hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
}
