import React from 'react';

/* Styling */
import './Footer.css';

/* Main render function */
function FooterItem(props) {
  return (
    <li>
      <img src={props.imgPath} alt="" className="footer-img" />
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.title}
      </a>
    </li>
  );
}

export default FooterItem;
