import React from "react";

const SkillsDesc = ({ name, provider }) => {
  return (
    <>
      <p>{name}</p>
      <p className="text-muted">{provider}</p>
    </>
  );
};

export default SkillsDesc;
