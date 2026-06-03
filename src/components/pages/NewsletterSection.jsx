import "./NewsletterSection.css";

const NewsletterSection = () => {
  return (
    <section className="newsletter">

      <div className="container">

        <div className="newsletter-card">

          <h2>
            Ready To Speak A New Language?
          </h2>

          <p>
            Join thousands of learners worldwide.
          </p>

          <div className="newsletter-form">
            <input
              placeholder="Enter Email"
            />
            <button>
              Start Learning
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default NewsletterSection;