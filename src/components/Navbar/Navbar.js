/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useRef } from "react";
import "./Navbar.scss";

import Klogo from "../Klogo";
import NavLink from "./NavLink";
import NavSocialMedia from "./NavSocialMedia";

const Navbar = () => {
  const menu = useRef(null);
  const close = useRef(null);
  const nav = useRef(null);

  const handleClickClose = () => {
    nav.current.classList.remove("open-nav");
  };
  const handleClickOpen = () => {
    nav.current.classList.add("open-nav");
  };

  return (
    <header>
      {/* Logo in left */}
      <a href="#" className="logo">
        <Klogo fillColor="#d7d5d5"></Klogo>
      </a>

      <nav ref={nav}>
        {/* close icon on sideBar */}
        <svg
          ref={close}
          className="close"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleClickClose}
        >
          <path
            d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4L14.6 16L8 22.6L9.4 24L16 17.4L22.6 24L24 22.6L17.4 16L24 9.4Z"
            fill="black"
          />
        </svg>

        <ul id="navLinks" className="navBarLinks">
          <NavLink name="home" id="#home"></NavLink>
          <NavLink name="about" id="#about"></NavLink>
          <NavLink name="work" id="#work"></NavLink>
          <NavLink name="skills" id="#skills"></NavLink>
          <NavLink name="contact" id="#contact"></NavLink>
        </ul>

        <ul className="socialMedia">
          {/* social media icons on sideBar */}
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
      </nav>

      {/* Hamburger icon */}
      <svg
        ref={menu}
        className="menu"
        width="48"
        height="32"
        viewBox="0 0 48 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClickOpen}
      >
        <path
          d="M24 32H0V26.6667H24V32ZM48 18.6667H0V13.3333H48V18.6667ZM48 5.33333H24V0H48V5.33333Z"
          fill="white"
        />
      </svg>
    </header>
  );
};

export default Navbar;
