import React from 'react';
import FadeIn from 'react-fade-in';

/* Components */
import Experience from '../../components/Experience/Experience';

/* Data */
import * as data from '../../data/Experience.json';

/* Styling */
import './Projects.css';

function Projects() {
  return (
    <FadeIn>
      <h1 className="projects-header">
        <Experience type="projects" data={data.projects} />
      </h1>
    </FadeIn>
  );
}

export default Projects;
