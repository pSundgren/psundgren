import React from 'react';

function ExperienceIconAndText(props){
    return(
        <div className="exp-icon-and-text">
            {props.children}
            <p className="exp-icon-title">{props.title}</p>
        </div>
    )
}

export default ExperienceIconAndText;