import React from 'react';

/* Styling */
import './Projects.css'

/* Data */
import * as data from '../../data/Projects.json'

/* Components */
import ProjectItem from './ProjectItem'

function Projects() {
    return (
        <div className="proj-container">
            <h1 className="proj-heading">My projects</h1>
            <div className="proj-list">
                
                { /* SEUIL PROJECT */}
                <ProjectItem exp={data.seuil.exp} orientaiton="LEFT">
                    <img src={require("../../images/seuil.png")} alt="" className="proj-img left" />
                    <p className="proj-title">{data.seuil.desc}</p>
                </ProjectItem>

                { /* CYCL PROJECT */}
                <ProjectItem exp={data.cycl.exp} orientaiton="RIGHT">
                    <p className="proj-title">{data.cycl.desc}</p>
                    <img src={require("../../images/cycl.png")} alt="" className="proj-img right"/>
                </ProjectItem>
            </div>
        </div>
    );
}

export default Projects;