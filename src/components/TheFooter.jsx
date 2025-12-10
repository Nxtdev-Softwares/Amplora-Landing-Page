import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react'
import AmploraLogo from "../assets/amploraLogo.svg"
import nxtdevLogo from '../assets/nxtdev.png'
import bininstructionsLogo from '../assets/logo.webp'
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { SiThreads } from "react-icons/si";

import "../styles/FooterStyles.css"

function TheFooter () {

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
        <div className="the-footer d-flex justify-content-center align-items-center flex-column">
          <div className="row d-flex justify-content-center align-items-start footer-content">
            <div className="col-12 col-md-6 col-lg-5 brand-identity mb-4 mb-md-0">
              <a
                href="/"
                style={{ textDecoration: "none" }}
              >
                <img src={AmploraLogo} alt="" />
                <h1>Amplora</h1>
              </a>
              <h6>Automating your social media, from creation to posting.</h6>
              <a
                href="/WaitListForm"
                style={{ width: "100%" }}
              >
                <button>Join Waitlist</button>
              </a>
              <p>Experience the future of social media automation.</p>
            </div>
            <div className="col-4 col-md-2 col-lg-3 p-0 d-flex flex-column align-items-start">
              <div className="section m-0 justify-self-center">
                <h5>Product</h5>
                <div className="d-flex flex-column ms-1">
                  <a
                    href="/#features"
                    className="footer-links"
                  >
                    Features
                    <div className="underline-effect"></div>
                  </a>
                  <a
                    href="/#pricing"
                    className="footer-links"
                  >
                    Pricing
                    <div className="underline-effect"></div>
                  </a>
                  <a
                    href="/#faq"
                    className="footer-links"
                  >
                    FAQ
                    <div className="underline-effect"></div>
                  </a>
                </div>
              </div>
              <div className="section">
                <h5>Company</h5>
                <div className="d-flex flex-column ms-1">
                  <a
                    href="https://bininstructions.com/partnerships"
                    className="footer-links"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    About Us
                    <div className="underline-effect"></div>
                  </a>
                </div>
              </div>
              <div className="section">
                <h5>Support</h5>
                <div className="d-flex flex-column ms-1">
                  <a
                    href="/#faq"
                    className="footer-links"
                  >
                    FAQs
                    <div className="underline-effect"></div>
                  </a>
                  <a
                    href="/#contact"
                    className="footer-links"
                  >
                    Contact US
                    <div className="underline-effect"></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-8 col-md-4 col-lg-4 d-flex flex-column align-items-start">
              <div className="section m-0">
                <h5>Legal</h5>
                <div className="d-flex flex-column ms-1">
                  <a
                    href="/AmploraPrivacyPolicy"
                    className="footer-links"
                  >
                    Privacy Policy
                    <div className="underline-effect"></div>
                  </a>
                  <a
                    href="/TermsServices"
                    className="footer-links"
                  >
                    Terms of Service
                    <div className="underline-effect"></div>
                  </a>
                </div>
              </div>
              <div className="section">
                <h5>Contact</h5>
                <div className="d-flex flex-row ms-1 align-items-start flex-column">
                  <div className="mail-info d-flex align-items-center justify-content-center m-0">
                    <Mail className="mail-icon" />
                    <a
                      href="mailto:info@bininstructions.com?subject=Join%20Amplora%20Waitlist&body=Hi%20Amplora%20Team,%0A%0AI'd%20love%20to%20learn%20more%20about%20Amplora.%0A%0AThanks!"
                      className="footer-links"
                    >
                      info@bininstructions.com
                      <div className="underline-effect"></div>
                    </a>
                  </div>
                  <div className="mail-info d-flex align-items-center justify-content-center mt-1">
                    <Mail className="mail-icon" />
                    <a
                      href="mailto:nxtdev.info@gmail.com"
                      className="footer-links"
                    >
                      nxtdev.info@gmail.com
                      <div className="underline-effect"></div>
                    </a>
                  </div>
                  <div className="social-medias">
                    <a
                      href="https://www.instagram.com/nxtdev_software_company/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="icons" />
                    </a>
                    <a
                      href="https://web.facebook.com/profile.php?id=61578862901585"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF className="icons" />
                    </a>
                    <a
                      href="https://x.com/NXTDEVSC"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="icons" />
                    </a>
                    <a
                      href="https://www.threads.com/@nxtdev_software_company"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiThreads className="icons" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-content d-flex justify-content-center align-items-center flex-column container-fluid">
            <h6>© 2025 Amplora. All rights reserved.</h6>
            <p>Your data is safe with us, 100% secure, no spam.</p>
            <div className="powered-container container-fluid">
              <h5>Powered by Nxtdev & Bininstructions</h5>
              <div className="companies-logos">
                <img className="logo-1" src={nxtdevLogo} alt="" />
                <img className="logo-2" src={bininstructionsLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default TheFooter;
