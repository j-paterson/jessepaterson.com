import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
class AboutComponent extends Component {
  render() {
    return (
      <div className="about page">
        <p>
          I'm a developer and designer in the Bay
          Area currently pursuing a degree in Computer
          Science at UC Berkeley. I like to understand
          things deeply and work on large scale projects.
          When I'm not wrapping my head around computer
          vision algorithms or building websites, I enjoy <a href="http://azura.wikia.com/wiki/Azura_Wikia">
          building worlds</a>, <a href="https://vr.berkeley.edu/">
          sculpting reality</a> and
          climbing really big rocks. I value persistence, integrity
          and quality.
        </p>
      </div>
    )
  }
}
const About = AnimatedWrapper(AboutComponent);
export default About;
