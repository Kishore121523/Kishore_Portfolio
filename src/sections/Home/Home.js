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
      translateX: ["-100%", "0"],
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
            <p className="name">- Kishore -</p>
            <p className="role">
              Developer and Designer with 3 years of experience. I pride myself
              on my ability to create visually appealing and user-friendly
              designs that are both functional and visually pleasing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
