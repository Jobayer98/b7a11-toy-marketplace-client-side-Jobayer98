import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "ToyLand | About";
  }, []);
  return <div>AboutPage</div>;
};

export default AboutPage;
