import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const CardWork = ({
  category,
  github,
  liveLink,
  desc,
  heading,
  image,
  externalLink,
}) => {
  return (
    <motion.div
      className="card-outer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="divImg">
        <img src={image} alt="work-img" />

        {externalLink ? (
          <div className="middle">
            <a href={liveLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="workIcon" icon={faEye} />
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="workIcon" icon={faGithub} />
            </a>
          </div>
        ) : (
          <div className="middle"></div>
        )}
      </div>

      <div className="category">
        <p className="category-text">{category}</p>
      </div>

      <div className="work-content">
        <p className="work-content-head">{heading}</p>
        <p className="work-content-desc">{desc}</p>
      </div>
    </motion.div>
  );
};

export default CardWork;
