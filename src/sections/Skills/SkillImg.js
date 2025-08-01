import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Optional default theme

const SkillImg = ({ src }) => {
  return (
    <Tippy
      content={src.toUpperCase()}
      placement="top"
      arrow={false}
      delay={[400, 0]}
    >
      <motion.img
        className="skills-img"
        src={require(`../../assets/skills/${src}.png`)}
        alt={`${src} logo`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        drag
        dragSnapToOrigin
        whileDrag={{ scale: 1.5 }}
      />
    </Tippy>
  );
};

export default SkillImg;
