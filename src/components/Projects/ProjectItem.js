import React from 'react';

function ProjectItem(props) {

    let renderFunction = (orientaiton) => {
        switch (orientaiton) {
            case 'RIGHT':
                return (
                    <div className="proj-item">
                        <div className="proj-text">
                            {props.children[0]}
                            <div className="proj-exp-list">
                                {props.exp.map((exp) => {
                                    return (
                                        <p className="proj-exp">
                                            {exp}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                        {props.children[1]}
                    </div>
                );
            default:
                return (
                    <div className="proj-item">
                        {props.children[0]}
                        <div className="proj-text">
                            {props.children[1]}
                            <div className="proj-exp-list">
                                {props.exp.map((exp) => {
                                    return (
                                        <p className="proj-exp">
                                            {exp}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                );
        }
    }

    return (
        <div>
            {renderFunction(props.orientaiton)}
        </div>
    );
}

export default ProjectItem;