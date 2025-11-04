import {useState, useEffect, useRef} from 'react'

// Impmorting icons and images
import AmploraLogo from "../../../../../assets/amploraLogo.svg";
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { NotebookPen } from 'lucide-react';
import { AlarmClock } from 'lucide-react';
import { Rocket } from 'lucide-react';
import { ArrowUp } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { CornerRightDown } from 'lucide-react';
import { Zap } from 'lucide-react';
import { CircleStar } from 'lucide-react';
import { Check } from 'lucide-react';
import arrow from "../../../../../assets/arrow.svg";

import {Col, Row} from "react-bootstrap"

import sideImageBadge from '../../../../../assets/sideImageBadge.png'
import sideImageRocket from "../../../../../assets/sideImageRocket.png";
import waitlistMockup from "../../../../../assets/waitlistDashboard.png";

import "./Amplora/styles/WaitListFormPage.css";
import { useLocation, useParams } from 'react-router';
import NavBar from './Amplora/components/NavBar';
import TheFooter from './Amplora/components/TheFooter';

import MainHeading from "./Amplora/components/MainHeadings";
import Subheadings from "./Amplora/components/Subheadings";
import EachScrollReveal from "./Amplora/components/EachScrollReveal";
import ScrollReveal from "./Amplora/components/ScrollReveal";

import api from "../../../../../api/api";
import { LoadPayhereScript } from '../../../../../api/PaymentGateways';

import { Helmet } from "react-helmet";
import { useSearchParams } from 'react-router-dom';


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
  const [name, setName] = useState("");
  const nameRef = useRef(null);
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);
  const [whatsapp, setWhatsapp] = useState("");
  const whatsappRef = useRef(null);
  const [brandName, setBrandName] = useState("");
  const brandNameRef = useRef(null);
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const socialMediaLinkRef = useRef(null);
  const [role, setRole] = useState("");
  const roleRef = useRef(null);


  const addUserToWaitingList = async(payUpfront) => {

    const data = {
      name: document.getElementById("name").value,
      whatsapp: document.getElementById("whatsapp").value,
      website: document.getElementById("website").value,
      email: document.getElementById("email").value,
      brandName: document.getElementById("brandName").value,
      jobTitle: document.getElementById("jobTitle").value,
      agreed: document.getElementById("defaultCheck1").checked,
      selectedPlan: document.getElementById("product-plan").value,
      payUpfront: payUpfront
    };
    const response = await api.post("/api/v1/partners/products/amplora/waiting-list/adduser", data);
    if (response.status === 200){
      console.log(response.data);
      if (response.data.status == "ok"){
        if (response.data.launchPayment){
          payhere.onCompleted = function onCompleted(orderId) {
            console.log("Payment completed. OrderID:" + orderId);
            // Note: validate the payment and show success or failure page to the customer
          };

          // Payment window closed
          payhere.onDismissed = function onDismissed() {
            // Note: Prompt user to pay again or show an error page
            console.log("Payment dismissed");
          };

          // Error occurred
          payhere.onError = function onError(error) {
            // Note: show an error page
            console.log("Error:" + error);
          };

          const paymentData = response.data.paymentData;
          // alert(JSON.stringify(paymentData));

          payhere.startPayment(paymentData);
        }
        alert("Successfully added to the waiting list!");
      }
    }

  }

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
                      value={socialMediaLink}
                      onChange={(e) => setSocialMediaLink(e.target.value)}
                      ref={socialMediaLinkRef}
                      required
                    />
                  </div>
                </div>
              
                <div className="col-12 d-flex align-items-center">
                  <span className="d-flex gap-0 checkbx-container align-items-center">
                    <input
                      className="form-check-input checkbox"
                      type="checkbox"
                      id="defaultCheck1"
                    />
                    <p className='mb-2'>
                      I agree Amplora’s{" "}
                      <a href="/partners/products/amplora/privacy-policy">
                        Privacy Policy
                      </a>{" "}
                      &{" "}
                      <a href="/partners/products/amplora/TermsOfService">
                        Terms of Service.
                      </a>
                    </p>
                  </span>
                </div>
                </div>

                <div className="row mb-3 mt-md-1 mt-2">
                      <button
                      className="cta-btn"
                      onClick={() => {
                        addUserToWaitingList(false);
                      }}
                    >
                      Join Waitlist - It’s Free
                    </button>
                    <p className="btn-supports bottom">
                      (🆓 Free - early updates & insider access)
                    </p>
                </div>
              
              <p className="bottom-text">
                Your info is 100% secure • No spam • Cancel anytime
              </p>
            </div>
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
            <a href="#form-section" className='d-flex mb-2' style={{textDecoration: "none", width: "100px"}}>
              <button className="default-btn">Join Early Access</button>
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

              <a href="/partners/products/amplora/privacy-policy" id='policy'>
                <p>View Privacy Policy</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <TheFooter />
    </>
  );
}
export default WaitListForm;
