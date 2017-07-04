import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="/">
          <img href="/" src="/images/logos/logo_red.png"></img>
        </a>
	      <ul>
	        <li><NavLink exact={true} to="/" activeClassName="active" onlyActiveOnIndex>Home</NavLink></li>
	        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
	        <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
	        <li><NavLink to="/experience" activeClassName="active">Experience</NavLink></li>
	      </ul>
	  </div>
    )
  }
}
