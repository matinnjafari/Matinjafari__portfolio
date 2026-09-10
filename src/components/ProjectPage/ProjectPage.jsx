import "./ProjectPage.css";

function ProjectPage({ project }) {
  return (
    <main className="project-page">

      {/* HEADER */}

      <section className="project-header">

        <h1>{project.title}</h1>

        <div className="project-meta">
          <span>{project.role}</span>
          <span>{project.year}</span>
        </div>

        <p className="project-description">
          {project.description}
        </p>

      </section>


      {/* VIDEO */}

      <section className="project-video">

        <video
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
        />

      </section>


      {/* INTRODUCTION */}

      <section className="project-introduction">

        <div className="project-label">
          About the project
        </div>

        <div className="project-large-text">
          <p>{project.introduction}</p>
        </div>

      </section>


      {/* IMAGES */}

      <section className="project-images">

        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} ${index + 1}`}
          />
        ))}

      </section>


      {/* TEXT SECTIONS */}

      {project.sections.map((section, index) => (

        <section
          className="project-text-section"
          key={index}
        >

          <div className="project-label">
            {section.title}
          </div>

          <div className="project-section-text">
            <p>{section.text}</p>
          </div>

        </section>

      ))}


      {/* BEHANCE */}

      <section className="project-behance">

        <a
          href={project.behance}
          target="_blank"
          rel="noopener noreferrer"
        >
          View the full project on Behance ↗
        </a>

      </section>

    </main>
  );
}

export default ProjectPage;