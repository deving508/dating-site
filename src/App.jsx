import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import About from "./components/About";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home" className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <About />   
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;