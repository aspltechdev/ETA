const languages = [
  {
    flag: "🇫🇷",
    name: "French",
    level: "A1 - C2",
  },

  {
    flag: "🇩🇪",
    name: "German",
    level: "A1 - C2",
  },

  {
    flag: "🇪🇸",
    name: "Spanish",
    level: "A1 - C2",
  },

  {
    flag: "🇯🇵",
    name: "Japanese",
    level: "N5 - N1",
  },

  {
    flag: "🇰🇷",
    name: "Korean",
    level: "TOPIK",
  },

  {
    flag: "🇨🇳",
    name: "Chinese",
    level: "HSK",
  },
];

const LanguagesOfferedSection = () => {
  return (
    <section className="languages-offered">

      <div className="container">

        <span className="section-tag">
          Languages Offered
        </span>

        <h2>
          Choose Your Global Language
        </h2>

        <div className="languages-grid">

          {languages.map((item, index) => (
            <div
              key={index}
              className="language-card"
            >

              <div className="flag">
                {item.flag}
              </div>

              <h3>
                {item.name}
              </h3>

              <span>
                {item.level}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default LanguagesOfferedSection;