import React from 'react';

/* COMPONENTS */
import ExperienceIcons from '../ExperienceIcons/ExperienceIcon'
import ReactSVG from "../ExperienceIcons/ReactSVG";
import ExpressSVG from "../ExperienceIcons/ExpressSVG";
import NodeSVG from '../ExperienceIcons/NodeSVG';
import HtmlSVG from '../ExperienceIcons/HtmlSVG';
import JavaSVG from '../ExperienceIcons/JavaSVG';
import LessSVG from '../ExperienceIcons/LessSVG';
import AdobeCCSVG from '../ExperienceIcons/AdobeCCSVG';
import DatabaseSVG from '../ExperienceIcons/DatabaseSVG';
import TypeScriptSVG from '../ExperienceIcons/TypeScriptSVG';
import CSharpSVG from '../ExperienceIcons/CSharpSVG';
import JavaScriptSVG from '../ExperienceIcons/JavaScriptSVG';
import CSVG from '../ExperienceIcons/CSVG';

function ExperienceList() {
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
      <ExperienceIcons title="LESS.js">
        <LessSVG />
      </ExperienceIcons>
      <ExperienceIcons title="Adobe CC">
        <AdobeCCSVG />
      </ExperienceIcons>
      <ExperienceIcons title="SQL & NoSQL">
        <DatabaseSVG />
      </ExperienceIcons>
      <ExperienceIcons title="TypeScript">
        <TypeScriptSVG />
      </ExperienceIcons>
      <ExperienceIcons title="JavaScript">
        <JavaScriptSVG />
      </ExperienceIcons>
            <ExperienceIcons title="C#">
        <CSharpSVG />
      </ExperienceIcons>
      <ExperienceIcons title="Java">
        <JavaSVG />
      </ExperienceIcons>
      <ExperienceIcons title="C">
        <CSVG />
      </ExperienceIcons>
    </div>
  )
}

export default ExperienceList;