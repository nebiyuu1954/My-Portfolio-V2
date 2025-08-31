import { useContext, useState, useRef, useEffect } from "react";
import LanguageContext from "../../context/LanguageContext";
import "./Projects.css";

function Projects() {
  const { translations } = useContext(LanguageContext);
  const [selectedTech, setSelectedTech] = useState("react");
  const projectRefs = useRef([]);
  const [visibleProjects, setVisibleProjects] = useState([]);

  const handleFilter = (tech) => {
    setSelectedTech(tech);
    setVisibleProjects([]);
  };

  const projects = translations.projects?.projects || [];
  const filteredProjects = projects.filter(project => project.tech === selectedTech);

  const handleImageError = (e) => {
    console.error(`Failed to load image: ${e.target.src}`);
    e.target.src = "https://via.placeholder.com/400";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          } else {
            setVisibleProjects((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.index = index;
        observer.observe(ref);
      }
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredProjects]);

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <div className="projects__left">
          <h2 className="projects__title">{translations.projects?.title || "Projects"}</h2>
          <div className="projects__buttons">
            <button
              className={`projects__button ${selectedTech === "react" ? "projects__button--active" : ""}`}
              onClick={() => handleFilter("react")}
            >
              <span className="button-icon react-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="2" />
                  <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1-2.83 11.31m-11.31 2.82a10 10 0 0 1 2.83-11.31" />
                </svg>
              </span>
              {translations.projects?.buttons?.react || "React"}
            </button>
            <button
              className={`projects__button ${selectedTech === "django" ? "projects__button--active" : ""}`}
              onClick={() => handleFilter("django")}
            >
              <span className="button-icon django-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3h6v18H3zm7 0h3v12h-3zm5 0h3v8h3v3h-6z" />
                </svg>
              </span>
              {translations.projects?.buttons?.django || "Django"}
            </button>
          </div>
        </div>
        <div className="projects__right">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={index}
                className="projects__project"
                ref={(el) => (projectRefs.current[index] = el)}
              >
                <div className="projects__right-image">
                  <a href={project.projectLink || "#"} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={project.alt || "Project screenshot"}
                      className={`projects__image ${visibleProjects.includes(index) ? 'animate-image' : ''}`}
                      onError={handleImageError}
                    />
                  </a>
                  <h3 className={`projects__project-name ${visibleProjects.includes(index) ? 'animate-text' : ''}`}>
                    {project.name}
                  </h3>
                  <p className={`projects__description ${visibleProjects.includes(index) ? 'animate-text' : ''}`}>
                    {project.description}
                  </p>
                  <div className={`projects__buttons-container ${visibleProjects.includes(index) ? 'animate-text' : ''}`}>
                    <a href={project.codeLink || "#"} target="_blank" rel="noopener noreferrer" className="project-button code-button">
                      <span className="button-icon github-icon">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </span>
                      Code
                    </a>
                    <a href={project.docLink || "#"} target="_blank" rel="noopener noreferrer" className="project-button doc-button">
                      <span className="button-icon file-icon">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <line x1="10" y1="9" x2="8" y2="9" />
                        </svg>
                      </span>
                      Doc
                    </a>
                  </div>
                </div>
                <div className={`projects__right-details ${visibleProjects.includes(index) ? 'animate-text' : ''}`}>
                  <ul className="projects__details-list">
                    {project.details?.map((item, idx) => (
                      <li key={idx} className="projects__details-item">{item}</li>
                    )) || <li>No details available</li>}
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <p>No projects available</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;