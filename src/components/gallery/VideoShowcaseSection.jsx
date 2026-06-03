import "./VideoShowcaseSection.css";
import { Play } from "lucide-react";

const VideoShowcaseSection = () => {
  return (
    <section className="video-showcase">

      <div className="container">

        <div className="video-card">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800"
            alt=""
          />

          <div className="video-overlay">

            <button>
              <Play size={30} />
            </button>

            <h2>
              Experience ETA In Action
            </h2>

            <p>
              Discover transformational learning
              experiences through workshops,
              leadership programs and language
              training sessions.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default VideoShowcaseSection;