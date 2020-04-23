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
        <Route path="/projects">
          <h1>Welcome to projects!</h1>
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/work">
          <h1>Welcome to work!</h1>
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
      <ContactBar />
      <Footer />
    </div>
  );
}

export default App;
