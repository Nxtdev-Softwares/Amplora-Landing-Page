import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";

import {Row, Col} from "react-bootstrap";

import api from "../../../../../../../api/api";

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
import heroProfileMockup from "../../../../../../../assets/heroProfileMockup.svg";

import uploadingAnime from "../../../../../../../assets/uploadingAnime.json"
import drawing from "../../../../../../../assets/drawingAnime.json"
import postingAnime from "../../../../../../../assets/postingAnime.json"
import trackEngagement from "../../../../../../../assets/trackEngagement.json"
import withGraph from "../../../../../../../assets/withGraph.svg"
import withoutGraph from "../../../../../../../assets/withoutGraph.svg"
import limitedBadge from "../../../../../../../assets/limited-pricing-badge.png"
import { Lock, Rocket, Trophy, Kanban} from 'lucide-react';
import { X } from 'lucide-react';
import xMark from "../../../../../../../assets/xMark.json"
import tickMark from "../../../../../../../assets/tickMark.json"
import { Check, Equal, Plus } from 'lucide-react';
import { FaRobot, FaClock, FaBolt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaPinterest, FaTiktok } from "react-icons/fa";
import ctaVisual from "../../../../../../../assets/ctaVisualAnime.json"
import instagramAnime from "../../../../../../../assets/instagram.json"
import facebookAnime from "../../../../../../../assets/facebook.json"
import twitterAnime from "../../../../../../../assets/twitter.json"
import { Mail } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import instaLogo from "../../../../../../../assets/instagram.png"
import facebookLogo from "../../../../../../../assets/facebook.png"
import twitterLogo from "../../../../../../../assets/twitterLogo.svg"
import threadsLogo from "../../../../../../../assets/threads.png"
import { Helmet } from "react-helmet";

