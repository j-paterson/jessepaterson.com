import React, { Component } from "react";

const sixt33n_content =
<div className="project-content">
  <h2 className="subheading">A voice controlled car</h2>
	<div className="project-details">
    <div>
      <p>
        <b className="highlight">Skills: </b>
        C, Controls, Circuits
      </p>
    </div>
    <div>
      <p>
        <b className="highlight">Client: </b>
        Designing Information Devices and Systems, 2016
      </p>
    </div>
  </div>
  <div className="project-description">
      <p>
        This was the final project for my Designing Information Devices and Systems (EE16B) class
        at UC Berkeley. The goal of the project was to construct a car that would respond to 4 voice
        commands:  forward, left, right, and slow (the video shows a test of these basic controls).
      </p>
      <p>
        My partner and I built the circuit board from the ground up, using a Launchpad microcontroller to
        run the C code that we developed. The code analyzed incoming signals from the microphone and used
        Principal Component Analysis in conjunction with a high pass filter to detect and categorize voice commands.
      </p>
      <p>
        A challenge that I encountered in this project was imperfect engineering in the parts we were given.
        The frame for the car caused the vehicle to curve when equal power was applied to both motors.
        We adjusted for this by continuously taking in the difference in distance traveled by each wheel and
        designing an algorithm which adjusted the input to the motors to maintain a straight course.
      </p>
      <h3>
        <a href="https://docs.google.com/document/d/1pbHqG-NaMbtg998hlRmfHgxjNHaWe0nvdeM8RTi0WwY/edit?usp=sharing"> Full Report </a>
      </h3>
      <iframe width="854" height="480" src="https://www.youtube.com/embed/_8MuFLKeg-E" frameborder="0" allowfullscreen></iframe>
  </div>
</div>


export default sixt33n_content;
