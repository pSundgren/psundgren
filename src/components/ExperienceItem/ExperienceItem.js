import React from 'react';

import './ExperienceItem.css';

function ExperienceItem(props) {
  return (
    <div className="experience-body">
      {props.imgPath ? (
        <img src={require(props.imgPath)} alt="" className="experience-img" />
      ) : null}
      <div className="experience-text">
        <h2 className="experience-title">{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default ExperienceItem;
