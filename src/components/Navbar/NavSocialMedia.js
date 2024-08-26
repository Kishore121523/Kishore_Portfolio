import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const NavSocialMedia = ({ name, link }) => {
  if (name === "faInstagram") {
    var iconName = faInstagram;
  }
  if (name === "faGithub") {
    iconName = faGithub;
  }
  if (name === "faLinkedin") {
    iconName = faLinkedin;
  }
  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className="fontAwesomeIcon fontAwesomeIconContact"
          icon={iconName}
        />
      </a>
    </li>
  );
};

export default NavSocialMedia;
