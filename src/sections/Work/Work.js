/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef, useEffect } from "react";
import "./Work.scss";
import anime from "animejs/lib/anime.es.js";
import { useInView } from "react-intersection-observer";

import {
  Notezy,
  MathConf,
  wealthSimple,
  wist,
  vaultic,
  nestle,
  a_GD,
  b_GD,
  e_GD,
  a_MR,
  b_MR,
  d_MR,
} from "../../assets";

import CardWork from "../../components/CardWork/CardWork";

// NOTE: Removed brandingProjects import.
// We still use projects, graphicDesignProjects, and marketingProjects.
import { devProjects, combinedGraphicProjects } from "../../utils";

const Work = () => {
  // Images for Development & AI sections
  const projectImage = {
    wist,
    vaultic,
    wealthSimple,
    Notezy,
    MathConf,
    nestle,
  };

  // Images for the combined Graphic Design section (merge former GD + MR)
  const creativeImage = {
    a_GD,
    b_GD,
    e_GD,
    a_MR,
    b_MR,
    d_MR,
  };

  // Combined Graphic Design = previous Graphic + Marketing

  const { ref: workSection, inView: isIntersectingWork } = useInView({
    threshold: 0.2,
  });

  const webRef = useRef();
  // const aiRef = useRef();
  const graphicRef = useRef();

  // Collect buttons after mount (safe inside useEffect in real apps),
  // but this works as-is since class names are static and page scoped.
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

    const sections = [webRef, graphicRef]; // <--- updated
    // const sections = [webRef, aiRef, graphicRef]; // <--- updated

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
  // const aiBtn = (event) => toggleSection(event, aiRef); // <--- new
  const graphicBtn = (event) => toggleSection(event, graphicRef);

  return (
    <section ref={workSection} id="work">
      <div className="wrapper">
        <div className="work-content-main">
          <p className="work-head">
            My <span>Portfolio</span> Section
          </p>

          <ul className="work-categories">
            <li>
              <a className="aiBtn workBtn" onClick={devBtn}>
                AI & WebDev
              </a>
            </li>
            {/* <li>
              <a className="webdevBtn activeBtn workBtn" onClick={devBtn}>
                Development
              </a>
            </li> */}
            <li>
              <a className="graphicBtn workBtn" onClick={graphicBtn}>
                Graphic Design
              </a>
            </li>
          </ul>

          {/* Development */}
          <div className="displayBlock">
            <div ref={webRef} id="ai" className="work-cards">
              {devProjects.map((project, index) => (
                <CardWork
                  key={index}
                  {...project}
                  image={projectImage[project.image]}
                />
              ))}
            </div>
          </div>

          {/* <div className="displayNone">
            <div ref={webRef} id="webdev" className="work-cards">
              {aiProjects.map((project, index) => (
                <CardWork
                  key={index}
                  {...project}
                  image={projectImage[project.image]}
                />
              ))}
            </div>
          </div> */}

          {/* Graphic Design (Graphic + Marketing combined) */}
          <div className="displayNone">
            <div ref={graphicRef} id="graphic" className="work-cards">
              {combinedGraphicProjects.map((project, index) => (
                <CardWork
                  key={index}
                  {...project}
                  image={creativeImage[project.image]}
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
