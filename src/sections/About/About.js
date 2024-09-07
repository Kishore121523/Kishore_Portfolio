import { React, useState, useEffect } from "react";
import { grid1, grid2, grid3, grid4, tick, copy } from "../../assets";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import anime from "animejs/lib/anime.es.js";
import Globe from "react-globe.gl";

const AboutNew = () => {
  const [hasCopied, sethasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("kishore231512@gmail.com");
    sethasCopied(true);

    setTimeout(() => {
      sethasCopied(false);
    }, 2000);
  };

  const { ref: aboutSection, inView: isIntersectingSkills } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    let aboutAnimation = anime.timeline({
      easing: "easeOutExpo",
      duration: 8000,
      autoplay: false,
    });

    aboutAnimation.add({
      targets: ".grid1",
      easing: "easeInOutQuad",
      opacity: [0, 1],
      translateX: ["-30%", "0%"],
      duration: 1500,
    });
    aboutAnimation.add(
      {
        targets: ".grid4",
        easing: "easeInOutQuad",
        opacity: [0, 1],
        translateX: ["-30%", "0%"],
        duration: 1500,
      },
      "-100"
    );
    aboutAnimation.add(
      {
        targets: ".grid2",
        easing: "easeInOutQuad",
        opacity: [0, 1],
        translateY: ["-30%", "0%"],
        duration: 1500,
      },
      "-100"
    );
    aboutAnimation.add(
      {
        targets: ".grid3",
        easing: "easeInOutQuad",
        opacity: [0, 1],
        translateX: ["30%", "0%"],
        duration: 1500,
      },
      "-100"
    );

    aboutAnimation.add(
      {
        targets: ".grid5",
        easing: "easeInOutQuad",
        opacity: [0, 1],
        translateY: ["30%", "0%"],
        duration: 1500,
      },
      "-100"
    );

    if (isIntersectingSkills) {
      aboutAnimation.play();
      return;
    }
  }, [isIntersectingSkills]);

  return (
    <section
      ref={aboutSection}
      id="about"
      className="lg:py-[3.5rem] lg:mt-[1rem] lg:px-[8rem] px-10"
    >
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container grid1">
            <img
              src={grid1}
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain "
            />
            <div>
              <p className="grid-headtext">Hi, I'm Kishore</p>
              <p className="grid-subtext">
                Hey, I’m a web developer and designer with a knack for turning
                ideas into sleek, functional websites. Let’s make the internet a
                little more awesome together!
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 grid2">
          <div className="grid-container">
            <img
              src={grid2}
              alt="grid2"
              className="w-full mx-auto sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I work with a variety of languages, frameworks, and tools to
                build scalable, reliable apps that fit perfectly into the modern
                web puzzle.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4 grid3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 48.380894,
                    lng: -89.247681,
                    text: "I'm here!",
                    size: 2000,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most time zones!
              </p>
              <p className="grid-subtext">
                I'm based in Canada with remote work available.
              </p>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
              >
                <button className={`btn w-full mt-10 text-[18px]`}>
                  <span className="relative flex h-3 w-3">
                    <span className="btn-ping"></span>
                    <span className="btn-ping_dot"></span>
                  </span>
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3 grid4">
          <div className="grid-container">
            <img
              src={grid3}
              alt="grid3"
              className="w-full sm:h-[266px] h-full object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                Code is my playground, and I love building cool stuff with it.
                It’s more than a job - it’s what that gets me excited every day.
                I’m always exploring new tech and pushing my skills to the next
                level!
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2 grid5">
          <div className="grid-container">
            <img
              src={grid4}
              alt="grid4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? tick : copy} alt="copy" />
                <p className="lg:text-xl md:text-lg font-medium text-white-600">
                  kishore231512@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNew;
