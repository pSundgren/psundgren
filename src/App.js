import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Header items */
import HomeLink from './components/SVGS/SVGLink/HomeLink';
import GithubLink from './components/SVGS/SVGLink/GithubLink';
import LinkedinLink from './components/SVGS/SVGLink/LinkedinLink';
import TwitterLink from './components/SVGS/SVGLink/TwitterLink';
import InstagramLink from './components/SVGS/SVGLink/InstagramLink';

/* Views */
import Home from './views/Home/Home';

/* Components */
import ContactBar from './components/ContactBar/ContactBar';
import Footer from './components/Footer/Footer';

/* Styling */
import './App.css';
import './colorschemes/Blue.css';

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
