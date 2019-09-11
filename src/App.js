import React, { Component } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import TransitionGroup from "react-transition-group/TransitionGroup";

import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Projects from "./Projects";

import ReactGA from 'react-ga';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// Google Analytics
const trackingId = "UA-85719032-1";
ReactGA.initialize(trackingId, {
  debug: true,
  gaOptions: {
    siteSpeedSampleRate: 100
  }
});
ReactGA.pageview(window.location.pathname + window.location.search);

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

const NotFound = () => (
  <h1>404.. This page is not found!</h1>
)

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <div className="content">
            <Route render={({ location }) => (
              <Switch key={location.key} location={location}>
                <Route exact path="/"
                  render={({ match, ...rest }) => (
                    <Home/>
                )}/>
                <Route path="/about"
                   render={({ match, ...rest }) => (
                     <About/>
                )}/>
                <Route path="/projects"
                  render={({ match, ...rest }) => (
                    <Projects/>
                )} />
                <Route component={NotFound} />
              </Switch>
            )}/>
          </div>
        </div>
      </div>
    )
  }
}
