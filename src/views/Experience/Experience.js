import React from 'react';

import * as data from '../../data/Experience.json';
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem';
import './Experience.css';
import FadeIn from 'react-fade-in';

function Experience() {
  return (
    <div>
      <FadeIn>
        <ExperienceItem title="Online portfolio" desc="I made thius hehe" />
      </FadeIn>
    </div>
  );
}

export default Experience;
