import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Listings from "./pages/FeaturedListings"; 
import PropertyDetail from "./pages/Propertydetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import Agents from "./pages/Agents"
import AgentDetail from "./pages/AgentDetail";
import Test from "./pages/Test";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} /> 
          <Route path="/agent" element={<AgentDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/cities/:cityName" element={<CityDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/test" element={<Test />} />
        </Routes> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
