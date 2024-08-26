import React from "react";
import "./Preloader.scss";
import anime from "animejs/lib/anime.es.js";
import $ from "jquery";
import { useRef, useEffect } from "react";

const Preloader = () => {
  const loaderWrapper = useRef(null);
  useEffect(() => {
    anime({
      targets: ".loader",
      translateY: ["0% ", "30%"],
      easing: "easeInOutBack",
      loop: true,
      direction: "alternate",
      delay: anime.stagger(200),
    });
    anime({
      targets: ".loader-wrapper",
      translateY: ["0% ", "20%"],
      easing: "linear",
      loop: true,
      duration: 1500,
      direction: "alternate",
    });

    $(window).on("unload", function () {
      $(window).scrollTop(0);
    });

    setTimeout(preLoadPlay, 3000);

    let preLoad = anime.timeline({
      easing: "easeOutExpo",
      duration: 1000,
      autoplay: false,
    });

    preLoad.add({
      targets: ".pre-loader",
      opacity: ["1", "0"],
      endDelay: 300,
    });

    preLoad.add({
      targets: "body .app-wrapper",
      opacity: ["0", "1"],
      duration: 1000,
      delay: anime.stagger(1000),
    });

    function preLoadPlay() {
      preLoad.play();
      setTimeout(() => {
        loaderWrapper.current.classList.add("displayNone");
      }, 1200);
    }
  }, []);

  return (
    <div ref={loaderWrapper} className="pre-loader">
      <div className="loader-wrapper">
        <div className="loader">
          <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
          </svg>
        </div>

        <div className="loader triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>

        <div className="loader">
          <svg viewBox="0 0 80 80">
            <rect x="8" y="8" width="64" height="64"></rect>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
