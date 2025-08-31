import { useContext, useState, useRef, useEffect } from "react";
import LanguageContext from "../../context/LanguageContext";
import "./Experience.css";

function Experience() {
  const { translations } = useContext(LanguageContext);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const experienceRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  const handleCompanyClick = (companyName) => {
    if (companyName === selectedCompany) {
      setSelectedCompany(null);
      setIsPanelOpen(false);
      setSelectedQuestionId(null);
    } else {
      setSelectedCompany(companyName);
      setIsPanelOpen(true);
      setSelectedQuestionId(null);
    }
  };

  const closePanel = () => {
    setSelectedCompany(null);
    setIsPanelOpen(false);
    setSelectedQuestionId(null);
  };

  const handleQuestionSelection = (questionId) => {
    setSelectedQuestionId(questionId === selectedQuestionId ? null : questionId);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section className="experience" id="experience" ref={experienceRef}>
      <div className="experience__container">
        <div
          className={`experience__timeline ${
            isPanelOpen ? "experience__timeline--shifted" : "experience__timeline--centered"
          }`}
        >
          <h2 className={`experience__title ${isInViewport ? "animate-fadeIn" : ""}`}>
            {translations.experience?.title || "Experience"}
          </h2>
          <div className="experience__line">
            {translations.experience?.companies?.map((company, index) => (
              <div
                key={index}
                className={`experience__point ${
                  selectedCompany === company.name ? "experience__point--active" : ""
                } ${isInViewport ? "animate-fadeIn" : ""}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => handleCompanyClick(company.name)}
              >
                <span className="experience__point-circle"></span>
                <span className="experience__point-name">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`experience__details ${
            isPanelOpen ? "experience__details--open animate-slideIn" : ""
          }`}
        >
          <button
            className="experience__close-panel"
            onClick={closePanel}
            aria-label="Close details panel"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--text-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {selectedCompany &&
            translations.experience?.companies
              ?.find((company) => company.name === selectedCompany)
              ?.jobs.map((job, jobIndex) => (
                <div key={jobIndex} className="experience__accordion">
                  <h3 className="experience__accordion-job-title">{job.title}</h3>
                  <p className="experience__accordion-duration">{job.duration}</p>
                  <div className="experience__accordion-items">
                    {job.qa.map((item, qaIndex) => (
                      <div key={qaIndex} className="experience__accordion-item">
                        <div
                          onClick={() => handleQuestionSelection(`${selectedCompany}-${jobIndex}-${qaIndex}`)}
                          className="experience__accordion-title"
                        >
                          <h4>{item.question}</h4>
                          <span>
                            {selectedQuestionId === `${selectedCompany}-${jobIndex}-${qaIndex}` ? "-" : "+"}
                          </span>
                        </div>
                        {selectedQuestionId === `${selectedCompany}-${jobIndex}-${qaIndex}` && (
                          <div className="experience__accordion-content animate-contentIn">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;