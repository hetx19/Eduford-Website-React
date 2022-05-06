import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Course from './Components/Course';
import Campus from './Components/Campus';
import Facilities from './Components/Facilities';
import Student from './Components/Student';
import Cta from './Components/Cta';
import Footer from './Components/Footer';
import SubHome from './Components/SubHome';
import About from './Components/About';
import Location from './Components/Location';
import Contact from './Components/Contact';
import Blog from './Components/Blog';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
            <Course />
            <Campus />
            <Facilities />
            <Student />
            <Cta />
            <Footer />
          </Route>
          <Route exact path="/about">
            <SubHome title="About Us" />
            <About />
            <Footer />
          </Route>
          <Route exact path="/course">
            <Home />
            <Course />
            <Facilities />
            <Footer />
          </Route>
          <Route exact path="/blog">
            <SubHome title="Our Certification & Online Programs for 2021" />
            <Blog />
            <Footer />
          </Route>
          <Route exact path="/contact">
            <SubHome title="Contact US" />
            <Location />
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
