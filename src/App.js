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
                )}/>
                <Route path='*' component={NotFound} />
              </Switch>
            )}/>
          </div>
        </div>
      </div>
    )
  }
}
