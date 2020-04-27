import React from 'react';

import Skill from '../../components/Skill/Skill';
import './ExperienceItem.css';

function ExperienceItem(props) {
  return (
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
  );
}

export default ExperienceItem;
