import React from "react";
import FadeIn from "react-fade-in";

/* Data */
import * as data from "../../data/Home.json";

/* Components */

/* Styling */
import "./Home.css";

/* Main render function */
function Home() {
  return (
    <FadeIn>
      <div className="home-container">
        <img
          src={require("../../images/me-irl.jpeg")}
          alt=""
          className="home-img"
        />
        <div className="home-text">
          <h1 className="home-name">{data.name}</h1>
          <h2 className="home-title">{data.title}</h2>
          <p className="home-paragraf">{data.about}</p>
        </div>
      </div>
    </FadeIn>
  );
}

export default Home;
