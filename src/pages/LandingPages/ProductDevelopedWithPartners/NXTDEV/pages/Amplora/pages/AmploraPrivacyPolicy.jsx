import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/TheFooter";

import "../styles/PoliciesTermsStyles.css"
import { Helmet } from "react-helmet";

function AmploraPrivacyPolicy() {
  // Scrolling to the top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Amplora Privacy Policy | Bininstructions | NXTDEV</title>
        <meta
          name="description"
          content="Learn how Amplora collects, uses, and protects your personal data. 
          Read our Privacy Policy to understand your rights and our security practices."
        />

        <meta
          name="keywords"
          content="bininstructions, nxtdev, Amplora, Amplora Privacy Policy,privacy policy, data protection, 
          GDPR compliance, online privacy, user data, data collection policy, website privacy, cookie policy, 
          data security, SaaS privacy policy"
        />
      </Helmet>
      <NavBar />
      <div className="privacy-policy-page">
        <div className="header d-flex flex-column">
          <h1>Amplora Privacy-Policy</h1>
          <h2>
            Your privacy is our priority. Here’s how we protect your data.
          </h2>
        </div>
        <div className="main-container">
          <div className="information-container flex-column">
            <div className="d-flex gap-2 updated-date  align-items-center">
              <h5>Effective Date:</h5>
              <p>12/09/2025</p>
            </div>
            <h1 id="prIntroduction">1. Introduction</h1>
            <h6>
              Amplora ("we", "our", "us") is committed to protecting your
              privacy. This Privacy Policy outlines how we collect, use, and
              safeguard your personal information when you access or use our
              services.{" "}
            </h6>

            <h1 id="prCollectedInfo">2. Information We Collect</h1>
            <h6>We collect the following types of information:</h6>
            <ul>
              <li>
                Personal Information: Name, email address, company/brand name,
                social media handles (if provided).
              </li>
              <li>
                Usage Data: Interaction data such as pages visited, features
                used, and timestamps.
              </li>
              <li>
                Cookies & Tracking Technologies: Information collected through
                cookies and similar technologies to enhance user experience.
              </li>
            </ul>

            <h1 id="prUsedInfo">3. Use of Information</h1>
            <h6>We use the collected information to:</h6>
            <ul>
              <li>Provide and improve our services. </li>
              <li>
                Communicate updates, newsletters, and marketing materials (with
                your consent).
              </li>
              <li>Analyze usage patterns to enhance functionality.</li>
              <li>Prevent fraud or unauthorized access.</li>
            </ul>

            <h1 id="prSharedData">4. Data Sharing</h1>
            <h6>
              We do not sell your personal data. We may share information:
            </h6>
            <ul>
              <li>
                With trusted service providers (e.g., email platforms, analytics
                tools) for service delivery.
              </li>
              <li>When required by law or to protect our rights.</li>
            </ul>

            <h1 id="prDataSecurity">5. Data Security</h1>
            <h6>
              We implement reasonable administrative, technical, and physical
              measures to protect your data. However, no method of transmission
              over the Internet is 100% secure, and we cannot guarantee absolute
              security.
            </h6>

            <h1 id="prRights">6. Your Rights</h1>
            <h6>Depending on your jurisdiction, you may have the right to:</h6>
            <ul>
              <li>Access your personal data.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Opt out of marketing communications.</li>
            </ul>
            <h6>
              To exercise these rights, contact us at:info@bininstructions.com |
              nxtdev.info@gmail.com{" "}
            </h6>

            <h1 id="prCookies">7. Cookies</h1>
            <h6>
              We use cookies to improve your experience, remember preferences,
              and analyze traffic. You can adjust cookie settings in your
              browser.
            </h6>

            <h1 id="prChanges">8. Changes to This Policy</h1>
            <h6>
              We may update this Privacy Policy from time to time. The updated
              version will be posted on this page with a revised "Effective
              Date."{" "}
            </h6>

            <h1 id="prContacts">9. Contact Us</h1>
            <h6>
              For questions or concerns about this policy, please reach out at:
              info@bininstructions.com | nxtdev.info@gmail.com{" "}
            </h6>
          </div>
          <div className="links-container">
            <div className={`nav-container ${scrolled ? "scrolled" : ""}`}>
              <h5>This Policy is organized into the following sections:</h5>
              <div className="links">
                <a href="#prIntroduction">
                  <h6>1. Introduction</h6>
                </a>
                <a href="#prCollectedInfo">
                  <h6>2. Information we collect</h6>
                </a>
                <a href="#prUsedInfo">
                  <h6>3. Use of information</h6>
                </a>
                <a href="#prSharedData">
                  <h6>4. Data sharing</h6>
                </a>
                <a href="#prDataSecurity">
                  <h6>5. Data security</h6>
                </a>
                <a href="#prRights">
                  <h6>6. Your rights</h6>
                </a>
                <a href="#prCookies">
                  <h6>7. Cookies</h6>
                </a>
                <a href="#prChanges">
                  <h6>8. Changes to this policy</h6>
                </a>
                <a href="#prContacts">
                  <h6>9. Contact us</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default AmploraPrivacyPolicy;