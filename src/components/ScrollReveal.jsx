import React from 'react';
import { useState, useEffect, useRef } from 'react'

function ScrollReveal({ children, className = "", animationClass = "animate" }) {

    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.06, 
        rootMargin: "0px 0px -20% 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

    return (
        <>
        <div ref={ref} className={`${className} ${isVisible ? animationClass : ""}`}>
            {children}
        </div>
        </>
    );
}
export default ScrollReveal;
