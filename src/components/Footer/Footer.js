import React from 'react';

import FooterItem from './FooterItem';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-list">
        <FooterItem
          imgPath={require('../../images/github-white.png')}
          linkPath="https://github.com/pSundgren/"
          title="GitHub"
        />
        <FooterItem
          imgPath={require('../../images/linkedin-white.png')}
          linkPath="https://www.linkedin.com/in/pontus-sundgren/"
          title="LinkedIn"
        />
        <FooterItem
          imgPath={require('../../images/instagram-white.png')}
          linkPath="https://twitter.com/pontusundgren"
          title="Instagram"
        />
        <FooterItem
          imgPath={require('../../images/twitter-white.png')}
          linkPath="https://twitter.com/pontusundgren/"
          title="Twitter"
        />
      </ul>
      <ul className="footer-list">
        <FooterItem
          imgPath={require('../../images/linkedin-white.png')}
          title="Umeå, Sweden"
        />
        <FooterItem
          imgPath={require('../../images/linkedin-white.png')}
          linkPath="mailto:sundgren.pontus@gmail.com"
          title="Mail"
        />
      </ul>
      <ul className="footer-list">
        <FooterItem linkPath="https://reactjs.org/" title="React" />
        <FooterItem title="JavaScript" />
        <FooterItem
          linkPath="https://github.com/pSundgren/psundgren.com"
          title="Repository"
        />
      </ul>
    </div>
  );
}

export default Footer;
