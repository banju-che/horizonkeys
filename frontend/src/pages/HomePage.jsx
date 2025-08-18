import Hero from "../components/Hero";
import Discover from "../components/Discover";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs";

export default function LandingPage() {
  return (
    <div className="font-sans">
      <Hero />
      <Discover />
      <About />
      <HowItWorks />
      <WhyChooseUs />
    </div>
  );
}
