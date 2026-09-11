import "./Work.css";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import { Link } from "react-router-dom";

function Work({ content }) {
  const images = [work1, work2, work3];

  const projectLinks = [
    "/project/project-one",
    "/project/project-two",
    "/project/project-three",
  ];

  return (
    <section className="work" id="work">

      <h2>{content.title}</h2>

      <div className="work-list">

        {content.projects.map((project, index) => (
          <Link
            to={projectLinks[index]}
            className="work-item"
            key={index}
          >

            <div className="work-image">
              <img
                src={images[index]}
                alt={project.name}
              />
            </div>

            <div className="work-info">

              <h3>{project.name}</h3>

              <p>{project.position}</p>

              <span>{project.year}</span>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}

export default Work;