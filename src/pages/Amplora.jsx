import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";

import {Row, Col} from "react-bootstrap";

import api from "../api/api";

// Importing components
import NavBar from "../components/NavBar";
import MainHeading from "../components/MainHeadings";
import Subheadings from "../components/Subheadings";
import BenefitCard from "../components/BenefitCard";
import PricingCards from "../components/PricingCards";
import EarlyJoinBenefits from "../components/EarlyJoinBenefits";
import TheFooter from "../components/TheFooter";
import EachScrollReveal from "../components/EachScrollReveal";
import ScrollReveal from "../components/ScrollReveal";

import '../styles/HomeStyles.css'
import '../styles/WaitListFormPage.css'
import '../styles/NavBar.css'

// Importing images
import heroProfileMockup from "../assets/heroProfileMockup.svg";

import contentPlanning from "../assets/contentplanning.json"
import drawing from "../assets/knowwhatworks.json"
import rocketPostAnime from "../assets/confidenceposting.json"
import trackEngagement from "../assets/growWithoutBurntout.json"
import withGraph from "../assets/withGraph.svg"
import withoutGraph from "../assets/withoutGraph.svg"
import limitedBadge from "../assets/limited-pricing-badge.png"
import { Lock, Rocket, Trophy, Kanban} from 'lucide-react';
import { X } from 'lucide-react';
import xMark from "../assets/xMark.json"
import tickMark from "../assets/tickMark.json"
import { Check, Equal, Plus } from 'lucide-react';
import { FaRobot, FaChartBar, FaEnvelope, FaClock, FaBolt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaPinterest, FaTiktok } from "react-icons/fa";
import ctaVisual from "../assets/ctaVisualAnime.json"
import instagramAnime from "../assets/instagram.json"
import facebookAnime from "../assets/facebook.json"
import twitterAnime from "../assets/twitter.json"
import { Mail } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import instaLogo from "../assets/instagram.png"
import facebookLogo from "../assets/facebook.png"
import twitterLogo from "../assets/twitterLogo.svg"
import threadsLogo from "../assets/threads.png"
import { Helmet } from "react-helmet";

