import "./PricingSection.css";

const PricingSection = () => {
  return (
    <section className="pricing">

      <div className="container">

        <div className="section-title">
          <h2>Choose Your Plan</h2>
        </div>

        <div className="pricing-grid">

          <div className="price-card">
            <h3>Starter</h3>
            <h1>$29</h1>

            <ul>
              <li>Group Classes</li>
              <li>Assignments</li>
              <li>Community Access</li>
            </ul>

            <button>Choose Plan</button>
          </div>

          <div className="price-card featured">
            <h3>Professional</h3>
            <h1>$59</h1>

            <ul>
              <li>Live Classes</li>
              <li>Native Tutors</li>
              <li>Certificate</li>
            </ul>

            <button>Choose Plan</button>
          </div>

          <div className="price-card">
            <h3>Premium</h3>
            <h1>$99</h1>

            <ul>
              <li>1:1 Mentorship</li>
              <li>AI Speaking Labs</li>
              <li>Priority Support</li>
            </ul>

            <button>Choose Plan</button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default PricingSection;