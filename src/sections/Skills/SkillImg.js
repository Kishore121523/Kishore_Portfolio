import React from "react";
import { motion } from "framer-motion";

const skillImg = (data) => {
  return (
    <motion.img
      className="skills-img"
      src={require(`../../assets/skills/${data.src}.png`)}
      alt="skillsImage"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      drag
      dragSnapToOrigin
      whileDrag={{ scale: 1.5 }}
    />
  );
};

export default skillImg;
