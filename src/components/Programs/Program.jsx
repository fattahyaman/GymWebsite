import React from "react";
import "./Program.css";
import { programsData } from "../../data/programsData";

const Program = () => {
  return (
    <div className="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our </span>
        <span>programms</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="program-catagories">
        {programsData.map((program) => (
          <div className="category" key={program.id}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
