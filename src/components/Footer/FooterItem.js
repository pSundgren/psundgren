import React from 'react';

import './Footer.css';

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
