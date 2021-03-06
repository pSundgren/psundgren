import React from "react";
import FadeIn from "react-fade-in";

/* Data */
import * as data from "../../data/Home.json";

/* Components */
import Experience from "../../components/Experience/Experience";
import Projects from '../../components/Projects/Projects';
import ContactForm from '../../components/ContactForm/ContactForm';

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
      <div className="home-container">
        <Experience />
      </div>
      <div className="home-container">
        <Projects />
      </div>
      <div className="home-container">
        <ContactForm />
      </div>
    </FadeIn>
  );
}

export default Home;
