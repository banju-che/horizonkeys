import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Explore from "../components/Explore";
import SellingOptionsSection from "../components/SellingOptionsSection"
import ExploreByCities from "../components/ExploreByCities"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import Agents from "../components/Agents"
import Blogs from "../components/Blogs"; 
import Stats from "../components/Stats"

export default function LandingPage() {
  return (
    <div className="font-sans">
        <Hero />   
        <ExploreByCities />                               
        <Featured />                   
        <Explore />                    
        <SellingOptionsSection />  
        <Stats /> 
        <Testimonials />  
        <Agents />  
        <Blogs />                    
        <Footer />    
    </div>
  );
}
