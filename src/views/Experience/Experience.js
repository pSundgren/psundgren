import React from 'react';

import * as data from '../../data/Experience.json';
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem';
import './Experience.css';
import FadeIn from 'react-fade-in';

function Experience() {
  return (
    <div>
      <FadeIn>
        <h1 className="heading">My experience</h1>
        {data.experiences.map((exp) => {
          return (
            <ExperienceItem
              imgPath={''}
              title={exp.title}
              desc={exp.desc}
              skills={exp.skills}
              key={exp.title}
            />
          );
        })}
      </FadeIn>
    </div>
  );
}

export default Experience;
