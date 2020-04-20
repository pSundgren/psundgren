import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

/* Own imports */
import Home from './views/Home/Home';
import About from './views/About/About';
import Footer from './components/Footer/Footer';
import './App.css';

/* Navbar for the app */
function NavBar() {
  return (
    <nav>
      <Link to="/" className="menu-item">
        HOME
      </Link>
      <Link to="/about" className="menu-item">
        ABOUT
      </Link>
      <Link to="/experience" className="menu-item">
        EXPERIENCE
      </Link>
      <Link to="/goals" className="menu-item">
        GOALS
      </Link>
    </nav>
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
          <h1>Welcome to experiences!</h1>
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
        <NavBar />
        <AppSwitch />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
