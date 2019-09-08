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

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

const NotFound = () => (
  <h1>404.. This page is not found!</h1>
)

export default class App extends Component {
  initializeReactGA() {
    ReactGA.initialize('UA-85719032-1');
    ReactGA.pageview('/homepage');
  }

  render() {
    return (
      <div>
        <head>
          {this.initializeReactGA()}
        </head>
        <Header />
        <div className="main">
          <div className="content">
            <Route render={({ location }) => (
              <Switch key={location.key} location={location}>
                <Route exact path="/"
                  render={({ match, ...rest }) => (
                    <TransitionGroup component={firstChild}>
                      <Home/>
                    </TransitionGroup>
                )}/>
                <Route path="/about"
                   render={({ match, ...rest }) => (
                     <TransitionGroup component={firstChild}>
                       <About/>
                     </TransitionGroup>
                )}/>
                <Route path="/projects"
                  render={({ match, ...rest }) => (
                    <TransitionGroup component={firstChild}>
                      <Projects/>
                    </TransitionGroup>
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
