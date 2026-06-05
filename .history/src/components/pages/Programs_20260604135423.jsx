import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProgramSection from "../programs/ProgramSection";
import ProgramsHeroSection from "../programs/ProgramsHeroSection";
import TransformationFrameworkSection from "../programs/TransformationFrameworkSection";

const Programs = () => {
  const programs = [
    {
      tag: "Communication Excellence",
      title: "Master The Art Of Communication",
      description:
        "Build speaking, presentation and interpersonal communication skills.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
      features: [
        "Public Speaking",
        "Presentation Skills",
        "Stage Confidence",
        "Professional Communication",
        "Interpersonal Skills",
      ],
    },
    {
      tag: "Leadership Development",
      title: "Build Future Leaders",
      description:
        "Develop leadership qualities that enable learners to influence and lead.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200",
      reverse: true,
      features: [
        "Decision Making",
        "Team Building",
        "Problem Solving",
        "Critical Thinking",
        "Leadership Activities",
      ],
    },
    {
      tag: "Behavioral Transformation",
      title: "Develop Growth Mindsets",
      description:
        "Build confidence, discipline and professional attitudes.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
      features: [
        "Confidence Building",
        "Professional Etiquette",
        "Growth Mindset",
        "Self Development",
        "Personal Branding",
      ],
    },
    {
      tag: "Emotional Intelligence",
      title: "Strengthen Emotional Awareness",
      description:
        "Develop empathy, resilience and emotional control.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
      reverse: true,
      features: [
        "Empathy",
        "Self Awareness",
        "Stress Management",
        "Relationship Building",
        "Emotional Control",
      ],
    },
    {
      tag: "Future Readiness",
      title: "Prepare For Global Opportunities",
      description:
        "Build skills required for future academic and career success.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200",
      features: [
        "Career Readiness",
        "Interview Skills",
        "Networking",
        "Innovation",
        "Adaptability",
      ],
    },
  ];

  return (
    <>
      <ProgramsHeroSection />
      <TransformationFrameworkSection />

      {/* 🔥 SWIPER SLIDER */}
      <div className="program-slider">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
        >
          {programs.map((item, index) => (
            <SwiperSlide key={index}>
              <ProgramSection {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Programs;