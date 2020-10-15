import React from 'react';

/* COMPONENTS */
import ExperienceIcons from '../ExperienceIcons/ExperienceIcon'
import ReactSVG from "../ExperienceIcons/ReactSVG";
import ExpressSVG from "../ExperienceIcons/ExpressSVG";
import NodeSVG from '../ExperienceIcons/NodeSVG';
import HtmlSVG from '../ExperienceIcons/HtmlSVG'

function ExperienceList(){
    return (
        <div className="exp-list">
        <ExperienceIcons title="React.js">
            <ReactSVG />
        </ExperienceIcons>
        <ExperienceIcons title="Express.js">
          <ExpressSVG />
        </ExperienceIcons>
        <ExperienceIcons title="Node.js">
          <NodeSVG />
        </ExperienceIcons>
        <ExperienceIcons title="HTML5">
          <HtmlSVG />
        </ExperienceIcons>
        <ExperienceIcons title="CSS3">
          <ExpressSVG />
        </ExperienceIcons>
        <ExperienceIcons title="LESS.js">
          <ExpressSVG />
        </ExperienceIcons>
        <ExperienceIcons title="Adobe CC">
          <ExpressSVG />
        </ExperienceIcons>
        <ExperienceIcons title="SQL & NoSQL">
          <ExpressSVG />
        </ExperienceIcons>
        <ExperienceIcons title="TypeScript">
          <ExpressSVG />
        </ExperienceIcons>
        <ExperienceIcons title="JavaScript">
          <ExpressSVG />
        </ExperienceIcons>
        <ExperienceIcons title="Java">
          <ExpressSVG />
        </ExperienceIcons>
        <ExperienceIcons title="C#">
          <ExpressSVG />
        </ExperienceIcons>
        <ExperienceIcons title="C">
          <ExpressSVG />
        </ExperienceIcons>
    </div>)
}

export default ExperienceList;