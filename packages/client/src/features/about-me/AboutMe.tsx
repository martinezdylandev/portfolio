import { useMediaQuery } from "../../utils/hooks/useMediaQuery/useMediaQuery";
import AboutMeCompact from "./components/about-me-compact/AboutMeCompact";
import AboutMeDesktop from "./components/about-me-desktop/AboutMeDesktop";

const AboutMe = () => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   return (
      <section id="about" className="about-me">
         {isDesktop ? <AboutMeDesktop /> : <AboutMeCompact />}
      </section>
   );
};

export default AboutMe;
