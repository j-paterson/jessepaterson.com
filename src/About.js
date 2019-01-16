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
            Austinite transplanted to the Bay, interested in crafting compelling experiences and designing context aware systems for facilitating human-computer interactions in mixed reality.
            I completed a B.A. in Cognitive science alongside a minor in Computer Science & Electrical Engineering at UC Berkeley in 2018.
            I like to understand processes as a whole so that I can work effectively on large scale projects with high impact.
            When I'm not working on new creative tools for building Virtual Reality experiences, I enjoy <a href="http://azura.wikia.com/wiki/Azura_Wikia">
            telling collaborative stories with friends</a>, brewing mead, and climbing really big rocks.
            I value persistence and integrity in myself and quality in my work above all else.
          </p>
        </div>
        <div className="experience">
          <h3 className="title"> MY WORK</h3>
          //STRIVR
          <div className="container">
            <div className='col-md-4'>
               <img className="job-img" src="/images/experience/STRIVR_LOGO.png" alt="STRIVR Logo"></img>
            </div>
            <div className='col-md-8'>
              <h2 className="heading">Virtual Reality Designer</h2>
              <span className="subheading">STRIVR</span>
              <div className='job-content'>
                <b>Fall 2018 - Present</b>
                <p>
                  My work at STRIVR is centered around designing, prototyping and testing Creator, a WPF and Unity based creative tool for building interactive VR training.
                  As part of integrating UX into an existing software Scrum cycle, I introduced a standardized method for conducting and reporting UX research. A major pain point for
                  in our training experiences was text legibility. I researched typography challenges in VR and then developed a VR research platform for testing legibility across
                  a variety of distances, typefaces, font rendering methods and a variety of other variables. This platform recorded test results in a cloud database and was deployed through an 
                  Oculus Go alpha channel to provide easy access for internal participants.
                </p>
              </div>
            </div>
          </div>
          // CAC
          <div className="container">
            <div className='col-md-4'>
                <img className="job-img img-reduction" src="/images/experience/ucbseal.png" alt="UC Berkeley Seal"></img>
            </div>
            <div className='col-md-8'>
              <h2 className="heading">Researcher</h2>
              <span className="subheading">Center for Augmented Cognition</span>
              <div className='job-content'>
                <p><b>Spring 2016 - Spring 2018</b></p>
                <p>
                  Through my involvement with <a href="https://vr.berkeley.edu">Virtual Reality @ Berkeley</a>, I joined a team to work on an <Link to={`/projects/isaacs`}>Immersive Semi-Autonomous Aerial Command System</Link>.
                  The goal of this graduate research project was to create an Augmented Reality interface for controlling drones.
                  In Spring 2016, I led my team in conducting a user research study in which I ran several interviews with members of the UAV club.
                  After identifying the areas in which an Augmented Reality interface could improve on existing drone interfaces, I developed a clear set of goals for the project.
                  I later joined the Computer Vision team to work on implementation for the drone SLAM mapping algorithms.
                  During this time, I also became the developer for the <a href="http://augcog.berkeley.edu/">Augmented Cognition</a>  site.
                </p>
              </div>
            </div>
          </div>
          // CNR
          <div className="container">
            <div className='col-md-4'>
               <img className="job-img" src="/images/experience/cnr.png" alt="College of Natural Resources Logo"></img>
            </div>
            <div className='col-md-8'>
              <h2 className="heading"> Web Developer</h2>
              <span className="subheading">College of Natural Resources</span>
              <div className='job-content'>
                <b>Fall 2014 - Fall 2017</b>
                <p>
                  In this position, I  built and redesigned sites to fit the needs of a variety of college departments and facilities. I also migrated and built out the schemas for  databases containing CMS content, user accounts and profiles for the department. I created the front-end design for our sub-sites, including the <a href="https://parksnext100.berkeley.edu">Parks Next 100</a> and <a href="https://nst.berkeley.edu/">Nutritional Sciences &amp; Toxicology</a> sites. I regularly handled the requests and training of faculty and staff, adjusting to the needs of each individual who wanted design changes or a place in the web.
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
