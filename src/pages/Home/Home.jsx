import Gallery from "../../components/Gallery/Gallery";
import HeroSection from "../../components/HeroSection/HeroSection";
import ReactTab from "../../components/Tab/Tab";
const HomePage = () => {
  return (
    <div className="mt-12">
      <HeroSection />
      <Gallery />
      <ReactTab />
    </div>
  );
};

export default HomePage;
