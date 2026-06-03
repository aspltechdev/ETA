import "./FAQSection.css";

const faqs = [
  {
    question:
      "Which languages are offered?",
    answer:
      "French, German, Spanish, Japanese, Korean and Chinese.",
  },

  {
    question:
      "Do you provide certification?",
    answer:
      "Yes, international certification pathways are available.",
  },

  {
    question:
      "Do you work with schools?",
    answer:
      "Yes, ETA provides school transformation programs.",
  },

  {
    question:
      "Can professionals join?",
    answer:
      "Absolutely. We offer programs for students and professionals.",
  },
];

const FAQSection = () => {
  return (
    <section className="faq-section">

      <div className="container">

        <span className="section-tag">
          Frequently Asked Questions
        </span>

        <h2>
          Common Questions
        </h2>

        <div className="faq-list">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-card"
            >

              <h3>
                {faq.question}
              </h3>

              <p>
                {faq.answer}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQSection;