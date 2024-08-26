import React from "react";
import { useRef } from "react";
import { Link } from "react-scroll";

const NavLink = ({ name, id }) => {
  const activeLink = useRef(null);
  return (
    <li>
      <div></div>
      <Link
        activeClass="active"
        to={name}
        spy={true}
        smooth={true}
        offset={0}
        duration={750}
        ref={activeLink}
        className={`link ${name}`}
        href={id}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
