import React, { Component } from "react";

const nature_content =
<div className="project-content">
  <h2 className="subheading">Flagship site for the College of Natural Resources</h2>
  <div className='project-details'>
    <div>
      <i>The flagship site for UC Berkeley College of Natural Resources</i>
    </div>
    <div>
      <p>
        <b className="highlight">Skills: </b>
        HTML, CSS, JS, Design Systems, Drupal
      </p>
    </div>
    <div>
      <p>
        <b className="highlight">Client: </b>
        College of Natural Resources
        (2014-2017)
    </p>
    </div>
  </div>
  <div className="project-description">
    <p>
      I worked on a number of design aspects of the College of Natural Resources flagship website, nature.berkeley.edu,
      along with many other departmental sites such as nst.berkeley.edu and https://nature.berkeley.edu/breakthroughs/
      during as a front-end developer for the CNR Web Team.
    </p>

    <img className="img-center" src="/images/nature/nature.jpeg" width="400px" alt="planning"/><br/>

    <p>
      Originally, my assignments consisted of moving and redesigning massive quantities of content and users
      from an older site to this one. I gradually learned the ins and outs of the drupal system and handled
      requests for content changes. A lot of running this website has been identifying what aspects can be
      automated to reduce work by hand. I learned to create modular pages that self populate with pieces of
      content from around the site to create comprehensive compilations that require no manual updating. I also
      learned to carefully run batch processes to adjust design on a large number of content items at once.
    </p>
  </div>
</div>

export default nature_content;
