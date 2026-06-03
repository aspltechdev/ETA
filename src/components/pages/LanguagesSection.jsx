import "./LanguagesSection.css";

const LanguagesSection = () => {
  const languages = [
    {
      flag: "🇺🇸",
      name: "English",
      students: "12,000 Students",
    },
    {
      flag: "🇫🇷",
      name: "French",
      students: "8,500 Students",
    },
    {
      flag: "🇩🇪",
      name: "German",
      students: "7,200 Students",
    },
    {
      flag: "🇯🇵",
      name: "Japanese",
      students: "9,400 Students",
    },
  ];

  return (
    <section className="languages">
      <div className="container">
        <div className="section-title">
          <span>Explore Languages</span>
          <h2>Choose Your Language Journey</h2>
          <p>Master a new language with expert tutors.</p>
        </div>

        <div className="language-grid">
          {languages.map((item, index) => (
            <div className="language-card" key={index}>
              <div className="language-flag">
                {item.flag}
              </div>

              <h3>{item.name}</h3>

              <p>{item.students}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;