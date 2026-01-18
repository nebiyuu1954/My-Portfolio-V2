import { useEffect, useRef, useState, useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';
import './footer.css';

function Footer() {
  const { translations } = useContext(LanguageContext);
  const footerRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer className="footer-section" ref={footerRef}>
      <div className="footer-container">
        <div className="footer-content">
          <p className={`footer-text ${isInViewport ? 'animate-fadeIn' : ''}`}>
            {translations.footer?.copyright?.replace('{year}', currentYear) || `© ${currentYear} Nebiyu Esaiyas. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;