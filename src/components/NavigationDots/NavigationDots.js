/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import DotComponent from "./DotComponent";
import "./NavigationDots.scss";

const NavigationDots = () => {
  return (
    <div className="app__navigation">
      <DotComponent id="#home" name="home"></DotComponent>
      <DotComponent id="#about" name="about"></DotComponent>
      <DotComponent id="#work" name="work"></DotComponent>
      <DotComponent id="#skills" name="skills"></DotComponent>
      <DotComponent id="#contact" name="contact"></DotComponent>
    </div>
  );
};

export default NavigationDots;
