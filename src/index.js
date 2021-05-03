import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap-reboot.css";

import "./index.css";

import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import JobsPage from "./views/JobsPage";
import TheGoldenHackPage from "./views/TheGoldenHackPage";
import FunStuffPage from "./views/FunStuffPage";
import ContactPage from "./views/ContactPage";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/jobs" component={JobsPage} />
      <Route exact path="/the-goldenhack" component={TheGoldenHackPage} />
      <Route exact path="/fun-stuff" component={FunStuffPage} />
      <Route exact path="/contact" component={ContactPage} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
