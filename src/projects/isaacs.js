import React, { Component } from "react";

const isaacs_content =
<div className= "project-content">
  <h2 className="subheading">Immersive Semi-Autonomous Aerial Command System</h2>
	<div className='project-details'>
      <p>
        <b className="highlight">Skills: </b>
        C#, Unity, ROS, Computer Vision, Drones, Augmented and Virtual Reality interfaces
      </p>
      <p>
        <b className="highlight">Client: </b>
        Center for Augmented Cognition, Spring 2016 - Spring 2018
      </p>
  </div>
	<div className="project-description">
    <span className="heading">About</span>
	  <p>
	    The goal of this research project was to create an interface for controlling drones through the Microsoft Hololens.
      I joined the controls team of the project during my sophomore year at UC Berkeley. Our project was selected
      as one of the Award Recipients for the first Microsoft Hololens Academic Research Grants.
      For a while our team didn't have access to the Hololens, so we worked on ways of controlling the drones using existing
      controller free systems like the Leap Motion or Mio. When we received the Hololens,
      we learned that the primary system of interaction was through a series of airtaps, not at all the
      fluid hand gestures and tracking we had hoped for. The headset's connection latency would
      also be far too great to allow for direct control of the drone.
      The project was off to a rough start.
	  </p>
	  <p>
	    We needed information on how to create a useful platform for users.
      On the design team, I conducted a user research study in which I ran several
	    interviews with members of the UAVs at Berkeley club. I used the data gathered to identify
	    several areas in which an Augmented Reality interface would be useful for drone users.
	    Based on these applications and taking into account latency limitations, I designed a
	    framework for the interface. This framework would include a bounding box the
	    the drone would be locked inside by GPS in case of connection loss, the ability to set
      camera angle and a path through nodes that could be moved through 3d space and angled
      similar to a Bézier curve. We put this plan into motion and prototyped a Unity application over the
      next few months.
	  </p>
    <img align="middle" src="/images/isaacs/planning.jpg" width="400px" alt="planning"/><br/>
	  <p>
	    After completing a Minimal Viable Product for the interface, the pressure came on for our SLAM
      team, the group responsible for creating a method of mapping the terrain the drone and giving it a
      relative location to its environment. Several graduate students joined the project and we worked closely with them
      to test various approaches with a motion capture system. I learned how to setup and adjust the Robotic Operating System (ROS)
      that we use as a server for communication between the drone and a computer. This system makes it possible
      for us to use our interface for multiple drones or other robots simultaneously.
	  </p>
    <div>
      <iframe width="480" height="270" src="https://www.youtube.com/embed/Bnr-qrI7ZN0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <p>
      As I approached my senior year, ISAACS splintered into several different research groups and I led one of these new directions for the project.
      I spearheaded the interface development for a grant the Center of Augmented Cogntion had received to create a Virtual Reality interface for
      3d mapping cities with drones. In Spring 2017, I ran another user research study on the Hololens prototype, and identified a number
      of UX improvements to be included in the VR interface. I worked over the summer with an intern and created a prototype for the new interface.
      In the fall I recruited several team members and continued my work, connecting the interface with ROS and establishing a system for visualizing the scanned terrain in Unity.
    </p>
    <div>
      <iframe width="854" height="480" src="https://www.youtube.com/embed/oFY9slurCxY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <div>
      <iframe width="854" height="480" src="https://www.youtube.com/embed/oFY9slurCxY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <p>
      The project is expected to be completed in Spring 2018.
    </p>
    <span className="heading">News</span>
    <p>
      <a href="http://citris-uc.org/meet-the-award-recipients-of-the-first-microsoft-hololens-academic-research-grants/">Meet the Award Recipients of the first Microsoft Hololens Academic Research Grants</a>
    </p>
    <p>
      <a href="https://hololens.reality.news/news/uc-berkeley-team-commands-drone-fleet-with-hololens-0176671/">UC Berkeley team commands drone fleet with Hololens</a>
    </p>
    <p>
      <a href="http://engineering.berkeley.edu/magazine/fall-2016/seeing-believing">Seeing is believing - leveling up with augmented reality</a>
    </p>
	</div>
</div>

export default isaacs_content;
