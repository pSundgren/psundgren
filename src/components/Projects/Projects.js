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

                {/* CYCL PROJECT */}
                <ProjectItem exp={data.cycl.exp} imgOrientaiton="LEFT">
                    <p className="proj-desc">{data.cycl.desc}</p>
                    <img src={require("../../images/cycl.png")} alt="" className="proj-img left"/>
                </ProjectItem>

                {/* THIS PORTFOLIO */}
                <ProjectItem exp={data.portfolio.exp} imgOrientaiton="RIGHT">
                    <p className="proj-desc">{data.portfolio.desc}</p>
                    <img src={require("../../images/portfolio.png")} alt="" className="proj-img right"/>
                </ProjectItem>
            </div>
        </div>
    );
}

export default Projects;