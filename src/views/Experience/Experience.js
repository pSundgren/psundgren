import React from 'react';

/* Components */
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem';
import Button from '../../components/Button/Button';

/* Styling */
import './Experience.css';

/* Renders nav buttons depending on mode */
function renderNavButtons(type) {
  switch (type) {
    case 'work':
      return (
        <div className="nav-buttons">
          <Button to="/" type="home" title="Home" />
          <Button to="/experience" type="experience" title="Experience" />
          <Button to="/projects" type="project" title="Projects" />
        </div>
      );
    case 'experience':
      return (
        <div className="nav-buttons">
          <Button to="/" type="home" title="Home" />
          <Button to="/work" type="work" title="Work" />
          <Button to="/projects" type="project" title="Projects" />
        </div>
      );
    default:
      return (
        <div className="nav-buttons">
          <Button to="/" type="home" title="Home" />
          <Button to="/work" type="work" title="Work" />
          <Button to="/experience" type="experience" title="Experience" />
        </div>
      );
  }
}

function Experience(props) {
  return (
    <div>
      <h1 className="heading">{props.children}</h1>
      <div className="exp-container">
        {props.data.map((exp) => {
          return (
            <ExperienceItem
              imgPath={''}
              title={exp.title}
              employer={exp.employer}
              desc={exp.desc}
              skills={exp.skills}
              key={exp.title}
            />
          );
        })}
      </div>
      {renderNavButtons(props.type)}
    </div>
  );
}

export default Experience;
