import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import * as data from '../../data/Home.json';
import './Home.css';

function Home() {
  return (
    <FadeIn>
      <div className="home-container">
        <h1 className="heading">{data.name}</h1>
        <img
          src={require('../../images/me-irl.jpeg')}
          alt=""
          className="home-img"
        />
        <h2 className="sub-heading">{data.title}</h2>
        <button className="btn">
          <Link to="/about">About me</Link>
        </button>
      </div>
    </FadeIn>
  );
}

export default Home;
