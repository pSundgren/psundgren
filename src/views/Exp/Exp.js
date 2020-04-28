import React from 'react';
import FadeIn from 'react-fade-in';

/* Components */
import Experience from '../../components/Experience/Experience';

/* Data */
import * as data from '../../data/Experience.json';

/* Styling */
import './Exp.css';

function Exp() {
  return (
    <FadeIn>
      <h1 className="exp-header">
        <Experience type="experience" data={data.experiences} />
      </h1>
    </FadeIn>
  );
}

export default Exp;
