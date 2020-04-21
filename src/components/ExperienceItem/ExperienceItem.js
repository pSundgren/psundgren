import React from 'react';

import Skill from '../../components/Skill/Skill';
import './ExperienceItem.css';

function ExperienceItem(props) {
  return (
    <div className="experience-body">
      <img
        src={require('../../images/me-irl.jpeg')}
        alt=""
        className="experience-img"
      />
      <div className="experience-text">
        <h2 className="experience-title">{props.title}</h2>
        <p>{props.desc}</p>
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
