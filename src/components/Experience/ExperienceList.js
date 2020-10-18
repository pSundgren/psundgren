import React from 'react';

/* COMPONENTS */
import ExperienceIconAndText from '../SVGS/SVGExp/ExperienceIconAndText'
import ReactSVG from "../SVGS/SVGExp/ReactSVG";
import ExpressSVG from "../SVGS/SVGExp/ExpressSVG";
import NodeSVG from '../SVGS/SVGExp/NodeSVG';
import HtmlSVG from '../SVGS/SVGExp/HtmlSVG';
import JavaSVG from '../SVGS/SVGExp/JavaSVG';
import LessSVG from '../SVGS/SVGExp/LessSVG';
import AdobeCCSVG from '../SVGS/SVGExp/AdobeCCSVG';
import DatabaseSVG from '../SVGS/SVGExp/DatabaseSVG';
import TypeScriptSVG from '../SVGS/SVGExp/TypeScriptSVG';
import CSharpSVG from '../SVGS/SVGExp/CSharpSVG';
import JavaScriptSVG from '../SVGS/SVGExp/JavaScriptSVG';
import CSVG from '../SVGS/SVGExp/CSVG';

function ExperienceList() {
  return (
    <div className="exp-list">
      <ExperienceIconAndText title="React.js">
        <ReactSVG />
      </ExperienceIconAndText>
      <ExperienceIconAndText title="Express.js">
        <ExpressSVG />
      </ExperienceIconAndText>
      <ExperienceIconAndText title="Node.js">
        <NodeSVG />
      </ExperienceIconAndText>
      <ExperienceIconAndText title="HTML5 &amp; CSS3">
        <HtmlSVG />
      </ExperienceIconAndText>
      <ExperienceIconAndText title="LESS.js">
        <LessSVG />
      </ExperienceIconAndText>
      <ExperienceIconAndText title="Adobe CC">
        <AdobeCCSVG />
      </ExperienceIconAndText>
      <ExperienceIconAndText title="SQL &amp; NoSQL">
        <DatabaseSVG />
      </ExperienceIconAndText>
      <ExperienceIconAndText title="TypeScript">
        <TypeScriptSVG />
      </ExperienceIconAndText>
      <ExperienceIconAndText title="JavaScript">
        <JavaScriptSVG />
      </ExperienceIconAndText>
            <ExperienceIconAndText title="C#">
        <CSharpSVG />
      </ExperienceIconAndText>
      <ExperienceIconAndText title="Java">
        <JavaSVG />
      </ExperienceIconAndText>
      <ExperienceIconAndText title="C">
        <CSVG />
      </ExperienceIconAndText>
    </div>
  )
}

export default ExperienceList;