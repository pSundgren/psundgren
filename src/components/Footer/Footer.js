import React from 'react';

import FooterItem from './FooterItem';
import * as data from '../../data/Footer.json';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-list">
        <FooterItem
          imgPath={require('../../images/github-white.png')}
          linkPath={data.github}
          title="GitHub"
        />
        <FooterItem
          imgPath={require('../../images/linkedin-white.png')}
          linkPath={data.linkedin}
          title="LinkedIn"
        />
        <FooterItem
          imgPath={require('../../images/instagram-white.png')}
          linkPath={data.instagram}
          title="Instagram"
        />
        <FooterItem
          imgPath={require('../../images/twitter-white.png')}
          linkPath={data.twitter}
          title="Twitter"
        />
      </ul>
      <ul className="footer-list">
        <FooterItem
          imgPath={require('../../images/place-white.png')}
          title="Umeå, Sweden"
        />
        <FooterItem
          imgPath={require('../../images/mail-white.png')}
          linkPath="mailto:sundgren.pontus@gmail.com"
          title="sundgren.pontus@gmail.com"
        />
      </ul>
    </div>
  );
}

export default Footer;
