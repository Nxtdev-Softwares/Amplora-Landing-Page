import {useState, useEffect, useRef} from 'react'

// Impmorting icons and images
import AmploraLogo from "../../../../../assets/amploraLogo.svg";
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
import arrow from "../../../../../assets/arrow.svg";

import {Col, Row} from "react-bootstrap"

import sideImageBadge from '../../../../../assets/sideImageBadge.png'
import sideImageRocket from "../../../../../assets/sideImageRocket.png";
import waitlistMockup from "../../../../../assets/upfrontDashboard.png";

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
              <h1>Unlock Full Access to Amplora - Today.</h1>
              <h2>
                Get full access to Amplora for $150/month - 70% off for the first 5 founding creators.
              </h2>
              <div className="d-flex justify-content-center justify-content-lg-start gap-4">
                <a href="#upfront-form-section">
                  <button className="cta-btn">Get Full access</button>
                </a>
                <a href="#why-upfront-section">
                  <button className="secondary-btn">Why Pay Upfront?</button>
                </a>
              </div>
            </div>
            <div className="d-flex col-12 col-lg-5">
              <img src={waitlistMockup} alt="" className='mockup'/>
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
            Get full access today and secure your founder-only pricing before it’s gone.
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
                  <div className="p-0 mb-2">
                  <Row
                    className={`subscription-plan-row ${
                      selectedPlan ? "active" : ""
                    } justify-content-start px-3`}
                  >
                    {!selectedPlan && (
                      <label className="w-auto pb-2 sale-float-label no-move">
                        Subscription Plan
                      </label>
                    )}
                    <select
                      onSelect={(e) => {
                        setSelectedPlan(e.target.value);
                      }}
                      id="product-plan"
                      className="form-select text-white border-0"
                      style={{
                        backgroundColor: "var(--form-inputs-bg)",
                      }}
                    >
                      {plans.map((plan) => {
                        return (
                          <option
                            className='pricing-plan-dropdown'
                            value={plan.id}
                            selected={
                              searchParams
                                ? searchParams.get("plan") == plan.planName
                                : false
                            }
                          >
                            {plan.planName}
                          </option>
                        );
                      })}
                    </select>
                  </Row>   
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
              
                <div className="col-12 col-md-6 d-flex align-items-center">
                  <span className="d-flex gap-0 checkbx-container align-items-center">
                    <input
                      className="form-check-input checkbox"
                      type="checkbox"
                      id="defaultCheck1"
                    />
                    <p className='mb-2'>
                      I agree Amplora’s{" "}
                      <a href="/partners/products/amplora/privacy-policy">
                        Founder Terms
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
                      💥 Get Full Access Now
                    </button>
                    <p className="btn-supports bottom">
                      Exclusive offer for the first 5 founders.
                    </p>
                </div>
              
              <p className="bottom-text">
                Your info is 100% secure • No spam • Cancel anytime
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div
          id="why-upfront-section"
          className="d-flex justify-content-center align-items-center flex-column benefits-section text-center container-fluid"
        >
          {/* <img src={sideImageRocket} alt="" className='d-none d-xxl-flex side-images left'/> */}
          <MainHeading heading="Get the Full System - at 70% Off." />
          <div className='d-flex justify-content-center align-items-center' style={{maxWidth: "1190px"}}>
            <h6 className="default-sub-heading">              
              This is your chance to get in before the masses. Amplora is for serious creators who want real data, repeatable growth, and an unfair advantage - early.
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
                  <h6>
                    Lock in Amplora for $150/month - 70% off.
                  </h6>
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
                  <h6>
                    Unlock every feature before public launch.
                  </h6>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4 p-0">
                <div className="benefit d-flex">
                  <div className="icon-container">
                    <CircleStar className="icon" />
                  </div>
                  <h2>Founder Badge & Priority</h2>
                  <h6>
                    Get lifetime recognition and early updates.
                  </h6>
                </div>
              </div>
            </EachScrollReveal>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center flex-column waitlist-cta-section text-center">
          <a href="#main-sec">
            <ArrowUp className="top-move-btn" />
          </a>

          <div className="row d-flex justify-content-center align-items-start content">
            <div className="col-12 col-md-6 col-lg-6 pe-0 pe-md-5 ps-0">
              <Row>
                <h1>
                  Don’t Wait for Launch. Be the Launch.
                </h1>
              </Row>
              <Row>
              <h2>
                Secure your founder-tier access today and start mastering your growth system - for 70% off.
              </h2>
              </Row>
              <div className="d-flex btn-container justify-content-start flex-column">
                <a href="#upfront-form-section">
                  <button className="main-btn">💥 Get Full Access Now</button>
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

              <a href="/partners/products/amplora/privacy-policy" id='policy'>
                <p>View founderterms</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <TheFooter />
    </>
  );
}
export default UpfrontPaymentPage;
