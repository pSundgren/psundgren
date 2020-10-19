import React from 'react';

function ProjectItem(props) {
    return (
        <div className="proj-item">
            {props.children}
            <p className="proj-title">{props.title}</p>
        </div>
    );
}

export default ProjectItem;