import React from "react";

/* Components */
import ExperienceList from './ExperienceList'

/* Styling */
import "./Experience.css";

/* Main render function */
function Experience() {
  return (
    <div className="exp-container">
      <h1 className="exp-heading">My experience</h1>
        <ExperienceList />
      <p className="exp-bodytext">These are the enviroments, programs and frameworks that I've got experience with, that is to say that I've used it for multiple projects and feel comfortable using them. I am constantly trying to expand my list of experience by trying out different frameworks and tech to find a way that they can be implemented in projects.</p>
    </div>
  );
}

export default Experience;
