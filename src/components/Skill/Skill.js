import React from 'react';

/* Styling */
import './Skill.css';

/* Main render function */
function Skill(props) {
  return (
    <div className="skill">
      <p>{props.title}</p>
    </div>
  );
}

export default Skill;
