import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs/lib/anime.es.js";
import { motion } from "framer-motion";

import resume from "../../assets/Resume.pdf";

import "./About.scss";

import NavSocialMedia from "../../components/Navbar/NavSocialMedia";
import AboutSvgLogo from "./AboutSvgLogo";
import avatar from "../../assets/avatar.png";

const About = () => {
  const { ref: aboutSection, inView: isIntersecting } = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    // Box rotate
    let rotate = anime({
      targets: ".box",
      width: "100%",
      backgroundColor: "#0f0f0f",
      delay: anime.stagger(100),
      duration: 1000,
      autoplay: false,
      loop: 3,
    });

    //About line anim
    let lineAnime = anime({
      targets: ".about-head-hr",
      width: "45%",
      duration: 4000,
      autoplay: false,
    });

    //About name color change
    let aboutNameAnime = anime({
      targets: ".about-name",
      color: "#f4ae95",
      duration: 4000,
      autoplay: false,
    });

    let avatarAnime = anime({
      targets: ".avatar",
      opacity: 1,
      duration: 1000,
      autoplay: false,
    });

    if (isIntersecting) {
      rotate.restart();
      lineAnime.play();
      avatarAnime.play();
      aboutNameAnime.play();
    } else {
      return;
    }
  }, [isIntersecting]);

  return (
    <section ref={aboutSection} id="about">
      <div className="wrapper">
        <div className="contentAbout">
          <p className="about-head">Developer - Designer</p>
          <div className="nameAbout">
            <p className="about-name">Kishore</p>
            <div className="avatar">
              <motion.img
                className="avatarImg"
                src={avatar}
                alt="Avatar"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                drag
                dragSnapToOrigin
                whileDrag={{ scale: 1.3 }}
              />
            </div>
          </div>

          <hr className="about-head-hr" />
          <p className="about-content">
            Thank you for visiting my website! Scroll down to see my
            <span> Portfolio section</span>. It is constantly updated with my
            latest and relevant projects, so it's a great way to stay informed
            about my recent works.
          </p>

          <div className="about-contact">
            <ul>
              <NavSocialMedia
                name="faLinkedin"
                link="https://www.linkedin.com/in/kishore-yogeswaran-7946291a6/"
              ></NavSocialMedia>
              <NavSocialMedia
                name="faGithub"
                link="https://github.com/Kishore121523"
              ></NavSocialMedia>
              <NavSocialMedia
                name="faInstagram"
                link="https://www.instagram.com/_kishoredesigns_/"
              ></NavSocialMedia>
            </ul>
            <div className="line"></div>
            <a className="cvLink" href={resume} download>
              My Resume
            </a>
          </div>
        </div>
      </div>

      <AboutSvgLogo></AboutSvgLogo>

      <div className="sectionAbout">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </section>
  );
};

export default About;
