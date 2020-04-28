import React from 'react';

/* Components */
import Skill from '../../components/Skill/Skill';

/* Styling */
import './ExperienceItem.css';

/* Main render function */
function ExperienceItem(props) {
  return (
    <div className="experience">
      <img src={props.img} alt="" className="experience-img" />
      <div className="experience-body">
        <h2 className="experience-title">
          {props.title}
          {props.employer ? <span>{' | ' + props.employer}</span> : null}
        </h2>

        <p className="experience-desc">{props.desc}</p>
        <div className="skill-container">
          {props.skills.map((skill) => {
            return <Skill title={skill} key={skill} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;
