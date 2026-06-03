import "./CoursesSection.css";

const courses = [
  {
    title:"English Speaking",
    students:"15K Students",
    image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    title:"French A1-A2",
    students:"8K Students",
    image:"https://images.unsplash.com/photo-1517048676732-d65bc937f952"
  },
  {
    title:"German B1",
    students:"7K Students",
    image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
  }
];

const CoursesSection = () => {
  return (
    <section className="courses" id="courses">

      <div className="container">

        <div className="section-title">
          <span>Courses</span>
          <h2>Popular Language Programs</h2>
        </div>

        <div className="course-grid">
          {courses.map((course,index)=>(
            <div key={index} className="course-card">

              <img
                src={course.image}
                alt=""
              />

              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.students}</p>

                <button>
                  Enroll Now
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default CoursesSection;