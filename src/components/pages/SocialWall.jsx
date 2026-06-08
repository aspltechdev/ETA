import "./SocialWall.css";

import {
  ArrowUpRight,
  Heart,
  MessageCircle,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const posts = [
  {
    platform: "Instagram",

    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",

    title: "Leadership Workshop 2025",

    description:
      "Students developing leadership, communication and confidence skills.",

    likes: "1.2K",
  },

  {
    platform: "LinkedIn",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",

    title: "Institution Partnership",

    description:
      "ETA signs a strategic learning partnership for future-ready education.",

    likes: "850",
  },

  {
    platform: "Instagram",

    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200",

    title: "Language Academy",

    description:
      "Interactive foreign language learning sessions in progress.",

    likes: "920",
  },

  {
    platform: "LinkedIn",

    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200",

    title: "Student Success Story",

    description:
      "Recognizing outstanding growth and transformation.",

    likes: "700",
  },
];

const SocialWall = () => {
  return (
    <section className="social-wall">

      <div className="container">

        <div className="social-header">

          <span className="section-tag">
            Latest From ETA
          </span>

          <h2>
            Stories, Achievements &
            <span>
              Social Highlights
            </span>
          </h2>

          <p>
            Follow our latest workshops,
            language academy activities,
            partnerships and student success stories.
          </p>

        </div>

        <div className="social-layout">

          {/* Featured Post */}

          <div className="featured-post">

            <img
              src={posts[0].image}
              alt=""
            />

            <div className="featured-overlay"></div>

            <div className="featured-content">

              <div className="platform-badge">

                <FaInstagram />

                Instagram

              </div>

              <h3>
                {posts[0].title}
              </h3>

              <p>
                {posts[0].description}
              </p>

            </div>

          </div>

          {/* Feed */}

          <div className="social-feed">

            {posts.map(
              (post, index) => (
                <div
                  className="social-card"
                  key={index}
                >

                  <img
                    src={post.image}
                    alt=""
                  />

                  <div className="social-info">

                    <div className="social-top">

                      <span>

                        {post.platform ===
                        "Instagram" ? (
                          <FaInstagram />
                        ) : (
                          <FaLinkedinIn />
                        )}

                        {post.platform}

                      </span>

                      <ArrowUpRight
                        size={16}
                      />

                    </div>

                    <h4>
                      {post.title}
                    </h4>

                    <p>
                      {post.description}
                    </p>

                    <div className="social-meta">

                      <span>

                        <Heart
                          size={14}
                        />

                        {post.likes}

                      </span>

                      <span>

                        <MessageCircle
                          size={14}
                        />

                        45

                      </span>

                    </div>

                  </div>

                </div>
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default SocialWall;