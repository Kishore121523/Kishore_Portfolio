import React from "react";
import { Link } from "react-scroll";

const DotComponent = ({ id, name }) => {
  return (
    <Link
      activeClass="activeDot"
      to={name}
      spy={true}
      smooth={true}
      offset={0}
      duration={750}
      href={id}
      className={`navigation-dot`}
    ></Link>
  );
};

export default DotComponent;
