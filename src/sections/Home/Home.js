import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

import "./Home.scss";

const Home = () => {
  useEffect(() => {
    let homeAnime = anime.timeline({
      easing: "easeOutExpo",
      delay: 1700,
      autoplay: false,
    });
    homeAnime.add({
      targets: ".nameDiv",
      translateX: ["-30%", "0"],
      easing: "easeOutExpo",
    });
    homeAnime.add(
      {
        targets: ".app__navigation .navigation-dot",
        translateY: 120,
        easing: "easeInOutBack",
        delay: anime.stagger(400, { direction: "reverse" }),
      },
      "-=1000"
    );
    homeAnime.add(
      {
        targets: ".nameDiv1 .content p",
        translateY: ["-100%", "0"],
        opacity: [0, 1],
        easing: "easeOutExpo",
        delay: anime.stagger(600),
      },
      "-=2000"
    );

    setTimeout(homeAnimePlay, 3000);
    function homeAnimePlay() {
      homeAnime.play();
    }
  }, []);

  return (
    <section id="home">
      <div className="nameDiv">
        <div className="nameDiv1">
          <div className="content">
            <p className="greeting">Hi, I am</p>
            <p className="name">Kishore</p>
            <p className="role">
              Developer and Designer with solid experience building full-stack
              web applications using React, Next.js, Node.js, Firebase, and
              cloud platforms like Azure and AWS. Masters graduate with hands on
              exposure to production systems and AI-driven tooling. My current
              focus is on building GenAI applications by integrating Azure
              OpenAI, LangChain-style pipelines, vector databases, and Neo4j
              knowledge graphs to deliver smart, scalable solutions that elevate
              user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
