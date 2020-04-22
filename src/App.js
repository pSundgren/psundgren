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
import About from './views/About/About';
import Experience from './views/Experience/Experience';
import Footer from './components/Footer/Footer';

/* Styling */
import './App.css';

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
        <Route path="/goals">
          <h1>Welcome to goals!</h1>
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/about">
          <About />
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
      <Router>
        <Header />
        <AppSwitch />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
