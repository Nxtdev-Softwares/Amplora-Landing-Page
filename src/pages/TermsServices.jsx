import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import AmploraLogo from "../assets/amploraLogo.svg";
import Footer from "../components/TheFooter";

import {Helmet} from "react-helmet"

function TermsServices() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
  const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Amplora Terms of service | Bininstructions | NXTDEV
        </title>
        <meta
          name="description"
          content="Review the Terms of Service for Amplora. Learn the rules, rights, and responsibilities for using our platform and digital services."
        />

        <meta
          name="keywords"
          content="bininstructions, nxtdev, Amplora, Amplora Terms of service, terms of service, website terms, legal agreement, user agreement, service terms, SaaS terms and conditions, digital platform policy, website usage policy, terms of use"
        />
      </Helmet>
      
      <div className="non-nav-logo d-flex justify-content-center align-items-center">
        <a
          href="#/"
          className="d-flex gap-2 justify-content-center align-items-center"
          style={{ textDecoration: "none" }}
        >
          <img src={AmploraLogo} alt="" />
          <h1>Amplora</h1>
        </a>
      </div>

      <div className="privacy-policy-page">
        <div className="header d-flex flex-column">
          <h1>Amplora Terms of Service</h1>
          <h2>Clear, fair terms to ensure a secure and trusted experience.</h2>
        </div>
        <div className="main-container">
          <div className="information-container flex-column">
            <div className="d-flex gap-2 updated-date  align-items-center">
              <h5>Effective Date:</h5>
              <p>12/09/2025</p>
            </div>
            <h1 id="acceptTerms">1. Acceptance of Terms</h1>
            <h6>
              By accessing or using Amplora's services, you agree to comply with
              and be bound by these Terms of Service. If you do not agree, do
              not use our services.
            </h6>

            <h1 id="services">2. Services</h1>
            <h6>
              Amplora provides tools to automate social media content creation,
              scheduling, and posting across platforms. Services may evolve, and
              new features may be added.
            </h6>

            <h1 id="accRegister">3. Account Registration</h1>
            <ul>
              <li>You must provide accurate information.</li>
              <li>
                You are responsible for maintaining account confidentiality
              </li>
              <li>You are responsible for all activity under your account.</li>
            </ul>

            <h1 id="paymentPricing">4. Payment & Pricing</h1>
            <ul>
              <li>Early users may pay discounted rates.</li>
              <li>
                Standard pricing applies after early access or special
                promotions.
              </li>
              <li>All payments are non-refundable unless stated otherwise.</li>
            </ul>

            <h1 id="userConduct">5. User Conduct</h1>
            <h6>You agree not to: </h6>
            <ul>
              <li>Use Amplora for illegal or unauthorized purposes.</li>
              <li>Interfere with the service’s functionality or security.</li>
              <li>Post content that infringes others’ rights.</li>
            </ul>

            <h1 id="property">6. Intellectual Property </h1>
            <ul>
              <li>
                All Amplora content, branding, and software are owned by
                Amplora.
              </li>
              <li>
                Users retain ownership of their content but grant Amplora a
                license to post, schedule, and automate it as per service use.{" "}
              </li>
            </ul>

            <h1 id="limitation">7. Limitation of Liability</h1>
            <h6>Amplora is not liable for:</h6>
            <ul>
              <li>
                Direct, indirect, or incidental damages from using the service.
              </li>
              <li>Errors, interruptions, or loss of data.</li>
            </ul>

            <h1 id="termination">8. Termination</h1>
            <ul>
              <li>You may cancel your account anytime.</li>
              <li>
                Amplora may suspend or terminate accounts that violate these
                Terms.
              </li>
            </ul>

            <h1 id="changesTerms">9. Changes to Terms</h1>
            <h6>
              We may update these Terms. Users will be notified via email or
              website update. Continued use constitutes acceptance.
            </h6>

            <h1 id="governingLaw">10. Governing Law </h1>
            <h6>
              These Terms shall be governed by and construed in accordance with
              the laws of Sri Lanka, without regard to its conflict of law
              principles. Any disputes shall be subject to the exclusive
              jurisdiction of the courts of Colombo, Sri Lanka
            </h6>

            <h1 id="contactUs">11. Contact Us</h1>
            <h6>
              For questions or concerns, contact us at: info@bininstructions.com
              | nxtdev.info@gmail.com
            </h6>
          </div>
          <div className="links-container">
            <div className={`nav-container ${scrolled ? "scrolled" : ""}`}>
              <h5>This Policy is organized into the following sections:</h5>
              <div className="links">
                <a onClick={() => scrollToSection("acceptTerms")}>
                  <h6>1. Acceptance of Terms</h6>
                </a>
                <a onClick={() => scrollToSection("services")}>
                  <h6>2. Services</h6>
                </a>
                <a onClick={() => scrollToSection("accRegister")}>
                  <h6>3. Account Registration</h6>
                </a>
                <a onClick={() => scrollToSection("paymentPricing")}>
                  <h6>4. Payment & Pricing</h6>
                </a>
                <a onClick={() => scrollToSection("userConduct")}>
                  <h6>5. User Conduct</h6>
                </a>
                <a onClick={() => scrollToSection("property")}>
                  <h6>6. Intellectual Property</h6>
                </a>
                <a onClick={() => scrollToSection("limitation")}>
                  <h6>7. Limitation of Liability</h6>
                </a>
                <a onClick={() => scrollToSection("termination")}>
                  <h6>8. Termination</h6>
                </a>
                <a onClick={() => scrollToSection("changesTerms")}>
                  <h6>9. Changes to Terms</h6>
                </a>
                <a onClick={() => scrollToSection("governingLaw")}>
                  <h6>10. Governing Law</h6>
                </a>
                <a onClick={() => scrollToSection("contactUs")}>
                  <h6>11. Contact us</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TermsServices;