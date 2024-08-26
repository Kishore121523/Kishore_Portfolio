import React from "react";
import "./Wrapper.scss";

const Wrapper = ({ children }) => {
  return <div className="app-wrapper">{children}</div>;
};

export default Wrapper;
