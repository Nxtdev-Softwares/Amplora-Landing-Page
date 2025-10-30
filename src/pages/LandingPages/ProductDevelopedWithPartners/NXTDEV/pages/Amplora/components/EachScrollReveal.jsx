import { useEffect, useRef } from "react";

function EachScrollReveal({ children, animationClass = "fade-up", stagger = 200 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.children;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          Array.from(items).forEach((item, i) => {
            item.style.animation = `${animationClass} 0.6s forwards`;
            item.style.animationDelay = `${i * stagger}ms`;
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [animationClass, stagger]);

  return (
    <div ref={containerRef} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "0px", margin: "0px"}}>
      {children}
    </div>
  );
}

export default EachScrollReveal;
