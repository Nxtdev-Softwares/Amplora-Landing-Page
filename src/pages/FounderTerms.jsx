import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import AmploraLogo from "../assets/amploraLogo.svg";
import Footer from "../components/TheFooter";
import { useSearchParams } from 'react-router-dom';
import { useLocation, useParams } from 'react-router';

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

  // Scrolling to the top
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

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
          <h1>Amplora Founder Terms</h1>
          <h2>For the first 5 creators shaping the future of Amplora</h2>
        </div>
        <div className="main-container">
          <div className="information-container flex-column">
            <div className="d-flex gap-2 updated-date  align-items-center">
              <h5>Effective Date:</h5>
              <p>12/09/2025</p>
            </div>

            <h1 id="acceptTerms">01) What Founders Get</h1>
              <h4>1. Founder Badge(Forever)</h4>
              <h6>A permanent badge on your profile inside Amplora that signals: “I helped build this.” This badge will never be given out again.</h6>
              <h6></h6>
              <h6></h6>

              <h4>2. Locked Pricing - $150/month for life</h4>
              <h6>Everyone else pays $200+/month.</h6>
              <h6>You pay $150/month, forever, with access to every feature we release.</h6>
              <h6>No upsells, no “pro tiers,” no price jumps.</h6>

              <h4>3. Priority Support</h4>
              <h6>Founders jump the line.</h6>
              <h6>Your requests, issues, and ideas get handled first - always.</h6>

              <h4>4. Full Access to All Future Features</h4>
              <h6>Every feature, every version, every new insight tool - unlocked automatically.</h6>
              <h6>You never pay more.</h6>

            <h1 id="services">02) What Amplora Includes (V1 + Beyond)</h1>
              <h4>The deep clarity creators can’t get anywhere else</h4>
              <h5>✔ What’s working - instantly</h5>
              <h6>See the patterns in your posts that drive reach, saves, shares, and leads.</h6>

              <h5>✔ What’s not working</h5>
              <h6>No guessing. No vague analytics.</h6>
              <h6>Just crystal clear insights on what’s falling flat - and why.</h6>

              <h5>✔ What to do next</h5>
              <h6>Action steps based on actual patterns from 100+ creators:</h6>
              <h6>formats, hooks, angle ideas, and the content map you follow to grow steadily.</h6>

              <h5>✔ Post-level analytics that Instagram doesn’t give</h5>
              <h6>The granular breakdowns creators wish they had:</h6>
              <ul>
                <li>Hook performance</li>
                <li>Pattern hits</li>
                <li>Structure analysis</li>
                <li>Content angle detection</li>
                <p>This is the intelligence layer IG never built.</p>
              </ul>

            <h1 id="accRegister">03) What We Promise You (As Founders)</h1>
              <h6>We keep this simple - you get:</h6>

              <h5>✔ Full transparency</h5>
              <h6>You’ll see what we’re building, what’s coming next, and why.</h6>

              <h5>✔ Weekly progress</h5>
              <h6>Feature updates, improvements, and new insights dropping constantly.</h6>

              <h5>✔ You shape the roadmap</h5>
              <h6>Your feedback directly affects what gets built next.</h6>
              <h6>If something matters to you, it matters to us.</h6>

              <h5>✔ We build for real creators, not vanity metrics</h5>
              <h6>Everything is built around one goal:</h6>
              <h6>help you grow an audience and get clients.</h6>

            <h1 id="paymentPricing">04) What We Ask From You</h1>
              <h6>Being a founder isn’t passive. We keep it simple:</h6>

              <h5>✔ Use Amplora regularly</h5>
              <h6>Your usage helps us fine-tune what matters.</h6>

              <h5>✔ Give honest feedback</h5>
              <h6>Tell us what works, what sucks, and what needs fixing.</h6>

              <h5>✔ Show up to occasional calls</h5>
              <h6>Short founder syncs where we share updates and ask for input.</h6>

              <p>That's it</p>

            <h1 id="userConduct">05) Your Guarantee</h1>
              <h4>Cancel anytime. No lock-in. No pressure.</h4>
              <h6>If Amplora doesn’t feel worth it, just cancel.</h6>
              <h6>You lose nothing - except your founder spot, which can’t be reactivated.</h6>

            <h1 id="property">06) Only 5 founder spots.</h1>
            <h5>Once they’re gone, the Founder Terms disappear permanently.</h5>
            <ul>
              <li>No exceptions.</li>
              <li>No reopening.</li>
              <li>No hidden list.</li>
            </ul>
            <h6>If you’re seeing this page, a spot is still open.</h6>
            <h6>If you’re not - they’re gone.</h6>

            <h1 id="limitation">Become an Amplora Founder</h1>
              <h4>5 spots. $150/month for life. Everything included.</h4>
              <h6>Shape the product that will shape creators.</h6>
              <a href="#/UpfrontPaymentPage">
                <button className="founder-cta-button">Claim Your Spot</button>
              </a>

          </div>
          <div className="links-container">
            <div className={`nav-container ${scrolled ? "scrolled" : ""}`}>
              <h5>This Policy is organized into the following sections:</h5>
              <div className="links">
                <a onClick={() => scrollToSection("acceptTerms")}>
                  <h6>1. What Founders Get</h6>
                </a>
                <a onClick={() => scrollToSection("services")}>
                  <h6>2. What Amplora Contains</h6>
                </a>
                <a onClick={() => scrollToSection("accRegister")}>
                  <h6>3. What We Promise</h6>
                </a>
                <a onClick={() => scrollToSection("paymentPricing")}>
                  <h6>4. What We Ask from You</h6>
                </a>
                <a onClick={() => scrollToSection("userConduct")}>
                  <h6>5. Guarantee</h6>
                </a>
                <a onClick={() => scrollToSection("property")}>
                  <h6>6. Available Spots</h6>
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