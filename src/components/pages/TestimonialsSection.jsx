import "./TestimonialsSection.css";
import {
  Star,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    name: "Priya S",
    role: "Student",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    text:
      "ETA transformed my confidence and communication skills. I can now present and speak confidently in front of large audiences.",
  },

  {
    name: "Rajesh Kumar",
    role: "Parent",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43?w=400&q=80",
    text:
      "The change in my child's confidence and leadership skills has been remarkable. ETA has created a positive impact on our family.",
  },

  {
    name: "Dr. Meena",
    role: "School Principal",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    text:
      "ETA's communication and leadership programs have significantly improved student participation and engagement.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">

      <div className="container">

        <div className="testimonials-header">

          <span className="section-tag">
            Testimonials
          </span>

          <h2>
            What People Say
            About ETA
          </h2>

          <p>
            Real experiences from students,
            parents and educational leaders.
          </p>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (
            <div
              className="testimonial-card"
              key={index}
            >

              <Quote
                size={32}
                className="quote-icon"
              />

              <p className="testimonial-text">
                {item.text}
              </p>

              <div className="stars">

                {[...Array(5)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="currentColor"
                    />
                  )
                )}

              </div>

              <div className="testimonial-user">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TestimonialsSection;