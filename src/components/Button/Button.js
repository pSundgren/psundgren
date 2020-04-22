import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

function Button(props) {
  return (
    <button>
      <Link to={props.to}>
        <img className="button-img" src={props.img} alt="" />
        {props.title}
      </Link>
    </button>
  );
}

export default Button;
