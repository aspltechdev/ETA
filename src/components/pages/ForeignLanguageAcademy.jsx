import "./ForeignLanguageAcademy.css";
import french from '../../assets/french.png';
import german from '../../assets/ger.png';
import japan from '../../assets/Japan.png';
import spain from '../../assets/spain.png';
import kor from '../../assets/kor.png';
import chin from '../../assets/chin.png';

const languages = [
  {
    title: "French",
    level: "A1 - C2",
    image:
      french,
  },

  {
    title: "German",
    level: "A1 - C2",
    image:
    german,
  },

  {
    title: "Spanish",
    level: "A1 - C2",
    image:
      spain,
  },

  {
    title: "Japanese",
    level: "JLPT N5 - N1",
    image:
     japan,
  },

  {
    title: "Korean",
    level: "TOPIK I - II",
    image:
     kor,
  },

  {
    title: "Chinese",
    level: "HSK 1 - 6",
    image:
      chin,
  },
];

const ForeignLanguageAcademy = () => {
  return (
    <section className="language-section">

      <div className="container">

        <div className="language-header">

          <span className="section-tag">
            Foreign Language Academy
          </span>

          <h2>
            Learn Global Languages
          </h2>

          <p>
            International certifications,
            study abroad opportunities and
            global career pathways.
          </p>

        </div>

        <div className="language-layout">

          <div className="languages-top">

            {languages.slice(0, 4).map((item, index) => (
              <div
                className="language-card"
                key={index}
              >
                <img
                  src={item.image}
                  alt=""
                />

                <div className="language-overlay">

                  <h4>
                    {item.title}
                  </h4>

                  <span>
                    {item.level}
                  </span>

                </div>

              </div>
            ))}

          </div>

          {/* <div className="world-center">

            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1600"
              alt=""
            />

          </div> */}

          <div className="languages-bottom">

            {languages.slice(4, 6).map((item, index) => (
              <div
                className="language-card"
                key={index}
              >
                <img
                  src={item.image}
                  alt=""
                />

                <div className="language-overlay">

                  <h4>
                    {item.title}
                  </h4>

                  <span>
                    {item.level}
                  </span>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ForeignLanguageAcademy;