function Amplora() {

  const navigate = useNavigate();

    //header
    const heroMainText = (
      <>
      <span>
        Build the audience that builds your <span style={{color: "#00FFFF"}}>business.</span>
      </span>
      </>
    );
    const [displayedText, setDisplayedText] = useState(
      <>
      <span>
        Build the audience that builds your <span style={{color: "#00FFFF"}}>business.</span>
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

    const mobileHeroMainText = "Build the audience that builds your business.";
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
        question: "Can I cancel my subscription anytime?",
        answer:
        "Yes. Amplora is 100% subscription-based no contracts, no hidden fees. Cancel anytime with one click.",
    },
    {
        question: "Do you offer a free trial?",
        answer:
        "Not yet. Instead, we’re giving the full access to every feature for lifetime to the first 5 people who pay upfront. Lock in the lowest price forever.",
    },
    {
        question: "What features are included in each plan?",
        answer:
        "Features depend on your plan, but everyone on the waitlist gets early access to all upcoming features before public release.",
    },
    {
        question: "Which social media platforms does Amplora support?",
        answer:
        "Right now, Amplora posts to Instagram, TikTok, Threads, LinkedIn, and Facebook - all from one dashboard.",
    },
    {
        question: "Can I schedule or repeat posts automatically?",
        answer:
        "Yes. You can schedule posts by date or set them to auto-repeat on a schedule. Amplora handles the rest.",
    },
    {
        question: "Does Amplora create content for me?",
        answer:
        "Yes! Powered by ChatGPT, Amplora writes posts and captions for you. Just set your preferences once. The AI thinks, creates, and posts.",
    },
    {
        question: "Can I customize the AI to my workflow?",
        answer:
        "Absolutely. You can adjust tone, style, and rules so content matches your brand voice every time.",
    },
    {
        question: "Does the AI post automatically, or do I approve first?",
        answer:
        "You choose. Let AI auto-post on your behalf, or set Amplora to wait for your approval before publishing.",
    },
    {
        question: "Who is Amplora best suited for?",
        answer:
        "Amplora is designed for creators, small businesses, coaches, and agencies. If you want to save hours and grow your social media presence, it’s built for you.",
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


    const sendMessage = async() => {
      const data = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        company: document.getElementById("company").value,
        useCase: useCase,
        message: document.getElementById("message").value
      }
      const response = await api.post("/api/v1/partners/products/amplora/message/send", data);
      if (response.status === 200){
        if(response.data.status == "ok"){
          alert("Message sent!");
        }
      }
    }

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
                  Amplora creates and posts content that attracts followers, grows reach, and converts them into clients - automatically.
                </h5>

                <h1 className="d-flex d-md-none">{mobileDisplayedText}</h1>
                <h5 className="d-flex d-md-none">
                  Amplora saves hours by creating and posting your content
                  automatically.
                </h5>

                <div className="ctas d-flex gap-3">
                  <Link to="/partners/products/amplora/waitinglist">
                    <button className="main-btn">Join FREE Waitlist</button>
                  </Link>
                  <Link to="/partners/products/amplora/UpfrontPaymentPage">
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
                  <FaRobot /> AI Creates Posts
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
                  <FaClock /> Auto-Scheduling
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
                  <FaBolt /> 1-Click Posting
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
                  task="Smart Content Creation"
                  description="AI crafts scroll-stopping posts tailored to your brand voice."
                />
                <BenefitCard
                  icon={uploadingAnime}
                  task="Post Everywhere in One Click"
                  description="Publish across every platform automatically, no copy-paste."
                />
                <BenefitCard
                  icon={postingAnime}
                  task="Schedule & Forget"
                  description="Plan once. Amplora handles posting while you focus on growing."
                />
                <BenefitCard
                  icon={trackEngagement}
                  task="Insights That Matter"
                  description="Track engagement, learn what works, and grow smarter."
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="d-flex justify-content-start align-items-center early-section flex-column container-fluid section-default-styles">
          <MainHeading heading="Why Join Amplora Early?" />
          <span className="d-none d-md-flex justify-content-center">
            <Subheadings subheading="The first 5 upfront members get full access to every feature for only $150/month forever with early feature access, and a Founding Member badge. Plus, your feedback helps shape Amplora’s future." />
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
              <a href="/partners/products/amplora/waitinglist">
                <button className="primary">Join FREE waitlist</button>
              </a>
              <a href="/partners/products/amplora/UpfrontPaymentPage">
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
                You put in hours every week posting manually. But because timing
                is off, platforms are scattered, and consistency is hard to
                maintain, the results never match the effort.
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
                Amplora creates, schedules, and posts for you - every platform,
                every time. Consistency is handled, freeing you to focus on
                sales and strategy. The less you do, the more you grow.
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
                    Amplora creates, schedules, and posts for you - every
                    platform, every time. Consistency is handled, freeing you to
                    focus on sales and strategy. The less you do, the more you
                    grow.
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
                    You put in hours every week posting manually. But because
                    timing is off, platforms are scattered, and consistency is
                    hard to maintain, the results never match the effort.
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
          <MainHeading heading="Scale Your Workflow Without Scaling Costs" />
          <Subheadings subheading="Amplora’s all-in-one plan gives you unlimited posting power at a price that grows with your business." />

          <div
            className="row justify-content-center align-items-center pricing-cards-container"
            style={{}}
          >
            <Col xs={11} lg={8}>
              <Row className="flex-wrap justify-content-center align-items-center gap-1 gap-md-5 align-items-md-stretch">
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
                    "Basic Email Marketing (limited sends, no automation)",
                  ]}
                  btnText="Join Waitlist"
                  btnClassName="standard-btn"
                  buttonPath="/partners/products/amplora/waitinglist"
                />

                {/* "AI-powered content tailored to your brand voice",
                "" */}

                <PricingCards
                  plan="Standard Plan"
                  setBadgeVisible="d-none"
                  price="$300"
                  tag="Best for agencies and power users."
                  featuresHeading="Everything in starter, plus:"
                  checkmarksColor="green"
                  features={[
                    "Post seamlessly across Instagram, Threads, Facebook",
                    "Advanced analytics & insights",
                    "Deeper customization & branding control",
                    "Expanded emil marketing (higher sends, basic automation)",
                  ]}
                  btnText="Join Waitlist"
                  btnClassName="standard-btn"
                  buttonPath="/partners/products/amplora/waitinglist"
                />

                <PricingCards
                  plan="Pro Plan"
                  setBadgeVisible="d-flex"
                  price="$500"
                  tag="Built for growing brands & agencies"
                  featuresHeading="Everything in Standard, plus:"
                  checkmarksColor="blue"
                  features={[
                    "Manage unlimited accounts in one dashboard",
                    "Post across 5 social media platforms (Instagram, TikTok, Threads, LinkedIn & Facebook)",
                    "API Access",
                    "Exclusive Founding Member badge",
                    "Full email marketing suite (unlimited sends, advanced automation)",
                  ]}
                  btnText="Be a Founding User"
                  btnClassName="pro-btn"
                  buttonPath="/partners/products/amplora/waitinglist"
                />

                <div className="col-12 col-md-5 d-flex align-items-center price-card-container founding">
                  <div className="pricing-card founding">
                    <div className="top-content">
                      <img src={limitedBadge} alt="" />
                      <h5>Founding Deal</h5>
                      <div className="prices">
                        <h1>$150</h1>
                        <h6>
                          USD / per month{" "}
                          <span style={{ color: "black", fontWeight: "700" }}>
                            | Locked in for life{" "}
                          </span>
                        </h6>
                      </div>
                      <h4>Only 5 spots available</h4>
                      <h3>pay upfront and join as a founding member.</h3>
                      <div className="features-section mb-1">
                        <div className={`features`}>
                          <div className="feature d-flex gap-1">
                            <Check className="check" />
                            <h6>Early full access to Amplora</h6>
                          </div>
                          <div className="feature d-flex gap-1">
                            <Check className="check" />
                            <h6>AI-powered content creation</h6>
                          </div>
                          <div className="feature d-flex gap-1">
                            <Check className="check" />
                            <h6>Post on Instagram, TikTok, Threads & more</h6>
                          </div>
                          <div className="feature d-flex gap-1">
                            <Check className="check" />
                            <h6>Founding Member badge</h6>
                          </div>
                          <div className="feature d-flex gap-1">
                            <Check className="check" />
                            <h6>
                              Lifetime access to all future features + priority
                              updates
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="pb-3">
                        <h3>
                          💡 Save $2,000+ vs hiring a social media manager.
                        </h3>
                        <h2 className="pb-5">
                          🔒 This offer will never return.
                        </h2>
                        <a href="/partners/products/amplora/UpfrontPaymentPage">
                        <button className="limited-btn">
                          Claim Your Founding Spot
                        </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
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
                  <a href="/partners/products/amplora/waitinglist">
                    <button className="primary-btn">Join Free Waitlist</button>
                  </a>
                  <a href="/partners/products/amplora/UpfrontPaymentPage">
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
            <div className="col-12 col-md-6">
              <ScrollReveal className="move-down-anime">
                <div className="form-container" ref={contactFormRef}>
                  <h3>Send Us a Message</h3>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your full Name"
                  />
                  <input type="text" id="email" placeholder="Work Email" />
                  <input
                    type="text"
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
                    id="message"
                    placeholder="Tell us what you’d like to know or ask here…"
                  />
                  <button
                    onClick={() => {
                      sendMessage();
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </ScrollReveal>
            </div>
            <div className="col-12 col-md-6">
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
                          href="/partners/products/amplora/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a
                          href="/partners/products/amplora/TermsOfService"
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
