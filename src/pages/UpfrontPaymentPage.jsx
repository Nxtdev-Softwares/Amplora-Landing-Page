import {useState, useEffect, useRef} from 'react'

// Impmorting icons and images
import AmploraLogo from "../assets/amploraLogo.svg";
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { NotebookPen } from 'lucide-react';
import { BadgeDollarSign } from 'lucide-react';
import { AlarmClock } from 'lucide-react';
import { Rocket } from 'lucide-react';
import { ArrowUp } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { CornerRightDown } from 'lucide-react';
import { Zap } from 'lucide-react';
import { CircleStar } from 'lucide-react';
import { Check } from 'lucide-react';
import arrow from "../assets/arrow.svg";

import {Col, Row} from "react-bootstrap"

import sideImageBadge from '../assets/sideImageBadge.png'
import sideImageRocket from "../assets/sideImageRocket.png";
import waitlistMockup from "../assets/upfrontDashboard.png";

import "../styles/WaitListFormPage.css";
import { useLocation, useParams } from 'react-router';
import NavBar from '../components/NavBar';
import TheFooter from '../components/TheFooter';

import MainHeading from "../components/MainHeadings";
import Subheadings from "../components/Subheadings";
import EachScrollReveal from "../components/EachScrollReveal";
import ScrollReveal from "../components/ScrollReveal";

import api from "../api/api";
import { LoadPayhereScript } from '../api/PaymentGateways';

import { Helmet } from "react-helmet";
import { useSearchParams } from 'react-router-dom';


