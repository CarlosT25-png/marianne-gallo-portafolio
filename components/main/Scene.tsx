"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Scene.css";
import Landing from "./Landing";
import MyProjects from "./MyProjects";
import Slide from "./carouselSlides/Slide";
import { texts } from '../../utils/constants/texts'
import Nav from "./Nav";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const pixelsPause = 300;
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          start: `top+=${pixelsPause} top`,
          end: () => "+=" + window.innerWidth * panels.length,
        },
      });
      ScrollTrigger.create({
        trigger: slider.current,
        end: () => "+=" + (window.innerWidth * panels.length + pixelsPause),
        pin: true,
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App" ref={component}>
      <Nav />
      <div>
        <Landing />
      </div>
      <div ref={slider} className="container">
        <div className="panel carrer-slide">
          <Slide {...texts[0]} />
        </div>
        <div className="panel soli-slide">
          <Slide {...texts[1]} />
        </div>
        <div className="panel roots-slide">
          <Slide {...texts[2]} />
        </div>
        <div className="panel meet-me-slide">
          <Slide {...texts[3]} />
        </div>
        <div className="panel goals-slide">
          <Slide {...texts[4]} />
        </div>
      </div>
      <MyProjects />
      <Footer />
    </div>
  );
}
