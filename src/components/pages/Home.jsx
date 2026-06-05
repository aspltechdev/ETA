// import AboutSection from "./AboutSection";
// import CertificationPathway from "./CertificationPathway";
// import ConsultationCTA from "./ConsultationCTA";
// import ContactSection from "./ContactSection";
// import CoursesSection from "./CoursesSection";
// import FaqSection from "./FaqSection";
// import Footer from "./Footer";
// import ForeignLanguageAcademy from "./ForeignLanguageAcademy";
// import FounderStorySection from "./FounderStorySection";
// import GallerySection from "./GallerySection";
// import Header from "./Header";
// import HeroSection from "./HeroSection";
// import LanguagesSection from "./LanguagesSection";
// import LearningJourney from "./LearningJourney";
// import LearningMethodology from "./LearningMethodology";
// import MissionVisionSection from "./MissionVisionSection";
// import NewsletterSection from "./NewsletterSection";
// import PartnerInstitutionsSection from "./PartnerInstitutionsSection";
// import PricingSection from "./PricingSection";
// import SchoolSolutionsSection from "./SchoolSolutionsSection";
// import StatisticsSection from "./StatisticsSection";
// import SuccessStoriesSection from "./SuccessStoriesSection";
// import TransformationEcosystem from "./TransformationEcosystem";
// import TrustedCompanies from "./TrustedCompanies";
// import WhyChooseETA from "./WhyChooseETA";
// import WhyLearnSection from "./WhyLearnSection";


// const Home = () => {
//   return (
//     <>
//       <Header />

//       <main>

//         <section id="home">
//           <HeroSection />
//         </section>
//         <section id="about">
//           <AboutSection />
//         </section>
//         <section id="misson">
//           <MissionVisionSection />
//         </section>
//         <section>
//           <WhyChooseETA />
//         </section>
//         <section>
//           <TransformationEcosystem />
//         </section>

//         <section>
//           <ForeignLanguageAcademy />
//         </section>

//         <section>
//           <CertificationPathway />
//         </section>
//         <section>
//           <SchoolSolutionsSection />
//         </section>
//         <section><LearningMethodology /></section>
//         <section><FounderStorySection /></section>
//         <section><SuccessStoriesSection /></section>
//         <section><PartnerInstitutionsSection /></section>
//         <GallerySection />
//         <ConsultationCTA />
//         <section id="newsletter">
//           <NewsletterSection />
//         </section>
//         <section id="contact">
//           <ContactSection />
//         </section>


//       </main>

//       <Footer />
//     </>
//   );
// };

// export default Home;

import AboutSection from "./AboutSection";
import CertificationPathway from "./CertificationPathway";
import ConsultationCTA from "./ConsultationCTA";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import ForeignLanguageAcademy from "./ForeignLanguageAcademy";
import FounderStorySection from "./FounderStorySection";
import GallerySection from "./GallerySection";
import Header from "./Header";
import HeroSection from "./HeroSection";
import LanguagesHeroSection from "./LanguagesHeroSection";
import LearningMethodology from "./LearningMethodology";
import MissionVisionSection from "./MissionVisionSection";
import NewsletterSection from "./NewsletterSection";
import PartnerInstitutionsSection from "./PartnerInstitutionsSection";

import SchoolSolutionsSection from "./SchoolSolutionsSection";
import SchoolTransformation from "./SchoolTransformation";

import SuccessStoriesSection from "./SuccessStoriesSection";
import TransformationEcosystem from "./TransformationEcosystem";
import TransformationPillars from "./TransformationPillars";
import TrustedBy from "./TrustedCompanies";
import WhyChooseETA from "./WhyChooseETA";

const Home = () => {
  return (
    <>
      <Header />

      <main>

        <section id="home">
          <HeroSection />
        </section>
        {/* <section>
          <TrustedBy/>
        </section>
        <section>
          <TransformationPillars/>
        </section> */}

        <section id="about">
          <AboutSection />
        </section>

        <section id="mission">
          <MissionVisionSection />
        </section>

        <section id="why-eta">
          <WhyChooseETA />
        </section>

        <section id="programs">
          <SchoolTransformation/>
          <TransformationEcosystem />
        </section>

        <section id="languages">
          <ForeignLanguageAcademy />
          <LanguagesHeroSection/>
        </section>

        <section id="certification">
          <CertificationPathway />
        </section>

        <section id="schools">
          <SchoolSolutionsSection />
        </section>

        <section id="methodology">
          <LearningMethodology />
        </section>

        <section id="founder">
          <FounderStorySection />
        </section>

        <section id="success">
          <SuccessStoriesSection />
        </section>

        <section id="partners">
          <PartnerInstitutionsSection />
        </section>

        <section id="gallery">
          <GallerySection />
        </section>

        <section id="consultation">
          <ConsultationCTA />
        </section>

        <section id="newsletter">
          <NewsletterSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Home;