import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  componentDidMount(){
    (function() {
      function toggleHandler(toggle, menu, links) {
        toggle.addEventListener( "click", function(e) {
          e.preventDefault();
          (toggle.classList.contains("is-active") === true) ? toggle.classList.remove("is-active") : toggle.classList.add("is-active");
          (menu.classList.contains("is-active") === true) ? menu.classList.remove("is-active") : menu.classList.add("is-active");
        });
        for(var i = 0; i < links.length; i++){
          links[i].addEventListener("click", function(e) {
            if(toggle.classList.contains("is-active") === true){toggle.classList.remove("is-active")};
            if(menu.classList.contains("is-active") === true){menu.classList.remove("is-active")};
          });
        }
      }
      var toggle = document.querySelector(".c-hamburger");
      var menu = document.querySelector(".menu");
      var links = menu.getElementsByTagName('LI')
      toggleHandler(toggle, menu, links);
    })();
  }
  render() {
    return (
      <div className="header">
        <a href="/">
          <img href="/" src="/images/logos/logo_gold.svg" alt="Jesse Paterson's Logo"></img>
        </a>
	      <ul className="menu">
	        <li><NavLink exact={true} to="/" activeClassName="active">Home</NavLink></li>
	        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
	        <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
          <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
	      </ul>
        <button className="c-hamburger c-hamburger--htx">
          <span>toggle menu</span>
        </button>
	  </div>
    )
  }
}
