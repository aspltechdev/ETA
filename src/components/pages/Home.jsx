import AboutSection from "./AboutSection";
import CertificationPathway from "./CertificationPathway";
import ConsultationCTA from "./ConsultationCTA";
import ContactSection from "./ContactSection";
import CoursesSection from "./CoursesSection";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import ForeignLanguageAcademy from "./ForeignLanguageAcademy";
import FounderStorySection from "./FounderStorySection";
import GallerySection from "./GallerySection";
import Header from "./Header";
import HeroSection from "./HeroSection";
import LanguagesSection from "./LanguagesSection";
import LearningJourney from "./LearningJourney";
import LearningMethodology from "./LearningMethodology";
import MissionVisionSection from "./MissionVisionSection";
import NewsletterSection from "./NewsletterSection";
import PartnerInstitutionsSection from "./PartnerInstitutionsSection";
import PricingSection from "./PricingSection";
import SchoolSolutionsSection from "./SchoolSolutionsSection";
import StatisticsSection from "./StatisticsSection";
import SuccessStoriesSection from "./SuccessStoriesSection";
import TransformationEcosystem from "./TransformationEcosystem";
import TrustedCompanies from "./TrustedCompanies";
import WhyChooseETA from "./WhyChooseETA";
import WhyLearnSection from "./WhyLearnSection";


const Home = () => {
  return (
    <>
      <Header />

      <main>

        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
            <AboutSection/>
        </section>
        <section id="misson">
            <MissionVisionSection/>
        </section>
         <section>
        <WhyChooseETA/>
      </section>
<section>
    <TransformationEcosystem/>
</section>

<section>
    <ForeignLanguageAcademy/>
</section>

<section>
    <CertificationPathway/>
</section>
<section>
    <SchoolSolutionsSection/>
</section>
<section><LearningMethodology/></section>
<section><FounderStorySection/></section>
<section><SuccessStoriesSection/></section>
<section><PartnerInstitutionsSection/></section>
    <GallerySection/>
    <ConsultationCTA/>
        <section id="contact">
          <ContactSection />
        </section>

        <section id="newsletter">
          <NewsletterSection />
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Home;