function UpfrontPaymentPage() {
  // Scrolling to the top
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // Change themes
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // The input states
  const [name, setName] = useState("");
  const nameRef = useRef(null);
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const socialMediaLinkRef = useRef(null);
   const [privacyChecked, setPrivacyChecked] = useState(false);
  const [role, setRole] = useState("");
  const roleRef = useRef(null);

  const [errorMsg, setErrorMsg] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [fadeOut, setFadeOut] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);

  const [accepted, setAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
      if (errorMsg) {
        const fadeTimer = setTimeout(() => setFadeOut(true), 2500); // start fade before removal
        const hideTimer = setTimeout(() => {
          setErrorMsg(false);
          setFadeOut(false);
        }, 3000);
        return () => {
          clearTimeout(fadeTimer);
          clearTimeout(hideTimer);
        };
      }
    }, [errorMsg]);

  // making to scroll to sections
  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  // Validation
  if (!name.trim() || !email.trim() || !role.trim()) {
    setErrorMsg("Please fill in all required fields");
    return;
  }

  if (!privacyChecked) {
    setErrorMsg("You must agree to the Founder Terms");
    return;
  }

  setErrorMsg("");
  setIsSubmitting(true);

  const url = "https://api.sheety.co/13000793e3eae1c815a1c576886bea71/upfrontSignups/sheet1"; 

  const body = {
    sheet1: {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      role: role.trim(),
      socialMediaLink: socialMediaLink.trim(),
      privacyAccepted: privacyChecked ? "Yes" : "No",
    },
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Sheety response:", data);

      // ✅ Reset form
      setName("");
      setEmail("");
      setRole("");
      setSocialMediaLink("");
      setPrivacyChecked(false);

    window.location.href = "https://yourdomain.com/payment";

  } catch (err) {
    console.error("Submission failed:", err);
    setErrorMsg("Submission failed: " + err.message);
    setIsSubmitting(false);
  }
};
  return (
    <>
      <Helmet>
        <title>
          Pay the upfront | Be a founder of Amplora | Bininstructions | NXTDEV
        </title>
        <meta
          name="description"
          content="Sign up for early access to Amplora. Join our waiting list to get exclusive updates, 
          priority access, and special launch offers before anyone else."
        />

        <meta
          name="keywords"
          content="bininstructions, nxtdev, Amplora Waiting List, Amplora register, Amplora pre order, 
          Order Amplora, Join Amplora, join waiting list, early access, beta signup, pre launch signup, 
          exclusive access, product waiting list, SaaS beta program, notify me, early user registration"
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

      {/* <LoadPayhereScript /> */}
      <div id="main-sec" className="waitlist-form-page">
        <div className="d-flex justify-content-center align-items-center flex-column container-fluid form-hero">
          <div className="row hero-content d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-7">
              <h1>Unlock Full Access to Amplora - Today.</h1>
              <h2>
                Get full access to Amplora for $150/month - 70% off for the
                first 5 founding creators.
              </h2>
              <div className="d-flex justify-content-center justify-content-lg-start gap-4">
                <a>
                  <button onClick={() => scrollToSection("upfront-form-section")} className="cta-btn">Get Full access</button>
                </a>
                <a >
                  <button onClick={() => scrollToSection("why-upfront-section")} className="secondary-btn">Why Pay Upfront?</button>
                </a>
              </div>
            </div>
            <div className="d-flex col-12 col-lg-5">
              <img src={waitlistMockup} alt="" className="mockup" />
            </div>
          </div>
        </div>

        <div
          id="upfront-form-section"
          className="d-flex justify-content-center align-items-center flex-column form-section text-center"
        >
          <img src={AmploraLogo} alt="Amplora logo" />

          <h1>Join as a Founding Member</h1>
          <h5 className="d-flex justify-content-center">
            Get full access today and secure your founder-only pricing before
            it’s gone.
          </h5>

          <ScrollReveal className="fade-in-anime">
            <div className="form-container">
              <form onSubmit={handleSubmit}>
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-6">
                  <div className={`name-row ${name ? "active" : ""}`}>
                    <label className="sale-float-label">Full Name</label>

                    <input name="Source" type="hidden" value="Amplora Landing Page" />

                    <input
                      type="text"
                      id="name"
                      className="name-input"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      ref={nameRef}
                      onKeyDown={(e) => handleKeyDown(e, emailRef)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className={`email-row ${email ? "active" : ""}`}>
                    <label className="sale-float-label">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      className="email-input"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      ref={emailRef}
                      onKeyDown={(e) => handleKeyDown(e, roleRef)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className={`role-row ${role ? "active" : ""}`}>
                    <label className="sale-float-label">What you do</label>
                    <input
                      type="text"
                      id="jobTitle"
                      className="role-input"
                      value={role}
                      name="role"
                      onChange={(e) => setRole(e.target.value)}
                      ref={roleRef}
                      required
                    />
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div
                    className={`website-row ${socialMediaLink ? "active" : ""}`}
                  >
                    <label className="optional-label">(Optional)</label>
                    <label className="sale-float-label">
                      Website / Socials
                    </label>
                    <input
                      type="text"
                      id="website"
                      className="website-input"
                      name="socialMediaLink"
                      value={socialMediaLink}
                      onChange={(e) => setSocialMediaLink(e.target.value)}
                      ref={socialMediaLinkRef}
                    />
                  </div>
                </div>

                <div className="col-12 d-flex align-items-center">
                  <span className="d-flex gap-0 checkbx-container align-items-center">
                    <input
                      className="form-check-input checkbox"
                      type="checkbox"
                      id="defaultCheck1"
                       checked={privacyChecked} onChange={(e) => setPrivacyChecked(e.target.checked)}/>
                    <p className="mb-2">
                      I agree Amplora’s{" "}
                      <a href="#/FounderTerms" target="_blank" rel="noopener noreferrer">
                        Founder Terms
                      </a>
                    </p>
                  </span>
                </div>
              </div>

              <div className="row mb-3 mt-md-1 mt-2">
                <button
                  className="cta-btn"
                  type="submit" disabled={isSubmitting}
                >
                   {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <p className="btn-supports bottom">
                  Exclusive offer for the first 5 founders.
                </p>
              </div>

              <p className="bottom-text">
                Your info is 100% secure • No spam • Cancel anytime
              </p>
              </form>
            </div>
          </ScrollReveal>
        </div>

        <div
          id="why-upfront-section"
          className="d-flex justify-content-center align-items-center flex-column benefits-section text-center container-fluid"
        >
          {/* <img src={sideImageRocket} alt="" className='d-none d-xxl-flex side-images left'/> */}
          <MainHeading heading="Get the Full System - at 70% Off." />
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ maxWidth: "1190px" }}
          >
            <h6 className="default-sub-heading">
              This is your chance to get in before the masses. Amplora is for
              serious creators who want real data, repeatable growth, and an
              unfair advantage - early.
            </h6>
          </div>

          <div className="benefits-container d-flex justify-content-center align-items-center row mb-5 mb-md-4">
            <EachScrollReveal animationClass="move-steps-right" stagger={100}>
              <div
                className="col-12 col-md-3 col-lg-4 p-0"
                style={{ position: "relative" }}
              >
                <div className="benefit d-flex">
                  <div className="icon-container">
                    <BadgeDollarSign className="icon" />
                  </div>
                  <h2>Founder-Only Price</h2>
                  <h6>Lock in Amplora for $150/month - 70% off.</h6>
                </div>
              </div>
              <div
                className="col-12 col-md-4 col-lg-4 p-0"
                style={{ position: "relative" }}
              >
                <div className="benefit d-flex">
                  <div className="icon-container">
                    <Rocket className="icon" />
                  </div>
                  <h2>Claim Full Access</h2>
                  <h6>Unlock every feature before public launch.</h6>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4 p-0">
                <div className="benefit d-flex">
                  <div className="icon-container">
                    <CircleStar className="icon" />
                  </div>
                  <h2>Founder Badge & Priority</h2>
                  <h6>Get lifetime recognition and early updates.</h6>
                </div>
              </div>
            </EachScrollReveal>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center flex-column waitlist-cta-section text-center">
          <a >
            <ArrowUp className="top-move-btn"  onClick={() => scrollToSection("upfront-form-section")}/>
          </a>

          <div className="row d-flex justify-content-center align-items-start content">
            <div className="col-12 col-md-6 col-lg-6 pe-0 pe-md-5 ps-0">
              <Row>
                <h1>Don’t Wait for Launch. Be the Launch.</h1>
              </Row>
              <Row>
                <h2>
                  Secure your founder-tier access today and start mastering your
                  growth system - for 70% off.
                </h2>
              </Row>
              <div className="d-flex btn-container justify-content-start flex-column">
                <a style={{textDecoration: "none"}}>
                  <button  onClick={() => scrollToSection("upfront-form-section")} className="main-btn">💥 Get Full Access Now</button>
                </a>
                <p>( Lifetime discount for first 5 founders, don’t wait. )</p>
              </div>
            </div>

            <div className="trust-bullets-container col-12 col-md-6 col-lg-6 ps-0">
              <div className="trust-bullets">
                <Check className="check-mark" />
                <h4>Full access to all current features</h4>
              </div>
              <div className="trust-bullets">
                <Check className="check-mark" />
                <h4>Founder-only $150/month pricing (worth $500)</h4>
              </div>

              <div className="trust-bullets">
                <Check className="check-mark" />
                <h4>Guaranteed delivery date after payment</h4>
              </div>
              <div className="trust-bullets">
                <Check className="check-mark" />
                <h4>Lifetime recognition as a founding member</h4>
              </div>

              <a href="#/FounderTerms" id="policy">
                <p>View founderterms</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {errorMsg && (
        <div id="error-message">⚠️ {errorMsg}</div>
      )}

      {paymentFailed && (
        <div className="error-message">⚠️ Payment failed. Contact us to proceed.</div>
      )}
    </>
  );
}
export default UpfrontPaymentPage;
