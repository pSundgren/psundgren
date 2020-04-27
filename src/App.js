import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Header items */
import HomeLink from './components/SVGLink/HomeLink';
import GithubLink from './components/SVGLink/GithubLink';
import LinkedinLink from './components/SVGLink/LinkedinLink';
import TwitterLink from './components/SVGLink/TwitterLink';
import InstagramLink from './components/SVGLink/InstagramLink';

/* Views */
import Home from './views/Home/Home';
import Experience from './views/Experience/Experience';

/* Components */
import ContactBar from './components/ContactBar/ContactBar';
import Footer from './components/Footer/Footer';

/* Data */
import * as data from './data/Experience.json';

/* Styling */
import './App.css';
import FadeIn from 'react-fade-in';

/* Navbar for the app */
function Header() {
  return (
    <header>
      <HomeLink />
      <hr className="divider" />
      <GithubLink />
      <LinkedinLink />
      <TwitterLink />
      <InstagramLink />
    </header>
  );
}

/* Switch for the app, routes are in descending alphabetical order */
function AppSwitch() {
  return (
    <div className="app-container">
      <Switch>
        <Route path="/projects">
          <FadeIn>
            <Experience type="projects" data={data.experiences}>
              My projects
            </Experience>
          </FadeIn>
        </Route>
        <Route path="/experience">
          <FadeIn>
            <Experience type="experience" data={data.projects}>
              My projects
            </Experience>
          </FadeIn>
        </Route>
        <Route path="/work">
          <FadeIn>
            <Experience type="work" data={data.work}>
              My work
            </Experience>
          </FadeIn>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

/* Main render function */
function App() {
  return (
    <div className="App">
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Header />
        <AppSwitch />
      </Router>
      <ContactBar />
      <Footer />
    </div>
  );
}

export default App;
