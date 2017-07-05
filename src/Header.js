import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  componentDidMount(){
    (function() {
      function toggleHandler(toggle, menu) {
        toggle.addEventListener( "click", function(e) {
          e.preventDefault();
          (toggle.classList.contains("is-active") === true) ? toggle.classList.remove("is-active") : toggle.classList.add("is-active");
          (menu.classList.contains("is-active") === true) ? menu.classList.remove("is-active") : menu.classList.add("is-active");
        });
      }
      var toggle = document.querySelector(".c-hamburger");
      var menu = document.querySelector(".menu");
      toggleHandler(toggle, menu);
    })();
  }
  render() {
    return (
      <div className="header">
        <a href="/">
          <img href="/" src="/images/logos/logo_red.png"></img>
        </a>
        <button className="c-hamburger c-hamburger--htx">
          <span>toggle menu</span>
        </button>
	      <ul className="menu">
	        <li><NavLink exact={true} to="/" activeClassName="active" onlyActiveOnIndex>Home</NavLink></li>
	        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
	        <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
	        <li><NavLink to="/experience" activeClassName="active">Experience</NavLink></li>
	      </ul>
	  </div>
    )
  }
}
