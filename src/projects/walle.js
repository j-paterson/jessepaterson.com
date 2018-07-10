import React, { Component } from "react";

const walle_content =
<div className="project-content">
  <h2 className="subheading">A Virtual Reality telepresence vehicle</h2>
  <div className='project-details'>
      <div>
        <p>
          <b className="highlight">Skills: </b>
          C#, Node.js, Unity
        </p>
      </div>
      <div>
        <p>
          <b className="highlight">Client: </b>
          Treehacks, Self
          (2015)
        </p>
      </div>
  </div>
  <div className="project-description">
      <p>
          I met Tatsuki for the first time at Treehacks, an annual hackathon at Stanford. We were both on the waitlist and
          sitting outside the hackathon building. I noticed that he had an Oculus with him and struck up a conversation about
          why he brought it. We ended up getting a few extra hacker lanyards and working on this project together.
      </p>
      <p>
          Using legos, motors, and a few onboard microprocessors, we set up a VR telepresence tank  which wirelessly synced an
          onboard camera to an Oculus through a Node.js Server. All video footage and commands were passed through this server
          and a Unity application to connect with the Oculus headset. I set up the Node.js server and wrote a few C# scripts to
          make the connection.
      </p>
      <p>
          We used a Raspberry Pi and Arduino on board to remotely connect an Oculus to a camera that rotates in sync with the user's
          head with four degrees of freedom (forward/backward, left/right, yaw and pitch). Movement of the tank was controlled using
          an x-box controller through the same Node.js server.
      </p>
      <p>
          We later presented this project at the Bay Area Makerfaire. It has since been repurposed to
          become <a href='https://www.crunchbase.com/organization/adawarp#/entity'>Adawarp</a> and Tatsuki is
          continuing to work on it back in Japan. We've become good friends and still visit each other.
      </p>
  </div>
</div>


export default walle_content;
