import "./FaqSection.css";

const FaqSection = () => {
  return (
    <section className="faq">

      <div className="container">

        <div className="section-title">
          <span>FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-wrapper">

          <div className="faq-item">
            <h4>How long does it take to become fluent?</h4>
            <p>
              Most learners achieve confidence
              within 6-12 months.
            </p>
          </div>

          <div className="faq-item">
            <h4>Are classes live?</h4>
            <p>
              Yes, all classes are conducted live.
            </p>
          </div>

          <div className="faq-item">
            <h4>Do I get certification?</h4>
            <p>
              Yes, after course completion.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default FaqSection;