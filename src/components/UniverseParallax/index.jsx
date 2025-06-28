import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import background from "../../assets/Background.jpg";
import background from "../../assets/background1.png";
import midground from "../../assets/midground.jpg";
import foreground from "../../assets/foreground.png";

import "./style.css";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ParallaxEffect() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);

  useEffect(() => {
    // Create a GSAP context for better cleanup
    const ctx = gsap.context(() => {
      // Parallax effect for background layers
      gsap.to(layer1Ref.current, {
        y: () => -window.innerHeight * 0.2,
        opacity: 0,
        scale: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(layer2Ref.current, {
        y: () => -window.innerHeight * 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(layer3Ref.current, {
        y: () => -window.innerHeight * 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      // Fade and scale effect for the title
      gsap.to(titleRef.current, {
        opacity: 0,
        scale: 0.8,
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "25% top",
          scrub: true,
        },
      });

      // Pin the section during scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%", // Pin for the height of the viewport
        pin: true,
        pinSpacing: true,
      });
    }, sectionRef);

    return () => ctx.revert(); // Clean up animations
  }, []);

  return (
    <>
      <section className="advanced-parallax" ref={sectionRef}>
        {/* Background Layer */}
        <div
          className="parallax-bg-layer"
          ref={layer1Ref}
          style={{ backgroundImage: `url(${background})` }}
        />

        {/* Middle Layer */}
        {/* <div
          className="parallax-mid-layer"
          ref={layer2Ref}
          style={{ backgroundImage: `url(${midground})` }}
        /> */}

        {/* Foreground Layer */}
        {/* <div
          className="parallax-fg-layer"
          ref={layer3Ref}
          style={{ backgroundImage: `url(${foreground})` }}
        /> */}

        {/* Title */}
        <div className="title-container" ref={titleRef}>
          <h1>Advanced Parallax</h1>
          <p>Scroll down to see the magic</p>
        </div>
      </section>
    </>
  );
}
