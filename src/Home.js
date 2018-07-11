import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";

class HomeComponent extends Component {
  render() {
    return (
      <div className="home">
        <div className="intro">
          <h1 className="centered title">Jesse Paterson</h1>
          <h3>Developer & Designer</h3>
          <p>Open to freelance opportunities and full time for 2018</p>
          <div className='social-links'>
              <a href="https://github.com/j-paterson"><i className="fa fa-github" aria-hidden="true"/></a>
              <a href="https://medium.com/@jesse.r.pat"><i className="fa fa-medium" aria-hidden="true"/></a>
              <a href="https://www.linkedin.com/in/jesse-paterson"><i className="fa fa-linkedin" aria-hidden="true"/></a>
              <a href="https://www.instagram.com/hilariouslyuninteresting/"><i className="fa fa-instagram" aria-hidden="true"/></a>
          </div>
          <a href='https://drive.google.com/file/d/1rfX5DpSGmaVejPpOJluc6ZosL14C8kFx/view?usp=sharing'><button type="button" className="btn"><h3>Resume</h3></button></a>
        </div>
        <div className="portrait">
          <svg version="1.1" width="320" height="320" viewBox="0 0 320 320" fill="none" stroke="#94ACB0" stroke-linecap="round"
     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <path id="r1">
                <animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite"/>
                <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin"/>
              </path>
              <path id="r2">
                <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+1s"/>
                <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+1s"/>
              </path>
              <path id="r3">
                <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+2s"/>
                <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+2s"/>
              </path>
              <path id="r4">
                <animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+3s"/>
                <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+3s"/>
              </path>
              <path id="r5">
                <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+4s"/>
                <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+4s"/>
              </path>
              <path id="r6">
                <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+5s"/>
                <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+5s"/>
              </path>
            </defs>
            <use xlinkHref="#r1"/>
            <use xlinkHref="#r1" transform="rotate(60 160 160)"/>
            <use xlinkHref="#r1" transform="rotate(120 160 160)"/>
            <use xlinkHref="#r1" transform="rotate(180 160 160)"/>
            <use xlinkHref="#r1" transform="rotate(240 160 160)"/>
            <use xlinkHref="#r1" transform="rotate(300 160 160)"/>
            <use xlinkHref="#r2" transform="rotate(30 160 160)"/>
            <use xlinkHref="#r2" transform="rotate(90 160 160)"/>
            <use xlinkHref="#r2" transform="rotate(150 160 160)"/>
            <use xlinkHref="#r2" transform="rotate(210 160 160)"/>
            <use xlinkHref="#r2" transform="rotate(270 160 160)"/>
            <use xlinkHref="#r2" transform="rotate(330 160 160)"/>
            <use xlinkHref="#r3"/>
            <use xlinkHref="#r3" transform="rotate(60 160 160)"/>
            <use xlinkHref="#r3" transform="rotate(120 160 160)"/>
            <use xlinkHref="#r3" transform="rotate(180 160 160)"/>
            <use xlinkHref="#r3" transform="rotate(240 160 160)"/>
            <use xlinkHref="#r3" transform="rotate(300 160 160)"/>
            <use xlinkHref="#r4" transform="rotate(30 160 160)"/>
            <use xlinkHref="#r4" transform="rotate(90 160 160)"/>
            <use xlinkHref="#r4" transform="rotate(150 160 160)"/>
            <use xlinkHref="#r4" transform="rotate(210 160 160)"/>
            <use xlinkHref="#r4" transform="rotate(270 160 160)"/>
            <use xlinkHref="#r4" transform="rotate(330 160 160)"/>
            <use xlinkHref="#r5"/>
            <use xlinkHref="#r5" transform="rotate(60 160 160)"/>
            <use xlinkHref="#r5" transform="rotate(120 160 160)"/>
            <use xlinkHref="#r5" transform="rotate(180 160 160)"/>
            <use xlinkHref="#r5" transform="rotate(240 160 160)"/>
            <use xlinkHref="#r5" transform="rotate(300 160 160)"/>
            <use xlinkHref="#r6" transform="rotate(30 160 160)"/>
            <use xlinkHref="#r6" transform="rotate(90 160 160)"/>
            <use xlinkHref="#r6" transform="rotate(150 160 160)"/>
            <use xlinkHref="#r6" transform="rotate(210 160 160)"/>
            <use xlinkHref="#r6" transform="rotate(270 160 160)"/>
            <use xlinkHref="#r6" transform="rotate(330 160 160)"/>
          </svg>
        </div>
      </div>
    )
  }
}

const Home = AnimatedWrapper(HomeComponent);
export default Home;
