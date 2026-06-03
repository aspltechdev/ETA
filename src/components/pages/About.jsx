import AboutCTASection from "../about/AboutCTASection";
import AboutHeroSection from "../about/AboutHeroSection";
import CoreValuesSection from "../about/CoreValuesSection";
import FounderMessageSection from "../about/FounderMessageSection";
import OurStorySection from "../about/OurStorySection";
import TransformationImpactSection from "../about/TransformationImpactSection";
import WhoWeAreSection from "../about/WhoWeAreSection";
import WhyChooseETASection from "../about/WhyChooseETASection";
import MissionVisionSection from "./MissionVisionSection";


const About = () => {
  return (
    <>
      <AboutHeroSection />
      <WhoWeAreSection />
      <OurStorySection />
      <FounderMessageSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <TransformationImpactSection />
      <WhyChooseETASection />
      <AboutCTASection />
    </>
  );
};

export default About;