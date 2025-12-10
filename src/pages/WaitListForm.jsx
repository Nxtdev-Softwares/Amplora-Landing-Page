import {useState, useEffect, useRef} from 'react'

// Impmorting icons and images
import AmploraLogo from "../assets/amploraLogo.svg";
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { NotebookPen } from 'lucide-react';
import { AlarmClock } from 'lucide-react';
import { Rocket } from 'lucide-react';
import { ArrowUp } from 'lucide-react';
import { X } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { CircleCheck } from 'lucide-react';
import { Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CornerRightDown } from 'lucide-react';
import { Zap } from 'lucide-react';
import { CircleStar } from 'lucide-react';
import { Check } from 'lucide-react';
import arrow from "../assets/arrow.svg";

import {Col, Row} from "react-bootstrap"

import sideImageBadge from '../assets/sideImageBadge.png'
import sideImageRocket from "../assets/sideImageRocket.png";
import waitlistMockup from "../assets/waitlistDashboard.png";

import successCheck from "../assets/success-check.png";

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
import { h3 } from 'framer-motion/client';


function WaitListForm() {
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
  // State
  const [name, setName] = useState("");
  const nameRef = useRef(null);

  const [email, setEmail] = useState("");
  const emailRef = useRef(null);

  const [role, setRole] = useState("");
  const roleRef = useRef(null);

  const [socialLink, setSocialLink] = useState("");
  const socialLinkRef = useRef(null);

  const [privacyChecked, setPrivacyChecked] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const shareLink = "https://www.bininstructions.com/partners/products/amplora/waitinglist";
  const shareText =
    "I just joined Amplora’s Early Access - a new creator growth platform! Join me here:";

  // 🔗 Copy link to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      alert("✅ Link copied to clipboard!");
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  // 🐦 Share on Twitter (X)
  const handleTwitterShare = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${shareText} ${shareLink}`
    )}`;
    window.open(tweetUrl, "_blank");
  };

  // 💬 Share via WhatsApp
  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      `${shareText} ${shareLink}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

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

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedPlanActive, setSelectedPlanActive] = useState(false);

  const [plans, setPlans] = useState([]);
  const getProductPlans = async() => {
    const response = await api.get("/api/v1/partners/products/amplora/plans");
    if (response.status === 200){
      if (response.data.status == "ok"){
        setPlans(response.data.plans);
      }
    }
  }

  useEffect(() => {
    getProductPlans();
  }, []);

  // for joinining the waitlist
 const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name.trim() || !email.trim() || !role.trim()) {
      setErrorMsg("Please fill in all required fields");
      return;
    }

    if (!privacyChecked) {
      setErrorMsg("You must agree to the privacy policy");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    const url = "https://api.sheety.co/13000793e3eae1c815a1c576886bea71/waitlistSignups/sheet1";

    const body = {
      sheet1: {
        timestamp: new Date().toISOString(),
        name: name.trim(),
        email: email.trim(),
        role: role.trim(),
        socialLink: socialLink.trim(),
        privacyAccepted: privacyChecked ? "Yes" : "No",
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const json = await response.json();
      console.log("Sheety response:", json);

      setName("");
      setEmail("");
      setRole("");
      setSocialLink("");
      setPrivacyChecked(false);

      setShowSuccess(true);
      setFadeOut(true);

    } catch (err) {
      console.error("Submission failed:", err);
      alert("Submission failed: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Join the Waiting List | Get Early Access to Amplora | Bininstructions
          | NXTDEV
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
      <NavBar />
      <LoadPayhereScript />
      <div id="main-sec" className="waitlist-form-page">
        <div className="d-flex justify-content-center align-items-center flex-column container-fluid form-hero">
          <div className="row hero-content d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-7">
              <h1>Grow Smarter with Amplora - Before Launch.</h1>
              <h2>
                Join Amplora early - the platform for creators who want data-driven growth, not guesswork. Be part of building what comes next.
              </h2>
              <div className="d-flex justify-content-center justify-content-lg-start gap-4">
                <a href="#form-section">
                  <button className="cta-btn">Join Waitlist</button>
                </a>
                <a href="#why-reserve-section">
                  <button className="secondary-btn">Why Reserve?</button>
                </a>
              </div>
            </div>
            <div className="d-flex col-12 col-lg-5">
              <img src={waitlistMockup} alt="" className='mockup'/>
            </div>
          </div>
        </div>

        <div
          id="form-section"
          className="d-flex justify-content-center align-items-center flex-column form-section text-center"
        >
          <img src={AmploraLogo} alt="Amplora logo" />

          <h1>Join Amplora’s Early Waitlist</h1>
          <h5 className="d-flex">
            Secure your early access to Amplora and be part of the first group of creators testing, shaping, and growing with the platform before public launch.
          </h5>

          <ScrollReveal className="fade-in-anime">
            <form onSubmit={handleSubmit}>
            <div className="form-container">
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-6">
                  <div className={`name-row ${name ? "active" : ""}`}>
                    <label className="sale-float-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="name-input"
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      ref={emailRef}
                      onKeyDown={(e) => handleKeyDown(e, whatsappRef)}
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
                      onChange={(e) => setRole(e.target.value)}
                      ref={roleRef}
                      required
                    />
                  </div>
                </div>
                
                <div className="col-12 col-md-6">
                <div
                    className={`website-row ${socialLink ? "active" : ""}`}
                  >
                    <label className="optional-label">(Optional)</label>
                    <label className="sale-float-label">
                      Website / Socials
                    </label>
                    <input
                      type="text"
                      id="website"
                      className="website-input"
                      value={socialLink}
                      onChange={(e) => setSocialLink(e.target.value)}
                      ref={socialLinkRef}
                    />
                  </div>
                </div>
              
                <div className="col-12 d-flex align-items-center">
                  <span className="d-flex gap-0 checkbx-container align-items-center">
                    <input
                      className="form-check-input checkbox"
                      type="checkbox"
                      id="defaultCheck1"
                      checked={privacyChecked}
                      onChange={(e) => setPrivacyChecked(e.target.checked)}
                    />
                    <p className='mb-2'>
                      I agree Amplora’s{" "}
                      <a href="/AmploraPrivacyPolicy">
                        Privacy Policy
                      </a>{" "}
                      &{" "}
                      <a href="/TermsServices">
                        Terms of Service.
                      </a>
                    </p>
                  </span>
                </div>
                </div>

                <div className="row mb-3 mt-md-1 mt-2">
                      <button
                      type="submit" disabled={isSubmitting}
                      className="cta-btn"
                    >
                      {isSubmitting ? "Submitting..." : "Join Waitlist"}
                    </button>
                    <p className="btn-supports bottom">
                      (🆓 Free - early updates & insider access)
                    </p>
                </div>
              
              <p className="bottom-text">
                Your info is 100% secure • No spam • Cancel anytime
              </p>
            </div>
               </form>
          </ScrollReveal>
        </div>

        <div
          id="why-reserve-section"
          className="d-flex justify-content-center align-items-center flex-column benefits-section text-center container-fluid"
        >
          {/* <img src={sideImageRocket} alt="" className='d-none d-xxl-flex side-images left'/> */}
          <MainHeading heading="Be First. Shape the Future of Creator Growth." />
          <div className='d-flex justify-content-center align-items-center' style={{maxWidth: "1190px"}}>
            <h6 className="default-sub-heading">
              Amplora isn’t just another analytics tool - it’s a growth partner. Joining the waitlist means you don’t just watch Amplora grow… you help build it.
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
                    <Zap className="icon" />
                  </div>
                  <h2>Early Access</h2>
                  <h6>
                    Be among the first to experience Amplora before public release.
                  </h6>
                </div>
              </div>
              <div
                className="col-12 col-md-4 col-lg-4 p-0"
                style={{ position: "relative" }}
              >
                <div className="benefit d-flex">
                  <div className="icon-container">
                    <CircleStar className="icon" />
                  </div>
                  <h2>Insider Community</h2>
                  <h6>
                    Get access to a private circle of early creators sharing insights and results.
                  </h6>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4 p-0">
                <div className="benefit d-flex">
                  <div className="icon-container">
                    <Rocket className="icon" />
                  </div>
                  <h2>Shape the Product</h2>
                  <h6>
                    Your feedback directly helps us refine the platform for creators like you.
                  </h6>
                </div>
              </div>
            </EachScrollReveal>
          </div>
          <div className="limited-offer">
            <h5>
              First 05 Who Pay Upfront <CornerRightDown />
            </h5>
            <p>
              Lock in the Founders deal{" "}
              <span className="special">All features for $150/month</span>, get{" early access to "}
              <span className="special">new features</span>, and earn an 
              <span className="special"> exclusive badge.</span>
            </p>
            <a href="/UpfrontPaymentPage" className='d-flex mb-2' style={{textDecoration: "none", width: "100px"}}>
              <button className="default-btn">Claim Founders Access</button>
            </a>
          </div>
          {/* <div className='scary-note flex-column'>
                    <div className='note'><h2><span style={{fontWeight: "700"}}>First 5 to Pay Upfront: </span><br/><span style={{fontWeight: "400", color: "var(--light-paragraph-color)"}}> Lock in a 40% lifetime discount when you join Amplora today. </span></h2></div>
                </div> */}
          {/* <img src={sideImageBadge} alt="" className='d-none d-xxl-flex side-images right'/> */}
        </div>

        <div className="d-flex justify-content-center align-items-center flex-column waitlist-cta-section text-center">
          <a href="#main-sec">
            <ArrowUp className="top-move-btn" />
          </a>

          <div className="row d-flex justify-content-center align-items-start content">
            <div className="col-12 col-md-6 col-lg-6 pe-0 pe-md-5 ps-0">
              <Row>
                <h1>
                  Ready to Grow with Us?
                </h1>
              </Row>
              <Row>
              <h2>
                Join the waitlist now, and be part of the first group of creators shaping the next-gen growth platform.
              </h2>
              </Row>
              <div className="d-flex btn-container justify-content-start flex-column">
                <a href="#form-section">
                  <button className="main-btn">Join Early Access</button>
                </a>
                <p>( 100% Free - get early updates, insider access & bonuses )</p>
              </div>
            </div>

            <div className="trust-bullets-container col-12 col-md-6 col-lg-6 ps-0">
              <div className="trust-bullets">
                <Check className="check-mark" />
                <h4>Early access to Amplora before launch</h4>
              </div>
              <div className="trust-bullets">
                <Check className="check-mark" />
                <h4>Exclusive creator growth checklist</h4>
              </div>

              <div className="trust-bullets">
                <Check className="check-mark" />
                <h4>Private insider community access</h4>
              </div>
              <div className="trust-bullets">
                <Check className="check-mark" />
                <h4>Direct influence on product development</h4>
              </div>

              <a href="/AmploraPrivacyPolicy" id='policy'>
                <p>View Privacy Policy</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <TheFooter />

      {showSuccess && (
        <>
        <div id={`success-modal-overlay`} onClick={() => setShowSuccess(false)}></div>
        <div id="success-modal" className="d-flex justify-content-center align-items-center flex-column">
          <X className='close' onClick={() => setShowSuccess(false)}/>
          <img src={successCheck} alt="" className='check-icon'/>
          <div className="header">
            <h2>You’re on the Amplora Early Access list 🎉</h2>
            <h4>Check your inbox for our welcome email from the <span className='bolded'>Amplora Team.</span></h4>
            <h4>If it’s in Promotions/Spam, drag it to <span className='bolded'>Primary. </span> </h4>
            <h4>You’ll now get early-access updates & creator growth tips.</h4>
          </div>

          <div className="line"></div>
          <div className="share-sec">
            <h3>Want to help your friends grow faster too?</h3>
            <h5>Share this early-access link so your friends can join Amplora before the public launch:</h5>

            <a href="https://www.bininstructions.com/partners/products/amplora/waitinglist" target='_blank' className='waitlist-page-link' rel="noopener noreferrer">
              Amplora Waitlist Link
            </a>
          </div>
          <div className="btn-row mt-3 mt-md-4">
            <button onClick={handleCopy}>🔗 Copy Link</button>
            <button onClick={handleTwitterShare}>Share <Twitter className='social x'/></button>
            <button onClick={handleWhatsAppShare}>Share <FaWhatsapp  className='social insta'/></button>
          </div>
        </div>
        </>
      )}

      {errorMsg && (
        <div id="error-message">
          ⚠️ Please fill in all required fields.
        </div>
      )}

    </>
  );
}
export default WaitListForm;
