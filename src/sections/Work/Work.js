/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect } from "react";
import "./Work.scss";
import anime from "animejs/lib/anime.es.js";
import { useInView } from "react-intersection-observer";

import {
  Notezy,
  MathConf,
  wealthSimple,
  githubFinder,
  vaultic,
  riceMill,
  a_brand,
  b_brand,
  c_brand,
  d_brand,
  e_brand,
  f_brand,
  g_brand,
  a_GD,
  b_GD,
  c_GD,
  d_GD,
  e_GD,
  f_GD,
  g_GD,
  a_MR,
  b_MR,
  c_MR,
  d_MR,
  e_MR,
  f_MR,
  h_MR,
} from "../../assets";

import CardWork from "../../components/CardWork/CardWork";
import {
  brandingProjects,
  projects,
  graphicDesignProjects,
  marketingProjects,
} from "../../utils";

const Work = () => {
  const projectImage = {
    vaultic,
    wealthSimple,
    Notezy,
    MathConf,
    githubFinder,
    riceMill,
  };

  const brandingImage = {
    a_brand,
    b_brand,
    c_brand,
    d_brand,
    e_brand,
    f_brand,
    g_brand,
  };
  const graphicImage = {
    a_GD,
    b_GD,
    c_GD,
    d_GD,
    e_GD,
    f_GD,
    g_GD,
  };
  const marketingImage = {
    a_MR,
    b_MR,
    c_MR,
    d_MR,
    e_MR,
    f_MR,
    h_MR,
  };

  const { ref: workSection, inView: isIntersectingWork } = useInView({
    threshold: 0.2,
  });

  const webRef = useRef();
  const brandRef = useRef();
  const graphicRef = useRef();
  const marketRef = useRef();
  const elements = document.querySelectorAll(".workBtn");

  useEffect(() => {
    let workAnimation = anime.timeline({
      easing: "easeOutExpo",
      duration: 3000,
      autoplay: false,
    });

    workAnimation.add({
      targets: ".work-content-main .work-head",
      opacity: 1,
      easing: "easeInQuart",
      duration: 700,
    });

    workAnimation.add(
      {
        targets: ".work-content-main .work-categories li",
        opacity: 1,
        delay: anime.stagger(500),
        easing: "easeOutQuart",
        duration: 200,
      },
      "+=200"
    );

    workAnimation.add(
      {
        targets: ".work-content-main .card-outer",
        opacity: 1,
        easing: "easeOutQuart",
        duration: 100,
      },
      "+=200"
    );

    anime({
      targets: "#webdev",
      opacity: [0, 1],
      translateY: ["100%", "0%"],
      duration: 100,
    });

    if (isIntersectingWork) {
      workAnimation.play();
    } else {
      return;
    }
  }, [isIntersectingWork]);

  let cardAnime = anime({
    targets: `.work-cards`,
    opacity: [0, 1],
    translateY: ["5rem", "0%"],
    duration: 100,
    easing: "linear",
    delay: anime.stagger(100),
    autoplay: false,
  });

  cardAnime.play();

  const toggleSection = (event, activeRef) => {
    cardAnime.play();

    const sections = [webRef, brandRef, graphicRef, marketRef];

    sections.forEach((ref) => {
      if (ref === activeRef) {
        ref.current.parentElement.classList.remove("displayNone");
        ref.current.parentElement.classList.add("displayBlock");
      } else {
        ref.current.parentElement.classList.add("displayNone");
        ref.current.parentElement.classList.remove("displayBlock");
      }
    });

    elements.forEach((el) => el.classList.remove("activeBtn"));
    event.target.classList.add("activeBtn");
  };

  // Assigning functions
  const devBtn = (event) => toggleSection(event, webRef);
  const brandBtn = (event) => toggleSection(event, brandRef);
  const graphicBtn = (event) => toggleSection(event, graphicRef);
  const marketBtn = (event) => toggleSection(event, marketRef);

  return (
    <section ref={workSection} id="work">
      <div className="wrapper">
        <div className="work-content-main">
          <p className="work-head">
            My <span>Portfolio</span> Section
          </p>

          <ul className="work-categories">
            <li>
              <a className="webdevBtn activeBtn workBtn" onClick={devBtn}>
                Development
              </a>
            </li>
            <li>
              <a className="brandBtn workBtn" onClick={brandBtn}>
                Branding
              </a>
            </li>
            <li>
              <a className="graphicBtn workBtn" onClick={graphicBtn}>
                Graphic Design
              </a>
            </li>
            <li>
              <a className="marketBtn workBtn" onClick={marketBtn}>
                Marketing
              </a>
            </li>
          </ul>

          <div className="displayBlock">
            <div ref={webRef} id="webdev" className="work-cards">
              {projects.map((project, index) => (
                <CardWork
                  key={index}
                  {...project}
                  image={projectImage[project.image]}
                />
              ))}
            </div>
          </div>

          <div className="displayNone">
            <div ref={brandRef} id="brand" className="work-cards">
              {brandingProjects.map((project, index) => (
                <CardWork
                  key={index}
                  {...project}
                  image={brandingImage[project.image]}
                />
              ))}
            </div>
          </div>

          <div className="displayNone">
            <div ref={graphicRef} id="graphic" className="work-cards">
              {graphicDesignProjects.map((project, index) => (
                <CardWork
                  key={index}
                  {...project}
                  image={graphicImage[project.image]}
                />
              ))}
            </div>
          </div>

          <div className="displayNone">
            <div ref={marketRef} id="market" className="work-cards">
              {marketingProjects.map((project, index) => (
                <CardWork
                  key={index}
                  {...project}
                  image={marketingImage[project.image]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
