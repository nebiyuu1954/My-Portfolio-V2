import { useContext, useRef, useState, useEffect } from "react";
import LanguageContext from "../../context/LanguageContext";
import "./Hero.css";

function Hero() {
  const { translations } = useContext(LanguageContext);
  const heroRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero__container">
        <div className="hero__left">
          <h1 className={`hero__greeting ${isInViewport ? "animate-slideInLeft" : ""}`}>
            {translations.hero.greeting}
          </h1>
          <h2 className={`hero__name ${isInViewport ? "animate-slideInLeft animate-delay-200" : ""}`}>
            {translations.hero.name}
          </h2>
        </div>
        <div className="hero__right">
          <p className={`hero__text ${isInViewport ? "animate-slideInLeft animate-delay-400" : ""}`}>
            {translations.hero.text}
          </p>
          <a
            href="https://flowcv.com/resume/anje09f6ogep"
            target="_blank"
            rel="noopener noreferrer"
            className={`hero__button ${isInViewport ? "animate-slideInLeft animate-delay-500" : ""}`}
          >
            {translations.hero.button}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;