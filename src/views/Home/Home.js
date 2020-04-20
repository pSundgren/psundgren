import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import './Home.css';

function Home() {
  return (
    <FadeIn>
      <div className="home-container">
        <h1 className="home-name">Pontus Sundgren</h1>
        <img
          src={require('../../images/me-irl.jpeg')}
          alt=""
          className="home-img"
        />
        <h2 className="home-title">UI/UX | Web designer | Developer</h2>

        <button className="btn">
          <Link to="/about">About me</Link>
        </button>
      </div>
    </FadeIn>
  );
}

export default Home;
