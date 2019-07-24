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
            I was born in Austin, Texas and moved out to the Bay Area in 2014 for my undergraduate degree at UC Berkeley. I completed a B.A in Cognitive Science alongside a minor in Electrical Engineering & Computer Science in 2018.
            I'm passionate about crafting compelling experiences and designing context aware systems for facilitating human-computer interactions in mixed reality.
            I like to understand processes as a whole so that I can work effectively on large scale projects with high impact.
            When I'm not working on new creative tools for VR or building websites, I enjoy <a href="http://azura.wikia.com/wiki/Azura_Wikia">
            telling collaborative stories with friends</a>, brewing mead, and climbing really big rocks.
            I value persistence and integrity in myself and quality in my work above all else.
          </p>
        </div>
        <div className="experience">
          <h3 className="title"> MY WORK</h3>
          <div className="container">
            <div className='col-md-4'>
               <img className="job-img" src="/images/experience/STRIVR_LOGO.png" alt="STRIVR Logo"></img>
            </div>
            <div className='col-md-8'>
              <h2 className="heading">UX Prototyping Engineer</h2>
              <span className="subheading">STRIVR</span>
              <div className='job-content'>
                <b>Fall 2018 - Present</b>
                <p>
                  My work at STRIVR is centered around designing, prototyping and testing Creator, a WPF and Unity based creative tool for building interactive VR training with 360 video.
                </p>
                <p>
                  In order to integrate a UX process into the existing software Scrum cycle, I introduced a set of standardized procedures for conducting and reporting UX research.
                </p>
                <p>
                  A major pain point in our training experiences was text legibility. I researched typography challenges in VR and then developed a VR research platform for testing legibility across a variety of distances, typefaces, font rendering methods and a variety of other variables. This platform recorded test results in a cloud database and was deployed through an Oculus Go alpha channel to provide easy access for internal participants.
                </p>
                <p>
                  Using the data from my research, I compiled a comprehensive typography report, recommending a transition to TextMeshPro with a Montserrat typeface across all applications.

                  Many pilot users had difficulty navigating the core flow for self-recording in our existing Soft Skills experiences. Alongside our Senior Visual Designer, I developed a prototype which updated the UI to improve the legibility and streamlined the user flow through the rearrangement of different elements and new animations. After pivoting several times to arrive at a solution which would fit the tight time constraints and need for backwards compatibility, I ran several user studies which validated that the prototype improved clarity, immersion, and consistency across the interface. I communicated the value proposition to Product and Engineering teams to gain stakeholder buy in for including this update before shipping it. Finally, I integrated the new user interface with the existing software infrastructure just in time for our next pilot.
                </p>
                  This UX update made the experience much more intuitive, reducing the percentage of new users confused about how to start recording, or whether they were currently beig recorded from 75% to 7%.
                <p>
                  I worked closely with a Product Manager to arrive on a development path for Creator which would provide the necessary local database infrastructure for much needed improvements in forgiveness and overall usability (Eliminating wait time for video upload/download, adding undo/redo, reducing the potential for lost work due to cloud syncing, and in the long-term allowing for an offline mode). I followed up by collaborating with the engineering team to create clear set of documentation on user expectations and long-term goals (such as the Undo/Redo feature). I created all wireframes necessary for transitioning to the new content saving framework, refining the user flow and eliminating several unnecessary steps (saving hours of time by removing the requirement to upload all videos before beginning the creation process).
                </p>
                <p>
                  I used the existing Unity codebase to prototype and define draggable interactions for moving overlays across the 360 videos. This resolved a major pain point for new users, removing the requirement to define spherical coordinates in order to change the location of an overlay.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className='col-md-4'>
                <img className="job-img img-reduction" src="/images/experience/ucbseal.png" alt="UC Berkeley Seal"></img>
            </div>
            <div className='col-md-8'>
              <h2 className="heading">HCI Researcher</h2>
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
