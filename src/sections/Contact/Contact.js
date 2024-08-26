import React, { useEffect } from "react";
import "./Contact.scss";
import NavSocialMedia from "../../components/Navbar/NavSocialMedia";
import { useInView } from "react-intersection-observer";
import anime from "animejs/lib/anime.es.js";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const { ref: contactSection, inView: isIntersectingContact } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    let contactAnimation = anime.timeline({
      easing: "easeOutExpo",
      duration: 1000,
      autoplay: false,
      // loop: true,
    });
    contactAnimation.add({
      targets: ".contact-logo",
      opacity: 1,
      easing: "easeOutBack",
      duration: 1000,
    });

    contactAnimation.add({
      targets: ".contact-logo svg path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: anime.stagger(1000),
      direction: "alternate",
      autoplay: false,
    });

    contactAnimation.add({
      targets: ".contact-logo svg path",
      easing: "easeInOutQuad",
      duration: 1000,
      fill: "#adadad",
      opacity: 1,
      stroke: "#363636",
      delay: anime.stagger(1000),
      direction: "alternate",
      autoplay: false,
    });

    contactAnimation.add(
      {
        targets: ".contact-phone",
        opacity: 1,
        easing: "easeOutBack",
        duration: 400,
      },
      "-50"
    );

    contactAnimation.add({
      targets: ".contact-social-media .fontAwesomeIconContact",
      easing: "easeOutBack",
      opacity: 1,
      delay: anime.stagger(500),
      direction: "reverse",
      duration: 200,
    });

    contactAnimation.add({
      targets: ".copyright p",
      easing: "easeOutBack",
      opacity: 1,
      delay: anime.stagger(500),
      direction: "reverse",
      duration: 400,
    });

    if (isIntersectingContact) {
      contactAnimation.play();
    } else {
      return;
    }
  }, [isIntersectingContact]);

  return (
    <section ref={contactSection} id="contact">
      <div className="wrapper">
        <div className="contact-content">
          <div className="contact-head-div">
            <motion.div
              className="contact-logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              drag
              dragSnapToOrigin
              whileDrag={{ scale: 1.3 }}
            >
              <svg
                viewBox="0 0 101.17 129.44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_19_2)">
                  <path
                    className="rect"
                    stroke="#f4ae95"
                    d="M15.89 13.7H1.89C1.65244 13.6865 1.41458 13.7206 1.19033 13.8001C0.966078 13.8797 0.759937 14.0031 0.583959 14.1633C0.407981 14.3234 0.265699 14.5171 0.165431 14.7328C0.0651639 14.9486 0.00892394 15.1822 0 15.42L0 114.36C0.00901473 114.595 0.0642974 114.826 0.162686 115.04C0.261074 115.254 0.400637 115.446 0.573391 115.606C0.746145 115.765 0.948701 115.89 1.16947 115.971C1.39024 116.052 1.62489 116.089 1.86 116.08H15.86C16.0951 116.089 16.3298 116.052 16.5505 115.971C16.7713 115.89 16.9739 115.765 17.1466 115.606C17.3194 115.446 17.4589 115.254 17.5573 115.04C17.6557 114.826 17.711 114.595 17.72 114.36V15.42C17.7018 14.9505 17.4996 14.507 17.1573 14.1852C16.8149 13.8634 16.3597 13.6892 15.89 13.7V13.7Z"
                  />
                  <path
                    className="kLogo"
                    stroke="#f4ae95"
                    d="M24.81 46.49V1.42001C24.8126 1.04421 24.9631 0.684544 25.2288 0.418808C25.4945 0.153072 25.8542 0.0026241 26.23 5.19697e-06H99.75C99.9352 -0.00131269 100.119 0.0338545 100.29 0.103499C100.462 0.173143 100.618 0.2759 100.75 0.405903C100.882 0.535906 100.987 0.690609 101.059 0.861177C101.131 1.03175 101.169 1.21484 101.17 1.40001V128C101.167 128.376 101.017 128.735 100.751 129.001C100.485 129.267 100.126 129.417 99.75 129.42H26.23C25.855 129.415 25.4968 129.264 25.2316 128.998C24.9664 128.733 24.8152 128.375 24.81 128V81.82C24.8067 81.5157 24.9012 81.2183 25.0797 80.9718C25.2582 80.7253 25.5111 80.5427 25.8013 80.4508C26.0915 80.3589 26.4034 80.3627 26.6913 80.4616C26.9791 80.5605 27.2276 80.7492 27.4 81L51 115.11C51.1295 115.298 51.3028 115.452 51.5048 115.558C51.7069 115.664 51.9317 115.72 52.16 115.72H71.16C71.3469 115.72 71.5319 115.683 71.7042 115.611C71.8766 115.539 72.033 115.433 72.1642 115.3C72.2953 115.167 72.3988 115.009 72.4685 114.836C72.5381 114.662 72.5726 114.477 72.57 114.29C72.5672 114.005 72.4803 113.726 72.32 113.49L38.48 65.24C38.3052 65.0004 38.2111 64.7115 38.2111 64.415C38.2111 64.1185 38.3052 63.8296 38.48 63.59L72.26 17.13C72.3719 16.9783 72.4524 16.8058 72.497 16.6225C72.5415 16.4393 72.5491 16.2491 72.5193 16.0629C72.4895 15.8768 72.4229 15.6984 72.3235 15.5382C72.224 15.378 72.0936 15.2393 71.94 15.13C71.7002 14.9519 71.4087 14.8571 71.11 14.86H52.88C52.6626 14.86 52.4483 14.9106 52.2539 15.0078C52.0595 15.105 51.8904 15.2461 51.76 15.42L27.36 47.35C27.247 47.4998 27.1054 47.6258 26.9434 47.7205C26.7814 47.8153 26.6023 47.877 26.4163 47.9021C26.2303 47.9272 26.0412 47.9152 25.8599 47.8668C25.6786 47.8184 25.5087 47.7345 25.36 47.62C25.1889 47.4855 25.0505 47.3139 24.9552 47.1182C24.8599 46.9225 24.8103 46.7077 24.81 46.49V46.49Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_19_2">
                    <rect width="101.17" height="129.42" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </motion.div>
            {/* 
            <div className="contact-head">
              <p>Let's Get in Touch</p>
            </div> */}

            <div className="contact-top">
              <div className="contact-phone">
                <FontAwesomeIcon
                  className="fontAwesomeIconPhone"
                  icon={faPhone}
                />
                <p className="phone-head">Phone</p>
                <p className="phone-content text-muted">+1 8073581508</p>
              </div>
            </div>
          </div>

          <div className="contact-main">
            <div></div>
            <div className="contactNameDiv1">
              <div className="contactContent">
                <p className="name">Contact me?</p>
                <p className="role">Write a mail</p>
                <div>
                  <a
                    data-hover
                    className="email-content"
                    href="mailto:kishore231512@gmail.com"
                  >
                    kishore231512@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-bottom">
            <div className="contact-social-media">
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
            </div>

            <div className="copyright">
              <p>
                &copy;<span id="year"></span> KISHORE
              </p>
              <p>ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
