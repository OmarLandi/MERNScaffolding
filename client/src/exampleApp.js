import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ExampleList from './containers/exampleList'
import EditExample from './containers/editExample'
import NewExample from './containers/newExample'

class ExampleApp extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/" target="_blank">
              <img src={process.env.PUBLIC_URL + '/logo512.png'} width="30" height="30" alt="Example" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Example App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Examples</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Example</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>

          <Route path="/" exact component={ExampleList} />
          <Route path="/edit/:id" component={EditExample} />
          <Route path="/create" component={NewExample} />
        </div>
      </Router>
    );
  }
}

export default ExampleApp;
