import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AnimatedWrapper from "./AnimatedWrapper";
class AboutComponent extends Component {
  render() {
    return (
      <div className="about page">
        <div className="personal">
          <h3 className="title">ME</h3>
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
        <div className="experience">
          <h3 className="title"> MY WORK</h3>
          <div className="container">
            <div className='col-md-4'>
               <img className="job-img" src="/images/experience/cnr.png" alt="College of Natural Resources Logo"></img>
            </div>
            <div className='col-md-8'>
              <p className="title"> Web Developer</p>
              <p className="sub-title">College of Natural Resources</p>
              <div className='job-content'>
                <b>Fall 2014 - Spring 2017</b>
                <p>
                  In this position, I  built and redesigned sites to fit the needs of a variety of college departments and facilities. I also migrated and built out the schemas for  databases containing CMS content, user accounts and profiles for the department. I created the front-end design for our sub-sites, including the <a href="https://parksnext100.berkeley.edu">Parks Next 100</a> and <a href="https://nst.berkeley.edu/">Nutritional Sciences &amp; Toxicology</a> sites. I regularly handled the requests and training of faculty and staff, adjusting to the needs of each individual who wanted design changes or a place in the web.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className='col-md-4'>
                <img className="job-img img-reduction" src="/images/experience/ucbseal.png" alt="UC Berkeley Seal"></img>
            </div>
            <div className='col-md-8'>
              <p className="title">Researcher</p>
              <p className="sub-title">Center for Augmented Cognition</p>
              <div className='job-content'>
                <p><b>Spring 2016 - Spring 2017</b></p>
                <p>
                  Through my involvement with <a href="https://vr.berkeley.edu">VR@Berkeley</a>, I joined a team working on the <Link to={`/projects/isaacs`}>ISAACS</Link> graduate research project. Essentially, the goal of this project was to create an Augmented Reality interface for controlling drones. In Spring 2016, I led my team in conducting a user research study in which I ran several interviews with members of the UAV club. After identifying the areas in which an Augmented Reality interface could improve on existing drone interfaces, I developed a clear set of goals for the project. I later joined the Computer Vision team to work on implementation for the drone SLAM mapping algorithms.
                  During this time, I also became the developer for the <a href="http://augcog.berkeley.edu/">Augmented Cognition</a>  site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const About = AnimatedWrapper(AboutComponent);
export default About;
