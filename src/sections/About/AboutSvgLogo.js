import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutSvgLogo = () => {
  // let aboutLogo1 = anime({
  //   targets: ".aboutSvg path",
  //   scale: 0.85,
  //   translateY: "60%",
  //   rotate: "-30deg",
  //   duration: 4000,
  //   autoplay: false,
  //   loop: 1,
  // });

  // let aboutLogo2 = anime({
  //   targets: ".aboutSvg rect",
  //   scale: 0.85,
  //   translateY: "60%",
  //   rotate: "-30deg",
  //   duration: 4000,
  //   autoplay: false,
  //   loop: 1,
  // });

  // let j = false;
  // const mouseMoveHandler = () => {
  //   if (!j) {
  //     j = true;
  //     aboutLogo1.play();
  //     aboutLogo2.play();
  //   }
  // };
  const [animating, setanimating] = useState(false);
  return (
    <motion.svg
      // onMouseMove={mouseMoveHandler}
      animate={{
        scale: animating ? 1.2 : 0.7,
        opacity: animating ? 1 : 0.7,
        rotate: animating ? 360 : 0,
        fill: "red",
      }}
      transition={{ duration: 1.5 }}
      onHoverStart={() => setanimating(!animating)}
      className="aboutSvg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 101.17 129.44"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <rect y="13.7" width="17.75" height="102.12" rx="1.42" />
          <path d="M24.81,46.49V1.42A1.42,1.42,0,0,1,26.23,0H99.75a1.41,1.41,0,0,1,1.42,1.42V128a1.42,1.42,0,0,1-1.42,1.42H26.23A1.43,1.43,0,0,1,24.81,128V81.82A1.42,1.42,0,0,1,27.4,81L51,115.11a1.41,1.41,0,0,0,1.16.61h19a1.42,1.42,0,0,0,1.16-2.23L38.48,65.24a1.41,1.41,0,0,1,0-1.65L72.26,17.13a1.42,1.42,0,0,0-1.15-2.25H52.88a1.4,1.4,0,0,0-1.12.56L27.36,47.35A1.42,1.42,0,0,1,24.81,46.49Z" />
        </g>
      </g>
    </motion.svg>
  );
};

export default AboutSvgLogo;
