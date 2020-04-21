import React from 'react';
import FadeIn from 'react-fade-in';

import * as data from '../../data/About.json';
import './About.css';

function About() {
  return (
    <FadeIn>
      <div>
        <h1 className="heading">About me</h1>
        <p>{data.about + ' ' + data.about}</p>
      </div>
    </FadeIn>
  );
}

export default About;
