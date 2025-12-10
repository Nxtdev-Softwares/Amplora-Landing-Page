import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from "react-router-dom";

// assets
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import AmploraLogo from '../assets/amploraLogo.svg'
import nxtdevLogo from '../assets/nxtdev.png'
import bininstructionsLogo from '../assets/logo.webp'

function NavBar() {

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                .filter(entry => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                
                if (visible.length > 0) {
                setActiveSection(visible[0].target.id);
                }
            },
            { threshold: 0.5 }
        );

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    const isMobile = useMediaQuery({ query: '(max-width: 1060px)' });

    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const [isNavToggleOpen, setIsNavToggleOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleToggle = () => {
    setIsMenuClicked(!isMenuClicked);

    if (isNavToggleOpen) {
        setIsClosing(true);

        setTimeout(() => {
        setIsNavToggleOpen(false);
        setIsClosing(false);
        }, 300);
    } else {
        setIsNavToggleOpen(true);
    }
};

    // stop scrolling
    useEffect (() => {
        if (isNavToggleOpen) {
            document.documentElement.classList.add("no-scroll");
            document.body.classList.add("no-scroll");
        } else {
            document.documentElement.classList.remove("no-scroll");
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.documentElement.classList.remove("no-scroll");
            document.body.classList.remove("no-scroll");
        };
    }, [isNavToggleOpen]);

    const handleNavOverclick = (e) => {
        const value = e.target.value;
        setIsNavToggleOpen(false);
    }

    const [theme, setTheme] = useState('dark');
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }

    // Change styles after scrolling
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;

        setScrolled(scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const location = useLocation();
    useEffect(() => {
    const navType = window.performance.getEntriesByType("navigation")[0]?.type;

    if (location.hash) {
      if (navType !== "reload") {
        const el = document.querySelector(location.hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }
  }, [location]);

    return (
      <>
        <div className={`d-flex nav-bar ${scrolled ? "nav-bar-scrolled" : ""}`}>
          <div className="nav-bar-container d-flex align-items-center">
            <div className="logo d-flex justify-content-center align-items-center">
              <a
                href="/"
                className="d-flex gap-2 justify-content-center align-items-center"
                style={{ textDecoration: "none" }}
              >
                <img src={AmploraLogo} alt="" />
                <h1>Amplora</h1>
              </a>
            </div>
            <div className={` ${isNavToggleOpen ? "" : ""} links`}>
              <a href="/#features">
                <h5>Features</h5>
                <div className="nav-underlines"></div>
              </a>
              <a href="/#pricing">
                <h5>Pricing</h5>
                <div className="nav-underlines"></div>
              </a>
              <a href="/#faq">
                <h5>FAQ</h5>
                <div className="nav-underlines"></div>
              </a>
              <a href="/#contact">
                <h5>Contact</h5>
                <div className="nav-underlines"></div>
              </a>
              <a href="">
                <h5>About</h5>
                <div className="nav-underlines"></div>
              </a>
            </div>
            <div className="cta justify-content-center align-items-center gap-2">
              <button onClick={toggleTheme} className="theme-btn">
                {theme === "light" ? (
                  <Sun className="theme-icon" />
                ) : (
                  <Moon className="theme-icon" />
                )}
              </button>
              <a href="/WaitListForm">
                <button className="main-cta">Join Waitlist</button>
              </a>
            </div>

            <div className="nav-toggle" onClick={handleToggle}>
              {isNavToggleOpen ? (
                <X
                  className="nav-toggle-button"
                  onClick={() => setIsClosing()}
                />
              ) : (
                <Menu className="nav-toggle-button" />
              )}
            </div>
          </div>

          <div className="companies-logos large">
            <img className="logo-1" src={nxtdevLogo} alt="" />
            <img className="logo-2" src={bininstructionsLogo} alt="" />
          </div>
        </div>

        {(isNavToggleOpen || isClosing) && (
          <>
            <div
              className="nav-section-overlay"
              onClick={handleNavOverclick}
            ></div>
            <div
              className={`nav-section ${
                isNavToggleOpen && !isClosing ? "open" : ""
              } ${isClosing ? "closing" : ""} flex-column`}
            >
              <div className="companies-logos small">
                <img className="logo-1" src={nxtdevLogo} alt="" />
                <img className="logo-2" src={bininstructionsLogo} alt="" />
              </div>
              <div className={` ${isNavToggleOpen ? "" : ""} row d-flex`}>
                <div className="">
                  <a href="/#features">
                    <h5>Features</h5>
                    <div className="nav-underlines"></div>
                  </a>
                </div>
                <div className="">
                  <a href="/#pricing">
                    <h5>Pricing</h5>
                    <div className="nav-underlines"></div>
                  </a>
                </div>
                <div className="">
                  <a href="/#faq">
                    <h5>FAQ</h5>
                    <div className="nav-underlines"></div>
                  </a>
                </div>
                <div className="">
                  <a href="/#contact">
                    <h5>Contact</h5>
                    <div className="nav-underlines"></div>
                  </a>
                </div>
                <div className="">
                  <a href="/">
                    <h5>About</h5>
                    <div className="nav-underlines"></div>
                  </a>
                </div>
              </div>
              <div className="cta d-flex justify-content-center align-items-center gap-2">
                <button onClick={toggleTheme} className="theme-btn">
                  {theme === "light" ? (
                    <Sun className="theme-icon" />
                  ) : (
                    <Moon className="theme-icon" />
                  )}
                </button>
                <a
                  href="/WaitListForm"
                  className="cta-link"
                >
                  <button className="main-cta">Join Waitlist</button>
                </a>
              </div>
            </div>
          </>
        )}
      </>
    );
}
export default NavBar;
