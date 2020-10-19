import React from 'react';

/* Styling */
import './Projects.css'

/* Components */
import ProjectItem from './ProjectItem'

function Projects() {
    return (
        <div className="proj-container">
            <h1 className="proj-heading">My projects</h1>
            <p className="proj-desc">These are some of my projects that I've designed and, in some cases, developed. Note that not all of these are live.</p>
            <div className="proj-list">
                <ProjectItem title="Cycl, Paradox Interactive">
                    <img src={require("../../images/cycl.png")} alt="" className="proj-img"/>
                </ProjectItem>
                <ProjectItem title="Bastubacken Incentive & Spa Sweden AB">
                    <img src={require("../../images/bastubacken.png")} alt="" className="proj-img"/>
                </ProjectItem>
                <ProjectItem title="Seuil">
                    <img src={require("../../images/seuil.png")} alt="" className="proj-img"/>
                </ProjectItem>
            </div>
        </div>
    );
}

export default Projects;