import ProgramSection from "../programs/ProgramSection";
import ProgramsHeroSection from "../programs/ProgramsHeroSection";
import TransformationFrameworkSection from "../programs/TransformationFrameworkSection";


const Programs = () => {
  return (
    <>

      <ProgramsHeroSection />
      <TransformationFrameworkSection />

      <ProgramSection
        tag="Communication Excellence"
        title="Master The Art Of Communication"
        description="Build speaking, presentation and interpersonal communication skills."
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200"
        features={[
          "Public Speaking",
          "Presentation Skills",
          "Stage Confidence",
          "Professional Communication",
          "Interpersonal Skills",
        ]}
      />

      <ProgramSection
        reverse
        tag="Leadership Development"
        title="Build Future Leaders"
        description="Develop leadership qualities that enable learners to influence and lead."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200"
        features={[
          "Decision Making",
          "Team Building",
          "Problem Solving",
          "Critical Thinking",
          "Leadership Activities",
        ]}
      />

      <ProgramSection
        tag="Behavioral Transformation"
        title="Develop Growth Mindsets"
        description="Build confidence, discipline and professional attitudes."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
        features={[
          "Confidence Building",
          "Professional Etiquette",
          "Growth Mindset",
          "Self Development",
          "Personal Branding",
        ]}
      />

      <ProgramSection
        reverse
        tag="Emotional Intelligence"
        title="Strengthen Emotional Awareness"
        description="Develop empathy, resilience and emotional control."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
        features={[
          "Empathy",
          "Self Awareness",
          "Stress Management",
          "Relationship Building",
          "Emotional Control",
        ]}
      />

      <ProgramSection
        tag="Future Readiness"
        title="Prepare For Global Opportunities"
        description="Build skills required for future academic and career success."
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200"
        features={[
          "Career Readiness",
          "Interview Skills",
          "Networking",
          "Innovation",
          "Adaptability",
        ]}
      />

    </>
  );
};

export default Programs;