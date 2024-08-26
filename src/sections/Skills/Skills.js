import React, { useEffect } from "react";
import "./Skills.scss";
import SkillImg from "./SkillImg";
import SkillsDesc from "./SkillsDesc";
import anime from "animejs/lib/anime.es.js";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  let imgArr = [
    "html",
    "javascript",
    "react",
    "sass",
    "node",
    "express",
    "api",
    "git",
    "django",
    "python",
    "tf",
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
        // translateX: ["100%", "0%"],
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
            <div className="skills-logos">
              {imgArr.map((data) => (
                <SkillImg src={data}></SkillImg>
              ))}
            </div>
            <div className="skills-desc scrollbar" id="style-4">
              <div className="skills-year">
                <p className="skills-current-year">2023</p>
                <div className="skills-year-desc">
                  <SkillsDesc
                    name="Advanced Learning Algorithms"
                    provider="Stanford Online"
                  ></SkillsDesc>
                  <br />
                  <SkillsDesc
                    name="The Complete Node.js Developer Course (3rd Edition)"
                    provider="Udemy"
                  ></SkillsDesc>
                  <br />
                  <SkillsDesc
                    name="Supervised Machine Learning: Regression and Classification"
                    provider="Stanford Online"
                  ></SkillsDesc>
                </div>
              </div>
              <div className="skills-year">
                <p className="skills-current-year">2022</p>
                <div className="skills-year-desc">
                  <SkillsDesc
                    name="Machine Learning OnRamp"
                    provider="MathWorks"
                  ></SkillsDesc>
                  <br />
                  <SkillsDesc
                    name="Hackerrank CSS Certificate"
                    provider="HackerRank"
                  ></SkillsDesc>
                  <br />
                  <SkillsDesc
                    name="Trinal Web Pvt Limited"
                    provider="React Developer and UI/UX Designer"
                  ></SkillsDesc>
                  <br />
                  <SkillsDesc
                    name="Advanced Application Analyst (Intern)"
                    provider="Accenture"
                  ></SkillsDesc>
                </div>
              </div>

              <div className="skills-year">
                <p className="skills-current-year">2021</p>

                <div className="skills-year-desc">
                  <SkillsDesc
                    name="&nbsp;Graduate Rotational Internship Program"
                    provider="&nbsp;Web Developer"
                  ></SkillsDesc>
                  <br />
                  <SkillsDesc
                    name="&nbsp;Graphic Deisgner"
                    provider="&nbsp;Smoose (Startup)"
                  ></SkillsDesc>
                  <br />
                  <SkillsDesc
                    name="&nbsp;Web Development Intern"
                    provider="&nbsp;Sparks Foundation"
                  ></SkillsDesc>
                </div>
              </div>
              <div className="skills-year">
                <p className="skills-current-year">2020</p>
                <div className="skills-year-desc">
                  <SkillsDesc
                    name="Adobe XD - UI/UX Designing"
                    provider="Udemy"
                  ></SkillsDesc>
                  <br />
                  <SkillsDesc
                    name="JavaScript-ES6, Advanced CSS"
                    provider="Udemy"
                  ></SkillsDesc>
                  <br />
                  <SkillsDesc
                    name="Bootstrap-4 with Projects"
                    provider="Udemy"
                  ></SkillsDesc>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
