import React, { useEffect } from "react";
import "./Skills.scss";
import SkillImg from "./SkillImg";
import SkillsDesc from "./SkillsDesc";
import anime from "animejs/lib/anime.es.js";
import { useInView } from "react-intersection-observer";
import { skillsData } from "../../utils";

const Skills = () => {
  let imgArr = [
    "html",
    "javascript",
    "react",
    "next",
    "tailwind",
    "sass",
    "node",
    "express",
    "kotlin",
    "api",
    "git",
    "django",
    "figma",
    "cpp",
    "ai",
    "ps",
    "xd",
  ];
  const { ref: skillSection, inView: isIntersectingSkills } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    let skillAnimation = anime.timeline({
      easing: "easeOutExpo",
      duration: 8000,
      autoplay: false,
    });

    skillAnimation.add({
      targets: ".skills-head",
      opacity: 1,
      easing: "easeOutBack",
      duration: 2000,
    });

    skillAnimation.add(
      {
        targets: ".skills-head-hr",
        width: "90%",
        border: "1px solid",
        opacity: 1,
        color: "#f4ae95",
        duration: 1800,
      },
      "-=1800"
    );

    skillAnimation.add(
      {
        targets: ".skills-desc",
        height: "372.75px",
        opacity: 1,
        borderLeft: "1px solid",
        color: "#f4ae95",
        easing: "easeOutBack",
        duration: 2000,
      },
      "-=1300"
    );

    skillAnimation.add(
      {
        targets: ".skills-logos img",
        opacity: 1,
        delay: anime.stagger(100, { start: 100 }, { from: "center" }),
        easing: "easeOutBack",
        duration: 500,
      },
      "-=1000"
    );

    skillAnimation.add(
      {
        targets: ".skills-desc .skills-year",
        opacity: 1,
        delay: anime.stagger(500, { start: 100 }),
        translate: 0,
        duration: 1000,
      },
      "-=1000"
    );

    if (isIntersectingSkills) {
      skillAnimation.play();
    } else {
      return;
    }
  }, [isIntersectingSkills]);

  return (
    <section ref={skillSection} id="skills">
      <div className="wrapper">
        <div className="skills-content">
          <div className="skills-head-div">
            <p className="skills-head">
              Skills <span>&</span> Timeline
            </p>
            <hr className="skills-head-hr" />
          </div>
          <div className="skills-main">
            <div className="skills-logos grid-container-skills">
              {imgArr.map((data) => (
                <SkillImg src={data}></SkillImg>
              ))}
            </div>

            <div className="skills-desc scrollbar" id="style-4">
              {skillsData.map((yearData) => (
                <div className="skills-year" key={yearData.year}>
                  <p className="skills-current-year">{yearData.year}</p>
                  <div className="skills-year-desc">
                    {yearData.details.map((item, index) => (
                      <div key={index}>
                        <SkillsDesc name={item.name} provider={item.provider} />
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
