import React from 'react';
import FadeIn from 'react-fade-in';

import * as data from '../../data/Home.json';
import Button from '../../components/Button/Button';
import './Home.css';

function Home() {
  return (
    <FadeIn>
      <div className="home-container">
        <img
          src={require('../../images/me-irl.jpeg')}
          alt=""
          className="home-img"
        />
        <div className="home-text">
          <h1 className="home-name">{data.name}</h1>
          <h2 className="home-title">{data.title}</h2>
          <p className="home-paragraf">{data.about}</p>
          <div className="home-buttons">
            <Button to="/work" type="work" title="Work" />
            <Button to="/experience" type="experience" title="Experience" />
            <Button to="/projects" type="project" title="Projects" />
          </div>
          <p className="home-paragraf">
            If you want to know more about my work histoty, my experiences away
            from the computer screen, or my projects that I've been working on
            please click one of the options above!
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export default Home;
