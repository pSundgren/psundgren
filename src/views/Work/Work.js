import React from 'react';
import FadeIn from 'react-fade-in';

/* Components */
import Experience from '../../components/Experience/Experience';

/* Data */
import * as data from '../../data/Experience.json';

/* Styling */
import './Work.css';

function Work() {
  return (
    <FadeIn>
      <h1 className="work-header">
        <Experience type="work" data={data.work} />
      </h1>
    </FadeIn>
  );
}

export default Work;
