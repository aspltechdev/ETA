import "./TrustedCompanies.css";

const TrustedCompanies = () => {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Adobe",
    "Spotify",
    "Meta"
  ];

  return (
    <section className="trusted">
      <div className="container">

        <p className="trusted-title">
          Trusted By Learners Working At
        </p>

        <div className="trusted-grid">
          {companies.map((item,index)=>(
            <div key={index} className="company-card">
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustedCompanies;