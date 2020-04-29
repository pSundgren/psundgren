import React from 'react';

/* Components */
import ExperienceItem from '../ExperienceItem/ExperienceItem';
import Button from '../Button/Button';

/* Styling */
import './Experience.css';

/* Renders nav buttons depending on mode */
function renderNavButtons(type) {
  switch (type) {
    case 'work':
      return (
        <div className="nav-buttons">
          <Button to="/" type="home" title="Home" />
          <Button to="/projects" type="project" title="Projects" />
        </div>
      );
    default:
      return (
        <div className="nav-buttons">
          <Button to="/" type="home" title="Home" />
          <Button to="/work" type="work" title="Work" />
        </div>
      );
  }
}

/* Main render function */
function Experience(props) {
  return (
    <div>
      {props.data.map((exp) => {
        return (
          <ExperienceItem
            img={require('../../images/' + exp.imgPath)}
            title={exp.title}
            employer={exp.employer}
            desc={exp.desc}
            skills={exp.skills}
            key={exp.title}
          />
        );
      })}
      {renderNavButtons(props.type)}
    </div>
  );
}

export default Experience;
