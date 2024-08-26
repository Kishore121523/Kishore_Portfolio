/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect } from "react";
import "./Work.scss";
import anime from "animejs/lib/anime.es.js";
import { useInView } from "react-intersection-observer";

import {
  Notezy,
  MathConf,
  donate,
  githubFinder,
  travel,
  weathery,
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

const Work = () => {
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

  const devBtn = (event) => {
    cardAnime.play();

    webRef.current.parentElement.classList.remove("displayNone");
    webRef.current.parentElement.classList.add("displayBlock");
    brandRef.current.parentElement.classList.add("displayNone");
    brandRef.current.parentElement.classList.remove("displayBlock");
    graphicRef.current.parentElement.classList.add("displayNone");
    graphicRef.current.parentElement.classList.remove("displayBlock");
    marketRef.current.parentElement.classList.add("displayNone");
    marketRef.current.parentElement.classList.remove("displayBlock");

    elements.forEach((el) => {
      if (el.classList.contains("activeBtn")) {
        el.classList.remove("activeBtn");
      }
      event.target.classList.add("activeBtn");
    });
  };

  const brandBtn = (event) => {
    cardAnime.play();

    webRef.current.parentElement.classList.add("displayNone");
    webRef.current.parentElement.classList.remove("displayBlock");
    brandRef.current.parentElement.classList.remove("displayNone");
    brandRef.current.parentElement.classList.add("displayBlock");
    graphicRef.current.parentElement.classList.add("displayNone");
    graphicRef.current.parentElement.classList.remove("displayBlock");
    marketRef.current.parentElement.classList.add("displayNone");
    marketRef.current.parentElement.classList.remove("displayBlock");

    elements.forEach((el) => {
      if (el.classList.contains("activeBtn")) {
        el.classList.remove("activeBtn");
      }
      event.target.classList.add("activeBtn");
    });
  };

  const graphicBtn = (event) => {
    cardAnime.play();

    webRef.current.parentElement.classList.add("displayNone");
    webRef.current.parentElement.classList.remove("displayBlock");
    graphicRef.current.parentElement.classList.remove("displayNone");
    graphicRef.current.parentElement.classList.add("displayBlock");
    brandRef.current.parentElement.classList.add("displayNone");
    brandRef.current.parentElement.classList.remove("displayBlock");
    marketRef.current.parentElement.classList.add("displayNone");
    marketRef.current.parentElement.classList.remove("displayBlock");

    elements.forEach((el) => {
      if (el.classList.contains("activeBtn")) {
        el.classList.remove("activeBtn");
      }
      event.target.classList.add("activeBtn");
    });
  };

  const marketBtn = (event) => {
    cardAnime.play();

    marketRef.current.parentElement.classList.remove("displayNone");
    marketRef.current.parentElement.classList.add("displayBlock");
    webRef.current.parentElement.classList.add("displayNone");
    webRef.current.parentElement.classList.remove("displayBlock");
    graphicRef.current.parentElement.classList.add("displayNone");
    graphicRef.current.parentElement.classList.remove("displayBlock");
    brandRef.current.parentElement.classList.add("displayNone");
    brandRef.current.parentElement.classList.remove("displayBlock");

    elements.forEach((el) => {
      if (el.classList.contains("activeBtn")) {
        el.classList.remove("activeBtn");
      }
      event.target.classList.add("activeBtn");
    });
  };

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
              <CardWork
                github="https://github.com/Kishore121523/Notezy"
                liveLink="https://chrome.google.com/webstore/detail/notezy/nlgngaailkikjkecgjogfdblapgalepl"
                heading="Notezy"
                desc="An CRUD Based Note Taking Exntension with modern UI"
                category="WebDev"
                image={Notezy}
                externalLink={true}
              ></CardWork>
              <CardWork
                liveLink="https://sastra.edu/ICWAGT2022/"
                github="https://github.com/Kishore121523/MathConference"
                heading="Math Conference"
                desc="Developed website for International Math Conference"
                category="WebDev"
                image={MathConf}
                externalLink={true}
              ></CardWork>
              <CardWork
                liveLink="https://kishore121523.github.io/Donate_spark/"
                github="https://github.com/Kishore121523/Donate_spark"
                heading="Don-Spark"
                desc="A Donation Based Website with payment integrated"
                category="WebDev"
                image={donate}
                externalLink={true}
              ></CardWork>

              <CardWork
                liveLink="https://kishore121523.github.io/Travel/"
                github="https://github.com/Kishore121523/Travel"
                heading="Travillie"
                desc="Webpage designed for a travel agency (Demo Project)s"
                category="WebDev"
                image={travel}
                externalLink={true}
              ></CardWork>
              <CardWork
                liveLink="https://weathery-6zsb.onrender.com/"
                github="https://github.com/Kishore121523/WeatherAppNode"
                heading="Weathery"
                desc="A modern weather app using Node.js and Handlebars"
                category="WebDev"
                image={weathery}
                externalLink={true}
              ></CardWork>
              <CardWork
                github="https://github.com/Kishore121523/Github-Users-Finder"
                liveLink="https://kishore121523.github.io/Github-Users-Finder/"
                heading="Github Profile Finder"
                desc="Displays the name and general information of a user signed up on Github."
                category="WebDev"
                image={githubFinder}
                externalLink={true}
              ></CardWork>
              <CardWork
                liveLink="https://kishore121523.github.io/Professional-Website---Rice-Mill-Association/"
                github="https://github.com/Kishore121523/Professional-Website---Rice-Mill-Association"
                heading="Rice Mill Site"
                desc="An CRUD Based Note Taking Exntension with modern UI"
                category="WebDev"
                image={riceMill}
                externalLink={true}
              ></CardWork>
            </div>
          </div>
          <div className="displayNone">
            <div ref={brandRef} id="brand" className="work-cards">
              <CardWork
                heading="Tent Card"
                desc="Tent Card Designed for a startup"
                image={a_brand}
                category="Branding"
              ></CardWork>
              <CardWork
                heading="Thank you card!"
                desc="A token of love for ya all, clean and pleasant looking design!"
                image={b_brand}
                category="Branding"
              ></CardWork>
              <CardWork
                heading="Email Promotion"
                desc="Creatively written and designed promotion"
                image={c_brand}
                category="Branding"
              ></CardWork>
              <CardWork
                heading="Menu Card"
                desc="Menu Card Design for a Multicuisine Restaurant (Pitch)"
                image={d_brand}
                category="Branding"
              ></CardWork>
              <CardWork
                heading="Offer Promotion"
                desc="Make it pop! Make it crisp! Make it Clear!"
                image={e_brand}
                category="Branding"
              ></CardWork>
              <CardWork
                heading="Menu Card"
                desc="Menu Card Design for a Multicuisine Restaurant (Pitch)"
                image={f_brand}
                category="Branding"
              ></CardWork>
              <CardWork
                heading="Visiting Card"
                desc="Visiting card for employess for a Finance company"
                image={g_brand}
                category="Branding"
              ></CardWork>
            </div>
          </div>
          <div className="displayNone">
            <div ref={graphicRef} id="graphic" className="work-cards">
              <CardWork
                heading="A Gentle Reminder."
                desc="Choose colors in accordance to the design's idea"
                image={a_GD}
                category="Graphic Design"
              ></CardWork>
              <CardWork
                heading="Afghan? Half-gone?"
                desc="Creativity and a Good Design, always goes hand in hand"
                image={b_GD}
                category="Graphic Design"
              ></CardWork>
              <CardWork
                heading="Practice"
                desc="The design talks..."
                image={c_GD}
                category="Graphic Design"
              ></CardWork>
              <CardWork
                heading="Pride"
                desc="A minimal design, yet it conveys all the details precisely"
                image={d_GD}
                category="Graphic Design"
              ></CardWork>
              <CardWork
                heading="Social-Me"
                desc="Using typography and contrast to bring out the idealogy behind"
                image={e_GD}
                category="Graphic Design"
              ></CardWork>
              <CardWork
                heading="Chaiii!"
                desc="A poster for all Coffee Lovers out there!"
                image={f_GD}
                category="Graphic Design"
              ></CardWork>
              <CardWork
                heading="10 to 30!"
                desc="A great mix of colors, typography and illustration!"
                image={g_GD}
                category="Graphic Design"
              ></CardWork>
            </div>
          </div>
          <div className="displayNone">
            <div ref={marketRef} id="market" className="work-cards">
              <CardWork
                heading="Diet, what?"
                desc="Social Media Marketing for a startup."
                image={a_MR}
                category="Marketing"
              ></CardWork>
              <CardWork
                heading="We got your back!"
                desc="Minimal yet Self Explanative design!"
                image={b_MR}
                category="Marketing"
              ></CardWork>
              <CardWork
                heading="Who's joining the club?"
                desc="Never forget to stick with the current trend!"
                image={c_MR}
                category="Marketing"
              ></CardWork>
              <CardWork
                heading="Festive Post!"
                desc="A Ganesha designed using the company's logo."
                image={d_MR}
                category="Marketing"
              ></CardWork>
              <CardWork
                heading="Ramsayyy!"
                desc="A design which instantly connects with the consumers"
                image={e_MR}
                category="Marketing"
              ></CardWork>
              <CardWork
                heading="Food meets Music"
                desc="Good Design means Good Business"
                image={f_MR}
                category="Marketing"
              ></CardWork>

              <CardWork
                heading="Facts and Stats"
                desc="Modern design for showcasing stats using glassmorphism style!"
                image={h_MR}
                category="Marketing"
              ></CardWork>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
