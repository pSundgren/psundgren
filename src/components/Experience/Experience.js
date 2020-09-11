import React from "react";

/* Components */

/* Styling */
import "./Experience.css";

/* Main render function */
function Experience(props) {
  return (
    <div>
      <h1 className="home-name">I've got experience with</h1>
      <div className="exp-list">
        {props.data.map((exp) => {
          return <div className="exp-item">Hejsan</div>;
        })}
      </div>
    </div>
  );
}

export default Experience;
