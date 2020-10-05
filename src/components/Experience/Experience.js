import React from "react";
import ExpressSVG from "../SVG/ExpressSVG";

/* Components */
import ReactSVG from "../SVG/ReactSVG";

/* Styling */
import "./Experience.css";

/* Main render function */
function Experience() {
  return (
    <div>
      <h1 className="home-name">I've got experience with</h1>
      <div className="exp-list">
        <ReactSVG />
        <ExpressSVG />
      </div>
    </div>
  );
}

export default Experience;