function Amplora() {

  const navigate = useNavigate();

    //header
    const heroMainText = (
      <>
      <span>
        Build content that actually grows your <span style={{color: "#00FFFF"}}>audience.</span>
      </span>
      </>
    );
    const [displayedText, setDisplayedText] = useState(
      <>
      <span>
        Build content that actually grows your <span style={{color: "#00FFFF"}}>audience.</span>
      </span>
      </>);
    useEffect(() => {
        let index = 0;

        const type = () => {
        if (index <= heroMainText.length) {
            setDisplayedText(heroMainText.slice(0, index));
            index++;
            setTimeout(type, 10);
        }
        };

        type();
    }, []);

    const mobileHeroMainText = "Build content that grows your audience";
    const highlightAudience = mobileHeroMainText.split("audience");
    const [mobileDisplayedText, setMobileDisplayedText] = useState("");
    useEffect(() => {
        let index = 0;

        const type = () => {
        if (index <= mobileHeroMainText.length) {
            setMobileDisplayedText(mobileHeroMainText.slice(0, index));
            index++;
            setTimeout(type, 10);
        }
        };

        type();
    }, []);

    const mobileSocialIcons = [
    { icon: <FaFacebook />, color: "#1877F2" },
    { icon: <FaTwitter />, color: "#1DA1F2" },
    { icon: <FaLinkedin />, color: "#0A66C2" },
    { icon: <FaYoutube />, color: "#FF0000" },
    { icon: <FaPinterest />, color: "#E60023" },
    { icon: <FaInstagram />, color: "#E1306C" },
    ];


    // with vs without sec in mobile
    const [activeMethodTab, setActiveMethodTab] = useState("with");

    // pricing cards animation
    useEffect(() => {
    const pricingCards = document.querySelectorAll(".pricing-card");

    pricingCards.forEach((card, index) => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setTimeout(() => {
                card.classList.add("visible");
            }, index * 200);
            }
        },
        { threshold: 0.2 }
        );

        observer.observe(card);
    });
    }, []);

    // for the faq's
    const faqData = [
    {
        question: "What platforms does Amplora support?",
        answer:
        "Amplora V1 gives insights across the platforms you use to help you plan content that actually performs.",
    },
    {
        question: "What exactly is included in early access?",
        answer:
        "Early access gives you full use of Amplora V1: weekly content insights, analytics for each post, growth suggestions, and access to the content vault.",
    },
    {
        question: "Will future features cost extra?",
        answer:
        "We’re prioritizing early access feedback. Founder users will always get the best value when new features like automation are added.",
    },
    {
        question: "Who is Amplora for?",
        answer:
        "Creators, coaches, and small businesses who want smarter posting, better insights, and faster audience growth without guesswork.",
    },
    {
        question: "How do I get the lifetime discount?",
        answer:
        "Join via the form and pay upfront - only the first 5 get the lifetime $150/mo rate. (worth $500/mo)",
    },
    ];

    const [faqActiveIndex, setFaqActiveIndex] = useState(0);
    const faqToggle = (index) => {
        setFaqActiveIndex(faqActiveIndex === index ? -1 : index);
    }

    // Use Case Dropdown
    const [useCaseDropdown, setUseCaseDropdown] = useState(false);
    const [useCase, setUseCase] = useState("Select Use Case");
    const useCaseRef = useRef(null);
    const useCaseDropdownRef = useRef(null);
    const contactFormRef = useRef(null);

    useEffect(() => {
    const closeDropdown = () => {
        setUseCaseDropdown(false);
    };

    if (useCaseDropdown) {
        window.addEventListener("scroll", closeDropdown, { passive: true });
        window.addEventListener("resize", closeDropdown);
    }

    return () => {
        window.removeEventListener("scroll", closeDropdown);
        window.removeEventListener("resize", closeDropdown);
    };
    }, [useCaseDropdown]);

    useEffect(() => {
        function handleClick(e) {
        if (!useCaseDropdown) return;

        if (contactFormRef.current?.contains(e.target) && !useCaseDropdownRef.current?.contains(e.target)) {
            setUseCaseDropdown(false);
        }
        }

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [useCaseDropdown]);

    // Contact form states
    const [status, setStatus] = useState("")

    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      formData.append("access_key", "b2174447-ce3c-48fc-b917-d78377de438f");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
        const data = await response.json();
        if (data.success) {
          setStatus("Thanks! we'll be in touch soon!");
          form.reset();
          setUseCase("Select Use Case");
        } else {
          setStatus("Something went wrong. Please try again.");
          console.error("Web3Forms error:", data);
        }
      } catch (err) {
        console.error(err);
        alert("Submission failed: " + err.message);
      }
      setTimeout(() => {
    setStatus("");
  }, 3000);
    };

    return (
      <>
        <Helmet>
          <title>
            Amplora - Powerful AI Social Media Automation Tool | Bininstructions
            |NXTDEV
          </title>
          <meta
            name="description"
            content="Automate marketing with the help of AI. Schedule Posts, Advanced analytics, 
          automatic upload with AI. The most creative social media marketing automation software"
          />

          <meta
            name="keywords"
            content="bininstructions, nxtdev, Amplora, Marketing Automation Tool, Automate Marketing, Automate Content Creation, Content Creator Studio,
          Marketing Agency, Marketing automation platform, Amplora Marketing Automation Tool"
          />
        </Helmet>
        <NavBar />
        <div className="d-flex justify-content-center align-items-center main-header-section-overlay flex-column">
          <div className="d-flex justify-content-center align-items-center main-header-section flex-column">
            <div className="row header-content d-flex">
              <div className="col-12 col-xl-7">
                <h1 className="d-none d-md-flex fw-bold">{displayedText}</h1>
                <h5 className="d-none d-md-flex">
                  Amplora shows you what’s working for creators like you - so you can post smarter, not harder.
                </h5>

                <h1 className="d-block d-md-none">
                  {highlightAudience[0]}
                  <span style={{ color: "#00FFFF" }}>audience.</span>
                  {highlightAudience[1]}
                </h1>
                <h5 className="d-flex d-md-none">
                  Amplora saves hours by creating and posting your content
                  automatically.
                </h5>

                <div className="ctas d-flex gap-3">
                  <Link to="/WaitListForm">
                    <button className="main-btn">Join FREE Waitlist</button>
                  </Link>
                  <Link to="/UpfrontPaymentPage">
                    <button className="secondary-btn">
                      Claim 70% Off Now
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-xl-5 d-flex visuals-container align-items-center flex-column">
                <div className="glow-bg"></div>
                <motion.img
                  src={heroProfileMockup}
                  alt="Amplora iPhone Mockup"
                  className="iphone-mockup "
                  initial={{ opacity: 0, x: 100, rotate: 10 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 1 }}
                />

                <motion.div
                  className="feature-card card1"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaRobot /> Proven Ideas
                </motion.div>

                <motion.div
                  className="feature-card card2"
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaChartBar /> Fast Insights
                </motion.div>

                <motion.div
                  className="feature-card card3"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaBolt /> Smart Planning
                </motion.div>

                <div className="social-icons d-none d-md-flex">
                  <FaFacebook className="social-icon facebook" />
                  <FaTwitter className="social-icon twitter" />
                  <FaLinkedin className="social-icon linkedin" />
                  <FaYoutube className="social-icon youtube" />
                  <FaPinterest className="social-icon pinterest" />
                  <FaInstagram className="social-icon tiktok" />
                </div>
              </div>
              <div className="social-row d-flex d-md-none">
                {mobileSocialIcons.map((item, index) => (
                  <motion.div
                    key={index}
                    className="social-icon d-flex justify-content-center align-items-center"
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 300,
                    }}
                    whileHover={{
                      scale: 1.3,
                      color: item.color,
                      textShadow: `0 0 8px ${item.color}`,
                    }}
                    style={{ width: "50px", height: "50px" }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div
            id="features"
            className="d-flex justify-content-start align-items-center benefits-section flex-column container-fluid section-default-styles "
          >
            <MainHeading heading="How Amplora Works for You" />
            <Subheadings subheading="Everything you need to create, post, and grow, automated." />
            <ScrollReveal className="move-down-anime">
              <div
                className="mt-2 mt-md-5 row d-flex justify-content-center align-items-center container-fluid justify-self-center align-self-center"
                style={{ marginRight: "auto", marginLeft: "auto" }}
              >
                <BenefitCard
                  icon={drawing}
                  task="Know What Works"
                  description="Amplora shows which posts actually get results by analyzing top creators and trends."
                />
                <BenefitCard
                  icon={contentPlanning}
                  task="Plan Smarter Content"
                  description="Focus on content ideas that resonate with your audience, no guesswork needed."
                />
                <BenefitCard
                  icon={rocketPostAnime}
                  task="Post with Confidence"
                  description="Use insights to plan your content calendar and make every post count."
                />
                <BenefitCard
                  icon={trackEngagement}
                  task="Grow Without Burnout"
                  description="Save hours on trial-and-error posting and grow smarter with Amplora."
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="d-flex justify-content-start align-items-center early-section flex-column container-fluid section-default-styles">
          <MainHeading heading="Why Join Amplora Early?" />
          <span className="d-none d-md-flex justify-content-center">
            <Subheadings subheading="First 5 upfront members lock in all features for $150/month forever - plus early access and a Founding Member badge." />
          </span>
          <span className="d-flex d-md-none justify-content-center">
            <Subheadings subheading="First 5 upfront get full features for $150/mo for life + Founder Badge. Free waitlist members also get early feature access." />
          </span>

          <div className="mt-4 mt-md-5 row d-flex container-fluid early-join-benefit-cards-container">
            <div className="line"></div>
            <div className="right-line"></div>
            <div className="right-line-obstacle"></div>
            <EachScrollReveal animationClass="move-steps-right" stagger={100}>
              <EarlyJoinBenefits
                icon={<Lock className="early-feature-icon" />}
                feature="Full access $150/month"
                paragraph="(First 05 upfront only)"
              />
              <EarlyJoinBenefits
                icon={<Rocket className="early-feature-icon" />}
                feature="Early Feature Access"
                paragraph="(All waitlist members get access.)"
              />
              <EarlyJoinBenefits
                icon={<Trophy className="early-feature-icon" />}
                feature="Early Member Badge"
                paragraph="(Awarded to early members.)"
              />
              <EarlyJoinBenefits
                icon={<Kanban className="early-feature-icon" />}
                feature="Shape the Roadmap"
                paragraph="(Guide Amplora’s future.)"
              />
            </EachScrollReveal>
          </div>
          <div className="cta d-flex justify-content-center flex-column">
            <h1>Spots are extremely limited - Claim yours now!</h1>

            <div className="d-flex">
              <a href="/WaitListForm">
                <button className="primary">Join FREE waitlist</button>
              </a>
              <a href="/UpfrontPaymentPage">
                <button className="secondary">Get lifetime</button>
              </a>
            </div>
            <h2>(Only 5 spots for $150/month Founders deal remains!)</h2>
          </div>
        </div>

        <div className="d-flex justify-content-start align-items-center comparison-section flex-column container-fluid section-default-styles">
          <MainHeading heading="More Work ≠ More Growth" />
          <div className="row d-flex gap-md-4 justify-content-center align-items-center container-fluid with-without-container">
            <div
              className="d-none d-md-flex row d-flex justify-content-center align-items-center p-0"
              style={{ maxWidth: "1420px", width: "85%" }}
            >
              <div className="col-6 p-0 d-flex gap-2">
                <ScrollReveal className="move-right-anime">
                  <h1 className="lg-screen-heading without">
                    Without Amplora
                    <Lottie
                      autoplay={true}
                      loop={true}
                      animationData={xMark}
                      className="visual-icon"
                    />
                  </h1>
                </ScrollReveal>
              </div>
              <div className="col-6 p-0 d-flex gap-2">
                <ScrollReveal className="move-right-anime">
                  <h1 className="ms-2 lg-screen-heading with">
                    With Amplora
                    <Lottie
                      autoplay={true}
                      loop={true}
                      animationData={tickMark}
                      className="visual-icon"
                    />
                  </h1>
                </ScrollReveal>
              </div>
            </div>

            <div className="col-12 col-md-5 col-lg-5 without-content">
              <div className="function d-flex gap-2 align-items-center">
                <h5>Hustle</h5>
                <Plus className="operators" />
                <h5>Chaos</h5>
                <Equal className="operators" />
                <h6>Minimal Results</h6>
              </div>
              <div className="graph">
                <img src={withoutGraph} alt="" />
                <div className="benefits d-flex gap-3">
                  <h2>Lots of Effort</h2>
                  <h2>Little Payoff</h2>
                </div>
                <h4 className="axis-texts hrzntl">Hours Spent Posting</h4>
                <h4 className="axis-texts vertical">RESULTS</h4>
              </div>
              <p>
                Amplora shows what works and gives clear insights - every post, every idea, every trend. Spend less time guessing, more time growing.
              </p>
            </div>
            <div className="col-12 col-md-5 col-lg-5 with-content">
              <div className="function d-flex gap-2 align-items-center">
                <h5>Consisitency</h5>
                <Plus className="operators" />
                <h5>Freedom</h5>
                <Equal className="operators" />
                <h6>Rapid Growth</h6>
              </div>
              <div className="graph">
                <img src={withGraph} alt="" />
                <div className="benefits advantage d-flex gap-3">
                  <h2>Less Work</h2>
                  <h2>More Growth</h2>
                </div>
                <h4 className="axis-texts hrzntl">Effort Saved</h4>
                <h4 className="axis-texts vertical">RESULTS</h4>
              </div>
              <p>
                You spend hours posting, testing, and hoping for engagement. Results rarely match effort, leaving you exhausted and stuck.
              </p>
            </div>

            {/* The mobile tabs */}
            <div className="with-tabs">
              <button
                className={`with-tab ${
                  activeMethodTab === "with" ? "active" : ""
                }`}
                onClick={() => setActiveMethodTab("with")}
              >
                With
                <div className="with-connection"></div>
              </button>

              <button
                className={`with-tab ${
                  activeMethodTab === "without" ? "active" : ""
                }`}
                onClick={() => setActiveMethodTab("without")}
              >
                Without
                <div className="without-connection"></div>
              </button>
            </div>
            <div className="text-connection">
              <h1>Amplora</h1>
            </div>
            {/* Mobile Content */}
            <div className="mobile-comparison-container">
              {activeMethodTab === "with" && (
                <div className="col-12 col-md-5 col-lg-5 with-content mobile flex-column">
                  <h1>
                    With Amplora <Check className="mobile-icon with" />
                  </h1>
                  <div className="function d-flex gap-2 align-items-center">
                    <h5>Consisitency</h5>
                    <Plus className="operators" />
                    <h5>Freedom</h5>
                    <Equal className="operators" />
                    <h6>Rapid Growth</h6>
                  </div>
                  <div className="graph">
                    <img src={withGraph} alt="" />
                    <div className="benefits advantage d-flex gap-3">
                      <h2>Less Work</h2>
                      <h2>More Growth</h2>
                    </div>
                    <h4 className="axis-texts hrzntl">Effort Saved</h4>
                    <h4 className="axis-texts vertical">RESULTS</h4>
                  </div>
                  <p>
                    Amplora shows what works and gives clear insights - every post, every idea, every trend. Spend less time guessing, more time growing.
                  </p>
                </div>
              )}
              {activeMethodTab === "without" && (
                <div className="col-12 col-md-5 col-lg-5 without-content mobile flex-column">
                  <h1>
                    Without Amplora <X className="mobile-icon without" />
                  </h1>
                  <div className="function d-flex gap-2 align-items-center">
                    <h5>Hustle</h5>
                    <Plus className="operators" />
                    <h5>Chaos</h5>
                    <Equal className="operators" />
                    <h6>Minimal Results</h6>
                  </div>
                  <div className="graph">
                    <img src={withoutGraph} alt="" />
                    <div className="benefits d-flex gap-3">
                      <h2>Lots of Effort</h2>
                      <h2>Little Payoff</h2>
                    </div>
                    <h4 className="axis-texts hrzntl">Hours Spent Posting</h4>
                    <h4 className="axis-texts vertical">RESULTS</h4>
                  </div>
                  <p>
                    You spend hours posting, testing, and hoping for engagement. Results rarely match effort, leaving you exhausted and stuck.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          id="pricing"
          className="d-flex justify-content-center align-items-center pricing-section flex-column container-fluid section-default-styles"
        >
          <div style={{maxWidth: "700px"}}>
            <MainHeading heading="Transparent pricing for early access - no surprises" />
          </div>
          <Subheadings subheading="Amplora V1 gives you smarter insights, clearer direction, and a growth system built to scale with your audience." />

          <div className="row container d-flex justify-content-center pricing-strcture-container">
          {/* <div className="col-12 col-md-6">
              <PricingCards
                plan="Starter Plan"
                setBadgeVisible="d-none"
                price="$180"
                tag="Best for solopreneurs or small creators."
                featuresHeading="Key Features"
                checkmarksColor="green"
                features={[
                  "Post seamlessly across Instagram",
                  "Smart scheduling (publish while you sleep)",
                  "AI Caption & Hashtag Suggestions",
                  "Viral Post Templates Library (Starter Access)",
                  "AI Idea Generator – fresh post ideas daily",
                  "Basic Growth Tracker – see what’s performing best",
                  "1 connected account",
                  "Access to Amplora community",
                ]}
                btnText="Join Waitlist"
                btnClassName="standard-btn"
                buttonPath="/partners/products/amplora/waitinglist"
              />
          </div>

          <div className="col-12 col-md-6">
              <PricingCards
                plan="Standard Plan"
                setBadgeVisible="d-none"
                price="$300"
                tag="Best for agencies and power users."
                featuresHeading="Everything in starter, plus:"
                checkmarksColor="green"
                features={[
                  "Post across Instagram, Threads & Facebook",
                  "Advanced AI Content Assistant (hooks, captions, carousels)",
                  "Deep Performance Analytics (reach, saves, shares & trends)",
                  "Personal Brand Customization (colors, fonts, layouts)",
                  "Automatic Repurposing – turn one post into 3 formats",
                  "Viral Insights Dashboard – track content type performance",
                  "Multi-account management (up to 3 accounts)",
                  "Access to private creator growth sessions",
                ]}
                btnText="Join Waitlist"
                btnClassName="standard-btn"
                buttonPath="/partners/products/amplora/waitinglist"/>
          </div> */}

          <div className="col-12 col-md-6 mt-5">
              <PricingCards
                plan="Standard Plan"
                setBadgeVisible="d-none"
                price="$200"
                checkmarksColor="green"
                features={[
                  "See what’s working, what’s not, and next steps for the week",
                  "Smart analytics for each post",
                  "Personalized “what to do next” guidance",
                  "Full content vault access",
                ]}
                btnText="Join Early Access"
                btnClassName="pro-btn"
                buttonPath="WaitListForm"/>
          </div>

          <div className="col-12 col-md-6 mt-5">
            <div className="pricing-card founding">
              <div className="top-content">
                <img src={limitedBadge} alt="" />
                <h5>Founding Deal</h5>
                <div className="prices">
                  <h1>$150</h1>
                  <h6>
                    USD / per month{" "}
                    <span style={{ color: "black", fontWeight: "700" }}>
                      | forever{" "}
                    </span>
                  </h6>
                </div>
                <h4>Only 5 spots available</h4>
                <h3>pay upfront and join as a founding member.</h3>
                <div className="features-section mb-1">
                  <div className={`features`}>
                    <div className="feature d-flex gap-1">
                      <Check className="check" />
                      <h6>Get everything in the Pro plan</h6>
                    </div>
                    <div className="feature d-flex gap-1">
                      <Check className="check" />
                      <h6>Founding Member Badge (visible on your Amplora dashboard)</h6>
                    </div>
                    <div className="feature d-flex gap-1">
                      <Check className="check" />
                      <h6>Early feature access before public release</h6>
                    </div>
                    <div className="feature d-flex gap-1">
                      <Check className="check" />
                      <h6>Direct feedback access with Amplora’s core team</h6>
                    </div>
                    <div className="feature d-flex gap-1">
                      <Check className="check" />
                      <h6>
                        Lifetime discount lock (your rate never increases)
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="pb-3">
                  <h2 className="mb-5 pb-md-0">
                    🔒 This offer will never return.
                  </h2>
                  <a href="/UpfrontPaymentPage">
                  <button className="limited-btn">
                    Claim Founder Deal
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div
          id="faq"
          className="d-flex justify-content-center align-items-center faq-section flex-column container-fluid section-default-styles"
        >
          <MainHeading heading="Your Questions, Answered" />
          <Subheadings subheading="No fluff, just clear answers to help you decide if Amplora is the right fit." />

          <div className="faqs-container">
            <EachScrollReveal animationClass="faq-fade-up-anime" stagger={100}>
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`faq-card ${
                    faqActiveIndex === index ? "active" : ""
                  }`}
                  onClick={() => faqToggle(index)}
                >
                  <div className="faq-question">
                    {item.question}
                    <span
                      className={`faq-icon ${
                        faqActiveIndex === index ? "open" : ""
                      }`}
                    >
                      {faqActiveIndex === index ? "−" : "+"}
                    </span>
                  </div>
                  <div className="faq-answer">{item.answer}</div>
                </div>
              ))}
            </EachScrollReveal>
          </div>
              <div className="faq-sec-cta-wrapper">
                <div className="faq-sec-cta-container">
                  <FaEnvelope className="faq-sec-cta-contact-icon" />

                  <h3 className="faq-sec-cta-contact-title">
                    Still have questions?
                  </h3>

                  <p className="faq-sec-cta-contact-sub">
                    If you’ve got anything you want to clarify, we’re here to help.
                  </p>

                  <a href="/#contact" className="faq-sec-cta-contact-btn">
                    Contact Us
                  </a>
                </div>
              </div>
        </div>

        <div className="d-flex justify-content-center align-items-center cta-section flex-column container-fluid section-default-styles">
          <div className="row d-flex justify-content-center align-items-center cta-section-content">
            <div className="col-12 col-md-6">
              <h1>Be Part of the Future of Social Media Automation</h1>
              <h2>
                Join today, spots for Founding Users are limited. Don’t miss
                your lifetime discount.
              </h2>
              <h5>Only a few spots left, act now to secure your place.</h5>
              <div className="d-flex justify-content-center align-items-center justify-content-md-start">
                <ScrollReveal className="move-right-anime">
                  <a href="WaitListForm">
                    <button className="primary-btn">Join Free Waitlist</button>
                  </a>
                  <a href="/UpfrontPaymentPage">
                    <button className="secondary-btn">
                      Claim founder Spot
                    </button>
                  </a>
                </ScrollReveal>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
              <ScrollReveal className="move-left-anime">
                <div className="visuals-container">
                  <Lottie
                    autoplay={true}
                    loop={true}
                    animationData={ctaVisual}
                    className="robots-main-container"
                  />
                  <div className="social-media-container">
                    <Lottie
                      autoplay={true}
                      loop={true}
                      animationData={instagramAnime}
                      className="anime-icons instagram"
                    />
                    <Lottie
                      autoplay={true}
                      loop={true}
                      animationData={facebookAnime}
                      className="anime-icons facebook"
                    />
                    <Lottie
                      autoplay={true}
                      loop={true}
                      animationData={twitterAnime}
                      className="anime-icons twitter"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        <div
          id="contact"
          className="d-flex justify-content-center align-items-center contact-section flex-column container-fluid section-default-styles"
        >
          <MainHeading heading="Need Help? Reach Out." />
          <Subheadings subheading="Whether it’s pricing, integrations, or feedback, reach out and we’ll reply within 24 hours." />

          <div className="row d-flex justify-content-center align-items-start contact-content">
            <div className="col-12 col-md-6" style={{zIndex: "7"}}>
              <ScrollReveal className="move-down-anime">
                <div className="form-container" ref={contactFormRef}>
                  <form onSubmit={handleSubmit}>
                  <h3>Send Us a Message</h3>
                  <input
                    type="text"
                    id="fullName"
                    name='name'
                    placeholder="Enter your full Name"
                  />
                  <input type="text" id="email" placeholder="Work Email" name="email" />
                  <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Company/ Brand"
                  />

                  <div className="d-flex flex-row">
                    <div
                      className="use-case-dropdown-opener"
                      style={{
                        backgroundColor: "var(--contact-inputs-bg)",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setUseCaseDropdown(true);
                      }}
                    >
                      <span>{useCase}</span>
                      <ChevronDown className="down-icon" />
                    </div>
                    <input type="hidden" name="use_case" value={useCase} />
                    {useCaseDropdown && (
                      <div className="usecase-dropdown">
                        <h6
                          onClick={() => {
                            setUseCase("Social Media Manager / Marketing Team");
                            setUseCaseDropdown(false);
                          }}
                        >
                          Social Media Manager / Marketing Team
                        </h6>
                        <h6
                          onClick={() => {
                            setUseCase("Content Creator / Influencer");
                            setUseCaseDropdown(false);
                          }}
                        >
                          Content Creator / Influencer
                        </h6>
                        <h6
                          onClick={() => {
                            setUseCase("Agency / Client Management");
                            setUseCaseDropdown(false);
                          }}
                        >
                          Agency / Client Management
                        </h6>
                        <h6
                          onClick={() => {
                            setUseCase("Small Business / Startup");
                            setUseCaseDropdown(false);
                          }}
                        >
                          Small Business / Startup
                        </h6>
                        <h6
                          onClick={() => {
                            setUseCase("Medium to Large Enterprise");
                            setUseCaseDropdown(false);
                          }}
                        >
                          Medium to Large Enterprise
                        </h6>
                        <h6
                          onClick={() => {
                            setUseCase("E-commerce / Online Store");
                            setUseCaseDropdown(false);
                          }}
                        >
                          E-commerce / Online Store
                        </h6>
                        <h6
                          onClick={() => {
                            setUseCase("Partner / Integration Inquiry");
                            setUseCaseDropdown(false);
                          }}
                        >
                          Partner / Integration Inquiry
                        </h6>
                        <h6
                          onClick={() => {
                            setUseCase("Other");
                            setUseCaseDropdown(false);
                          }}
                        >
                          Other
                        </h6>
                      </div>
                    )}
                  </div>

                  <textarea
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Tell us what you’d like to know or ask here…"
                  />
                  {status && <p className="contact-section-msg">{status}</p>}
                  <button type="submit">
                    Send Message
                  </button>
                
                  </form>
                </div>
              </ScrollReveal>
            </div>
            <div className="col-12 col-md-6" style={{zIndex: "2"}}>
              <ScrollReveal className="move-down-anime">
                <div className="quick-contacts-container">
                  <div>
                    <h3>Quick Contacts</h3>
                    <div className="contact-method d-flex">
                      <div className="head">
                        <Mail className="icon" />
                        <h5>E-Mail Addresses</h5>
                      </div>
                      <h6>info@bininstructions.com</h6>
                      <h6>nxtdev.info@gmail.com</h6>
                    </div>
                    <div className="contact-method d-flex">
                      <div className="head">
                        <Smartphone className="icon" />
                        <h5>Call Us Directly</h5>
                      </div>
                      <h6>+94 77 454 7632</h6>
                      <h6>+94 76 055 6766</h6>
                    </div>
                  </div>
                  <div>
                    <div className="contact-method privacy-note">
                      <h6>
                        Your information is protected. Learn more in our{" "}
                        <a
                          href="AmploraPrivacyPolicy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a
                          href="TermsServices"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Terms of Service.
                        </a>
                      </h6>
                    </div>
                    <div className="social-media-icon-row">
                      <a
                        href="https://www.instagram.com/nxtdev_software_company/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={instaLogo} alt="" />
                      </a>
                      <a
                        href="https://web.facebook.com/profile.php?id=61578862901585"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={facebookLogo} alt="" />
                      </a>
                      <a
                        href="https://x.com/NXTDEVSC"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={twitterLogo} alt="" />
                      </a>
                      <a
                        href="https://www.threads.com/@nxtdev_software_company"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={threadsLogo} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
          {useCaseDropdown && (
            <div
              className="use-case-dropdown-overlay"
              onClick={() => setUseCaseDropdown(false)}
            ></div>
          )}
        </div>

        <TheFooter />
      </>
    );
}
export default Amplora;
